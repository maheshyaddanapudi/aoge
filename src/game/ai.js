// Enemy AI: runs its own economy (villager production, resource balance,
// housing, build order), advances through the ages, trains an army and
// launches attack waves at the player. Defends its base when raided.

import { TILE, PLAYER, ENEMY, BUILDINGS, UNITS, AGES, canAfford } from '../config.js';

const VILL_TARGET_BY_AGE = [9, 13, 17, 20];
const ARMY_CAP_BY_AGE = [7, 12, 18, 26];
const ATTACK_AT_BY_AGE = [8, 10, 13, 17];

export class AI {
  constructor(game, baseGx, baseGy) {
    this.game = game;
    this.me = ENEMY;
    this.baseGx = baseGx;
    this.baseGy = baseGy;
    const [bx, bz] = game.map.gridToWorld(baseGx, baseGy);
    this.baseX = bx;
    this.baseZ = bz;
    this.ecoT = 0;
    this.stratT = 3;
    this.waveT = 150;         // first attack pressure timer
    this.defendT = 0;
    this.attackTargetT = 0;
    this.attacking = false;
    this.trickleT = 0;
  }

  p() { return this.game.players[this.me]; }

  myUnits(type) {
    return this.game.units.filter(u => u.owner === this.me && !u.dead && (!type || u.type === type));
  }
  myBuildings(type) {
    return this.game.buildings.filter(b => b.owner === this.me && !b.dead && (!type || b.type === type));
  }
  army() {
    return this.game.units.filter(u => u.owner === this.me && !u.dead && u.type !== 'villager');
  }

  update(dt) {
    this.ecoT -= dt;
    this.stratT -= dt;
    this.waveT -= dt;
    this.defendT -= dt;
    this.trickleT += dt;

    // Mild resource trickle so the AI stays threatening without micro-perfect eco.
    if (this.trickleT >= 5) {
      this.trickleT -= 5;
      const r = this.p().res;
      r.wood += 3; r.food += 3; r.gold += 2;
    }

    if (this.ecoT <= 0) { this.ecoT = 1.4; this.economy(); }
    if (this.stratT <= 0) { this.stratT = 2.6; this.strategy(); }
    if (this.waveT <= 0) this.tryAttack();
    if (this.attacking) {
      this.attackTargetT -= dt;
      if (this.attackTargetT <= 0) { this.attackTargetT = 6; this.retarget(); }
    }
  }

  // ---- economy ----------------------------------------------------------------

  economy() {
    const p = this.p();
    const vills = this.myUnits('villager');
    const tc = this.myBuildings('towncenter')[0];

    // Train villagers
    if (tc && tc.complete && vills.length + tc.trainQueue.length < VILL_TARGET_BY_AGE[p.age - 1]) {
      if (tc.trainQueue.length < 2) tc.queueTrain('villager');
    }

    // Housing
    if (p.popCap - p.popUsed < 4 && p.popCap < 120) {
      const housePending = this.myBuildings('house').some(h => !h.complete);
      if (!housePending) this.construct('house');
    }

    // Resource assignment for idle villagers
    const idle = vills.filter(v => v.state === 'idle');
    if (idle.length) {
      const need = this.neededResource(vills);
      for (const v of idle) {
        if (need === 'food') {
          // prefer an unworked farm
          const farm = this.freeFarm(vills);
          if (farm) { v.orderGatherFarm(farm); continue; }
          const node = this.game.findNearestNode('food', v.x, v.z, 55);
          if (node) { v.orderGather(node); continue; }
          if (!this.construct('farm', v)) {
            const w = this.game.findNearestNode('wood', v.x, v.z, 60);
            if (w) v.orderGather(w);
          }
        } else {
          const node = this.game.findNearestNode(need, this.baseX, this.baseZ, 70) ||
                       this.game.findNearestNode('wood', v.x, v.z, 70);
          if (node) v.orderGather(node);
        }
      }
    }

    // Keep farms coming in later ages
    const farms = this.myBuildings('farm');
    if (p.age >= 2 && farms.length < 3 + p.age && p.res.wood > 150) {
      this.construct('farm');
    }
  }

