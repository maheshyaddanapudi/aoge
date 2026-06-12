// Visual effects: selection rings, health bars, projectiles, particles,
// death/destruction animations, rally flags.

import * as THREE from 'three';
import { mat } from './models.js';
import { smokeSprite } from './textures.js';

const ringGeo = new THREE.RingGeometry(0.75, 0.95, 24);
ringGeo.rotateX(-Math.PI / 2);
const ringMatFriend = new THREE.MeshBasicMaterial({ color: 0x4dff5e, transparent: true, opacity: 0.85, depthWrite: false });
const ringMatFoe = new THREE.MeshBasicMaterial({ color: 0xff4d3a, transparent: true, opacity: 0.85, depthWrite: false });

export function makeSelectionRing(radius, friendly = true) {
  const m = new THREE.Mesh(ringGeo, friendly ? ringMatFriend : ringMatFoe);
  m.scale.setScalar(radius);
  m.renderOrder = 2;
  return m;
}

// --- Health bars: two sprites (dark bg + green fg) -------------------------
const barBgMat = new THREE.SpriteMaterial({ color: 0x241010, depthTest: false });

export class HealthBar {
  constructor(parent, width = 1.5, y = 2.4) {
    this.group = new THREE.Group();
    this.width = width;
    this.bg = new THREE.Sprite(barBgMat);
    this.bg.scale.set(width, 0.16, 1);
    this.fg = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x46d435, depthTest: false }));
    this.fg.center.set(0, 0.5);
    this.fg.position.x = -width / 2;
    this.fg.scale.set(width, 0.12, 1);
    this.group.add(this.bg, this.fg);
    this.group.position.y = y;
    this.group.renderOrder = 5;
    this.group.visible = false;
    parent.add(this.group);
  }
  set(frac, visible) {
    this.group.visible = visible;
    if (!visible) return;
    const f = Math.max(0.001, Math.min(1, frac));
    this.fg.scale.x = this.width * f;
    this.fg.material.color.setHex(f > 0.55 ? 0x46d435 : f > 0.25 ? 0xe8c020 : 0xd43520);
  }
  dispose() { this.fg.material.dispose(); }
}

// --- Effects manager --------------------------------------------------------
const arrowGeo = new THREE.BoxGeometry(0.05, 0.05, 0.85);
const stoneGeo = new THREE.IcosahedronGeometry(0.3, 0);
const puffGeo = new THREE.IcosahedronGeometry(0.22, 0);

