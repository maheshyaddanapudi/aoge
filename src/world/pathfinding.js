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

const DIRS = [
  [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
  [1, 1, 1.4142], [1, -1, 1.4142], [-1, 1, 1.4142], [-1, -1, 1.4142],
];

/**
 * Find a tile path from (sx,sy) to (tx,ty). If target is blocked, walks to the
 * nearest reachable tile around it. Returns array of [gx, gy] (excluding start),
 * or null if nothing reachable.
 */
export function findPath(map, sx, sy, tx, ty, maxIter = 9000) {
  const size = map.size;
  if (!map.inBounds(sx, sy)) return null;
  if (!map.isWalkable(sx, sy)) {
    const fix = map.nearestWalkable(sx, sy, 4);
    if (!fix) return null;
    [sx, sy] = fix;
  }
  let goalBlocked = false;
  if (!map.isWalkable(tx, ty)) {
    goalBlocked = true;
    const fix = map.nearestWalkable(tx, ty, 12);
    if (!fix) return null;
    [tx, ty] = fix;
  }
  if (sx === tx && sy === ty) return [];

  const g = new Float32Array(size * size).fill(Infinity);
  const parent = new Int32Array(size * size).fill(-1);
  const closed = new Uint8Array(size * size);
  const heap = new MinHeap();
  const h = (x, y) => {
    const dx = Math.abs(x - tx), dy = Math.abs(y - ty);
    return Math.max(dx, dy) + 0.4142 * Math.min(dx, dy);
  };
  const si = sy * size + sx;
  g[si] = 0;
  heap.push({ i: si, x: sx, y: sy, f: h(sx, sy) });

  let bestI = si, bestH = h(sx, sy);
  let iter = 0;
  while (heap.size && iter++ < maxIter) {
    const cur = heap.pop();
    if (closed[cur.i]) continue;
    closed[cur.i] = 1;
    const hh = h(cur.x, cur.y);
    if (hh < bestH) { bestH = hh; bestI = cur.i; }
    if (cur.x === tx && cur.y === ty) { bestI = cur.i; break; }

    for (const [dx, dy, cost] of DIRS) {
      const nx = cur.x + dx, ny = cur.y + dy;
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
      const ni = ny * size + nx;
      if (closed[ni] || map.walk[ni] !== 1) continue;
      // No cutting corners diagonally past blocked tiles.
      if (dx !== 0 && dy !== 0) {
        if (map.walk[cur.y * size + nx] !== 1 || map.walk[ny * size + cur.x] !== 1) continue;
      }
      const ng = g[cur.i] + cost;
      if (ng < g[ni]) {
        g[ni] = ng;
        parent[ni] = cur.i;
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
    i = parent[i];
  }
  path.reverse();
  return smoothPath(map, sx, sy, path);
}

// Bresenham walkability check between tile centers.
export function lineWalkable(map, x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let x = x0, y = y0;
  for (;;) {
    if (!map.isWalkable(x, y)) return false;
    if (x === x1 && y === y1) return true;
    const e2 = 2 * err;
    if (e2 > -dy) {
      // moving diagonally? ensure both adjacent orthogonal tiles are open
      if (e2 < dx && !(map.isWalkable(x + sx, y) && map.isWalkable(x, y + sy))) return false;
      err -= dy; x += sx;
    }
    if (e2 < dx) { err += dx; y += sy; }
  }
}

function smoothPath(map, sx, sy, path) {
  if (path.length < 3) return path;
  const out = [];
  let ax = sx, ay = sy;
  let i = 0;
  while (i < path.length) {
    // Furthest visible waypoint from anchor.
    let j = i;
    for (let k = path.length - 1; k > i; k--) {
      if (k - i > 40) continue; // cap LOS scan length
      if (lineWalkable(map, ax, ay, path[k][0], path[k][1])) { j = k; break; }
    }
    out.push(path[j]);
    [ax, ay] = path[j];
    i = j + 1;
  }
  return out;
}
