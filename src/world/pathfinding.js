// Grid A* with a binary heap, 8-directional movement, corner-cut prevention,
// and path smoothing via line-of-sight string pulling.

class MinHeap {
  constructor() { this.a = []; }
  get size() { return this.a.length; }
  push(node) {
    const a = this.a;
    a.push(node);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p].f <= a[i].f) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < a.length && a[l].f < a[m].f) m = l;
        if (r < a.length && a[r].f < a[m].f) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        i = m;
      }
    }
    return top;
  }
}

let scratch = null; // reusable A* buffers (see findPath)

const DIRS = [
  [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
  [1, 1, 1.4142], [1, -1, 1.4142], [-1, 1, 1.4142], [-1, -1, 1.4142],
];

/**
 * Find a tile path from (sx,sy) to (tx,ty). If target is blocked, walks to the
 * nearest reachable tile around it. Returns array of [gx, gy] (excluding start),
 * or null if nothing reachable.
 */
export function findPath(map, sx, sy, tx, ty, maxIter = 9000, owner = -1, domain = 'land') {
  const size = map.size;
  // per-owner passability: open ground (or the owner's own gate tiles);
  // boats navigate the inverse grid
  const water = domain === 'water';
  const open = water
    ? (i) => map.waterWalk[i] === 1
    : (i) => map.walk[i] === 1 || (owner >= 0 && map.gateOwner[i] === owner);
  const nearestOpen = (gx, gy, r) => {
    if (!water) return map.nearestWalkable(gx, gy, r);
    for (let rad = 0; rad <= r; rad++) {
      for (let dy = -rad; dy <= rad; dy++) for (let dx = -rad; dx <= rad; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== rad) continue;
        if (map.isWater(gx + dx, gy + dy)) return [gx + dx, gy + dy];
      }
    }
    return null;
  };
  if (!map.inBounds(sx, sy)) return null;
  if (!open(sy * size + sx)) {
    const fix = nearestOpen(sx, sy, 4);
    if (!fix) return null;
    [sx, sy] = fix;
  }
  let goalBlocked = false;
  if (!map.inBounds(tx, ty) || !open(ty * size + tx)) {
    goalBlocked = true;
    const fix = nearestOpen(tx, ty, 12);
    if (!fix) return null;
    [tx, ty] = fix;
  }
  if (sx === tx && sy === ty) return [];

  // Reusable scratch buffers with a generation stamp — findPath runs many
  // times per second and fresh 9k-cell typed arrays per call were multi-MB/s
  // of garbage. A cell's g/parent/closed are valid only when gen matches.
  if (!scratch || scratch.g.length !== size * size) {
    scratch = {
      g: new Float32Array(size * size),
      parent: new Int32Array(size * size),
      closed: new Int32Array(size * size),
      genG: new Int32Array(size * size),
      gen: 0,
    };
  }
  scratch.gen++;
  const S = scratch, GEN = S.gen;
  const gGet = (i) => S.genG[i] === GEN ? S.g[i] : Infinity;
  const gSet = (i, v) => { S.g[i] = v; S.genG[i] = GEN; };
  const isClosed = (i) => S.closed[i] === GEN;
  const close = (i) => { S.closed[i] = GEN; };
  const parentGet = (i) => S.genG[i] === GEN ? S.parent[i] : -1;
  const heap = new MinHeap();
  const h = (x, y) => {
    const dx = Math.abs(x - tx), dy = Math.abs(y - ty);
    return Math.max(dx, dy) + 0.4142 * Math.min(dx, dy);
  };
  const si = sy * size + sx;
  gSet(si, 0);
  S.parent[si] = -1;
  heap.push({ i: si, x: sx, y: sy, f: h(sx, sy) });

  let bestI = si, bestH = h(sx, sy);
  let iter = 0;
  while (heap.size && iter++ < maxIter) {
    const cur = heap.pop();
    if (isClosed(cur.i)) continue;
    close(cur.i);
    const hh = h(cur.x, cur.y);
    if (hh < bestH) { bestH = hh; bestI = cur.i; }
    if (cur.x === tx && cur.y === ty) { bestI = cur.i; break; }

    for (const [dx, dy, cost] of DIRS) {
      const nx = cur.x + dx, ny = cur.y + dy;
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
      const ni = ny * size + nx;
      if (isClosed(ni) || !open(ni)) continue;
      // No cutting corners diagonally past blocked tiles.
      if (dx !== 0 && dy !== 0) {
        if (!open(cur.y * size + nx) || !open(ny * size + cur.x)) continue;
      }
      const ng = gGet(cur.i) + cost;
      if (ng < gGet(ni)) {
        gSet(ni, ng);
        S.parent[ni] = cur.i;
        heap.push({ i: ni, x: nx, y: ny, f: ng + h(nx, ny) });
      }
    }
  }

  // Reconstruct to bestI (goal, or closest approach if unreachable).
  const path = [];
  let i = bestI;
  if (i === si && !(goalBlocked || bestH < h(sx, sy))) return null;
  while (i !== si && i >= 0) {
    path.push([i % size, (i / size) | 0]);
    i = parentGet(i);
  }
  path.reverse();
  return smoothPath(map, sx, sy, path, owner, domain);
}

// Bresenham walkability check between tile centers.
export function lineWalkable(map, x0, y0, x1, y1, owner = -1, domain = 'land') {
  const ok = domain === 'water'
    ? (x, y) => map.isWater(x, y)
    : (x, y) => owner >= 0 ? map.isWalkableFor(x, y, owner) : map.isWalkable(x, y);
  let dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let x = x0, y = y0;
  for (;;) {
    if (!ok(x, y)) return false;
    if (x === x1 && y === y1) return true;
    const e2 = 2 * err;
    if (e2 > -dy) {
      // moving diagonally? ensure both adjacent orthogonal tiles are open
      if (e2 < dx && !(ok(x + sx, y) && ok(x, y + sy))) return false;
      err -= dy; x += sx;
    }
    if (e2 < dx) { err += dx; y += sy; }
  }
}

function smoothPath(map, sx, sy, path, owner = -1, domain = 'land') {
  if (path.length < 3) return path;
  const out = [];
  let ax = sx, ay = sy;
  let i = 0;
  while (i < path.length) {
    // Furthest visible waypoint from anchor.
    let j = i;
    for (let k = path.length - 1; k > i; k--) {
      if (k - i > 40) continue; // cap LOS scan length
      if (lineWalkable(map, ax, ay, path[k][0], path[k][1], owner, domain)) { j = k; break; }
    }
    out.push(path[j]);
    [ax, ay] = path[j];
    i = j + 1;
  }
  return out;
}
