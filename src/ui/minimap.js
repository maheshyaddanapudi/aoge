// Canvas minimap: prerendered terrain, live entity dots, camera frustum
// outline, click/drag to move the camera.

import * as THREE from 'three';
import { PLAYER, WORLD, TILE } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';

export class Minimap {
  constructor(canvas, game, rtsCam, camera) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.game = game;
    this.rtsCam = rtsCam;
    this.camera = camera;
    this.S = canvas.width; // square

    this.terrainLayer = document.createElement('canvas');
    this.terrainLayer.width = this.S;
    this.terrainLayer.height = this.S;
    this.renderTerrain();
    this.nodeT = 0;
    this.nodeLayer = document.createElement('canvas');
    this.nodeLayer.width = this.S;
    this.nodeLayer.height = this.S;
    this.renderNodes();

    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const moveCam = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * WORLD;
      const z = (e.clientY - r.top) / r.height * WORLD;
      this.rtsCam.jumpTo(x, z);
    };
    let down = false;
    canvas.addEventListener('mousedown', (e) => { if (e.button === 0) { down = true; moveCam(e); } });
    window.addEventListener('mousemove', (e) => { if (down) moveCam(e); });
    window.addEventListener('mouseup', () => { down = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  renderTerrain() {
    const ctx = this.terrainLayer.getContext('2d');
    const map = this.game.map;
    const S = this.S;
    const px = S / map.size;
    for (let gy = 0; gy < map.size; gy++) {
      for (let gx = 0; gx < map.size; gx++) {
        const h = map.tileHeight(gx, gy);
        const m = map.moistureAt((gx + 0.5) * TILE, (gy + 0.5) * TILE);
        let c;
        if (h <= WATER_LEVEL) c = '#2d5e9e';
        else if (h < WATER_LEVEL + 0.35) c = '#b3a263';
        else if (h > 2.6) c = '#8d8a80';
        else {
          const g = 120 + m * 45 - h * 8;
          c = `rgb(${78 + h * 6 | 0},${g | 0},${52 | 0})`;
        }
        ctx.fillStyle = c;
        ctx.fillRect(gx * px, gy * px, px + 1, px + 1);
      }
    }
  }

  renderNodes() {
    const ctx = this.nodeLayer.getContext('2d');
    ctx.clearRect(0, 0, this.S, this.S);
    const k = this.S / WORLD;
    for (const n of this.game.nodes) {
      if (n.dead) continue;
      ctx.fillStyle = n.type === 'tree' ? '#1e4d20' : n.type === 'gold' ? '#e8b923' : '#b03333';
      ctx.fillRect(n.wx * k - 1.5, n.wz * k - 1.5, 3, 3);
    }
  }

  update(dt) {
    this.nodeT -= dt;
    if (this.nodeT <= 0) { this.nodeT = 3; this.renderNodes(); }

    const ctx = this.ctx;
    const S = this.S;
    ctx.drawImage(this.terrainLayer, 0, 0);
    ctx.drawImage(this.nodeLayer, 0, 0);

    const k = S / WORLD;
    // buildings as squares
    for (const b of this.game.buildings) {
      if (b.dead) continue;
      ctx.fillStyle = b.owner === PLAYER ? '#4d8df5' : '#e8473a';
      const s = Math.max(3, b.size * TILE * k);
      ctx.fillRect(b.cx * k - s / 2, b.cz * k - s / 2, s, s);
    }
    // units as dots
    for (const u of this.game.units) {
      if (u.dead) continue;
      ctx.fillStyle = u.owner === PLAYER ? '#7db8ff' : '#ff7a6e';
      ctx.fillRect(u.x * k - 1.5, u.z * k - 1.5, 3, 3);
    }

    // camera frustum footprint
    ctx.strokeStyle = '#f5f0dc';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
    let started = false;
    for (const [nx, ny] of corners) {
      const p = this.projectToGround(nx, ny);
      if (!p) continue;
      const x = Math.max(0, Math.min(S, p.x * k));
      const y = Math.max(0, Math.min(S, p.z * k));
      if (!started) { ctx.moveTo(x, y); started = true; }
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  projectToGround(ndcX, ndcY) {
    this.raycaster.setFromCamera({ x: ndcX, y: ndcY }, this.camera);
    const out = new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(this.groundPlane, out);
    return hit ? out : null;
  }
}
