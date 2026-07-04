// Enemy AI: runs its own economy (villager production, resource balance,
// housing, build order), advances through the ages, trains an army and
// launches attack waves at the player. Defends its base when raided.

import { TILE, PLAYER, ENEMY, BUILDINGS, UNITS, AGES, TECHS, canAfford } from '../config.js';

const VILL_TARGET_BY_AGE = [9, 13, 17, 20];
const ARMY_CAP_BY_AGE = [8, 13, 19, 27];
const ATTACK_AT_BY_AGE = [6, 9, 12, 16]; // always below the cap so waves actually launch

// Difficulty profiles scale the AI's economy, army and aggression.
// easy: passive (defends only), slow eco; normal: the tuned default;
// hard: richer eco and earlier, larger attack waves.
const DIFFICULTY = {
  easy:   { trickle: [0, 0, 0, 0], villMul: 0.6,  armyMul: 0.3, atkMul: 3,   firstWave: 1e9, waveMul: 3,   ecoScale: 1.8, maxAge: 1 },
  normal: { trickle: [3, 3, 2, 1], villMul: 1,    armyMul: 1,   atkMul: 1,   firstWave: 150, waveMul: 1,   ecoScale: 1,   maxAge: 4 },
  hard:   { trickle: [6, 6, 4, 2], villMul: 1.15, armyMul: 1.3, atkMul: 0.7, firstWave: 85,  waveMul: 0.7, ecoScale: 0.8, maxAge: 4 },
};

export class AI {
  constructor(game, baseGx, baseGy, difficulty = 'normal', owner = ENEMY) {
    this.game = game;
    this.me = owner;
    this.baseGx = baseGx;
    this.baseGy = baseGy;
    const [bx, bz] = game.map.gridToWorld(baseGx, baseGy);
    this.baseX = bx;
    this.baseZ = bz;
    this.ecoT = 0;
    this.stratT = 3;
    this.defendT = 0;
    this.attackTargetT = 0;
    this.attacking = false;
    this.trickleT = 0;
    this.setDifficulty(difficulty);
  }

  setDifficulty(name) {
    this.difficulty = name;
    this.d = DIFFICULTY[name] || DIFFICULTY.normal;
    this.waveT = this.d.firstWave;
  }

