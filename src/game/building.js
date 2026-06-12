// Building entity: construction progress, training queues, tower/TC defense.

import * as THREE from 'three';
import { TILE, BUILDINGS, UNITS, AGES, canAfford, payCost, refundCost } from '../config.js';
import { BUILDING_FACTORY, makeScaffold } from '../render/models.js';
import { makeSelectionRing, HealthBar } from '../render/effects.js';

let NEXT_ID = 100000;

export class Building {
  constructor(game, type, owner, gx, gy, prebuilt = false) {
    this.id = NEXT_ID++;
    this.game = game;
    this.type = type;
    this.def = BUILDINGS[type];
    this.owner = owner;
    this.isBuilding = true;
    this.gx = gx;
    this.gy = gy;
    this.size = this.def.size;
    this.cx = (gx + this.size / 2) * TILE;
    this.cz = (gy + this.size / 2) * TILE;
    this.dead = false;

    this.maxHp = this.def.hp;
    this.complete = prebuilt;
    this.progress = prebuilt ? 1 : 0;
    this.hp = prebuilt ? this.maxHp : Math.max(1, Math.round(this.maxHp * 0.08));

    this.trainQueue = [];   // unit type strings
    this.trainT = 0;
    this.researching = null; // {age, t, dur}
    this.rally = null;       // {x,z} | {node} | {farm}
    this.atkCd = 0;
    this.scanT = Math.random() * 0.4;
    this.atkTarget = null;

    game.map.occupy(gx, gy, this.size, this);

    // average ground height over footprint for a stable base
    let hSum = 0;
    for (let y = gy; y < gy + this.size; y++)
      for (let x = gx; x < gx + this.size; x++) hSum += game.map.tileHeight(x, y);
    this.groundY = hSum / (this.size * this.size) - 0.06;

    const group = new THREE.Group();
    group.position.set(this.cx, this.groundY, this.cz);
    group.userData.entity = this;
    this.modelGroup = BUILDING_FACTORY[type](game.teamColor(owner));
    group.add(this.modelGroup);
    this.group = group;
    game.scene.add(group);

    if (!prebuilt) {
      this.scaffold = makeScaffold(this.size);
      group.add(this.scaffold);
      this.modelGroup.scale.y = 0.1;
    }

    const ringR = this.size * TILE * 0.62;
    this.selRing = makeSelectionRing(ringR, owner === 0);
    this.selRing.visible = false;
    this.selRing.position.y = 0.12;
    group.add(this.selRing);
    const barH = type === 'towncenter' ? 8.2 : type === 'tower' ? 7 : 4.2;
    this.healthBar = new HealthBar(group, Math.min(4.5, this.size * 1.5), barH);
    this.selected = false;
  }

  pos3() {
    return new THREE.Vector3(this.cx, this.groundY, this.cz);
  }

  setSelected(sel) {
    this.selected = sel;
    this.selRing.visible = sel;
  }

  // Villagers call this every frame they're actively constructing.
  constructionTick(dt) {
    if (this.complete || this.dead) return;
    const rate = dt / this.def.buildTime;
    this.progress = Math.min(1, this.progress + rate);
    this.hp = Math.min(this.maxHp, this.hp + rate * this.maxHp * 0.92);
    this.modelGroup.scale.y = 0.1 + this.progress * 0.9;
    if (this.progress >= 1) this.finishConstruction();
  }

  finishConstruction() {
    this.complete = true;
    this.hp = Math.max(this.hp, this.maxHp * 0.95);
    this.modelGroup.scale.y = 1;
    if (this.scaffold) {
      this.group.remove(this.scaffold);
      this.scaffold = null;
    }
    this.game.onBuildingComplete(this);
  }

  // ---- production -------------------------------------------------------------

  canTrain(unitType) {
    const u = UNITS[unitType];
    const p = this.game.players[this.owner];
    return this.complete && u && p.age >= u.age;
  }

