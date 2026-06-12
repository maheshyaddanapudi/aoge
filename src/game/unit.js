// Unit entity: movement along A* paths with local separation, plus the
// villager/military state machine (gather, deposit, build, attack, aggro).

import * as THREE from 'three';
import { TILE, UNITS, CARRY_CAPACITY, AGE_HP_MULT, AGE_ATK_MULT } from '../config.js';
import { findPath } from '../world/pathfinding.js';
import { UNIT_FACTORY } from '../render/models.js';
import { packUnit } from '../render/unitPack.js';
import { makeSelectionRing, HealthBar } from '../render/effects.js';

let NEXT_ID = 1;

export class Unit {
  constructor(game, type, owner, x, z) {
    this.id = NEXT_ID++;
    this.game = game;
    this.type = type;
    this.def = UNITS[type];
    this.owner = owner;
    this.isUnit = true;
    this.x = x;
    this.z = z;
    this.facing = Math.random() * Math.PI * 2;
    this.radius = type === 'knight' ? 0.8 : type === 'catapult' ? 0.95 : 0.5;

    const ageMult = AGE_HP_MULT[game.players[owner].age - 1];
    this.maxHp = Math.round(this.def.hp * ageMult);
    this.hp = this.maxHp;
    this.dead = false;

    // order: what the player/AI asked for; state: current activity
    this.order = null;          // {kind, node, target, building, x, z}
    this.state = 'idle';
    this.path = null;           // [[wx,wz], ...]
    this.wpIdx = 0;
    this.pathGoal = null;       // grid goal of current path
    this.repathT = 0;
    this.carry = null;          // {res, amt}
    this.actionT = 0;           // generic action timer (gather tick / attack cd)
    this.scanT = Math.random() * 0.5;
    this.animT = Math.random() * 10;
    this.moving = false;

    const group = new THREE.Group();
    group.position.set(x, game.map.heightAt(x, z), z);
    group.userData.entity = this;
    this.group = group;
    this.mixer = null;
    this.actions = null;
    this.actionName = null;
    this.limbs = {};
    this.adoptModel();
    game.scene.add(group);

    this.selRing = makeSelectionRing(this.radius + 0.55, owner === 0);
    this.selRing.visible = false;
    group.add(this.selRing);
    const barY = type === 'knight' ? 2.9 : type === 'catapult' ? 2.4 : 2.3;
    this.healthBar = new HealthBar(group, 1.4, barY);
    this.selected = false;

    // carried resource indicator
    this.carryMesh = null;
  }

  pos3() {
    return new THREE.Vector3(this.x, this.group.position.y, this.z);
  }

  // Use an animated pack character when available, procedural model otherwise.
  // Called again from main once the pack finishes loading (late adoption).
  adoptModel() {
    const pack = packUnit(this.type, this.game.teamColor(this.owner));
    if (pack && this.procModel) {
      this.group.remove(this.procModel);
      this.procModel = null;
    } else if (this.procModel || (this.mixer && !pack)) {
      return; // already adopted
    }
    if (pack) {
      this.group.add(pack.model);
      this.mixer = pack.mixer;
      this.actions = pack.actions;
      this.actionName = null;
      this.limbs = {};
    } else if (!this.procModel) {
      this.procModel = UNIT_FACTORY[this.type](this.game.teamColor(this.owner));
      this.group.add(this.procModel);
      this.limbs = this.procModel.userData.limbs || {};
    }
  }

  playAction(name, fade = 0.16) {
    if (this.actionName === name || !this.actions?.[name]) return;
    const prev = this.actions[this.actionName];
    if (prev) prev.fadeOut(fade);
    this.actions[name].reset().fadeIn(fade).play();
    this.actionName = name;
  }

  setSelected(sel) {
    this.selected = sel;
    this.selRing.visible = sel;
  }

  // ---- orders ---------------------------------------------------------------

  clearOrder() {
    this.order = null;
    this.state = 'idle';
    this.path = null;
  }

  orderMove(x, z) {
    this.order = { kind: 'move', x, z };
    this.state = 'move';
    this.requestPath(x, z);
  }

  orderGather(node) {
    if (this.type !== 'villager' || !node || node.amount <= 0) return;
    this.order = { kind: 'gather', node };
    this.state = 'toResource';
    this.requestPath(node.wx, node.wz);
  }

