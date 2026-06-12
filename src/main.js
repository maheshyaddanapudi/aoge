// Bootstrap: build the world, spawn starting bases, run the game loop.

import * as THREE from 'three';
import { TILE, PLAYER, ENEMY } from './config.js';
import { GameMap, generateResources, pickStartLocations } from './world/map.js';
import { createScene } from './render/scene.js';
import { buildTerrain, TreeRenderer } from './render/terrain.js';
import { Effects } from './render/effects.js';
import { Game } from './game/game.js';
import { AI } from './game/ai.js';
import { RTSCamera } from './controls/camera.js';
import { InputController } from './controls/input.js';
import { HUD } from './ui/hud.js';
import { Minimap } from './ui/minimap.js';
import { initAudio, playSound, toggleMute } from './audio.js';
import { loadPack, onPackReady } from './render/pack.js';
import { loadUnitPack } from './render/unitPack.js';
import { startMusic, combatPulse } from './music.js';
import { voice } from './voice.js';

const canvas = document.getElementById('game-canvas');
const { renderer, scene, camera, updateSun, composer } = createScene(canvas);

// --- world ------------------------------------------------------------------
const map = new GameMap();
const starts = pickStartLocations(map);
const resourceDescriptors = generateResources(map, starts);
const { ground: terrainMesh, waterNormalTex } = buildTerrain(scene, map);
const trees = new TreeRenderer(scene);

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

const playerTC = spawnBase(PLAYER, starts[0]);
const enemyTC = spawnBase(ENEMY, starts[1]);
game.recalcPop(PLAYER);
game.recalcPop(ENEMY);

const [aiGx, aiGy] = starts[1];
game.ai = new AI(game, aiGx, aiGy);

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
const minimap = new Minimap(document.getElementById('minimap'), game, rtsCam, camera);

document.getElementById('mute-btn').addEventListener('click', (e) => {
  const m = toggleMute();
  e.currentTarget.innerHTML = m ? '&#128263;' : '&#128266;';
});

// --- main loop ---------------------------------------------------------------------
let running = false;
const clock = new THREE.Clock();

let waterT = 0;
// Perf guard: if the GPU can't hold a playable framerate with the full
// post-processing stack, drop to direct rendering at native-ish resolution.
let usePost = true;
let perfT = 0, perfN = 0;

function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (running) game.update(dt);
  rtsCam.update(dt);
  updateSun(rtsCam.smoothTarget);
  hud.update(dt);
  minimap.update(dt);
  waterT += dt;
  waterNormalTex.offset.set(waterT * 0.012, waterT * 0.009);

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

document.getElementById('start-btn').addEventListener('click', () => {
  initAudio();
  startMusic();
  document.getElementById('start-overlay').classList.add('hidden');
  running = true;
  clock.getDelta();
  hud.alert('Gather resources and build your empire. The enemy is preparing…', true);
});

// Expose for debugging in the console.
window.__game = game;
window.__rtsCam = rtsCam;
window.__audio = { voice, combatPulse };
