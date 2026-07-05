// Central game state: players, units, buildings, resource nodes, damage,
// age progression and win/lose.

import * as THREE from 'three';
import {
  TILE, PLAYER, ENEMY, TEAM_COLORS, POP_MAX, AGES, BUILDINGS, UNITS,
  RESOURCE_NODES, START_RESOURCES, AGE_HP_MULT, TECHS, MARKET, NUM_ENEMIES,
  canAfford, payCost, refundCost,
} from '../config.js';
import { Unit } from './unit.js';
import { Building } from './building.js';
import { execCommand } from './commands.js';
import { makeBerryBush, makeGoldMine, makeStoneMine, makeFishSchool, mat, C } from '../render/models.js';

let NODE_ID = 1;

export class Game {
  constructor(scene, map, treeRenderer) {
    this.scene = scene;
    this.map = map;
    this.trees = treeRenderer;
    this.effects = null;   // set by main after construction
    this.ai = null;        // first enemy AI (kept for tooling/back-compat)
    this.ais = [];         // all enemy AIs (1v1 or 1v2)
    this.fog = null;       // set by main; player-view visibility grid

    // Deterministic core: a fixed-tick counter and a seeded PRNG for ALL
    // sim randomness. Same seed + same command log => identical playout.
    this.tick = 0;
    this.rngState = ((map.seed ^ 0x9e3779b9) >>> 0) || 1;
    this.cmdLog = null;     // array while recording (set by main at match start)
    this.onCommand = null;  // co-op interceptor: return false to defer/route
    this.replayMode = false;
    this.onTick = null;     // fired after every sim tick (replay feed, net)
    this.time = 0;
    this.gameOver = false;

    this.players = Array.from({ length: 1 + NUM_ENEMIES }, (_, id) => ({
      id,
      res: { ...START_RESOURCES },
      age: 1,
      popUsed: 0,
      popCap: 0,
      ageResearchInProgress: false,
      techs: [], // researched blacksmith tech ids
      mods: { atkMult: 1, hpMult: 1, gatherMult: 1, bldHpMult: 1 },
    }));

    // per-player match statistics for the score screen
    this.stats = this.players.map(() => ({
      wood: 0, food: 0, gold: 0, stone: 0,
      trained: 0, lost: 0, kills: 0, built: 0, bLost: 0, razed: 0,
    }));

    this.units = [];
    this.buildings = [];
    this.nodes = [];
    this.stumps = [];

    this.hash = new Map();
    this.cell = 4;
    this.treeNodeByInstance = new Map();

    this.onAlert = () => {};
    this.soundFn = () => {};
    this.onGameOver = () => {};
    this.onCombat = () => {};
    this.lastAttackAlert = -99;
  }

  teamColor(owner) { return TEAM_COLORS[owner]; }
  sound(name) { this.soundFn(name); }

  // Hostility: the player fights every AI; the AIs are allied with each other.
  hostile(a, b) { return a !== b && ((a === PLAYER) !== (b === PLAYER)); }