export class Effects {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.projectiles = [];
    this.particles = [];
    this.fades = [];
    this.smokes = [];
    this.smokeTex = smokeSprite();
  }

  spawnSmoke(x, y, z, dark = false, scale = 1) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.smokeTex,
      color: dark ? 0x2e2a26 : 0xd8d8d8,
      transparent: true,
      opacity: dark ? 0.5 : 0.32,
      depthWrite: false,
    }));
    m.position.set(x + (Math.random() - 0.5) * 0.4, y, z + (Math.random() - 0.5) * 0.4);
    m.scale.setScalar(0.6 * scale);
    this.scene.add(m);
    this.smokes.push({
      m, t: 0, life: 2 + Math.random() * 1.2,
      rise: 1 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.5,
      grow: (1.1 + Math.random() * 0.7) * scale,
      o0: m.material.opacity,
    });
  }

  // Ambient building smoke: cozy chimneys + black smoke from damaged buildings.
  updateBuildingSmoke(dt) {
    for (const b of this.game.buildings) {
      if (b.dead || !b.complete) continue;
      b.smokeT = (b.smokeT ?? Math.random()) - dt;
      if (b.smokeT > 0) continue;
      const hurt = b.hp < b.maxHp * 0.55;
      if (hurt) {
        b.smokeT = b.hp < b.maxHp * 0.3 ? 0.22 : 0.45;
        const half = b.size; // size*TILE/2 = size when TILE=2
        this.spawnSmoke(b.cx + (Math.random() - 0.5) * half, b.groundY + b.size + 0.5,
          b.cz + (Math.random() - 0.5) * half, true, 1.4);
      } else if (b.type === 'house') {
        b.smokeT = 0.8 + Math.random() * 0.5;
        this.spawnSmoke(b.cx - 1.1, b.groundY + 3.2, b.cz, false, 0.8);
      } else if (b.type === 'towncenter') {
        b.smokeT = 1.1 + Math.random() * 0.6;
        this.spawnSmoke(b.cx + b.size - 0.5, b.groundY + 2.2, b.cz + b.size - 0.5, false, 0.9);
      } else {
        b.smokeT = 2;
      }
    }
  }

  // Homing arrow.
  fireArrow(from, target, damage, attacker) {
    const m = new THREE.Mesh(arrowGeo, mat(0x5a4128));
    m.position.copy(from);
    this.scene.add(m);
    this.projectiles.push({ kind: 'arrow', mesh: m, target, damage, attacker, speed: 26 });
  }

  // Ballistic stone aimed at a point; splash damage on land.
  fireStone(from, targetPos, damage, splash, attacker) {
    const m = new THREE.Mesh(stoneGeo, mat(0x6e6a60));
    m.position.copy(from);
    this.scene.add(m);
    const dist = from.distanceTo(targetPos);
    this.projectiles.push({
      kind: 'stone', mesh: m, from: from.clone(), to: targetPos.clone(),
      t: 0, dur: Math.max(0.7, dist / 16), arc: 4 + dist * 0.22, damage, splash, attacker,
    });
  }

  puff(pos, color = 0xcacaca, n = 6, speed = 4) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(puffGeo, new THREE.MeshLambertMaterial({ color, transparent: true, opacity: 0.9 }));
      m.position.copy(pos);
      const v = new THREE.Vector3((Math.random() - 0.5) * speed, Math.random() * speed * 0.8 + 1, (Math.random() - 0.5) * speed);
      this.scene.add(m);
      this.particles.push({ mesh: m, vel: v, life: 0.6 + Math.random() * 0.4, t: 0 });
    }
  }

  blood(pos) { this.puff(pos, 0x8a1f12, 4, 3); }

  // Sink-and-remove animation for dead units / razed buildings.
  fadeOut(object3d, dur = 1.6, sink = 1.2) {
    this.fades.push({ obj: object3d, t: 0, dur, sink, y0: object3d.position.y });
  }

  update(dt) {
    const game = this.game;
    this.updateBuildingSmoke(dt);
    // smoke sprites
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i];
      s.t += dt;
      if (s.t >= s.life) {
        this.scene.remove(s.m);
        s.m.material.dispose();
        this.smokes.splice(i, 1);
        continue;
      }
      const k = s.t / s.life;
      s.m.position.y += s.rise * dt;
      s.m.position.x += s.drift * dt;
      s.m.scale.setScalar(0.6 + s.grow * k);
      s.m.material.opacity = s.o0 * (1 - k * k);
    }
    // projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      if (p.kind === 'arrow') {
        const t = p.target;
        if (!t || t.dead) { this.scene.remove(p.mesh); this.projectiles.splice(i, 1); continue; }
        const aim = t.pos3();
        aim.y += t.isBuilding ? 1.6 : 1.1;
        const d = aim.clone().sub(p.mesh.position);
        const dist = d.length();
        const step = p.speed * dt;
        if (dist <= step + 0.2) {
          game.applyDamage(t, p.damage, p.attacker);
          this.blood(aim);
          this.scene.remove(p.mesh);
          this.projectiles.splice(i, 1);
        } else {
          d.normalize();
          p.mesh.position.addScaledVector(d, step);
          p.mesh.lookAt(aim);
        }
      } else { // stone
        p.t += dt;
        const f = Math.min(1, p.t / p.dur);
        p.mesh.position.lerpVectors(p.from, p.to, f);
        p.mesh.position.y += Math.sin(f * Math.PI) * p.arc;
        p.mesh.rotation.x += dt * 6;
        if (f >= 1) {
          game.splashDamage(p.to, p.splash, p.damage, p.attacker);
          this.puff(p.to, 0x9a8a70, 10, 6);
          this.scene.remove(p.mesh);
          this.projectiles.splice(i, 1);
        }
      }
    }
    // particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.t += dt;
      if (pt.t >= pt.life) {
        this.scene.remove(pt.mesh);
        pt.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }
      pt.vel.y -= 9 * dt;
      pt.mesh.position.addScaledVector(pt.vel, dt);
      pt.mesh.material.opacity = 0.9 * (1 - pt.t / pt.life);
      const s = 1 + pt.t * 1.5;
      pt.mesh.scale.setScalar(s);
    }
    // fades
    for (let i = this.fades.length - 1; i >= 0; i--) {
      const f = this.fades[i];
      f.t += dt;
      const k = f.t / f.dur;
      if (k >= 1) {
        this.scene.remove(f.obj);
        this.fades.splice(i, 1);
        continue;
      }
      f.obj.position.y = f.y0 - f.sink * k;
      f.obj.traverse(o => { if (o.castShadow !== undefined) o.castShadow = false; });
    }
  }
}
