// Bootstrap: build the world, spawn starting bases, run the game loop.

import * as THREE from 'three';
import { TILE, PLAYER, MAP_SEED, NUM_ENEMIES, SIZE_NAME, BIOME_NAME } from './config.js';
import { GameMap, generateResources, pickStartLocations } from './world/map.js';
import { createScene } from './render/scene.js';
import { buildTerrain, TreeRenderer } from './render/terrain.js';
import { Effects } from './render/effects.js';
import { Game } from './game/game.js';
import { AI } from './game/ai.js';
import { Fog } from './game/fog.js';
import { FogRenderer } from './render/fog.js';
import { RTSCamera } from './controls/camera.js';
import { InputController } from './controls/input.js';
import { HUD } from './ui/hud.js';
import { Minimap } from './ui/minimap.js';
import { initAudio, playSound, toggleMute } from './audio.js';
import { loadPack, onPackReady } from './render/pack.js';
import { saveGame, loadSaveMeta, restoreGame } from './game/save.js';
import { Ambient } from './render/ambient.js';
import { loadUnitPack } from './render/unitPack.js';
import { startMusic, combatPulse } from './music.js';
import { voice } from './voice.js';

const canvas = document.getElementById('game-canvas');
const { renderer, scene, camera, updateSun, composer } = createScene(canvas);

// Lightweight render mode (?lite): no shadows or post-processing — far higher
// FPS on weak/software GPUs (used for headless capture and as a perf option).
const LITE = new URLSearchParams(location.search).has('lite');
if (LITE) renderer.shadowMap.enabled = false;

// --- world ------------------------------------------------------------------
const params = new URLSearchParams(location.search);
const map = new GameMap(MAP_SEED);
const starts = pickStartLocations(map, 1 + NUM_ENEMIES);
const resourceDescriptors = generateResources(map, starts, LITE);
const { ground: terrainMesh, waterNormalTex } = buildTerrain(scene, map);
const trees = new TreeRenderer(scene, 1000);
await trees.load();

const game = new Game(scene, map, trees);
game.effects = new Effects(scene, game);
game.soundFn = playSound;
game.onCombat = combatPulse;
game.createResourceNodes(resourceDescriptors);

// --- starting bases ------------------------------------------------------------
function spawnBase(owner, [gx, gy]) {
  const tcSize = 4;
  // find placeable spot for the TC near the start tile
  let spot = null;
  outer:
  for (let r = 0; r < 12; r++) {
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const x = gx + dx - Math.floor(tcSize / 2), y = gy + dy - Math.floor(tcSize / 2);
        if (map.canPlace(x - 1, y - 1, tcSize + 2)) { spot = [x, y]; break outer; }
      }
    }
  }
  if (!spot) spot = [gx, gy];
  const tc = game.placeBuilding(owner, 'towncenter', spot[0], spot[1], true);
  // villagers in an arc below the TC
  for (let i = 0; i < 4; i++) {
    const ang = Math.PI * 0.25 + i * 0.45;
    const x = tc.cx + Math.cos(ang) * 7;
    const z = tc.cz + Math.sin(ang) * 7;
    const [ngx, ngy] = map.nearestWalkable(...map.worldToGrid(x, z), 6) || map.worldToGrid(tc.cx, tc.cz + 8);
    const [wx, wz] = map.gridToWorld(ngx, ngy);
    game.spawnUnit('villager', owner, wx, wz);
  }
  return tc;
}

// fog first so a save's exploration can be poured back in during restore
const fog = new Fog(map);
game.fog = fog;
if (params.has('nofog')) fog.revealAll();

// Fresh match: bases in the corners. Loaded match: rebuild from the save
// (same seed regenerated the identical map + nodes).
const RESTORE = params.has('load') ? loadSaveMeta() : null;
let playerTC;
if (RESTORE) {
  restoreGame(game, RESTORE);
  playerTC = game.buildings.find(b => b.owner === PLAYER && b.type === 'towncenter') ||
             game.buildings.find(b => b.owner === PLAYER) ||
             { cx: starts[0][0] * TILE, cz: starts[0][1] * TILE };
} else {
  playerTC = spawnBase(PLAYER, starts[0]);
  for (let o = 1; o <= NUM_ENEMIES; o++) spawnBase(o, starts[o]);
  for (let o = 0; o <= NUM_ENEMIES; o++) game.recalcPop(o);
}

// one AI per enemy player; anchor each at its (restored) town center
for (let o = 1; o <= NUM_ENEMIES; o++) {
  let [gx, gy] = starts[o];
  const tc = game.buildings.find(b => b.owner === o && b.type === 'towncenter');
  if (tc) { gx = tc.gx; gy = tc.gy; }
  game.ais.push(new AI(game, gx, gy, 'normal', o));
}
game.ai = game.ais[0];

fog.recompute(game); // reveal the home base before the first frame
const fogRenderer = new FogRenderer(scene, map, fog);