  orderGatherFarm(farm) {
    if (this.type !== 'villager' || !farm || !farm.complete) return;
    this.order = { kind: 'farm', farm };
    this.state = 'toResource';
    this.requestPath(farm.cx, farm.cz);
  }

  orderBuild(building) {
    if (this.type !== 'villager' || !building || building.complete) return;
    this.order = { kind: 'build', building };
    this.state = 'toBuild';
    this.requestPath(building.cx, building.cz);
  }

  orderAttack(target) {
    if (!target || target.dead) return;
    this.order = { kind: 'attack', target };
    this.state = 'toAttack';
    const p = target.isBuilding ? { x: target.cx, z: target.cz } : { x: target.x, z: target.z };
    this.requestPath(p.x, p.z);
  }

  // Attack-move: walk to point, engaging anything en route.
  orderAttackMove(x, z) {
    this.order = { kind: 'attackmove', x, z };
    this.state = 'move';
    this.requestPath(x, z);
  }

  // ---- pathing ---------------------------------------------------------------

  requestPath(wx, wz) {
    const map = this.game.map;
    const [sx, sy] = map.worldToGrid(this.x, this.z);
    const [tx, ty] = map.worldToGrid(wx, wz);
    const tiles = findPath(map, sx, sy, tx, ty);
    this.pathGoal = [tx, ty];
    this.repathT = 0.8 + Math.random() * 0.4;
    if (!tiles || tiles.length === 0) {
      this.path = null;
      // already adjacent / at goal — fine, handlers use range checks
      return;
    }
    this.path = tiles.map(([gx, gy]) => map.gridToWorld(gx, gy));
    // Final exact point if walkable tile matches request
    if (map.isWalkable(tx, ty)) {
      const last = this.path[this.path.length - 1];
      last[0] = wx; last[1] = wz;
    }
    this.wpIdx = 0;
  }

  distTo(ent) {
    if (ent.isBuilding) {
      // distance to footprint rectangle
      const half = (ent.def.size * TILE) / 2;
      const dx = Math.max(Math.abs(this.x - ent.cx) - half, 0);
      const dz = Math.max(Math.abs(this.z - ent.cz) - half, 0);
      return Math.hypot(dx, dz);
    }
    return Math.hypot(this.x - ent.x, this.z - ent.z) - (ent.radius || 0);
  }

  distToNode(node) {
    const dx = Math.max(Math.abs(this.x - node.wx) - TILE * 0.5, 0);
    const dz = Math.max(Math.abs(this.z - node.wz) - TILE * 0.5, 0);
    return Math.hypot(dx, dz);
  }

  // ---- per-frame update -------------------------------------------------------

  update(dt) {
    if (this.dead) return;
    this.animT += dt;
    this.actionT -= dt;
    this.moving = false;

    switch (this.state) {
      case 'idle': this.updateIdle(dt); break;
      case 'move': this.updateMove(dt); break;
      case 'toResource': this.updateToResource(dt); break;
      case 'gathering': this.updateGathering(dt); break;
      case 'deposit': this.updateDeposit(dt); break;
      case 'toBuild': this.updateToBuild(dt); break;
      case 'building': this.updateBuilding(dt); break;
      case 'toAttack': this.updateToAttack(dt); break;
      case 'fighting': this.updateFighting(dt); break;
    }

    this.animate(dt);
  }

  updateIdle(dt) {
    // Military units (and towers handled elsewhere) auto-acquire.
    if (this.def.aggro > 0) {
      this.scanT -= dt;
      if (this.scanT <= 0) {
        this.scanT = 0.45;
        const foe = this.game.nearestEnemy(this.owner, this.x, this.z, this.def.aggro, true);
        if (foe) this.engage(foe, true);
      }
    }
  }

  engage(target, keepOrder = false) {
    const prevOrder = keepOrder ? this.order : null;
    this.order = { kind: 'attack', target, resume: prevOrder };
    this.state = 'toAttack';
    this.requestPath(target.isBuilding ? target.cx : target.x, target.isBuilding ? target.cz : target.z);
  }