  villTarget(age) { return Math.max(4, Math.round(VILL_TARGET_BY_AGE[age - 1] * this.d.villMul)); }
  armyCap(age) {
    // scale up with the player's army so the AI doesn't get out-massed
    const base = Math.round(ARMY_CAP_BY_AGE[age - 1] * this.d.armyMul);
    const playerArmy = this.game.units.filter(u => u.owner === 0 && !u.dead && u.type !== 'villager').length;
    return Math.max(base, Math.min(40, Math.round(playerArmy * 1.1 * this.d.armyMul)));
  }
  attackThreshold(age) { return Math.round(ATTACK_AT_BY_AGE[age - 1] * this.d.atkMul); }

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
      const [tw, tf, tg, ts] = this.d.trickle;
      r.wood += tw; r.food += tf; r.gold += tg; r.stone = (r.stone || 0) + (ts || 0);
    }

    if (this.ecoT <= 0) { this.ecoT = 1.4 * this.d.ecoScale; this.economy(); }
    if (this.stratT <= 0) { this.stratT = 2.6 * this.d.ecoScale; this.strategy(); }
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
    if (tc && tc.complete && vills.length + tc.trainQueue.length < this.villTarget(p.age)) {
      if (tc.trainQueue.length < 2) tc.queueTrain('villager');
    }

    // Housing
    if (p.popCap - p.popUsed < 4 && p.popCap < 120) {
      const housePending = this.myBuildings('house').some(h => !h.complete);
      if (!housePending) this.construct('house');
    }

    // Repair: send one idle villager to the most damaged completed building
    const hurt = this.myBuildings().filter(b => b.complete && b.hp < b.maxHp * 0.7)
      .sort((a, b2) => a.hp / a.maxHp - b2.hp / b2.maxHp)[0];
    if (hurt && p.res.wood > 30) {
      const alreadyRepairing = vills.some(v => v.order?.kind === 'build' && v.order.building === hurt);
      if (!alreadyRepairing) {
        const fixer = vills.find(v => v.state === 'idle') || null;
        if (fixer) fixer.orderBuild(hurt);
      }
    }

    // Expansion: when the local economy runs dry, push a storehouse out to
    // the nearest remaining cluster instead of starving in place.
    for (const res of ['wood', 'gold']) {
      const local = this.game.findNearestReachableNode(res, this.baseX, this.baseZ, 70);
      if (!local) {
        const remote = this.game.findNearestReachableNode(res, this.baseX, this.baseZ, 400);
        if (remote) this.constructNear('storehouse', remote.wx, remote.wz);
      }
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
    const counts = { wood: 0, food: 0, gold: 0, stone: 0 };
    for (const v of vills) {
      const o = v.order;
      if (!o) continue;
      if (o.kind === 'farm') counts.food++;
      else if (o.kind === 'gather' && o.node) counts[o.node.res]++;
    }
    const p = this.p();
    // stone matters from Feudal on (towers/gates) and when the bank is low
    const wantStone = p.age >= 2 && (p.res.stone || 0) < 120 ? 0.14 : 0;
    const want = p.age === 1
      ? { wood: 0.38, food: 0.45, gold: 0.17, stone: 0 }
      : { wood: 0.32 - wantStone / 2, food: 0.36, gold: 0.18, stone: wantStone };
    const total = Math.max(1, counts.wood + counts.food + counts.gold + (counts.stone || 0));
    let best = 'food', bestGap = -Infinity;
    for (const r of ['wood', 'food', 'gold', 'stone']) {
      const gap = (want[r] || 0) - (counts[r] || 0) / total;
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
      if (this.myBuildings('blacksmith').length === 0 && p.res.wood > 180) this.construct('blacksmith');
    }
    if (p.age >= 3 && this.myBuildings('stable').length === 0) this.construct('stable');
    if (p.age >= 3 && this.myBuildings('market').length === 0 && p.res.wood > 220) this.construct('market');
    if (p.age >= 4 && this.myBuildings('siegeworkshop').length === 0) this.construct('siegeworkshop');

    // Blacksmith research: pick up affordable techs once the economy has slack
    const smith = this.myBuildings('blacksmith').find(b => b.complete && !b.researching);
    if (smith) {
      for (const [id, tech] of Object.entries(TECHS)) {
        if (p.age < tech.age || p.techs.includes(id)) continue;
        if (this.myBuildings('blacksmith').some(b => b.researching?.tech === id)) continue;
        if (canAfford(p.res, tech.cost) && p.res.food > (tech.cost.food || 0) + 120) {
          smith.startTech(id);
          break;
        }
      }
    }

    // Market: dump surplus into gold when the treasury runs dry
    const market = this.myBuildings('market').find(b => b.complete);
    if (market && p.res.gold < 60) {
      if (p.res.wood > 500) this.game.trade(this.me, 'wood', 'sell');
      else if (p.res.food > 800) this.game.trade(this.me, 'food', 'sell');
    }

    // Age up (capped by difficulty — easy stays in the Dark Age)
    if (!p.ageResearchInProgress && p.age < AGES.length && p.age < this.d.maxAge) {
      const next = AGES[p.age];
      const enough = vills.length >= this.villTarget(p.age) - 2;
      if (enough && canAfford(p.res, next.cost) && tc.complete) {
        // keep a buffer so the eco doesn't stall
        const buffer = p.age === 1 ? 60 : 120;
        if (p.res.food >= (next.cost.food || 0) + buffer * 0.5) tc.startAgeResearch();
      }
    }

    // Train army. When the player turtles behind towers/walls, prioritize
    // siege production so waves can actually crack the shell.
    const armySize = this.army().length;
    if (armySize < this.armyCap(p.age)) {
      const playerDef = this.game.buildings.filter(b =>
        b.owner === PLAYER && !b.dead && (b.type === 'tower' || b.def.isWall)).length;
      const producers = this.myBuildings().filter(b =>
        b.complete && b.def.trains && b.type !== 'towncenter');
      if (playerDef >= 4) producers.sort((a, b2) => (b2.type === 'siegeworkshop' ? 1 : 0) - (a.type === 'siegeworkshop' ? 1 : 0));
      // counter-intel: lots of player cavalry -> lean on spearmen
      const playerCav = this.game.units.filter(u =>
        u.owner === PLAYER && !u.dead && u.def.cavalry).length;
      for (const b of producers) {
        if (b.trainQueue.length >= 2) continue;
        if (b.type === 'barracks' && playerCav >= 3 && p.age >= UNITS.spearman.age) {
          b.queueTrain('spearman');
        }
        for (const ut of b.def.trains) {
          if (p.age >= UNITS[ut].age) b.queueTrain(ut);
        }
      }
    }
  }

  // ---- combat ----------------------------------------------------------------------

  // Waves are launched as a snapshot: only wave members push the attack, new
  // recruits stay home to defend until the next wave masses. Waves retreat
  // when they've lost most of their strength instead of trickling to death.
  tryAttack() {
    const army = this.army();
    const threshold = this.attackThreshold(this.p().age);
    if (army.length >= threshold) {
      this.attacking = true;
      this.attackTargetT = 0;
      this.wave = army.map(u => u.id);
      this.waveSize0 = this.wave.length;
      this.waveT = (100 + this.game.rand() * 40) * this.d.waveMul;
      this.retarget();
    } else {
      this.waveT = 25 * this.d.waveMul;
    }
  }

  waveUnits() {
    if (!this.wave) return [];
    return this.game.units.filter(u => !u.dead && this.wave.includes(u.id));
  }

  retarget() {
    const target = this.pickPlayerTarget();
    if (!target) { this.attacking = false; this.wave = null; return; }
    const members = this.waveUnits();
    // retreat when the wave has lost ~65% of its strength
    if (members.length < Math.max(2, this.waveSize0 * 0.35)) {
      for (const u of members) u.orderMove(this.baseX, this.baseZ);
      this.attacking = false;
      this.wave = null;
      return;
    }
    for (const u of members) {
      const busy = u.state === 'fighting' || u.state === 'toAttack';
      if (!busy) u.orderAttackMove(target.isBuilding ? target.cx : target.x, target.isBuilding ? target.cz : target.z);
    }
  }

  pickPlayerTarget() {
    const pb = this.game.buildings.filter(b => b.owner === PLAYER && !b.dead);
    if (!pb.length) return null;
    // prefer military production, then TC, then anything (walls last resort)
    const prio = pb.find(b => b.def.trains && b.type !== 'towncenter') ||
                 pb.find(b => b.type === 'towncenter') ||
                 pb.find(b => !b.def.isWall) || pb[0];
    return prio;
  }

  onDamage(target, attacker) {
    if (target.owner !== this.me || !attacker || attacker.dead || attacker.owner === this.me) return;
    if (this.defendT > 0) return;
    // Respond wherever we're hit — home base, expansion storehouse, anywhere.
    this.defendT = 4;
    const ax = attacker.isBuilding ? attacker.cx : attacker.x;
    const az = attacker.isBuilding ? attacker.cz : attacker.z;
    const waveIds = this.wave || [];
    for (const u of this.army()) {
      if (waveIds.includes(u.id)) continue; // the wave keeps pressing the attack
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