// ambient life (birds, clouds, ripples, grass) — skipped in lite mode
const ambient = LITE ? null : new Ambient(scene, map);

// Hide enemy units (visible tiles only), enemy buildings / resource nodes /
// trees (explored tiles) from the player's view. Runs when fog changes.
function applyFogVisibility() {
  for (const u of game.units) {
    if (u.owner === PLAYER || u.dead) continue;
    u.group.visible = !u.garrisoned && fog.visibleWorld(u.x, u.z);
  }
  for (const b of game.buildings) {
    if (b.owner === PLAYER || b.dead) continue;
    b.group.visible = fog.exploredWorld(b.cx, b.cz);
  }
  for (const n of game.nodes) {
    if (n.dead) continue;
    const vis = fog.exploredWorld(n.wx, n.wz);
    if (n.mesh) n.mesh.visible = vis;
    else if (n.treeHandle) trees.setHidden(n.treeHandle, !vis);
  }
}
applyFogVisibility();

// Optional CC0 building pack: swap in models once loaded (no-op if absent).
loadPack();
onPackReady(() => { for (const b of game.buildings) b.reskin(); });
loadUnitPack().then((ok) => {
  if (ok) for (const u of game.units) u.adoptModel();
});

// --- camera, input, UI ------------------------------------------------------------
const rtsCam = new RTSCamera(camera, map);
rtsCam.jumpTo(playerTC.cx, playerTC.cz + 6);
rtsCam.smoothTarget.set(playerTC.cx, 0, playerTC.cz + 6);

let hud;
const input = new InputController({
  canvas, game, rtsCam, camera, terrainMesh,
  onSelectionChange: (sel) => hud && hud.setSelection(sel),
  sound: playSound,
});
hud = new HUD(game, input);
const minimap = new Minimap(document.getElementById('minimap'), game, rtsCam, camera, input);

document.getElementById('mute-btn').addEventListener('click', (e) => {
  const m = toggleMute();
  e.currentTarget.innerHTML = m ? '&#128263;' : '&#128266;';
});

// --- main loop ---------------------------------------------------------------------
let running = false;
const clock = new THREE.Clock();

// Rally flag: shown at the rally point while a single own production
// building is selected.
import { makeBanner } from './render/models.js';
const rallyFlag = makeBanner(0xffd970, 3);
rallyFlag.visible = false;
scene.add(rallyFlag);
function updateRallyFlag() {
  const sel = input.selection;
  const b = sel.length === 1 && sel[0].isBuilding && sel[0].owner === PLAYER && !sel[0].dead ? sel[0] : null;
  const r = b?.rally;
  if (!r) { rallyFlag.visible = false; return; }
  const x = r.x ?? r.node?.wx ?? r.farm?.cx;
  const z = r.z ?? r.node?.wz ?? r.farm?.cz;
  if (x === undefined) { rallyFlag.visible = false; return; }
  rallyFlag.visible = true;
  rallyFlag.position.set(x, map.heightAt(x, z), z);
}

let waterT = 0;
// Perf guard: if the GPU can't hold a playable framerate with the full
// post-processing stack, drop to direct rendering at native-ish resolution.
let usePost = !LITE;
let perfT = 0, perfN = 0;

// Game speed: run the simulation in N small sub-steps per rendered frame so
// movement and pathing stay stable while time fast-forwards.
let gameSpeed = 1;
function setSpeed(n) {
  gameSpeed = Math.max(1, Math.min(4, n | 0));
  for (const b of document.querySelectorAll('.speed-btn')) {
    b.classList.toggle('active', +b.dataset.speed === gameSpeed);
  }
}
window.__setSpeed = setSpeed;

let paused = false;
function setPaused(p) {
  paused = p;
  document.getElementById('pause-btn').classList.toggle('paused', paused);
  if (paused) hud.alert('Paused — press P to resume', true);
}
document.getElementById('pause-btn').addEventListener('click', () => setPaused(!paused));
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyP' && e.target.tagName !== 'INPUT' &&
      !document.querySelector('.overlay:not(.hidden)')) setPaused(!paused);
});

function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (running && !paused) for (let i = 0; i < gameSpeed; i++) game.update(dt);
  rtsCam.update(dt);
  updateSun(rtsCam.smoothTarget, rtsCam.smoothDist);
  if (fog.dirty) {
    fogRenderer.refresh();
    applyFogVisibility();
    fog.dirty = false;
  }
  hud.update(dt);
  minimap.update(dt);
  updateRallyFlag();
  waterT += dt;
  waterNormalTex.offset.set(waterT * 0.012, waterT * 0.009);
  ambient?.update(dt);

  if (running && usePost) {
    perfN++; perfT += dt;
    if (perfT > 5) {
      if (perfN / perfT < 28) {
        usePost = false;
        renderer.setPixelRatio(1);
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      perfT = 0; perfN = 0;
    }
  }
  if (usePost) composer.render();
  else renderer.render(scene, camera);
}
frame();

