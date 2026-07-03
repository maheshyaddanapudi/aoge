// Fog-of-war shroud: a terrain-following mesh whose alpha map darkens
// unseen (opaque) and explored (dim) tiles. The alpha texture is a small
// per-tile canvas upscaled with a blur so tile edges read as soft shroud.

import * as THREE from 'three';
import { WORLD } from '../config.js';
import { WATER_LEVEL } from '../world/map.js';

export class FogRenderer {
  constructor(scene, map, fog) {
    this.fog = fog;
    const size = fog.size;

    this.small = document.createElement('canvas');
    this.small.width = this.small.height = size;
    this.smallCtx = this.small.getContext('2d');
    this.img = this.smallCtx.createImageData(size, size);

    this.big = document.createElement('canvas');
    this.big.width = this.big.height = size * 3;
    this.bigCtx = this.big.getContext('2d');

    this.tex = new THREE.CanvasTexture(this.big);
    this.tex.minFilter = THREE.LinearFilter;
    this.tex.magFilter = THREE.LinearFilter;

    // Terrain-following surface slightly above ground (and above water in
    // ponds) so hills don't poke through a flat plane.
    const geom = new THREE.PlaneGeometry(WORLD, WORLD, size, size);
    geom.rotateX(-Math.PI / 2);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const wx = pos.getX(i) + WORLD / 2;
      const wz = pos.getZ(i) + WORLD / 2;
      pos.setX(i, wx);
      pos.setZ(i, wz);
      // +0.9 clears the tallest ground decor (rocks/shrubs top out ~0.75);
      // anything taller (trees, buildings, units) is hidden per-entity
      pos.setY(i, Math.max(map.heightAt(wx, wz), WATER_LEVEL) + 0.9);
    }
    this.mesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
      color: 0x070a10,
      transparent: true,
      alphaMap: this.tex,   // green channel drives opacity
      depthWrite: false,
    }));
    this.mesh.renderOrder = 5;
    this.mesh.frustumCulled = false;
    this.mesh.name = 'fog-shroud';
    scene.add(this.mesh);
    this.refresh();
  }

  refresh() {
    const st = this.fog.state, revealed = this.fog.revealed || !this.fog.enabled;
    const d = this.img.data;
    for (let i = 0; i < st.length; i++) {
      const a = revealed ? 0 : st[i] === 2 ? 0 : st[i] === 1 ? 112 : 255;
      d[i * 4 + 1] = a;
      d[i * 4 + 3] = 255;
    }
    this.smallCtx.putImageData(this.img, 0, 0);
    this.bigCtx.filter = 'blur(2px)';
    this.bigCtx.drawImage(this.small, 0, 0, this.big.width, this.big.height);
    this.tex.needsUpdate = true;
  }
}