  resumeOrAcquire() {
    const resume = this.order?.resume;
    if (resume) {
      this.order = resume;
      if (resume.kind === 'move' || resume.kind === 'attackmove') {
        this.state = 'move';
        this.requestPath(resume.x, resume.z);
        return;
      }
    }
    // chain to nearby enemy if any
    if (this.def.aggro > 0) {
      const foe = this.game.nearestEnemy(this.owner, this.x, this.z, this.def.aggro + 2, true);
      if (foe) { this.engage(foe); return; }
    }
    this.clearOrder();
  }

  updateMove(dt) {
    // attack-move scanning
    if (this.order?.kind === 'attackmove' && this.def.aggro > 0) {
      this.scanT -= dt;
      if (this.scanT <= 0) {
        this.scanT = 0.4;
        const foe = this.game.nearestEnemy(this.owner, this.x, this.z, this.def.aggro, true);
        if (foe) { this.engage(foe, true); return; }
      }
    }
    if (this.followPath(dt)) {
      const o = this.order;
      this.clearOrder();
      if (o?.kind === 'attackmove') this.scanT = 0;
    }
  }

  updateToResource(dt) {
    const o = this.order;
    if (!o) { this.state = 'idle'; return; }
    if (o.kind === 'gather') {
      const node = o.node;
      if (!node || node.amount <= 0) { this.findNextNode(node); return; }
      if (this.distToNode(node) < 1.5) {
        this.state = 'gathering';
        this.actionT = 0;
        this.faceTowards(node.wx, node.wz);
        return;
      }
    } else { // farm
      const farm = o.farm;
      if (!farm || farm.dead || !farm.complete) { this.clearOrder(); return; }
      if (this.distTo(farm) < 1.6) {
        this.state = 'gathering';
        this.actionT = 0;
        this.faceTowards(farm.cx, farm.cz);
        return;
      }
    }
    if (this.followPath(dt)) {
      // arrived but still not in range — path again once, else give up
      const tx = o.kind === 'gather' ? o.node.wx : o.farm.cx;
      const tz = o.kind === 'gather' ? o.node.wz : o.farm.cz;
      if (this.repathT <= 0) this.clearOrder();
      else this.requestPath(tx, tz);
    }
    this.repathT -= dt;
  }

  updateGathering(dt) {
    const o = this.order;
    if (!o) { this.state = 'idle'; return; }
    const isFarm = o.kind === 'farm';
    const node = isFarm ? o.farm : o.node;
    if (!node || node.dead || (!isFarm && node.amount <= 0)) {
      if (!isFarm) this.findNextNode(node);
      else this.clearOrder();
      return;
    }
    const res = isFarm ? 'food' : node.res;
    if (this.carry && (this.carry.res !== res || this.carry.amt >= CARRY_CAPACITY)) {
      this.goDeposit();
      return;
    }
    if (this.actionT <= 0) {
      this.actionT = 1 / (isFarm ? node.def.farmRate : this.def.gatherRate);
      if (!this.carry) this.carry = { res, amt: 0 };
      const take = isFarm ? 1 : Math.min(1, node.amount);
      this.carry.amt += take;
      if (!isFarm) {
        node.amount -= take;
        if (node.amount <= 0) this.game.depleteNode(node);
        if (node.res === 'wood' && Math.random() < 0.3) this.game.sound('chop');
      }
      this.updateCarryMesh();
      if (this.carry.amt >= CARRY_CAPACITY) this.goDeposit();
    }
  }

  goDeposit() {
    const drop = this.game.findDropoff(this.owner, this.x, this.z);
    if (!drop) { this.clearOrder(); return; }
    this.order.drop = drop;
    this.state = 'deposit';
    this.requestPath(drop.cx, drop.cz);
  }

