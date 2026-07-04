// Procedural map: rolling terrain heights, water, forests, berries, gold mines,
// and the walkability/occupancy grid used by pathfinding and building placement.

import { MAP_SIZE, TILE, BIOME } from '../config.js';

// --- Deterministic-ish value noise -----------------------------------------
function makeNoise(seed) {
  let s = seed >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  const SIZE = 64;
  const grid = new Float32Array(SIZE * SIZE);
  for (let i = 0; i < grid.length; i++) grid[i] = rand();
  const smooth = (t) => t * t * (3 - 2 * t);
  return (x, y) => {
    x = ((x % SIZE) + SIZE) % SIZE;
    y = ((y % SIZE) + SIZE) % SIZE;
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const x1 = (x0 + 1) % SIZE, y1 = (y0 + 1) % SIZE;
    const fx = smooth(x - x0), fy = smooth(y - y0);
    const a = grid[y0 * SIZE + x0], b = grid[y0 * SIZE + x1];
    const c = grid[y1 * SIZE + x0], d = grid[y1 * SIZE + x1];
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
}

export const WATER_LEVEL = -0.55;

export class GameMap {
  constructor(seed = (Math.random() * 1e9) | 0) {
    this.size = MAP_SIZE;
    this.seed = seed;
    this.noise = makeNoise(seed);
    this.noise2 = makeNoise(seed ^ 0x9e3779b9);
    this.moistNoise = makeNoise(seed ^ 0x51f15eed);

    // walk: 1 = walkable. occupant: entity occupying a tile (building/resource), or null.
    // gateOwner: player id whose units may pass this tile even though walk=0 (gates).
    this.walk = new Uint8Array(this.size * this.size);
    this.waterWalk = new Uint8Array(this.size * this.size); // boat navigation
    this.occupant = new Array(this.size * this.size).fill(null);
    this.gateOwner = new Int8Array(this.size * this.size).fill(-1);

    for (let gy = 0; gy < this.size; gy++) {
      for (let gx = 0; gx < this.size; gx++) {
        const h = this.tileHeight(gx, gy);
        this.walk[gy * this.size + gx] = h > WATER_LEVEL ? 1 : 0;
        this.waterWalk[gy * this.size + gx] = h <= WATER_LEVEL ? 1 : 0;
      }
    }
    this.version = 0; // bumped whenever walkability changes (repath hint)
  }

  // Continuous terrain height at world coordinates.
  heightAt(wx, wz) {
    const nx = wx / 26, ny = wz / 26;
    let h = (this.noise(nx, ny) - 0.5) * 2.6 + (this.noise2(nx * 2.7, ny * 2.7) - 0.5) * 1.1;
    // Carve a couple of ponds where low-frequency noise dips hard.
    const pond = this.noise2(wx / 60 + 11, wz / 60 + 7);
    if (pond < 0.15) h -= (0.15 - pond) * 12;
    // Raise edges slightly so the playfield reads as a contained valley.
    const cx = wx - (this.size * TILE) / 2, cz = wz - (this.size * TILE) / 2;
    const edge = Math.max(Math.abs(cx), Math.abs(cz)) / ((this.size * TILE) / 2);
    if (edge > 0.86) h += (edge - 0.86) * 9;
    return h;
  }

  moistureAt(wx, wz) {
    return Math.max(0, Math.min(1, this.moistNoise(wx / 34 + 3, wz / 34 + 9) + BIOME.moist));
  }

  tileHeight(gx, gy) {
    return this.heightAt((gx + 0.5) * TILE, (gy + 0.5) * TILE);
  }

  inBounds(gx, gy) {
    return gx >= 0 && gy >= 0 && gx < this.size && gy < this.size;
  }

  isWalkable(gx, gy) {
    if (!this.inBounds(gx, gy)) return false;
    return this.walk[gy * this.size + gx] === 1;
  }

  isWater(gx, gy) {
    if (!this.inBounds(gx, gy)) return false;
    return this.waterWalk[gy * this.size + gx] === 1;
  }

  // Dock rule: footprint on land, but at least one tile of the surrounding
  // ring must be open water so boats can launch.
  hasAdjacentWater(gx, gy, size) {
    for (let y = gy - 1; y <= gy + size; y++) {
      for (let x = gx - 1; x <= gx + size; x++) {
        if (y >= gy && y < gy + size && x >= gx && x < gx + size) continue;
        if (this.isWater(x, y)) return true;
      }
    }
    return false;
  }

  occupantAt(gx, gy) {
    if (!this.inBounds(gx, gy)) return null;
    return this.occupant[gy * this.size + gx];
  }

  worldToGrid(wx, wz) {
    return [Math.floor(wx / TILE), Math.floor(wz / TILE)];
  }

  gridToWorld(gx, gy) {
    return [(gx + 0.5) * TILE, (gy + 0.5) * TILE];
  }

  // Can a size x size building footprint be placed with min-corner at gx,gy?
  canPlace(gx, gy, size) {
    for (let y = gy; y < gy + size; y++) {
      for (let x = gx; x < gx + size; x++) {
        if (!this.inBounds(x, y)) return false;
        const i = y * this.size + x;
        if (this.walk[i] !== 1 || this.occupant[i]) return false;
      }
    }
    return true;
  }

  occupy(gx, gy, size, entity, gateFor = -1) {
    for (let y = gy; y < gy + size; y++) {
      for (let x = gx; x < gx + size; x++) {
        const i = y * this.size + x;
        this.walk[i] = 0;
        this.gateOwner[i] = gateFor;
        this.occupant[i] = entity;
      }
    }
    this.version++;
  }

  release(gx, gy, size) {
    for (let y = gy; y < gy + size; y++) {
      for (let x = gx; x < gx + size; x++) {
        const i = y * this.size + x;
        const h = this.tileHeight(x, y);
        this.walk[i] = h > WATER_LEVEL ? 1 : 0;
        this.gateOwner[i] = -1;
        this.occupant[i] = null;
      }
    }
    this.version++;
  }

  // Walkable for a specific player: open ground, or their own gate tiles.
  isWalkableFor(gx, gy, owner) {
    if (!this.inBounds(gx, gy)) return false;
    const i = gy * this.size + gx;
    return this.walk[i] === 1 || this.gateOwner[i] === owner;
  }

  // Nearest walkable tile to a target tile (spiral search). Returns [gx, gy] or null.
  nearestWalkable(gx, gy, maxR = 10) {
    if (this.isWalkable(gx, gy)) return [gx, gy];
    for (let r = 1; r <= maxR; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          if (this.isWalkable(gx + dx, gy + dy)) return [gx + dx, gy + dy];
        }
      }
    }
    return null;
  }
}

