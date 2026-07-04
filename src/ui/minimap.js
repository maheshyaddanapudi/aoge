// Canvas minimap: prerendered terrain, live entity dots, camera frustum
// outline, click/drag to move the camera.

import * as THREE from 'three';
import { PLAYER, WORLD, TILE } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';

export class Minimap {
  constructor(canvas, game, rtsCam, camera, input = null) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.game = game;
    this.rtsCam = rtsCam;
    this.camera = camera;
    this.input = input;
    this.pings = []; // {x, z, t} — flashing attack indicators
    this.S = canvas.width; // square
    game.onPing = (x, z) => this.pings.push({ x, z, t: 0 });

    this.terrainLayer = document.createElement('canvas');
    this.terrainLayer.width = this.S;
    this.terrainLayer.height = this.S;
    this.renderTerrain();
    this.nodeT = 0;
    this.nodeLayer = document.createElement('canvas');
    this.nodeLayer.width = this.S;
    this.nodeLayer.height = this.S;
    this.renderNodes();

    // fog overlay: per-tile ImageData scaled up to minimap size
    this.fogV = -1;
    this.fogLayer = document.createElement('canvas');
    this.fogLayer.width = this.fogLayer.height = this.S;
    this.fogSmall = document.createElement('canvas');
    const ms = game.map.size;
    this.fogSmall.width = this.fogSmall.height = ms;
    this.fogImg = this.fogSmall.getContext('2d').createImageData(ms, ms);

    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const moveCam = (e) => {
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * WORLD;
      const z = (e.clientY - r.top) / r.height * WORLD;
      this.rtsCam.jumpTo(x, z);
    };
    let down = false;
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) { down = true; moveCam(e); }
      else if (e.button === 2 && this.input) {
        // right-click on the minimap commands the selection there
        const r = canvas.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width * WORLD;
        const z = (e.clientY - r.top) / r.height * WORLD;
        this.input.dispatchContext({ point: { x, y: 0, z } }, e.shiftKey);
      }
    });
    window.addEventListener('mousemove', (e) => { if (down) moveCam(e); });
    window.addEventListener('mouseup', () => { down = false; });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    // touch: drag scrolls the camera
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); if (e.touches[0]) moveCam(e.touches[0]); }, { passive: false });
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (e.touches[0]) moveCam(e.touches[0]); }, { passive: false });
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
    const fog = this.game.fog;
    for (const n of this.game.nodes) {
      if (n.dead) continue;
      if (fog && !fog.exploredWorld(n.wx, n.wz)) continue;
      ctx.fillStyle = n.type === 'tree' ? '#1e4d20' : n.type === 'gold' ? '#e8b923' : n.type === 'stone' ? '#b8b5aa' : '#b03333';
      ctx.fillRect(n.wx * k - 1.5, n.wz * k - 1.5, 3, 3);
    }
  }

  renderFog() {
    const fog = this.game.fog;
    const ms = fog.size, d = this.fogImg.data, st = fog.state;
    const revealed = fog.revealed;
    for (let i = 0; i < st.length; i++) {
      d[i * 4 + 3] = revealed ? 0 : st[i] === 2 ? 0 : st[i] === 1 ? 96 : 235;
    }
    const sctx = this.fogSmall.getContext('2d');
    sctx.putImageData(this.fogImg, 0, 0);
    const fctx = this.fogLayer.getContext('2d');
    fctx.clearRect(0, 0, this.S, this.S);
    fctx.imageSmoothingEnabled = true;
    fctx.drawImage(this.fogSmall, 0, 0, this.S, this.S);
  }

  update(dt) {
    this.nodeT -= dt;
    if (this.nodeT <= 0) { this.nodeT = 3; this.renderNodes(); }

    // ~12Hz is plenty for a minimap; full-rate redraw was pure waste
    this.drawT = (this.drawT || 0) - dt;
    if (this.drawT > 0) return;
    this.drawT = 0.08;

    const ctx = this.ctx;
    const S = this.S;
    ctx.drawImage(this.terrainLayer, 0, 0);
    ctx.drawImage(this.nodeLayer, 0, 0);

    const k = S / WORLD;
    const fog = this.game.fog;
    // buildings as squares (enemy: only once explored)
    const B_COLORS = ['#4d8df5', '#e8473a', '#b45de8'];
    const U_COLORS = ['#7db8ff', '#ff7a6e', '#d79bff'];
    for (const b of this.game.buildings) {
      if (b.dead) continue;
      if (fog && b.owner !== PLAYER && !fog.exploredWorld(b.cx, b.cz)) continue;
      ctx.fillStyle = B_COLORS[b.owner] || B_COLORS[1];
      const s = Math.max(3, b.size * TILE * k);
      ctx.fillRect(b.cx * k - s / 2, b.cz * k - s / 2, s, s);
    }
    // units as dots (enemy: only while visible)
    for (const u of this.game.units) {
      if (u.dead) continue;
      if (fog && u.owner !== PLAYER && !fog.visibleWorld(u.x, u.z)) continue;
      ctx.fillStyle = U_COLORS[u.owner] || U_COLORS[1];
      ctx.fillRect(u.x * k - 1.5, u.z * k - 1.5, 3, 3);
    }

    // fog shroud
    if (fog && fog.enabled) {
      if (this.fogV !== fog.version) { this.fogV = fog.version; this.renderFog(); }
      ctx.drawImage(this.fogLayer, 0, 0);
    }

    // attack pings: expanding red rings
    for (let i = this.pings.length - 1; i >= 0; i--) {
      const p = this.pings[i];
      p.t += dt + 0.08;
      if (p.t > 3) { this.pings.splice(i, 1); continue; }
      const phase = (p.t % 1);
      ctx.strokeStyle = `rgba(255,60,40,${1 - phase})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(p.x * k, p.z * k, 3 + phase * 10, 0, Math.PI * 2);
      ctx.stroke();
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
    this._scratch = this._scratch || new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(this.groundPlane, this._scratch);
    return hit ? this._scratch : null;
  }
}