  queueTrain(unitType) {
    const u = UNITS[unitType];
    const p = this.game.players[this.owner];
    if (!this.canTrain(unitType) || this.trainQueue.length >= 5) return false;
    if (!canAfford(p.res, u.cost)) return false;
    payCost(p.res, u.cost);
    this.trainQueue.push(unitType);
    if (this.trainQueue.length === 1) this.trainT = 0;
    return true;
  }

  cancelTrain(idx) {
    const t = this.trainQueue[idx];
    if (!t) return;
    refundCost(this.game.players[this.owner].res, UNITS[t].cost);
    this.trainQueue.splice(idx, 1);
    if (idx === 0) this.trainT = 0;
  }

  startAgeResearch() {
    const p = this.game.players[this.owner];
    if (this.researching || p.ageResearchInProgress) return false;
    if (p.age >= AGES.length) return false;
    const next = AGES[p.age]; // p.age is 1-based; AGES[p.age] is the next one
    if (!canAfford(p.res, next.cost)) return false;
    payCost(p.res, next.cost);
    this.researching = { age: p.age + 1, t: 0, dur: next.time };
    p.ageResearchInProgress = true;
    return true;
  }

  update(dt) {
    if (this.dead) return;

    // training
    if (this.complete && this.trainQueue.length > 0) {
      const unitType = this.trainQueue[0];
      const def = UNITS[unitType];
      const p = this.game.players[this.owner];
      this.trainT += dt;
      if (this.trainT >= def.trainTime) {
        if (p.popUsed < p.popCap) {
          this.trainQueue.shift();
          this.trainT = 0;
          this.game.spawnFromBuilding(this, unitType);
        } else {
          this.trainT = def.trainTime; // hold until housing frees up
        }
      }
    }

    // age research
    if (this.researching) {
      this.researching.t += dt;
      if (this.researching.t >= this.researching.dur) {
        this.game.advanceAge(this.owner, this.researching.age);
        this.researching = null;
      }
    }

    // tower / town center defense
    const atk = this.def.attack;
    if (atk && this.complete) {
      this.atkCd -= dt;
      this.scanT -= dt;
      if ((!this.atkTarget || this.atkTarget.dead || this.targetOutOfRange()) && this.scanT <= 0) {
        this.scanT = 0.5;
        this.atkTarget = this.game.nearestEnemy(this.owner, this.cx, this.cz, atk.range, true);
      }
      if (this.atkTarget && !this.atkTarget.dead && this.atkCd <= 0 && !this.targetOutOfRange()) {
        this.atkCd = atk.atkSpeed;
        const from = this.pos3();
        from.y += this.type === 'tower' ? 5.4 : 6.5;
        this.game.effects.fireArrow(from, this.atkTarget, atk.atk, this);
        this.game.sound('arrow');
      }
    }

    this.healthBar.set(this.hp / this.maxHp, this.selected || this.hp < this.maxHp - 0.5);
  }

  targetOutOfRange() {
    const t = this.atkTarget;
    if (!t) return true;
    const tx = t.isBuilding ? t.cx : t.x, tz = t.isBuilding ? t.cz : t.z;
    return Math.hypot(tx - this.cx, tz - this.cz) > this.def.attack.range + 1;
  }

  // Where trained units appear: free tile next to the footprint, biased toward rally.
  spawnPoint() {
    const map = this.game.map;
    const rx = this.rally?.x ?? this.cx;
    const rz = this.rally?.z ?? this.cz + (this.size + 1) * TILE;
    let best = null, bestD = Infinity;
    for (let r = 0; r < 4; r++) {
      for (let y = this.gy - 1 - r; y <= this.gy + this.size + r; y++) {
        for (let x = this.gx - 1 - r; x <= this.gx + this.size + r; x++) {
          const onRim = x < this.gx - r || x >= this.gx + this.size + r || y < this.gy - r || y >= this.gy + this.size + r;
          if (!onRim || !map.isWalkable(x, y)) continue;
          const [wx, wz] = map.gridToWorld(x, y);
          const d = Math.hypot(wx - rx, wz - rz);
          if (d < bestD) { bestD = d; best = [wx, wz]; }
        }
      }
      if (best) return best;
    }
    return [this.cx, this.cz];
  }
}