  // Seeded PRNG (mulberry32) — the only randomness the sim may use.
  rand() {
    let t = (this.rngState += 0x6D2B79F5) >>> 0;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  // Player-initiated commands flow through here so they can be recorded
  // (replays) or routed (co-op lockstep). Returns the command's result.
  exec(cmd) {
    if (this.replayMode) return; // spectators don't get to steer history
    if (this.onCommand && this.onCommand(cmd) === false) return;
    if (this.cmdLog) this.cmdLog.push({ t: this.tick, ...cmd });
    return execCommand(this, cmd);
  }

  // Order-insensitive-enough rolling hash of all sim-relevant state; used to
  // verify determinism (replays, co-op sync).
  stateHash() {
    let h = 0x811c9dc5 >>> 0;
    const mix = (v) => {
      h = (h ^ (Math.imul(Math.round(v * 256) | 0, 2654435761) >>> 0)) >>> 0;
      h = ((h << 13) | (h >>> 19)) >>> 0;
    };
    for (const u of this.units) { mix(u.id); mix(u.x); mix(u.z); mix(u.hp); }
    for (const b of this.buildings) { mix(b.id); mix(b.hp); mix(b.progress); mix(b.trainQueue.length); }
    for (const p of this.players) { mix(p.res.wood); mix(p.res.food); mix(p.res.gold); mix(p.res.stone || 0); mix(p.age); }
    mix(this.tick);
    return h >>> 0;
  }

  // ---- setup ------------------------------------------------------------------

  createResourceNodes(descriptors) {
    let s = 12345;
    const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
    for (const d of descriptors) {
      const [wx, wz] = this.map.gridToWorld(d.gx, d.gy);
      const info = RESOURCE_NODES[d.type];
      const node = {
        id: NODE_ID++,
        isNode: true,
        type: d.type,
        res: info.res,
        amount: info.amount,
        gx: d.gx, gy: d.gy, wx, wz,
        dead: false,
      };
      const y = this.map.heightAt(wx, wz);
      if (d.type === 'tree') {
        node.treeHandle = this.trees.add(wx, y - 0.1, wz, rand());
        if (node.treeHandle) this.treeNodeByInstance.set(node.treeHandle.idx, node);
      } else {
        const mesh = d.type === 'berry' ? makeBerryBush()
          : d.type === 'stone' ? makeStoneMine()
          : d.type === 'fish' ? makeFishSchool()
          : makeGoldMine();
        mesh.position.set(wx, d.type === 'fish' ? -0.55 : y - 0.05, wz);
        mesh.rotation.y = rand() * Math.PI * 2;
        mesh.userData.node = node;
        this.scene.add(mesh);
        node.mesh = mesh;
      }
      // replace reservation occupant with the real node
      this.map.occupant[d.gy * this.map.size + d.gx] = node;
      this.nodes.push(node);
    }
    this.trees.flush();
  }

  // ---- spawning ----------------------------------------------------------------

  spawnUnit(type, owner, x, z) {
    const u = new Unit(this, type, owner, x, z);
    this.units.push(u);
    this.players[owner].popUsed += 1;
    return u;
  }

  spawnFromBuilding(building, unitType) {
    const [x, z] = building.spawnPoint(UNITS[unitType].domain || 'land');
    const u = this.spawnUnit(unitType, building.owner, x, z);
    this.stats[building.owner].trained++;
    const r = building.rally;
    if (r) {
      const canGatherIt = r.node && (unitType === 'villager'
        ? r.node.type !== 'fish'
        : UNITS[unitType].gathers?.includes(r.node.type)); // boats fish their rally
      if (r.node && !r.node.dead && r.node.amount > 0 && canGatherIt) u.orderGather(r.node);
      else if (r.farm && !r.farm.dead && unitType === 'villager') u.orderGatherFarm(r.farm);
      else if ((r.node || r.farm) && unitType !== 'villager') {
        // military rallied onto a resource/farm just attack-moves there
        const px = r.node ? r.node.wx : r.farm.cx, pz = r.node ? r.node.wz : r.farm.cz;
        u.orderAttackMove(px, pz);
      } else if (r.x !== undefined) {
        if (unitType !== 'villager') u.orderAttackMove(r.x, r.z);
        else u.orderMove(r.x, r.z);
      }
    }
    if (building.owner === PLAYER) this.sound('ready');
    return u;
  }

  // Footprint is buildable: terrain/occupancy clear AND no unit standing on it
  // (placing over units would seal them inside the building forever).
  canPlaceBuilding(gx, gy, size) {
    if (!this.map.canPlace(gx, gy, size)) return false;
    const x0 = gx * TILE, z0 = gy * TILE, x1 = (gx + size) * TILE, z1 = (gy + size) * TILE;
    for (const u of this.units) {
      if (!u.dead && u.x > x0 - 0.4 && u.x < x1 + 0.4 && u.z > z0 - 0.4 && u.z < z1 + 0.4) return false;
    }
    return true;
  }

  // Attempts to pay for and place a construction site. Returns Building or null.
  placeBuilding(owner, type, gx, gy, prebuilt = false) {
    const def = BUILDINGS[type];
    const p = this.players[owner];
    if (!def) return null;
    if (!prebuilt) {
      if (p.age < def.age) return null;
      if (!canAfford(p.res, def.cost)) return null;
      if (!this.canPlaceBuilding(gx, gy, def.size)) return null;
      if (def.isDock && !this.map.hasAdjacentWater(gx, gy, def.size)) return null;
      payCost(p.res, def.cost);
    }
    const b = new Building(this, type, owner, gx, gy, prebuilt);
    this.buildings.push(b);
    if (prebuilt) this.onBuildingComplete(b, true);
    return b;
  }

  onBuildingComplete(b, silent = false) {
    this.recalcPop(b.owner);
    if (!silent) this.stats[b.owner].built++;
    if (!silent && b.owner === PLAYER) {
      this.sound('built');
    }
  }

  recalcPop(owner) {
    let cap = 0;
    for (const b of this.buildings) {
      if (b.owner === owner && b.complete && !b.dead && b.def.pop) cap += b.def.pop;
    }
    this.players[owner].popCap = Math.min(cap, POP_MAX);
  }

  advanceAge(owner, newAge) {
    const p = this.players[owner];
    const oldMult = AGE_HP_MULT[p.age - 1];
    p.age = newAge;
    p.ageResearchInProgress = false;
    const ratio = AGE_HP_MULT[newAge - 1] / oldMult;
    for (const u of this.units) {
      if (u.owner === owner && !u.dead) {
        u.maxHp = Math.round(u.maxHp * ratio);
        u.hp = Math.min(u.maxHp, Math.round(u.hp * ratio));
      }
    }
    // buildings visually evolve with their owner's age (model pack tiers)
    for (const b of this.buildings) {
      if (b.owner === owner && !b.dead) b.reskin();
    }
    if (owner === PLAYER) {
      this.onAlert(`You have advanced to the ${AGES[newAge - 1].name}!`, true);
      this.sound('ageup');
    } else {
      this.onAlert(`The enemy has advanced to the ${AGES[newAge - 1].name}.`);
    }
  }

  // Blacksmith tech completed: fold the multiplier into player.mods and
  // rescale existing entities the same way advanceAge does.
  applyTech(owner, techId) {
    const p = this.players[owner];
    if (p.techs.includes(techId)) return;
    const tech = TECHS[techId];
    p.techs.push(techId);
    for (const [k, v] of Object.entries(tech.mod)) p.mods[k] *= v;
    if (tech.mod.hpMult) {
      for (const u of this.units) {
        if (u.owner === owner && !u.dead) {
          u.maxHp = Math.round(u.maxHp * tech.mod.hpMult);
          u.hp = Math.min(u.maxHp, Math.round(u.hp * tech.mod.hpMult));
        }
      }
    }
    if (tech.mod.bldHpMult) {
      for (const b of this.buildings) {
        if (b.owner === owner && !b.dead) {
          b.maxHp = Math.round(b.maxHp * tech.mod.bldHpMult);
          b.hp = Math.min(b.maxHp, Math.round(b.hp * tech.mod.bldHpMult));
        }
      }
    }
    if (owner === PLAYER) {
      this.onAlert(`Research complete: ${tech.name} (${tech.desc})`, true);
      this.sound('ageup');
    }
  }

  // Market trading at fixed rates. dir: 'sell' (kind -> gold) | 'buy' (gold -> kind).
  trade(owner, kind, dir) {
    const res = this.players[owner].res;
    if (dir === 'sell') {
      if ((res[kind] || 0) < MARKET.lot) return false;
      res[kind] -= MARKET.lot;
      res.gold = (res.gold || 0) + MARKET.sellGold;
    } else {
      if ((res.gold || 0) < MARKET.buyGold) return false;
      res.gold -= MARKET.buyGold;
      res[kind] = (res[kind] || 0) + MARKET.lot;
    }
    if (owner === PLAYER) this.sound('deposit');
    return true;
  }

  // ---- damage & death ------------------------------------------------------------

  applyDamage(target, dmg, attacker) {
    if (!target || target.dead || this.gameOver) return;
    target.hp -= dmg;
    // combat feedback: floating number + a brief scale pulse on units
    if (dmg >= 1) {
      const y = target.isBuilding ? target.groundY + target.size * 1.4 : target.group.position.y + 2.2;
      this.effects.damageNumber(target.isBuilding ? target.cx : target.x, y, target.isBuilding ? target.cz : target.z, dmg);
      if (target.isUnit) target.hitT = 0.16;
    }
    if (target.owner === PLAYER || attacker?.owner === PLAYER) this.onCombat();

    // alert + retaliation
    if (target.owner === PLAYER && this.time - this.lastAttackAlert > 14) {
      this.lastAttackAlert = this.time;
      this.onAlert('Your forces are under attack!');
      this.sound('horn');
    }
    // minimap ping for any hit on the player's stuff (own throttle)
    if (target.owner === PLAYER && this.time - (this.lastPingT || -9) > 3) {
      this.lastPingT = this.time;
      this.onPing?.(target.isBuilding ? target.cx : target.x, target.isBuilding ? target.cz : target.z);
    }
    if (target.isUnit && attacker && !attacker.dead &&
        this.hostile(target.owner, attacker.owner)) {
      const passive = target.state === 'idle' || target.state === 'gathering' ||
                      target.state === 'toResource' || target.state === 'deposit' ||
                      target.state === 'move' || target.state === 'building' ||
                      target.state === 'toBuild';
      if (passive) {
        if (target.type !== 'villager') {
          // military responds to any attacker, including towers
          target.engage(attacker, true);
        } else if (attacker.isUnit && attacker.def.range <= 1.5) {
          // villagers fight back against melee...
          target.engage(attacker, true);
        } else {
          // ...and run home from archers, catapults and towers
          this.fleeHome(target);
        }
      }
    }
    for (const ai of this.ais) ai.onDamage(target, attacker);

    if (target.hp <= 0) {
      // score bookkeeping before the entity is torn down
      const st = this.stats;
      if (target.isUnit) {
        st[target.owner].lost++;
        if (attacker && this.hostile(target.owner, attacker.owner)) st[attacker.owner].kills++;
        this.killUnit(target);
      } else {
        st[target.owner].bLost++;
        if (attacker && this.hostile(target.owner, attacker.owner)) st[attacker.owner].razed++;
        this.razeBuilding(target);
      }
    }
  }

  // Send a villager running to the nearest friendly drop-off building.
  fleeHome(u) {
    if (u.fleeCd && this.time < u.fleeCd) return;
    u.fleeCd = this.time + 6;
    const home = this.findDropoff(u.owner, u.x, u.z);
    if (home) u.orderMove(home.cx, home.cz);
  }

  splashDamage(pos, radius, dmg, attacker) {
    if (radius <= 0) return;
    for (const u of [...this.units]) {
      if (u.dead || u === attacker || u.garrisoned) continue;
      const d = Math.hypot(u.x - pos.x, u.z - pos.z);
      if (d <= radius) this.applyDamage(u, Math.round(dmg * (d < radius * 0.5 ? 1 : 0.55)), attacker);
    }
    for (const b of [...this.buildings]) {
      if (b.dead) continue;
      const half = (b.size * TILE) / 2;
      const dx = Math.max(Math.abs(pos.x - b.cx) - half, 0);
      const dz = Math.max(Math.abs(pos.z - b.cz) - half, 0);
      if (Math.hypot(dx, dz) <= radius) {
        const mult = attacker?.def?.bonusVsBuilding && attacker.owner !== b.owner ? attacker.def.bonusVsBuilding : 1;
        this.applyDamage(b, Math.round(dmg * mult), attacker);
      }
    }
  }

  killUnit(u) {
    if (u.dead) return;
    u.dead = true;
    u.setSelected(false);
    u.healthBar.set(0, false);
    this.players[u.owner].popUsed -= 1;
    this.units.splice(this.units.indexOf(u), 1);
    this.effects.blood(u.pos3().setY(u.group.position.y + 0.8));
    if (u.mixer && u.actions?.death) {
      u.playAction('death', 0.1);
      this.effects.fadeOut(u.group, 2.2, 0.6, u.mixer);
    } else {
      this.effects.fadeOut(u.group, 1.4, 1.0);
    }
    this.sound('die');
    this.checkWinLose();
  }

  razeBuilding(b, silent = false) {
    if (b.dead) return;
    b.dead = true;
    b.setSelected(false);
    b.healthBar.set(0, false);
    // anyone garrisoned inside pours out before the roof comes down
    if (b.garrison?.length) {
      for (const u of b.garrison) {
        u.garrisoned = null;
        u.group.visible = true;
        const [sx, sz] = b.spawnPoint();
        u.x = sx; u.z = sz;
        u.clearOrder(true);
      }
      b.garrison = [];
    }
    // refund what was only queued/in-research — that work never happened
    const res = this.players[b.owner].res;
    for (const ut of b.trainQueue) refundCost(res, UNITS[ut].cost);
    b.trainQueue.length = 0;
    if (b.researching) {
      refundCost(res, b.researching.tech ? TECHS[b.researching.tech].cost
                                         : AGES[b.researching.age - 1].cost);
      if (!b.researching.tech) this.players[b.owner].ageResearchInProgress = false;
    }
    this.map.release(b.gx, b.gy, b.size);
    this.buildings.splice(this.buildings.indexOf(b), 1);
    this.recalcPop(b.owner);
    this.effects.puff(new THREE.Vector3(b.cx, b.groundY + 1.5, b.cz), 0x8a7a60, 16, 7);
    this.effects.fadeOut(b.group, 2.2, b.size * 1.2);
    this.effects.spawnRubble(b.cx, b.groundY, b.cz, b.size);
    this.sound('collapse');
    if (!silent && b.owner === PLAYER) this.onAlert(`Your ${b.def.name} has been destroyed!`);
    for (const ai of this.ais) if (ai.me === b.owner) ai.onBuildingLost(b);
    this.checkWinLose();
  }

  // Owner-initiated demolish: full refund while under construction (cancel),
  // nothing once complete (AoE behavior). razeBuilding refunds queue/research.
  deleteBuilding(b) {
    if (!b || b.dead) return;
    if (!b.complete) refundCost(this.players[b.owner].res, b.def.cost);
    this.razeBuilding(b, true);
  }

  // All stumps live in one InstancedMesh (a per-stump Mesh each was a
  // permanent extra draw call); oldest slots recycle after 400.
  addStump(wx, wy, wz) {
    if (!this.stumpMesh) {
      const geo = new THREE.CylinderGeometry(0.22, 0.3, 0.4, 6);
      geo.translate(0, 0.2, 0);
      this.stumpMesh = new THREE.InstancedMesh(geo, mat(C.woodDark), 400);
      this.stumpMesh.count = 0;
      this.stumpMesh.frustumCulled = false;
      this.stumpN = 0;
      this.scene.add(this.stumpMesh);
    }
    const idx = this.stumpN % 400;
    const m = new THREE.Matrix4().makeRotationY(this.rand() * 6.28);
    m.setPosition(wx, wy, wz);
    this.stumpMesh.setMatrixAt(idx, m);
    this.stumpN++;
    this.stumpMesh.count = Math.min(400, this.stumpN);
    this.stumpMesh.instanceMatrix.needsUpdate = true;
  }

  depleteNode(node) {
    if (node.dead) return;
    node.dead = true;
    node.amount = 0;
    this.map.release(node.gx, node.gy, 1);
    this.nodes.splice(this.nodes.indexOf(node), 1);
    if (node.treeHandle !== undefined && node.treeHandle !== null) {
      this.trees.remove(node.treeHandle);
      this.treeNodeByInstance.delete(node.treeHandle.idx);
      this.addStump(node.wx, this.map.heightAt(node.wx, node.wz) - 0.05, node.wz);
      this.sound('treefall');
    } else if (node.mesh) {
      this.effects.fadeOut(node.mesh, 1.2, 0.8);
    }
  }

  // ---- queries -------------------------------------------------------------------

  findDropoff(owner, x, z, dockOnly = false) {
    let best = null, bestD = Infinity;
    for (const b of this.buildings) {
      if (b.owner !== owner || !b.complete || b.dead || !b.def.dropoff) continue;
      if (dockOnly && !b.def.isDock) continue;
      const d = Math.hypot(b.cx - x, b.cz - z);
      if (d < bestD) { bestD = d; best = b; }
    }
    return best;
  }

  findNearestNode(res, x, z, maxR = 30) {
    let best = null, bestD = Infinity;
    for (const n of this.nodes) {
      if (n.dead || n.res !== res || n.amount <= 0) continue;
      if (n.type === 'fish') continue; // boats only — villagers can't gather it
      const d = Math.hypot(n.wx - x, n.wz - z);
      if (d < bestD && d <= maxR) { bestD = d; best = n; }
    }
    return best;
  }

  // A node is gatherable only if a villager can stand next to it — i.e. its
  // tile has at least one walkable neighbour. Trees deep inside a forest have
  // none, so they can't be harvested directly.
  nodeReachable(node) {
    if (!node || node.dead) return false;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue;
        if (this.map.isWalkable(node.gx + dx, node.gy + dy)) return true;
      }
    }
    return false;
  }

  findNearestReachableNode(res, x, z, maxR = 40, exclude = null) {
    let best = null, bestD = Infinity;
    for (const n of this.nodes) {
      if (n.dead || n === exclude || n.res !== res || n.amount <= 0) continue;
      if (n.type === 'fish') continue; // land gatherers only
      const d = Math.hypot(n.wx - x, n.wz - z);
      if (d <= maxR && d < bestD && this.nodeReachable(n)) { bestD = d; best = n; }
    }
    return best;
  }

  // Town bell: garrison nearby villagers inside the TC (they add arrows),
  // or release everyone if some are already inside.
  townBell(tc) {
    if (!tc || tc.dead || !tc.complete) return;
    if (tc.garrison?.length) {
      for (const u of tc.garrison) {
        u.garrisoned = null;
        u.group.visible = true;
        const [sx, sz] = tc.spawnPoint();
        u.x = sx; u.z = sz;
        u.clearOrder(true);
      }
      tc.garrison = [];
      this.sound('command');
      return;
    }
    let n = 0;
    for (const u of this.units) {
      if (u.owner !== tc.owner || u.dead || u.type !== 'villager' || u.garrisoned) continue;
      if (Math.hypot(u.x - tc.cx, u.z - tc.cz) < 45) { u.orderGarrison(tc); n++; }
    }
    if (tc.owner === PLAYER) this.onAlert(n ? `Town bell! ${n} villagers heading to safety.` : 'No villagers in range of the bell.');
    this.sound('horn');
  }

  nearestEnemy(owner, x, z, r, includeBuildings = false) {
    let best = null, bestD = Infinity;
    for (const u of this.units) {
      if (!this.hostile(owner, u.owner) || u.dead || u.garrisoned) continue;
      const d = Math.hypot(u.x - x, u.z - z);
      if (d <= r && d < bestD) { bestD = d; best = u; }
    }
    if (includeBuildings) {
      for (const b of this.buildings) {
        if (!this.hostile(owner, b.owner) || b.dead) continue;
        const half = (b.size * TILE) / 2;
        const dx = Math.max(Math.abs(x - b.cx) - half, 0);
        const dz = Math.max(Math.abs(z - b.cz) - half, 0);
        const d = Math.hypot(dx, dz) + 4; // prefer units over buildings
        if (Math.hypot(dx, dz) <= r && d < bestD) { bestD = d; best = b; }
      }
    }
    return best;
  }

  hashKey(x, z) { return ((x / this.cell) | 0) * 4096 + ((z / this.cell) | 0); }

  rebuildHash() {
    // recycle cell arrays instead of reallocating the whole map every tick
    for (const arr of this.hash.values()) arr.length = 0;
    for (const u of this.units) {
      const k = this.hashKey(u.x, u.z);
      let arr = this.hash.get(k);
      if (!arr) { arr = []; this.hash.set(k, arr); }
      arr.push(u);
    }
  }

  unitsNear(x, z, r) {
    const out = [];
    const c = this.cell;
    const x0 = ((x - r) / c) | 0, x1 = ((x + r) / c) | 0;
    const z0 = ((z - r) / c) | 0, z1 = ((z + r) / c) | 0;
    for (let cx = x0; cx <= x1; cx++) {
      for (let cz = z0; cz <= z1; cz++) {
        const arr = this.hash.get(cx * 4096 + cz);
        if (!arr) continue;
        for (const u of arr) {
          if (Math.hypot(u.x - x, u.z - z) <= r) out.push(u);
        }
      }
    }
    return out;
  }

  countBuildings(owner) {
    let n = 0;
    for (const b of this.buildings) if (b.owner === owner && !b.dead) n++;
    return n;
  }

  // ---- main loop -------------------------------------------------------------------

  update(dt) {
    if (this.gameOver) {
      this.effects.update(dt);
      return;
    }
    this.time += dt;
    // deaths before t=5 are ignored by checkWinLose; re-evaluate once after
    if (!this._wlChecked && this.time >= 5) { this._wlChecked = true; this.checkWinLose(); }
    this.rebuildHash();
    // retained scratch arrays: entities can be removed mid-iteration, but we
    // don't need a fresh allocation every tick to guard against that
    const us = this._uScratch || (this._uScratch = []);
    us.length = 0; for (const u of this.units) us.push(u);
    for (const u of us) if (!u.dead) u.update(dt);
    const bs = this._bScratch || (this._bScratch = []);
    bs.length = 0; for (const b of this.buildings) bs.push(b);
    for (const b of bs) if (!b.dead) b.update(dt);
    for (const ai of this.ais) ai.update(dt);
    this.fog?.update(this, dt);
    this.effects.update(dt);
    if (this.scenario) {
      this._scT = (this._scT || 0) - dt;
      if (this._scT <= 0) { this._scT = 1; this.checkScenario(); }
    }
    this.tick++;
    this.onTick?.();
  }

  // A side is defeated only when it has no buildings AND no villagers left to
  // rebuild — losing your last building while villagers survive is a setback,
  // not a loss, and a standing army can still fight for the win.
  sideDefeated(owner) {
    if (this.countBuildings(owner) > 0) return false;
    return !this.units.some(u => u.owner === owner && !u.dead && u.type === 'villager');
  }

  // Scenario objectives (?scenario=): custom win / timed conditions layered
  // over the base rules. Evaluated once per second from update().
  checkScenario() {
    const sc = this.scenario;
    if (!sc || this.gameOver || this.time < 5) return;
    if (sc.win && sc.win(this)) {
      this.gameOver = true;
      this.fog?.revealAll();
      this.onGameOver(true);
    } else if (sc.timeLimit && this.time >= sc.timeLimit && sc.timeout) {
      this.gameOver = true;
      this.fog?.revealAll();
      this.onGameOver(sc.timeout === 'win');
    }
  }

  checkWinLose() {
    if (this.gameOver || this.time < 5) return;
    const allEnemiesDown = this.players.every((p, id) => id === PLAYER || this.sideDefeated(id));
    if (allEnemiesDown) {
      this.gameOver = true;
      this.fog?.revealAll();
      this.onGameOver(true);
    } else if (this.sideDefeated(PLAYER)) {
      this.gameOver = true;
      this.fog?.revealAll();
      this.onGameOver(false);
    }
  }
}