  updateDeposit(dt) {
    const o = this.order;
    if (!o) { this.state = 'idle'; return; }
    let drop = o.drop;
    if (!drop || drop.dead) {
      drop = this.game.findDropoff(this.owner, this.x, this.z);
      if (!drop) { this.clearOrder(); return; }
      o.drop = drop;
      this.requestPath(drop.cx, drop.cz);
    }
    if (this.distTo(drop) < 1.7) {
      if (this.carry) {
        this.game.players[this.owner].res[this.carry.res] += Math.round(this.carry.amt);
        this.carry = null;
        this.updateCarryMesh();
      }
      // return to the resource
      if (o.kind === 'gather' && o.node && o.node.amount > 0) {
        this.state = 'toResource';
        this.requestPath(o.node.wx, o.node.wz);
      } else if (o.kind === 'farm' && o.farm && !o.farm.dead) {
        this.state = 'toResource';
        this.requestPath(o.farm.cx, o.farm.cz);
      } else if (o.kind === 'gather') {
        this.findNextNode(o.node);
      } else {
        this.clearOrder();
      }
      return;
    }
    if (this.followPath(dt)) {
      if (this.distTo(drop) >= 1.7) this.requestPath(drop.cx, drop.cz);
    }
  }

  // When a node runs dry, hop to a nearby node of the same resource.
  findNextNode(oldNode) {
    if (!oldNode) { this.clearOrder(); return; }
    const next = this.game.findNearestNode(oldNode.res, oldNode.wx, oldNode.wz, 18);
    if (next) {
      if (this.carry && this.carry.amt > 0 && this.carry.res === oldNode.res) {
        this.order = { kind: 'gather', node: next };
        this.goDeposit();
      } else {
        this.orderGather(next);
      }
    } else if (this.carry && this.carry.amt > 0) {
      this.order = { kind: 'gather', node: null };
      this.goDeposit();
    } else {
      this.clearOrder();
    }
  }

  updateToBuild(dt) {
    const b = this.order?.building;
    if (!b || b.dead || b.complete) {
      if (b && b.complete && b.def.isFarm) { this.orderGatherFarm(b); return; }
      this.clearOrder();
      return;
    }
    if (this.distTo(b) < 1.6) {
      this.state = 'building';
      this.faceTowards(b.cx, b.cz);
      return;
    }
    if (this.followPath(dt)) {
      if (this.repathT <= 0) this.clearOrder();
      else this.requestPath(b.cx, b.cz);
    }
    this.repathT -= dt;
  }

  updateBuilding(dt) {
    const b = this.order?.building;
    if (!b || b.dead) { this.clearOrder(); return; }
    if (b.complete) {
      if (b.def.isFarm) { this.orderGatherFarm(b); return; }
      this.clearOrder();
      return;
    }
    if (this.distTo(b) > 2.4) { this.state = 'toBuild'; this.requestPath(b.cx, b.cz); return; }
    b.constructionTick(dt);
    if (this.actionT <= 0) {
      this.actionT = 0.5;
      if (Math.random() < 0.5) this.game.sound('hammer');
    }
  }

  attackRange(t) {
    // melee needs reach onto building footprints (adjacent tile is 1.0-1.4 away)
    if (t.isBuilding) return Math.max(this.def.range, 1.6);
    return Math.max(this.def.range, this.radius + 0.2);
  }

  updateToAttack(dt) {
    const t = this.order?.target;
    if (!t || t.dead) { this.resumeOrAcquire(); return; }
    const range = this.attackRange(t);
    if (this.distTo(t) <= range) {
      this.state = 'fighting';
      return;
    }
    this.repathT -= dt;
    if (this.repathT <= 0 && !t.isBuilding) {
      this.requestPath(t.x, t.z);
    }
    if (this.followPath(dt)) {
      if (this.distTo(t) > range) this.requestPath(t.isBuilding ? t.cx : t.x, t.isBuilding ? t.cz : t.z);
    }
  }

  updateFighting(dt) {
    const t = this.order?.target;
    if (!t || t.dead) { this.resumeOrAcquire(); return; }
    const range = this.attackRange(t);
    const d = this.distTo(t);
    if (d > range + 0.6) { this.state = 'toAttack'; this.requestPath(t.isBuilding ? t.cx : t.x, t.isBuilding ? t.cz : t.z); return; }
    if (this.def.minRange && d < this.def.minRange) {
      // catapult: back away
      const away = Math.atan2(this.z - (t.isBuilding ? t.cz : t.z), this.x - (t.isBuilding ? t.cx : t.x));
      this.requestPath(this.x + Math.cos(away) * 5, this.z + Math.sin(away) * 5);
      this.state = 'toAttack';
      return;
    }
    this.faceTowards(t.isBuilding ? t.cx : t.x, t.isBuilding ? t.cz : t.z);
    if (this.actionT <= 0) {
      this.actionT = this.def.atkSpeed;
      this.strike(t);
    }
  }

