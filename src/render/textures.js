// Procedural canvas textures: tiling surface detail (grass, thatch, stone,
// planks, plaster) plus matching normal maps — generated at startup, no files.

import * as THREE from 'three';

function makeCanvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return [c, c.getContext('2d')];
}

// Tileable value noise on a canvas-sized grid.
function noiseGrid(size, cells, seed = 1) {
  let s = seed >>> 0;
  const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const g = new Float32Array(cells * cells);
  for (let i = 0; i < g.length; i++) g[i] = rand();
  const sm = (t) => t * t * (3 - 2 * t);
  return (x, y) => {
    const fx = (x / size) * cells, fy = (y / size) * cells;
    const x0 = Math.floor(fx) % cells, y0 = Math.floor(fy) % cells;
    const x1 = (x0 + 1) % cells, y1 = (y0 + 1) % cells;
    const tx = sm(fx - Math.floor(fx)), ty = sm(fy - Math.floor(fy));
    const a = g[y0 * cells + x0], b = g[y0 * cells + x1];
    const c = g[y1 * cells + x0], d = g[y1 * cells + x1];
    return a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty;
  };
}

function fbm(size, seed) {
  const n1 = noiseGrid(size, 8, seed);
  const n2 = noiseGrid(size, 23, seed ^ 99);
  const n3 = noiseGrid(size, 53, seed ^ 7777);
  return (x, y) => n1(x, y) * 0.5 + n2(x, y) * 0.33 + n3(x, y) * 0.17;
}

function toTexture(canvas, repeat = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Sobel the luminance of a tileable canvas into a tangent-space normal map.
function normalFrom(canvas, strength = 1.4) {
  const size = canvas.width;
  const src = canvas.getContext('2d').getImageData(0, 0, size, size).data;
  const lum = (x, y) => {
    x = ((x % size) + size) % size; y = ((y % size) + size) % size;
    const i = (y * size + x) * 4;
    return (src[i] + src[i + 1] + src[i + 2]) / 765;
  };
  const [c, ctx] = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (lum(x + 1, y) - lum(x - 1, y)) * strength;
      const dy = (lum(x, y + 1) - lum(x, y - 1)) * strength;
      const inv = 1 / Math.hypot(dx, dy, 1);
      const i = (y * size + x) * 4;
      img.data[i] = (-dx * inv * 0.5 + 0.5) * 255;
      img.data[i + 1] = (-dy * inv * 0.5 + 0.5) * 255;
      img.data[i + 2] = (inv * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// ---------------------------------------------------------------------------

// Neutral-luminance grass detail; hue comes from terrain vertex colors.
export function grassDetail(size = 256) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 1234);
  const blades = noiseGrid(size, 96, 555);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // keep average luminance ~1 so vertex colors stay true
      let v = 0.97 + (n(x, y) - 0.5) * 0.22 + (blades(x, y) - 0.5) * 0.26;
      v = Math.max(0.74, Math.min(1.18, v));
      const i = (y * size + x) * 4;
      img.data[i] = Math.min(255, v * 252);
      img.data[i + 1] = Math.min(255, v * 255);
      img.data[i + 2] = Math.min(255, v * 246);
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTexture(c), normalMap: normalFrom(c, 0.8) };
}

export function thatch(size = 128) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 4321);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // horizontal straw rows with per-strand jitter
      const row = Math.sin((y / size) * Math.PI * 18 + n(x, y) * 5) * 0.5 + 0.5;
      const strand = Math.sin((x / size) * Math.PI * 60 + y * 0.45) * 0.5 + 0.5;
      let v = 0.66 + row * 0.26 + strand * 0.1 + (n(x, y) - 0.5) * 0.22;
      const i = (y * size + x) * 4;
      img.data[i] = Math.min(255, v * 255);
      img.data[i + 1] = Math.min(255, v * 232);
      img.data[i + 2] = Math.min(255, v * 178);
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTexture(c, 2), normalMap: normalFrom(c, 1.6), normalRepeat: 2 };
}

export function stoneBlocks(size = 128) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 8765);
  const img = ctx.createImageData(size, size);
  const rows = 6, cols = 4;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const ry = (y / size) * rows;
      const offset = (Math.floor(ry) % 2) * 0.5;
      const rx = (x / size) * cols + offset;
      const fy = ry - Math.floor(ry), fx = rx - Math.floor(rx);
      const mortar = (fy < 0.09 || fx < 0.06) ? 0.62 : 1;
      let v = (0.78 + (n(x, y) - 0.5) * 0.3) * mortar;
      const i = (y * size + x) * 4;
      img.data[i] = v * 255;
      img.data[i + 1] = v * 252;
      img.data[i + 2] = v * 244;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTexture(c, 2), normalMap: normalFrom(c, 2.0), normalRepeat: 2 };
}

export function planks(size = 128) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 2468);
  const img = ctx.createImageData(size, size);
  const boards = 5;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const bx = (x / size) * boards;
      const gap = (bx - Math.floor(bx)) < 0.07 ? 0.6 : 1;
      const grain = Math.sin((y / size) * Math.PI * 34 + n(x, y) * 9) * 0.5 + 0.5;
      const board = noiseGrid(size, boards, 33)(x, 0) * 0.2;
      let v = (0.72 + grain * 0.14 + board + (n(x, y) - 0.5) * 0.18) * gap;
      const i = (y * size + x) * 4;
      img.data[i] = Math.min(255, v * 255);
      img.data[i + 1] = Math.min(255, v * 224);
      img.data[i + 2] = Math.min(255, v * 184);
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTexture(c, 1.5), normalMap: normalFrom(c, 1.5), normalRepeat: 1.5 };
}

export function plaster(size = 128) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 1357);
  const speck = noiseGrid(size, 64, 777);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let v = 0.9 + (n(x, y) - 0.5) * 0.16 - (speck(x, y) > 0.82 ? 0.12 : 0);
      const i = (y * size + x) * 4;
      img.data[i] = v * 255;
      img.data[i + 1] = v * 250;
      img.data[i + 2] = v * 238;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTexture(c), normalMap: normalFrom(c, 0.9) };
}

// Animated water normals (two offset layers of the same map look organic).
export function waterNormal(size = 128) {
  const [c, ctx] = makeCanvas(size);
  const n = fbm(size, 9753);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const v = 0.5 + Math.sin(n(x, y) * Math.PI * 4) * 0.5;
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return normalFrom(c, 1.1);
}

// Vertical sky gradient for the dome.
export function skyGradient() {
  const [c, ctx] = makeCanvas(256);
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#5d9bd4');
  g.addColorStop(0.55, '#9cc6e8');
  g.addColorStop(0.8, '#d8e8f2');
  g.addColorStop(1, '#e8e2cf');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Soft round sprite for smoke particles.
export function smokeSprite() {
  const [c, ctx] = makeCanvas(64);
  const g = ctx.createRadialGradient(32, 32, 4, 32, 32, 30);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.6, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
