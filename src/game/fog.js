// Fog of war: per-tile visibility for the player. 0 = unseen (black),
// 1 = explored (shrouded — terrain and buildings remembered), 2 = visible.
// Sim-side only; rendering lives in render/fog.js and the entity applicator
// in main.js. The AI is intentionally omniscient, so only player 0 has fog.

import { PLAYER } from '../config.js';

const UNIT_SIGHT = { villager: 7, militia: 8, archer: 9, knight: 9, catapult: 9 };
const BLDG_SIGHT = { towncenter: 11, tower: 13 };

export class Fog {
  constructor(map) {
    this.map = map;
    this.size = map.size;
    this.state = new Uint8Array(this.size * this.size);
    this.enabled = true;
    this.revealed = false;
    this.dirty = true;      // consumed by the renderer/applicator each frame
    this.version = 0;       // bumped per recompute; minimap tracks it
    this.updateT = 0;
    this._circles = new Map();
  }

  // Cached list of (dx,dy) offsets within radius r.
  circle(r) {
    let c = this._circles.get(r);
    if (!c) {
      const arr = [];
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx * dx + dy * dy <= r * r) arr.push(dx, dy);
        }
      }
      c = Int16Array.from(arr);
      this._circles.set(r, c);
    }
    return c;
  }

  stamp(gx, gy, r) {
    const c = this.circle(r), size = this.size, st = this.state;
    for (let i = 0; i < c.length; i += 2) {
      const x = gx + c[i], y = gy + c[i + 1];
      if (x >= 0 && y >= 0 && x < size && y < size) st[y * size + x] = 2;
    }
  }

  update(game, dt) {
    if (!this.enabled || this.revealed) return;
    this.updateT -= dt;
    if (this.updateT > 0) return;
    this.updateT = 0.25;
    this.recompute(game);
  }

  recompute(game) {
    const st = this.state;
    for (let i = 0; i < st.length; i++) if (st[i] === 2) st[i] = 1;
    const map = this.map;
    for (const u of game.units) {
      if (u.dead || u.owner !== PLAYER || u.garrisoned) continue;
      const [gx, gy] = map.worldToGrid(u.x, u.z);
      this.stamp(gx, gy, UNIT_SIGHT[u.type] ?? 8);
    }
    for (const b of game.buildings) {
      if (b.dead || b.owner !== PLAYER) continue;
      const r = b.complete ? (BLDG_SIGHT[b.type] ?? 5 + b.size) : 4;
      this.stamp(b.gx + (b.size >> 1), b.gy + (b.size >> 1), r);
    }
    this.dirty = true;
    this.version++;
  }

  stateAt(gx, gy) {
    if (!this.enabled || this.revealed) return 2;
    if (gx < 0 || gy < 0 || gx >= this.size || gy >= this.size) return 0;
    return this.state[gy * this.size + gx];
  }

  stateAtWorld(wx, wz) {
    const [gx, gy] = this.map.worldToGrid(wx, wz);
    return this.stateAt(gx, gy);
  }

  visibleWorld(wx, wz) { return this.stateAtWorld(wx, wz) === 2; }
  exploredWorld(wx, wz) { return this.stateAtWorld(wx, wz) >= 1; }

  revealAll() {
    this.revealed = true;
    this.state.fill(2);
    this.dirty = true;
    this.version++;
  }
}