  strike(t) {
    const game = this.game;
    const atk = Math.round(this.def.atk * AGE_ATK_MULT[game.players[this.owner].age - 1]);
    this.attackAnimT = 0.35;
    if (this.def.projectile === 'arrow') {
      const from = this.pos3(); from.y += 1.5;
      game.effects.fireArrow(from, t, atk, this);
      game.sound('arrow');
    } else if (this.def.projectile === 'stone') {
      const from = this.pos3(); from.y += 1.6;
      const aim = t.isBuilding ? new THREE.Vector3(t.cx, t.groundY, t.cz) : t.pos3();
      let dmg = atk;
      if (t.isBuilding && this.def.bonusVsBuilding) dmg = Math.round(atk * this.def.bonusVsBuilding);
      game.effects.fireStone(from, aim, dmg, this.def.splash || 0, this);
      game.sound('catapult');
      if (this.limbs.throwArm) this.throwAnimT = 0.5;
    } else {
      let dmg = atk;
      if (t.isBuilding) dmg = Math.max(1, Math.round(atk * (this.type === 'villager' ? 0.6 : 0.8)));
      game.applyDamage(t, dmg, this);
      game.effects.blood(t.isBuilding ? new THREE.Vector3(t.cx, t.groundY + 1.2, t.cz) : t.pos3().setY(this.group.position.y + 1.1));
      game.sound('melee');
    }
  }

  // ---- locomotion -------------------------------------------------------------

  // Returns true when the path is finished (or there is none).
  followPath(dt) {
    if (!this.path || this.wpIdx >= this.path.length) {
      this.applySeparation(dt, false);
      return true;
    }
    const [wx, wz] = this.path[this.wpIdx];
    const dx = wx - this.x, dz = wz - this.z;
    const dist = Math.hypot(dx, dz);
    const step = this.def.speed * dt;
    if (dist <= Math.max(step, 0.25)) {
      this.wpIdx++;
      if (this.wpIdx >= this.path.length) { this.path = null; return true; }
      return false;
    }
    const nx = dx / dist, nz = dz / dist;
    this.tryStep(nx * step, nz * step);
    this.facing = lerpAngle(this.facing, Math.atan2(nx, nz), Math.min(1, dt * 10));
    this.moving = true;
    this.applySeparation(dt, true);
    return false;
  }

  tryStep(dx, dz) {
    const map = this.game.map;
    let nx = this.x + dx, nz = this.z + dz;
    const [gx, gy] = map.worldToGrid(nx, nz);
    if (map.isWalkable(gx, gy)) {
      this.x = nx; this.z = nz;
      return true;
    }
    // slide along axes
    const [gx2, gy2] = map.worldToGrid(this.x + dx, this.z);
    if (map.isWalkable(gx2, gy2)) { this.x += dx; return true; }
    const [gx3, gy3] = map.worldToGrid(this.x, this.z + dz);
    if (map.isWalkable(gx3, gy3)) { this.z += dz; return true; }
    return false;
  }

  applySeparation(dt, moving) {
    const near = this.game.unitsNear(this.x, this.z, 1.8 + this.radius);
    let px = 0, pz = 0;
    for (const u of near) {
      if (u === this || u.dead) continue;
      const dx = this.x - u.x, dz = this.z - u.z;
      const d = Math.hypot(dx, dz);
      const minD = this.radius + u.radius + (moving ? 0.05 : 0.18);
      if (d < minD && d > 0.001) {
        const f = (minD - d) / minD;
        px += (dx / d) * f;
        pz += (dz / d) * f;
      } else if (d <= 0.001) {
        const a = Math.random() * Math.PI * 2;
        px += Math.cos(a); pz += Math.sin(a);
      }
    }
    if (px || pz) {
      const k = (moving ? 2.4 : 4.5) * dt;
      this.tryStep(px * k, pz * k);
    }
  }

  faceTowards(x, z) {
    this.facing = Math.atan2(x - this.x, z - this.z);
  }

  // ---- visuals ----------------------------------------------------------------