  neededResource(vills) {
    // crude balance: count gatherers per resource
    const counts = { wood: 0, food: 0, gold: 0 };
    for (const v of vills) {
      const o = v.order;
      if (!o) continue;
      if (o.kind === 'farm') counts.food++;
      else if (o.kind === 'gather' && o.node) counts[o.node.res]++;
    }
    const p = this.p();
    const want = p.age === 1
      ? { wood: 0.38, food: 0.45, gold: 0.17 }
      : { wood: 0.34, food: 0.38, gold: 0.28 };
    const total = Math.max(1, counts.wood + counts.food + counts.gold);
    let best = 'food', bestGap = -Infinity;
    for (const r of ['wood', 'food', 'gold']) {
      const gap = want[r] - counts[r] / total;
      if (gap > bestGap) { bestGap = gap; best = r; }
    }
    return best;
  }

  freeFarm(vills) {
    const working = new Set();
    for (const v of vills) {
      if (v.order?.kind === 'farm' && v.order.farm) working.add(v.order.farm.id);
    }
    return this.myBuildings('farm').find(f => f.complete && !working.has(f.id)) || null;
  }

  // ---- strategy ------------------------------------------------------------------

  strategy() {
    const p = this.p();
    const vills = this.myUnits('villager');
    const tc = this.myBuildings('towncenter')[0];

    // Rebuild TC if lost
    if (!tc) {
      if (p.res.wood >= BUILDINGS.towncenter.cost.wood) this.construct('towncenter');
      return;
    }

    // Build order by age
    if (vills.length >= 6 && this.myBuildings('barracks').length === 0) this.construct('barracks');
    if (this.myBuildings('storehouse').length === 0 && vills.length >= 7) {
      // place a storehouse near the busiest far resource
      const gold = this.game.findNearestNode('gold', this.baseX, this.baseZ, 70);
      if (gold && Math.hypot(gold.wx - this.baseX, gold.wz - this.baseZ) > 24) {
        this.constructNear('storehouse', gold.wx, gold.wz);
      }
    }
    if (p.age >= 2) {
      if (this.myBuildings('archeryrange').length === 0) this.construct('archeryrange');
      if (this.myBuildings('tower').length < 2 && p.res.wood > 200) this.construct('tower');
    }
    if (p.age >= 3 && this.myBuildings('stable').length === 0) this.construct('stable');
    if (p.age >= 4 && this.myBuildings('siegeworkshop').length === 0) this.construct('siegeworkshop');

    // Age up
    if (!p.ageResearchInProgress && p.age < AGES.length) {
      const next = AGES[p.age];
      const enough = vills.length >= VILL_TARGET_BY_AGE[p.age - 1] - 2;
      if (enough && canAfford(p.res, next.cost) && tc.complete) {
        // keep a buffer so the eco doesn't stall
        const buffer = p.age === 1 ? 60 : 120;
        if (p.res.food >= (next.cost.food || 0) + buffer * 0.5) tc.startAgeResearch();
      }
    }

    // Train army
    const armySize = this.army().length;
    if (armySize < ARMY_CAP_BY_AGE[p.age - 1]) {
      for (const b of this.myBuildings()) {
        if (!b.complete || !b.def.trains || b.type === 'towncenter') continue;
        if (b.trainQueue.length >= 2) continue;
        for (const ut of b.def.trains) {
          if (p.age >= UNITS[ut].age) b.queueTrain(ut);
        }
      }
    }
  }

  // ---- combat ----------------------------------------------------------------------

  tryAttack() {
    const army = this.army();
    const threshold = ATTACK_AT_BY_AGE[this.p().age - 1];
    if (army.length >= threshold) {
      this.attacking = true;
      this.attackTargetT = 0;
      this.waveT = 100 + Math.random() * 40;
      this.retarget();
    } else {
      this.waveT = 25;
    }
  }

