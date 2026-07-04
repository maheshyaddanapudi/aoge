// Ambient life: bird flocks, drifting clouds with soft ground shadows,
// water ripples (fish + shore lap), and grass tufts. Pure decoration —
// nothing here touches the sim.

import * as THREE from 'three';
import { WORLD, TILE } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';

function radialGradientTexture(inner, outer) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 6, 64, 64, 62);
  g.addColorStop(0, inner);
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  return t;
}

function grassTuftTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  for (let i = 0; i < 9; i++) {
    const x = 8 + i * 6 + (Math.sin(i * 7.3) * 3);
    const lean = (i - 4) * 2.2 + Math.sin(i * 3.1) * 2;
    const h = 30 + (i % 3) * 10;
    const grad = ctx.createLinearGradient(0, 64, 0, 64 - h);
    grad.addColorStop(0, '#3d6e2e');
    grad.addColorStop(1, '#7fb254');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(x, 64);
    ctx.quadraticCurveTo(x + lean * 0.4, 64 - h * 0.6, x + lean, 64 - h);
    ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}

export class Ambient {
  constructor(scene, map) {
    this.scene = scene;
    this.map = map;
    this.t = 0;

    // --- scan water + shore tiles once -----------------------------------
    this.deepTiles = [];
    this.shoreTiles = [];
    for (let gy = 1; gy < map.size - 1; gy += 2) {
      for (let gx = 1; gx < map.size - 1; gx += 2) {
        const h = map.tileHeight(gx, gy);
        if (h <= WATER_LEVEL - 0.35) this.deepTiles.push([gx, gy]);
        else if (h > WATER_LEVEL - 0.12 && h <= WATER_LEVEL + 0.04) this.shoreTiles.push([gx, gy]);
      }
    }

    this._buildBirds();
    this._buildClouds();
    this._buildRipples();
    this._buildGrass();
  }