let currentDifficulty = 'normal';
function startGame(difficulty, resume = false) {
  currentDifficulty = difficulty;
  for (const ai of game.ais) ai.setDifficulty(difficulty);
  // Easy mode also gives the player a starting stockpile so a quick army is
  // viable without a long economy build-up. (Not again on resume.)
  if (difficulty === 'easy' && !resume) {
    const r = game.players[PLAYER].res;
    r.wood += 900; r.food += 3500; r.gold += 1800; r.stone += 400;
  }
  initAudio();
  startMusic();
  document.getElementById('start-overlay').classList.add('hidden');
  running = true;
  clock.getDelta();
  const label = difficulty[0].toUpperCase() + difficulty.slice(1);
  hud.alert(resume ? `Welcome back — ${label} game resumed.`
                   : `${label} game — gather resources and build your empire. The enemy is preparing…`, true);
}

for (const diff of ['easy', 'normal', 'hard']) {
  const btn = document.getElementById('start-' + diff);
  if (btn) btn.addEventListener('click', () => startGame(diff));
}

// --- match setup / save-load UI ------------------------------------------------
// Map options reload the page with URL params (the world is built at load).
const optSize = document.getElementById('opt-size');
const optBiome = document.getElementById('opt-biome');
const optFoes = document.getElementById('opt-foes');
if (optSize) {
  optSize.value = SIZE_NAME; optBiome.value = BIOME_NAME; optFoes.value = String(NUM_ENEMIES);
  const reloadWith = (newSeed) => {
    const q = new URLSearchParams();
    q.set('size', optSize.value); q.set('biome', optBiome.value); q.set('foes', optFoes.value);
    q.set('seed', (newSeed ? (Math.random() * 1e9 | 0) : map.seed).toString(36));
    if (params.has('lite')) q.set('lite', '');
    location.search = q.toString();
  };
  for (const el of [optSize, optBiome, optFoes]) el.addEventListener('change', () => reloadWith(false));
  document.getElementById('opt-newmap').addEventListener('click', () => reloadWith(true));
}

// Resume button (start screen) when a save exists; loading auto-offers it.
const savedMeta = loadSaveMeta();
const resumeBtn = document.getElementById('resume-btn');
if (savedMeta && resumeBtn && !RESTORE) {
  resumeBtn.classList.remove('hidden');
  resumeBtn.textContent = `\u{1F4BE} Resume saved game (${savedMeta.difficulty}, ${Math.floor((savedMeta.time || 0) / 60)} min in)`;
  resumeBtn.addEventListener('click', () => {
    const q = new URLSearchParams();
    q.set('load', '1');
    q.set('seed', savedMeta.seed); q.set('size', savedMeta.size);
    q.set('biome', savedMeta.biome); q.set('foes', savedMeta.foes);
    if (params.has('lite')) q.set('lite', '');
    location.search = q.toString();
  });
}
if (RESTORE) {
  // loaded world: single continue button (also provides the audio gesture)
  for (const diff of ['easy', 'normal', 'hard']) document.getElementById('start-' + diff)?.classList.add('hidden');
  document.getElementById('map-opts')?.classList.add('hidden');
  resumeBtn.classList.remove('hidden');
  resumeBtn.textContent = '▶ Continue saved game';
  resumeBtn.addEventListener('click', () => startGame(RESTORE.difficulty || 'normal', true));
}

function doSave() {
  if (!running || game.gameOver) { hud.alert('Nothing to save yet.'); return; }
  saveGame(game, currentDifficulty);
  hud.alert('Game saved — resume it from the start screen anytime.', true);
}
document.getElementById('save-btn').addEventListener('click', doSave);

// Speed control buttons + keyboard ( [ slower, ] faster ).
for (const b of document.querySelectorAll('.speed-btn')) {
  b.addEventListener('click', () => setSpeed(+b.dataset.speed));
}
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (document.querySelector('.overlay:not(.hidden)')) return;
  if (e.code === 'BracketRight') setSpeed(gameSpeed + 1);
  else if (e.code === 'BracketLeft') setSpeed(gameSpeed - 1);
});
setSpeed(1);

// Expose for debugging in the console.
window.__game = game;
window.__rtsCam = rtsCam;
window.__input = input;
window.__audio = { voice, combatPulse };
window.__minimap = minimap;
window.__startGame = startGame;
window.__save = doSave;
window.__ambient = ambient;
// World -> screen projection (CSS pixels) for tooling/automation.
window.__project = (wx, wy, wz) => {
  const v = new THREE.Vector3(wx, wy, wz).project(camera);
  return { x: (v.x + 1) / 2 * window.innerWidth, y: (1 - v.y) / 2 * window.innerHeight, z: v.z };
};