  updateCarryMesh() {
    const has = this.carry && this.carry.amt > 0;
    if (has && !this.carryMesh) {
      const colors = { wood: 0x8a623a, food: 0xc23b3b, gold: 0xe8b923 };
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.18, 0),
        new THREE.MeshLambertMaterial({ color: colors[this.carry.res] })
      );
      m.position.set(0, 1.65, -0.34);
      this.group.add(m);
      this.carryMesh = m;
    } else if (!has && this.carryMesh) {
      this.group.remove(this.carryMesh);
      this.carryMesh.material.dispose();
      this.carryMesh = null;
    } else if (has && this.carryMesh) {
      const colors = { wood: 0x8a623a, food: 0xc23b3b, gold: 0xe8b923 };
      this.carryMesh.material.color.setHex(colors[this.carry.res]);
    }
  }

  animate(dt) {
    const g = this.group;
    g.position.x = this.x;
    g.position.z = this.z;
    g.position.y = this.game.map.heightAt(this.x, this.z);
    g.rotation.y = this.facing;

    if (this.attackAnimT > 0) this.attackAnimT -= dt;
    if (this.throwAnimT > 0) this.throwAnimT -= dt;

    if (this.mixer) {
      // skeletal pack character: pick a clip from the state machine
      let want = 'idle';
      if (this.moving) want = 'walk';
      else if (this.state === 'gathering' || this.state === 'building') want = 'work';
      else if (this.state === 'fighting') want = this.def.projectile ? 'shoot' : 'work';
      this.playAction(want);
      this.mixer.update(dt);
      this.healthBar.set(this.hp / this.maxHp, this.selected || this.hp < this.maxHp);
      return;
    }

    const ud = this.procModel?.userData || {};
    const L = this.limbs;
    const t = this.animT;

    if (ud.isMounted) {
      // horse gallop
      const sp = this.moving ? 13 : 0;
      for (let i = 0; i < 4; i++) {
        const leg = L['hLeg' + i];
        if (leg) leg.rotation.x = this.moving ? Math.sin(t * sp + i * 1.7) * 0.6 : 0;
      }
      if (L.rArm) L.rArm.rotation.x = this.attackAnimT > 0 ? -0.7 : 0;
      g.position.y += this.moving ? Math.abs(Math.sin(t * sp * 0.5)) * 0.12 : 0;
    } else if (ud.isMachine) {
      if (L.throwArm) {
        const target = this.throwAnimT > 0 ? -2.0 : -0.5;
        L.throwArm.rotation.x += (target - L.throwArm.rotation.x) * Math.min(1, dt * (this.throwAnimT > 0 ? 18 : 3));
      }
    } else {
      const working = this.state === 'gathering' || this.state === 'building';
      if (this.moving) {
        const sp = 11;
        const sw = Math.sin(t * sp) * 0.65;
        if (L.lLeg) L.lLeg.rotation.x = sw;
        if (L.rLeg) L.rLeg.rotation.x = -sw;
        if (L.lArm) L.lArm.rotation.x = -sw * 0.7;
        if (L.rArm) L.rArm.rotation.x = sw * 0.7;
      } else if (working) {
        const chop = Math.sin(t * 6.5);
        if (L.rArm) L.rArm.rotation.x = -1.2 + chop * 0.7;
        if (L.lArm) L.lArm.rotation.x = -0.2 + chop * 0.18;
        if (L.lLeg) L.lLeg.rotation.x = 0;
        if (L.rLeg) L.rLeg.rotation.x = 0;
      } else if (this.attackAnimT > 0) {
        if (L.rArm) L.rArm.rotation.x = -1.9 + (0.35 - this.attackAnimT) * 5;
        if (L.lArm) L.lArm.rotation.x = 0.3;
      } else {
        const idle = Math.sin(t * 1.6) * 0.04;
        for (const k of ['lLeg', 'rLeg', 'lArm', 'rArm']) {
          if (L[k]) L[k].rotation.x *= 0.85;
        }
        if (L.lArm) L.lArm.rotation.x += idle;
      }
    }

    this.healthBar.set(this.hp / this.maxHp, this.selected || this.hp < this.maxHp);
  }
}

function lerpAngle(a, b, t) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