  // --- birds: chevron shapes flying in loose flocks -----------------------
  _buildBirds() {
    const geo = new THREE.BufferGeometry();
    // two swept-back wings
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
      0, 0, 0.35,  -0.9, 0.12, -0.3,  0, 0, -0.05,
      0, 0, 0.35,   0, 0, -0.05,      0.9, 0.12, -0.3,
    ]), 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshBasicMaterial({ color: 0x2b2b33, side: THREE.DoubleSide });
    this.flocks = [];
    const count = 3 * 6;
    this.birdMesh = new THREE.InstancedMesh(geo, mat, count);
    this.birdMesh.frustumCulled = false;
    this.scene.add(this.birdMesh);
    let idx = 0;
    for (let f = 0; f < 3; f++) {
      const flock = {
        x: Math.random() * WORLD, z: Math.random() * WORLD,
        y: 26 + f * 4,
        dir: Math.random() * Math.PI * 2,
        speed: 6.5 + f,
        birds: [],
      };
      for (let b = 0; b < 6; b++) {
        flock.birds.push({ idx: idx++, ox: (b % 3) * 2.2 - 2.2 + b * 0.4, oz: Math.floor(b / 3) * 1.8 - (b % 2), phase: Math.random() * 6.28 });
      }
      this.flocks.push(flock);
    }
  }

  // --- clouds: white puff sprites + soft shadow discs ----------------------
  _buildClouds() {
    this.clouds = [];
    const puffTex = radialGradientTexture('rgba(255,255,255,0.85)', 'rgba(255,255,255,0)');
    const shadowTex = radialGradientTexture('rgba(0,0,0,0.75)', 'rgba(0,0,0,0)');
    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 4; i++) {
      const group = new THREE.Group();
      const n = 3 + (i % 3);
      for (let p = 0; p < n; p++) {
        const s = new THREE.Sprite(new THREE.SpriteMaterial({
          map: puffTex, transparent: true, opacity: 0.5, depthWrite: false,
        }));
        const sc = 10 + Math.random() * 9;
        s.scale.set(sc * 1.5, sc * 0.7, 1);
        s.position.set((p - n / 2) * 7, (Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 5);
        group.add(s);
      }
      group.position.set(Math.random() * WORLD, 38 + i * 3, Math.random() * WORLD);
      this.scene.add(group);

      const shadow = new THREE.Mesh(shadowGeo, new THREE.MeshBasicMaterial({
        map: shadowTex, transparent: true, opacity: 0.10, depthWrite: false,
      }));
      shadow.rotation.x = -Math.PI / 2;
      shadow.scale.set(30, 22, 1);
      shadow.renderOrder = 2;
      this.scene.add(shadow);

      this.clouds.push({ group, shadow, speed: 0.9 + Math.random() * 0.7, drift: Math.random() * 0.4 - 0.2 });
    }
  }

  // --- ripples: expanding rings on ponds & shorelines ----------------------
  _buildRipples() {
    this.ripples = [];
    if (!this.deepTiles.length && !this.shoreTiles.length) return;
    const geo = new THREE.RingGeometry(0.75, 0.95, 24);
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: 0xdfeefc, transparent: true, opacity: 0, depthWrite: false,
      }));
      m.rotation.x = -Math.PI / 2;
      m.renderOrder = 2;
      this.scene.add(m);
      const r = { mesh: m, t: Math.random() * -6, dur: 2.2 };
      this._respawnRipple(r);
      this.ripples.push(r);
    }
  }

  _respawnRipple(r) {
    const useShore = this.shoreTiles.length && (!this.deepTiles.length || Math.random() < 0.5);
    const list = useShore ? this.shoreTiles : this.deepTiles;
    if (!list.length) { r.t = -9999; return; }
    const [gx, gy] = list[(Math.random() * list.length) | 0];
    const wx = (gx + 0.5) * TILE, wz = (gy + 0.5) * TILE;
    r.mesh.position.set(wx + (Math.random() - 0.5) * 2, WATER_LEVEL - 0.06, wz + (Math.random() - 0.5) * 2);
    r.t = -Math.random() * 5; // stagger
  }

  // --- grass tufts: crossed alpha quads in moist areas ---------------------
  _buildGrass() {
    const tex = grassTuftTexture();
    const plane = new THREE.PlaneGeometry(1.1, 1.1);
    plane.translate(0, 0.5, 0);
    const p2 = plane.clone().rotateY(Math.PI / 2);
    // merge both quads into one geometry (avoids a merge util import)
    const geo = new THREE.BufferGeometry();
    const a = plane.toNonIndexed(), b = p2.toNonIndexed();
    const pos = new Float32Array(a.attributes.position.count * 3 + b.attributes.position.count * 3);
    pos.set(a.attributes.position.array, 0);
    pos.set(b.attributes.position.array, a.attributes.position.count * 3);
    const uv = new Float32Array(a.attributes.uv.count * 2 + b.attributes.uv.count * 2);
    uv.set(a.attributes.uv.array, 0);
    uv.set(b.attributes.uv.array, a.attributes.uv.count * 2);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.computeVertexNormals();

    const mat = new THREE.MeshLambertMaterial({ map: tex, alphaTest: 0.35, side: THREE.DoubleSide });
    const count = 550;
    const inst = new THREE.InstancedMesh(geo, mat, count);
    inst.frustumCulled = false;
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler(), V = new THREE.Vector3();
    let placed = 0, guard = 0;
    const map = this.map;
    while (placed < count && guard++ < count * 14) {
      const wx = Math.random() * WORLD, wz = Math.random() * WORLD;
      const [gx, gy] = map.worldToGrid(wx, wz);
      if (!map.isWalkable(gx, gy) || map.occupantAt(gx, gy)) continue;
      if (map.moistureAt(wx, wz) < 0.45) continue; // grassy areas only
      const h = map.heightAt(wx, wz);
      if (h < WATER_LEVEL + 0.3) continue;
      E.set(0, Math.random() * Math.PI, 0);
      Q.setFromEuler(E);
      const sc = 0.7 + Math.random() * 0.7;
      M.compose(V.set(wx, h - 0.03, wz), Q, new THREE.Vector3(sc, sc, sc));
      inst.setMatrixAt(placed++, M);
    }
    inst.count = placed;
    inst.instanceMatrix.needsUpdate = true;
    this.scene.add(inst);
  }

  update(dt) {
    this.t += dt;
    const t = this.t;

    // birds
    const M = this._m4 = this._m4 || new THREE.Matrix4();
    const Q = this._q = this._q || new THREE.Quaternion();
    const E = this._e = this._e || new THREE.Euler();
    const S = this._s = this._s || new THREE.Vector3();
    for (const f of this.flocks) {
      f.x += Math.cos(f.dir) * f.speed * dt;
      f.z += Math.sin(f.dir) * f.speed * dt;
      f.dir += Math.sin(t * 0.11 + f.y) * 0.0012;
      if (f.x < -20) f.x = WORLD + 18; if (f.x > WORLD + 20) f.x = -18;
      if (f.z < -20) f.z = WORLD + 18; if (f.z > WORLD + 20) f.z = -18;
      for (const b of f.birds) {
        const flap = Math.sin(t * 7 + b.phase);
        E.set(0, -f.dir + Math.PI / 2, flap * 0.55);
        Q.setFromEuler(E);
        M.compose(S.set(f.x + b.ox, f.y + Math.sin(t * 0.9 + b.phase) * 0.7, f.z + b.oz), Q, this._one = this._one || new THREE.Vector3(1, 1, 1));
        this.birdMesh.setMatrixAt(b.idx, M);
      }
    }
    this.birdMesh.instanceMatrix.needsUpdate = true;

    // clouds + their ground shadows
    for (const c of this.clouds) {
      c.group.position.x += c.speed * dt;
      c.group.position.z += c.drift * dt;
      if (c.group.position.x > WORLD + 40) c.group.position.x = -40;
      if (c.group.position.z > WORLD + 40) c.group.position.z = -40;
      if (c.group.position.z < -40) c.group.position.z = WORLD + 40;
      const cx = c.group.position.x, cz = c.group.position.z;
      if (cx > -5 && cx < WORLD + 5 && cz > -5 && cz < WORLD + 5) {
        c.shadow.visible = true;
        c.shadow.position.set(cx, Math.max(this.map.heightAt(cx, cz), WATER_LEVEL) + 0.42, cz);
      } else c.shadow.visible = false;
    }

    // ripples
    for (const r of this.ripples) {
      r.t += dt;
      if (r.t < 0) continue;
      if (r.t >= r.dur) { this._respawnRipple(r); r.mesh.material.opacity = 0; continue; }
      const k = r.t / r.dur;
      const sc = 0.4 + k * 2.6;
      r.mesh.scale.set(sc, sc, 1);
      r.mesh.material.opacity = 0.5 * (1 - k);
    }
  }
}