  retarget() {
    const target = this.pickPlayerTarget();
    if (!target) { this.attacking = false; return; }
    const idleArmy = this.army().filter(u =>
      u.state === 'idle' || u.state === 'move' ||
      (u.order?.kind === 'attackmove'));
    for (const u of idleArmy) {
      u.orderAttackMove(target.isBuilding ? target.cx : target.x, target.isBuilding ? target.cz : target.z);
    }
    if (this.army().length < 3) this.attacking = false;
  }

  pickPlayerTarget() {
    const pb = this.game.buildings.filter(b => b.owner === PLAYER && !b.dead);
    if (!pb.length) return null;
    // prefer military production, then TC, then anything
    const prio = pb.find(b => b.def.trains && b.type !== 'towncenter') ||
                 pb.find(b => b.type === 'towncenter') || pb[0];
    return prio;
  }

  onDamage(target, attacker) {
    if (target.owner !== this.me || !attacker || attacker.dead || attacker.owner === this.me) return;
    if (this.defendT > 0) return;
    // If our base/economy is hit, rally nearby army to defend.
    const nearBase = Math.hypot(
      (target.isBuilding ? target.cx : target.x) - this.baseX,
      (target.isBuilding ? target.cz : target.z) - this.baseZ) < 55;
    if (!nearBase) return;
    this.defendT = 10;
    const ax = attacker.isBuilding ? attacker.cx : attacker.x;
    const az = attacker.isBuilding ? attacker.cz : attacker.z;
    for (const u of this.army()) {
      const busyFighting = u.state === 'fighting' || u.state === 'toAttack';
      if (!busyFighting) u.orderAttackMove(ax, az);
    }
  }

  onBuildingLost() { /* strategy() handles rebuilding */ }

  // ---- construction helpers -----------------------------------------------------------

  construct(type, builder = null) {
    return this.constructNear(type, this.baseX, this.baseZ, builder);
  }

  constructNear(type, wx, wz, builder = null) {
    const game = this.game;
    const def = BUILDINGS[type];
    const p = this.p();
    if (p.age < def.age || !canAfford(p.res, def.cost)) return false;
    // already one under construction of this type? avoid duplicates except house/farm/tower
    if (!['house', 'farm', 'tower'].includes(type)) {
      if (this.myBuildings(type).some(b => !b.complete)) return false;
    }
    const spot = this.findSpot(wx, wz, def.size);
    if (!spot) return false;
    const b = game.placeBuilding(this.me, type, spot[0], spot[1]);
    if (!b) return false;
    const v = builder || this.nearestFreeVillager(b.cx, b.cz);
    if (v) v.orderBuild(b);
    else { /* a villager will pick it up when idle via economy()? ensure: */ }
    // make sure *someone* builds it
    if (!v) {
      const any = this.myUnits('villager')[0];
      if (any) any.orderBuild(b);
    }
    return true;
  }

  nearestFreeVillager(x, z) {
    let best = null, bestD = Infinity;
    for (const v of this.myUnits('villager')) {
      if (v.state === 'building' || v.state === 'toBuild') continue;
      const d = Math.hypot(v.x - x, v.z - z);
      if (d < bestD) { bestD = d; best = v; }
    }
    return best;
  }

  // Spiral search for a buildable spot near (wx,wz), keeping a 1-tile margin.
  findSpot(wx, wz, size) {
    const map = this.game.map;
    const [cgx, cgy] = map.worldToGrid(wx, wz);
    for (let r = 3; r < 26; r += 1) {
      // sample points on the ring
      for (let a = 0; a < 16; a++) {
        const ang = (a / 16) * Math.PI * 2 + r * 0.37;
        const gx = Math.round(cgx + Math.cos(ang) * r) - Math.floor(size / 2);
        const gy = Math.round(cgy + Math.sin(ang) * r) - Math.floor(size / 2);
        if (map.canPlace(gx - 1, gy - 1, size + 2)) return [gx, gy];
      }
    }
    return null;
  }
}
