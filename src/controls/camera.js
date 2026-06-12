// Classic RTS camera: smooth pan (WASD / arrows / screen edge), wheel zoom
// toward the cursor, clamped to the world. Fixed pitch & yaw for readability.

import * as THREE from 'three';
import { WORLD } from '../config.js';

export class RTSCamera {
  constructor(camera, map) {
    this.camera = camera;
    this.map = map;
    this.target = new THREE.Vector3(WORLD / 2, 0, WORLD / 2);
    this.smoothTarget = this.target.clone();
    this.dist = 46;
    this.smoothDist = 60;
    this.minDist = 18;
    this.maxDist = 95;
    this.pitch = 0.92;      // radians from horizontal
    this.yaw = 0;
    this.keys = new Set();
    this.mouseX = 0.5;
    this.mouseY = 0.5;
    this.edgePanEnabled = true;

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX / window.innerWidth;
      this.mouseY = e.clientY / window.innerHeight;
    });
  }

  jumpTo(x, z) {
    this.target.x = x;
    this.target.z = z;
  }

  panBy(dx, dz) {
    this.target.x += dx;
    this.target.z += dz;
  }

  zoomBy(delta, groundPoint) {
    const before = this.dist;
    this.dist = THREE.MathUtils.clamp(this.dist * (delta > 0 ? 1.13 : 0.885), this.minDist, this.maxDist);
    // zoom-to-cursor: nudge target toward the point under the mouse when zooming in
    if (delta < 0 && groundPoint && this.dist < before) {
      this.target.lerp(new THREE.Vector3(groundPoint.x, 0, groundPoint.z), 0.18);
    }
  }

  update(dt) {
    const panSpeed = (14 + this.dist * 0.55) * dt;
    let dx = 0, dz = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) dz -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) dz += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) dx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dx += 1;

    // edge pan
    if (this.edgePanEnabled && document.hasFocus()) {
      const m = 0.008;
      if (this.mouseX < m) dx -= 1;
      if (this.mouseX > 1 - m) dx += 1;
      if (this.mouseY < m) dz -= 1;
      if (this.mouseY > 1 - m) dz += 1;
    }

    if (dx || dz) {
      const len = Math.hypot(dx, dz);
      this.target.x += (dx / len) * panSpeed;
      this.target.z += (dz / len) * panSpeed;
    }

    const margin = 6;
    this.target.x = THREE.MathUtils.clamp(this.target.x, margin, WORLD - margin);
    this.target.z = THREE.MathUtils.clamp(this.target.z, margin, WORLD - margin);
    this.target.y = this.map.heightAt(this.target.x, this.target.z);

    this.smoothTarget.lerp(this.target, Math.min(1, dt * 9));
    this.smoothDist += (this.dist - this.smoothDist) * Math.min(1, dt * 7);

    const cam = this.camera;
    const horiz = Math.cos(this.pitch) * this.smoothDist;
    const vert = Math.sin(this.pitch) * this.smoothDist;
    cam.position.set(
      this.smoothTarget.x + Math.sin(this.yaw) * horiz,
      this.smoothTarget.y + vert,
      this.smoothTarget.z + Math.cos(this.yaw) * horiz
    );
    cam.lookAt(this.smoothTarget);
  }
}