// ---------------------------------------------------------------------------
// Resource node scattering. Returns descriptors; game.js turns them into nodes.
// Keeps start areas (given as tile coords) clear, but guarantees a forest,
// berries and gold near each start.
export function generateResources(map, starts, lite = false) {
  const out = [];
  const size = map.size;
  const rngSeed = map.seed ^ 0xabcdef;
  let s = rngSeed >>> 0;
  const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

  const clearOf = (gx, gy, r) => starts.every(st => Math.hypot(gx - st[0], gy - st[1]) > r);

  const tryPlace = (gx, gy, type) => {
    if (!map.inBounds(gx, gy) || !map.isWalkable(gx, gy) || map.occupantAt(gx, gy)) return false;
    out.push({ type, gx, gy });
    map.occupy(gx, gy, 1, { isResourceReservation: true, type });
    return true;
  };

  // Forest blobs scattered around the map. (Fewer in lite mode — foliage is
  // the heaviest render cost on software GPUs.)
  const forestCount = Math.round((lite ? 7 : 26) * BIOME.forestMul * (size / 96));
  for (let f = 0; f < forestCount; f++) {
    const cx = 6 + rand() * (size - 12), cy = 6 + rand() * (size - 12);
    if (!clearOf(cx, cy, 11)) continue;
    const radius = 2.4 + rand() * 3.4;
    for (let gy = Math.floor(cy - radius); gy <= cy + radius; gy++) {
      for (let gx = Math.floor(cx - radius); gx <= cx + radius; gx++) {
        const d = Math.hypot(gx - cx, gy - cy);
        if (d <= radius && rand() < 0.82 - d / (radius * 2.2)) tryPlace(gx, gy, 'tree');
      }
    }
  }

  // Gold mine clusters.
  for (let g = 0; g < 9; g++) {
    const cx = Math.floor(8 + rand() * (size - 16)), cy = Math.floor(8 + rand() * (size - 16));
    if (!clearOf(cx, cy, 13)) continue;
    for (let k = 0; k < 4; k++) {
      tryPlace(cx + (k % 2), cy + Math.floor(k / 2), 'gold');
    }
  }

  // Stone mine clusters.
  for (let st = 0; st < 7; st++) {
    const cx = Math.floor(8 + rand() * (size - 16)), cy = Math.floor(8 + rand() * (size - 16));
    if (!clearOf(cx, cy, 13)) continue;
    for (let k = 0; k < 4; k++) {
      tryPlace(cx + (k % 2), cy + Math.floor(k / 2), 'stone');
    }
  }

  // Fish schools in deep water (fished by boats from a dock).
  const deep = [];
  for (let gy = 4; gy < size - 4; gy += 2) {
    for (let gx = 4; gx < size - 4; gx += 2) {
      if (map.tileHeight(gx, gy) <= WATER_LEVEL - 0.3) deep.push([gx, gy]);
    }
  }
  const fishCount = Math.min(14, Math.floor(deep.length / 6));
  for (let f = 0; f < fishCount; f++) {
    const [gx, gy] = deep[Math.floor(rand() * deep.length)];
    if (map.occupantAt(gx, gy)) continue;
    out.push({ type: 'fish', gx, gy });
    map.occupant[gy * size + gx] = { isResourceReservation: true, type: 'fish' };
  }

  // Berry patches.
  for (let b = 0; b < 10; b++) {
    const cx = Math.floor(8 + rand() * (size - 16)), cy = Math.floor(8 + rand() * (size - 16));
    if (!clearOf(cx, cy, 13)) continue;
    for (let k = 0; k < 5; k++) {
      tryPlace(cx + Math.floor(rand() * 3) - 1, cy + Math.floor(rand() * 3) - 1, 'berry');
    }
  }

  // Guaranteed starting resources near each player's town center.
  for (const [sx, sy] of starts) {
    // forest arc
    const ang0 = rand() * Math.PI * 2;
    for (let k = 0; k < (lite ? 8 : 26); k++) {
      const ang = ang0 + (rand() - 0.5) * 1.7;
      const r = 9 + rand() * 4;
      tryPlace(Math.round(sx + Math.cos(ang) * r), Math.round(sy + Math.sin(ang) * r), 'tree');
    }
    // berries
    const bAng = ang0 + Math.PI * (0.6 + rand() * 0.5);
    const bx = Math.round(sx + Math.cos(bAng) * 8), by = Math.round(sy + Math.sin(bAng) * 8);
    for (let k = 0; k < 6; k++) {
      tryPlace(bx + Math.floor(rand() * 3) - 1, by + Math.floor(rand() * 3) - 1, 'berry');
    }
    // gold
    const gAng = bAng + Math.PI * (0.4 + rand() * 0.4);
    const gx = Math.round(sx + Math.cos(gAng) * 10), gy = Math.round(sy + Math.sin(gAng) * 10);
    for (let k = 0; k < 4; k++) {
      tryPlace(gx + (k % 2), gy + Math.floor(k / 2), 'gold');
    }
    // stone
    const stAng = gAng + Math.PI * (0.35 + rand() * 0.3);
    const stx = Math.round(sx + Math.cos(stAng) * 12), sty = Math.round(sy + Math.sin(stAng) * 12);
    for (let k = 0; k < 4; k++) {
      tryPlace(stx + (k % 2), sty + Math.floor(k / 2), 'stone');
    }
  }

  return out;
}

// Pick start locations in map corners on flat, walkable ground. Two players
// take opposite corners; a third (second enemy) takes an adjacent corner.
export function pickStartLocations(map, n = 2) {
  const size = map.size;
  const candidates = n >= 3 ? [
    [[18, 18], [size - 22, size - 22], [size - 22, 18]],
    [[18, 18], [size - 22, size - 22], [18, size - 22]],
  ] : [
    [[18, 18], [size - 22, size - 22]],
    [[size - 22, 18], [18, size - 22]],
  ];
  const flatness = ([gx, gy]) => {
    let bad = 0;
    for (let y = -4; y <= 4; y++) for (let x = -4; x <= 4; x++) {
      if (!map.isWalkable(gx + x, gy + y)) bad++;
    }
    return bad;
  };
  let best = candidates[0], bestScore = Infinity;
  for (const set of candidates) {
    const sc = set.reduce((s, loc) => s + flatness(loc), 0);
    if (sc < bestScore) { bestScore = sc; best = set; }
  }
  // Nudge each start to fully walkable ground if needed.
  return best.map(([gx, gy]) => {
    const w = map.nearestWalkable(gx, gy, 14) || [gx, gy];
    return w;
  });
}
