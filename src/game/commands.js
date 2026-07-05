// Serializable player commands. Everything the player can do to the sim is
// expressed as a plain object {k, ...} applied by execCommand — that single
// choke point is what makes replays and lockstep co-op possible. Entities
// are referenced by id; resolution failures are silently dropped (the
// referenced thing may have died between record and apply).

function unitsOf(game, ids) {
  const out = [];
  for (const id of ids) {
    const u = game.units.find(x => x.id === id && !x.dead);
    if (u) out.push(u);
  }
  return out;
}
const bOf = (game, id) => game.buildings.find(b => b.id === id && !b.dead) || null;
const nOf = (game, id) => game.nodes.find(n => n.id === id && !n.dead) || null;
const entOf = (game, id) =>
  game.units.find(u => u.id === id && !u.dead) || bOf(game, id);

// shift-queue helper mirroring the input layer's semantics
function issue(u, shift, fn) {
  if (shift) u.pushOrder(fn);
  else { u.orderQueue = null; fn(); }
}

// box formation around a target point (kept here so replays reproduce it)
export function formationOffsets(n) {
  const cols = Math.ceil(Math.sqrt(n));
  const spacing = 1.7;
  const out = [];
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / cols), c = i % cols;
    out.push([
      (c - (cols - 1) / 2) * spacing,
      (r - (Math.ceil(n / cols) - 1) / 2) * spacing,
    ]);
  }
  return out;
}

export function execCommand(game, cmd) {
  switch (cmd.k) {
    case 'move': {
      const us = unitsOf(game, cmd.ids);
      const offs = formationOffsets(us.length);
      us.forEach((u, i) => issue(u, cmd.shift, () => u.orderMove(cmd.x + offs[i][0], cmd.z + offs[i][1])));
      return us.length > 0;
    }
    case 'attackmove': {
      for (const u of unitsOf(game, cmd.ids)) issue(u, cmd.shift, () => u.orderAttackMove(cmd.x, cmd.z));
      return true;
    }
    case 'attack': {
      const t = entOf(game, cmd.t);
      if (!t) return false;
      for (const u of unitsOf(game, cmd.ids)) issue(u, cmd.shift, () => u.orderAttack(t));
      return true;
    }
    case 'gather': {
      const n = nOf(game, cmd.n);
      if (!n) return false;
      for (const u of unitsOf(game, cmd.ids)) {
        // villagers gather land nodes; boats gather their whitelist (fish)
        const canGather = u.type === 'villager' ? n.type !== 'fish'
          : !!u.def.gathers?.includes(n.type);
        if (canGather) issue(u, cmd.shift, () => u.orderGather(n));
        else issue(u, cmd.shift, () => u.orderMove(n.wx, n.wz));
      }
      return true;
    }
    case 'farm': {
      const f = bOf(game, cmd.f);
      if (!f) return false;
      for (const u of unitsOf(game, cmd.ids)) {
        if (u.type === 'villager') issue(u, cmd.shift, () => u.orderGatherFarm(f));
      }
      return true;
    }
    case 'build': {
      const b = bOf(game, cmd.b);
      if (!b) return false;
      for (const u of unitsOf(game, cmd.ids)) {
        if (u.type === 'villager') issue(u, cmd.shift, () => u.orderBuild(b));
      }
      return true;
    }
    case 'deposit': {
      const b = bOf(game, cmd.b);
      if (!b) return false;
      for (const u of unitsOf(game, cmd.ids)) {
        if (u.type === 'villager' && u.carry?.amt > 0) {
          u.order = u.order?.kind === 'gather' || u.order?.kind === 'farm' ? u.order : { kind: 'gather', node: null };
          u.goDeposit();
        } else issue(u, cmd.shift, () => u.orderMove(b.cx, b.cz));
      }
      return true;
    }
    case 'garrison': {
      const b = bOf(game, cmd.b);
      if (!b) return false;
      for (const u of unitsOf(game, cmd.ids)) issue(u, cmd.shift, () => u.orderGarrison(b));
      return true;
    }
    case 'stop': {
      for (const u of unitsOf(game, cmd.ids)) u.clearOrder(true);
      return true;
    }
    case 'stance': {
      for (const u of unitsOf(game, cmd.ids)) { u.stance = cmd.s; u.post = null; }
      return true;
    }
    case 'place': {
      const b = game.placeBuilding(cmd.o ?? 0, cmd.t, cmd.gx, cmd.gy);
      if (!b) return null;
      for (const u of unitsOf(game, cmd.ids || [])) {
        if (u.type === 'villager') issue(u, cmd.shift, () => u.orderBuild(b));
      }
      return b;
    }
    case 'placeline': {
      // drag-line walls: place every affordable segment, builders round-robin
      const placed = [];
      for (const [gx, gy] of cmd.tiles) {
        const b = game.placeBuilding(cmd.o ?? 0, cmd.t, gx, gy);
        if (b) placed.push(b);
      }
      const vills = unitsOf(game, cmd.ids || []).filter(u => u.type === 'villager');
      placed.forEach((b, i) => {
        const v = vills.length ? vills[i % vills.length] : null;
        if (v) issue(v, cmd.shift || i >= vills.length, () => v.orderBuild(b));
      });
      return placed.length;
    }
    case 'train': {
      const b = bOf(game, cmd.b);
      return b ? b.queueTrain(cmd.u) : false;
    }
    case 'cancelTrain': {
      const b = bOf(game, cmd.b);
      if (b) b.cancelTrain(cmd.i);
      return true;
    }
    case 'age': {
      const b = bOf(game, cmd.b);
      return b ? b.startAgeResearch() : false;
    }
    case 'tech': {
      const b = bOf(game, cmd.b);
      return b ? b.startTech(cmd.id) : false;
    }
    case 'trade':
      return game.trade(cmd.o ?? 0, cmd.kind, cmd.dir);
    case 'bell': {
      const b = bOf(game, cmd.b);
      if (b) game.townBell(b);
      return true;
    }
    case 'demolish': {
      const b = bOf(game, cmd.b);
      if (b) game.deleteBuilding(b);
      return true;
    }
    case 'rally': {
      for (const id of cmd.bs) {
        const b = bOf(game, id);
        if (!b) continue;
        if (cmd.n !== undefined) { const n = nOf(game, cmd.n); if (n) b.rally = { node: n }; }
        else if (cmd.f !== undefined) { const f = bOf(game, cmd.f); if (f) b.rally = { farm: f }; }
        else b.rally = { x: cmd.x, z: cmd.z };
      }
      return true;
    }
    default:
      return false;
  }
}
