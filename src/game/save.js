// Save / load: the world is regenerated from the map seed + match params
// (encoded in the URL), so a save only carries mutable sim state — player
// economies, entities, node depletion, fog exploration and match stats.

import { TECHS, SIZE_NAME, BIOME_NAME, NUM_ENEMIES, SCENARIO_NAME } from '../config.js';

const KEY = 'aoge-save';

export function saveGame(game, difficulty) {
  const data = {
    v: 1,
    seed: game.map.seed.toString(36),
    size: SIZE_NAME,
    biome: BIOME_NAME,
    foes: String(NUM_ENEMIES),
    scenario: SCENARIO_NAME || '',
    difficulty,
    time: game.time,
    savedAt: Date.now(),
    players: game.players.map(p => ({ res: { ...p.res }, age: p.age, techs: [...p.techs] })),
    units: game.units.filter(u => !u.dead).map(u => ({
      t: u.type, o: u.owner,
      // garrisoned units come back standing at their building
      x: +(u.garrisoned ? u.garrisoned.cx : u.x).toFixed(1),
      z: +(u.garrisoned ? u.garrisoned.cz : u.z).toFixed(1),
      hp: Math.round(u.hp), st: u.stance !== 'aggressive' ? u.stance : undefined,
    })),
    buildings: game.buildings.filter(b => !b.dead).map(b => ({
      t: b.type, o: b.owner, gx: b.gx, gy: b.gy,
      hp: Math.round(b.hp), c: b.complete ? 1 : 0,
      pr: b.complete ? undefined : +b.progress.toFixed(3),
      q: b.trainQueue.length ? [...b.trainQueue] : undefined,
      qt: b.trainQueue.length ? +b.trainT.toFixed(1) : undefined,
      r: b.researching ? { ...b.researching } : undefined,
      ry: b.rally && b.rally.x !== undefined ? { x: b.rally.x, z: b.rally.z } : undefined,
    })),
    nodes: game.nodes.filter(n => !n.dead).map(n => ({ gx: n.gx, gy: n.gy, a: Math.round(n.amount) })),
    stats: game.stats,
    fog: game.fog ? fogToB64(game.fog.state) : undefined,
  };
  localStorage.setItem(KEY, JSON.stringify(data));
  return data;
}

export function loadSaveMeta() {
  try { return JSON.parse(localStorage.getItem(KEY) || 'null'); }
  catch { return null; }
}

// Called after the (seed-identical) world is generated but before any bases
// are spawned. Rebuilds all mutable state from the save.
export function restoreGame(game, data) {
  // player economies + techs (mods derive from techs; set them before any
  // entity is created so constructors compute the right HP)
  data.players.forEach((sp, i) => {
    const p = game.players[i];
    if (!p) return;
    p.res = { ...sp.res };
    p.age = sp.age;
    p.techs = [...sp.techs];
    for (const id of p.techs) {
      for (const [k, v] of Object.entries(TECHS[id].mod)) p.mods[k] *= v;
    }
  });

  for (const sb of data.buildings) {
    const b = game.placeBuilding(sb.o, sb.t, sb.gx, sb.gy, true);
    if (!b) continue;
    if (!sb.c) { b.complete = false; b.progress = sb.pr || 0; }
    b.hp = Math.min(b.maxHp, sb.hp);
    if (sb.q) { b.trainQueue = [...sb.q]; b.trainT = sb.qt || 0; }
    if (sb.r) {
      b.researching = { ...sb.r };
      if (!sb.r.tech) game.players[sb.o].ageResearchInProgress = true;
    }
    if (sb.ry) b.rally = { x: sb.ry.x, z: sb.ry.z };
  }
  game.players.forEach((_, i) => game.recalcPop(i));

  for (const su of data.units) {
    const u = game.spawnUnit(su.t, su.o, su.x, su.z);
    u.hp = Math.min(u.maxHp, su.hp);
    if (su.st) u.stance = su.st;
  }

  // node depletion: the same seed regenerates identical nodes, keyed by tile
  const alive = new Map(data.nodes.map(n => [n.gx + ',' + n.gy, n.a]));
  for (const n of [...game.nodes]) {
    const a = alive.get(n.gx + ',' + n.gy);
    if (a === undefined) { n.amount = 0; game.depleteNode(n); }
    else n.amount = a;
  }

  game.time = data.time || 0;
  if (data.stats) {
    data.stats.forEach((s, i) => { if (game.stats[i]) game.stats[i] = { ...game.stats[i], ...s }; });
  }
  if (data.fog && game.fog) {
    const bin = atob(data.fog);
    const st = game.fog.state;
    for (let i = 0; i < bin.length && i < st.length; i++) st[i] = bin.charCodeAt(i);
    game.fog.dirty = true;
    game.fog.version++;
  }
}

function fogToB64(state) {
  let s = '';
  for (let i = 0; i < state.length; i += 4096) {
    s += String.fromCharCode(...state.subarray(i, i + 4096));
  }
  return btoa(s);
}
