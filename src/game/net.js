// Local lockstep co-op over BroadcastChannel: two tabs/windows of the same
// browser share one deterministic sim. The HOST owns the timeline — it runs
// the real clock, applies every command, and broadcasts tick numbers plus
// tick-stamped commands. The GUEST never free-runs: it replays the host's
// ticks (identical seeded sim) and weaves the commands in at the same tick
// boundaries, so both sides compute the exact same state. Guest commands
// are requests routed to the host, applied there, and mirrored back.
// Periodic state hashes verify the two sims never drift.

import { execCommand } from './commands.js';

export class Coop {
  constructor(game, role, room) {
    this.game = game;
    this.role = role;
    this.room = room;
    this.ch = new BroadcastChannel('aoge-' + room);
    this.hostTick = 0;
    this.queue = [];          // guest: pending {t, cmd} from the host
    this.hashes = new Map();  // guest: tick -> host hash checkpoints
    this.hashChecks = 0;
    this.lastHashOk = true;
    this.onStart = null;      // guest: host pressed start
    this.onDesync = null;
    this.started = false;
    this.difficulty = null;
    this.guestSeen = false;

    if (role === 'host') {
      // local commands: mirror to guests first, then let exec apply them
      game.onCommand = (cmd) => {
        this.ch.postMessage({ type: 'cmd', t: game.tick, cmd });
        return true;
      };
      this.ch.onmessage = (e) => {
        const m = e.data;
        if (m.type === 'ready') {
          this.guestSeen = true;
          if (this.started) this.ch.postMessage({ type: 'start', difficulty: this.difficulty });
        } else if (m.type === 'req') {
          // a guest command joins the timeline at the current host tick
          this.ch.postMessage({ type: 'cmd', t: game.tick, cmd: m.cmd });
          if (game.cmdLog) game.cmdLog.push({ t: game.tick, ...m.cmd });
          execCommand(game, m.cmd);
        }
      };
      game.onTick = () => {
        const msg = { type: 'tick', n: game.tick };
        if (game.tick % 20 === 0) msg.h = game.stateHash();
        this.ch.postMessage(msg);
      };
    } else {
      // guest: never apply locally — request, and apply the mirrored copy
      game.onCommand = (cmd) => {
        this.ch.postMessage({ type: 'req', cmd });
        return false;
      };
      this.ch.onmessage = (e) => {
        const m = e.data;
        if (m.type === 'cmd') this.queue.push(m);
        else if (m.type === 'tick') {
          this.hostTick = m.n;
          if (m.h !== undefined) this.hashes.set(m.n, m.h);
        } else if (m.type === 'start') this.onStart?.(m.difficulty);
      };
      this.ch.postMessage({ type: 'ready' });
    }
  }

  hostStart(difficulty) {
    this.started = true;
    this.difficulty = difficulty;
    this.ch.postMessage({ type: 'start', difficulty });
  }

  // Guest: advance the local sim up to the host's tick, applying the host's
  // command stream at the recorded tick boundaries.
  followTicks() {
    const g = this.game;
    let guard = 0;
    while (g.tick < this.hostTick && guard++ < 400) {
      while (this.queue.length && this.queue[0].t <= g.tick) {
        execCommand(g, this.queue.shift().cmd);
      }
      g.update(0.05);
      const hh = this.hashes.get(g.tick);
      if (hh !== undefined) {
        this.hashes.delete(g.tick);
        this.hashChecks++;
        const ok = hh === g.stateHash();
        if (!ok && this.lastHashOk) this.onDesync?.();
        this.lastHashOk = ok;
      }
    }
  }
}
