// DOM HUD: resource bar, alerts, selection panel, command card, game over.

import { PLAYER, AGES, UNITS, BUILDINGS, BUILD_MENU, canAfford } from '../config.js';
import { playSound } from '../audio.js';
import { stopMusic } from '../music.js';

const RES_ICONS = { wood: '\u{1FAB5}', food: '\u{1F356}', gold: '\u{1FA99}', stone: '\u{1FAA8}' };

// command-card hotkeys (avoids WASD camera keys and A/T/H/P/M/. global keys)
const CARD_KEYS = ['KeyQ', 'KeyE', 'KeyR', 'KeyF', 'KeyG', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyY'];

function costHtml(cost) {
  if (!cost) return '';
  const parts = [];
  for (const r of ['wood', 'food', 'gold', 'stone']) {
    if (cost[r]) parts.push(`${RES_ICONS[r]}${cost[r]}`);
  }
  return parts.join(' ');
}

export class HUD {
  constructor(game, input) {
    this.game = game;
    this.input = input;
    this.selection = [];
    this.dyn = [];
    this.structKey = null;

    this.el = {
      wood: document.getElementById('res-wood'),
      food: document.getElementById('res-food'),
      gold: document.getElementById('res-gold'),
      stone: document.getElementById('res-stone'),
      pop: document.getElementById('res-pop'),
      age: document.getElementById('age-disp'),
      alerts: document.getElementById('alerts'),
      selTitle: document.getElementById('sel-title'),
      selSub: document.getElementById('sel-sub'),
      selCards: document.getElementById('sel-cards'),
      queueRow: document.getElementById('queue-row'),
      cmdPanel: document.getElementById('cmd-panel'),
      gameover: document.getElementById('gameover-overlay'),
      gameoverTitle: document.getElementById('gameover-title'),
      gameoverSub: document.getElementById('gameover-sub'),
      idleBtn: document.getElementById('idle-btn'),
      idleCount: document.getElementById('idle-count'),
    };
    this.hotkeys = new Map(); // KeyCode -> command button

    game.onAlert = (msg, good) => this.alert(msg, good);
    game.onGameOver = (won) => this.showGameOver(won);

    // idle villager cycling (same behavior as the '.' key, tap-friendly)
    this.el.idleBtn.classList.remove('hidden');
    this.el.idleBtn.addEventListener('click', () => this.input.cycleIdleVillager());

    // command-card hotkeys
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.shiftKey || e.ctrlKey || e.metaKey) return;
      if (document.querySelector('.overlay:not(.hidden)')) return;
      const btn = this.hotkeys.get(e.code);
      if (btn && !btn.classList.contains('disabled')) btn.click();
    });
  }

  alert(msg, good = false) {
    const div = document.createElement('div');
    div.className = 'alert' + (good ? ' good' : '');
    div.textContent = msg;
    this.el.alerts.appendChild(div);
    setTimeout(() => div.remove(), 4200);
    while (this.el.alerts.children.length > 4) this.el.alerts.firstChild.remove();
  }

  showGameOver(won) {
    stopMusic();
    playSound(won ? 'victory' : 'defeat');
    this.el.gameover.classList.remove('hidden');
    this.el.gameoverTitle.textContent = won ? 'Victory!' : 'Defeat';
    this.el.gameoverTitle.className = won ? 'victory' : 'defeat';
    this.el.gameoverSub.textContent = won
      ? 'The enemy base lies in ruins. Your empire stands triumphant!'
      : 'Your base has been destroyed. The enemy empire prevails.';
  }

  setSelection(sel) {
    this.selection = sel;
    this.structKey = null; // force a rebuild on next update
    this.renderSelection();
  }

  // Structure changes rebuild the panel; everything else (HP, progress,
  // affordability) is patched in place so buttons keep their DOM nodes and
  // clicks are never swallowed by a rebuild.
  computeStructKey() {
    const sel = this.selection.filter(e => !e.dead);
    const p = this.game.players[PLAYER];
    let key = sel.map(e => e.id).join(',') + '|' + p.age;
    const first = sel[0];
    if (sel.length === 1 && first?.isBuilding) {
      key += '|' + (first.complete ? 'c' : 'u') + '|' + first.trainQueue.join(',') +
             '|' + (first.researching ? 'R' : '') + '|' + (p.ageResearchInProgress ? 'A' : '') +
             '|' + (first.garrison?.length || 0);
    }
    return key;
  }

  update(dt) {
    const p = this.game.players[PLAYER];
    this.el.wood.textContent = Math.floor(p.res.wood);
    this.el.food.textContent = Math.floor(p.res.food);
    this.el.gold.textContent = Math.floor(p.res.gold);
    this.el.stone.textContent = Math.floor(p.res.stone || 0);
    this.el.pop.textContent = `${p.popUsed}/${p.popCap}`;
    this.el.age.textContent = AGES[p.age - 1].name + (p.ageResearchInProgress ? ' ⏳' : '');

    // idle villager badge
    this.idleT = (this.idleT || 0) - dt;
    if (this.idleT <= 0) {
      this.idleT = 0.5;
      const idle = this.game.units.filter(u => u.owner === PLAYER && !u.dead && u.type === 'villager' && u.state === 'idle' && !u.garrisoned).length;
      this.el.idleCount.textContent = idle;
      this.el.idleBtn.classList.toggle('none', idle === 0);
    }

    const key = this.computeStructKey();
    if (key !== this.structKey) {
      this.structKey = key;
      this.renderSelection();
    } else {
      for (const fn of this.dyn) fn();
    }
  }

  renderSelection() {
    const sel = this.selection.filter(e => !e.dead);
    const { selTitle, selSub, selCards, queueRow, cmdPanel } = this.el;
    selCards.innerHTML = '';
    queueRow.innerHTML = '';
    cmdPanel.innerHTML = '';
    this.dyn = [];
    this.hotkeys.clear();
    this._keyIdx = 0;

    if (!sel.length) {
      selTitle.textContent = 'No selection';
      selSub.textContent = 'Left-click or drag to select your units.';
      return;
    }

    const first = sel[0];
    if (sel.length === 1) {
      const def = first.def;
      selTitle.textContent = def.name + (first.owner !== PLAYER ? ' (enemy)' : '');
      const subText = () => {
        let sub = `HP ${Math.ceil(first.hp)}/${first.maxHp}`;
        if (first.isBuilding && !first.complete) sub += ` — under construction ${Math.floor(first.progress * 100)}%`;
        if (first.isUnit && first.carry?.amt > 0) sub += ` — carrying ${Math.floor(first.carry.amt)} ${first.carry.res}`;
        if (first.isUnit && def.atk) sub += ` — ATK ${def.atk}`;
        return sub;
      };
      selSub.textContent = subText();
      this.dyn.push(() => { selSub.textContent = subText(); });
    } else {
      selTitle.textContent = `${sel.length} units selected`;
      selSub.textContent = '';
    }

    // unit cards (HP bars patch live)
    for (const e of sel.slice(0, 21)) {
      const card = document.createElement('div');
      card.className = 'sel-card';
      card.innerHTML = `<span>${e.def.icon}</span><div class="hpbar"><div></div></div>`;
      const bar = card.querySelector('.hpbar > div');
      const patch = () => { bar.style.width = Math.max(3, (e.hp / e.maxHp) * 100) + '%'; };
      patch();
      this.dyn.push(patch);
      card.onclick = () => this.input.select([e]);
      selCards.appendChild(card);
    }

    // command card + queue
    if (first.owner !== PLAYER) return;
    const units = sel.filter(e => e.isUnit);
    const hasVillager = units.some(u => u.type === 'villager');
    const game = this.game;
    const p = game.players[PLAYER];

    if (hasVillager) {
      for (const type of BUILD_MENU) {
        const def = BUILDINGS[type];
        const locked = () => p.age < def.age;
        const usable = () => !locked() && canAfford(p.res, def.cost);
        const btn = this.button(def.icon, def.name,
          `${def.name}<br>${costHtml(def.cost)}${p.age < def.age ? `<br>Requires ${AGES[def.age - 1].name}` : ''}`,
          !usable(), costHtml(def.cost));
        btn.onclick = () => { if (usable()) this.input.startPlacement(type); else this.game.sound('error'); };
        this.dyn.push(() => btn.classList.toggle('disabled', !usable()));
        this.addCmd(btn);
      }
    }

    if (units.length) {
      // attack-move + stances for military selections
      const mil = units.filter(u => u.type !== 'villager');
      if (mil.length) {
        const am = this.button('\u2694\uFE0F', 'Atk-Move (A)', 'Attack-move: engage everything on the way<br>Press A then click a destination');
        am.onclick = () => this.input.armAttackMove();
        this.addCmd(am);
        // stance radio: aggressive / defensive / hold
        const stances = [
          ['\u{1F620}', 'Aggro', 'aggressive', 'Chase anything that comes close'],
          ['\u{1F6E1}', 'Defend', 'defensive', 'Fight back, then return to this position'],
          ['\u270B', 'Hold', 'hold', 'Never move; only hit what is in weapon range'],
        ];
        for (const [icon, label, stance, tip] of stances) {
          const sb = this.button(icon, label, tip);
          sb.onclick = () => { for (const u of mil) { u.stance = stance; u.post = null; } this.game.sound('command'); };
          this.dyn.push(() => sb.classList.toggle('stance-on', mil.every(u => u.stance === stance)));
          this.addCmd(sb);
        }
      }
      const stop = this.button('\u{1F6D1}', 'Stop (T)', 'Stop current order');
      stop.onclick = () => { for (const u of units) u.clearOrder(true); };
      this.addCmd(stop);
    }

    if (sel.length === 1 && first.isBuilding) {
      const b = first;
      if (b.complete && b.def.trains) {
        for (const ut of b.def.trains) {
          const udef = UNITS[ut];
          const usable = () => p.age >= udef.age && canAfford(p.res, udef.cost);
          const btn = this.button(udef.icon, udef.name,
            `Train ${udef.name}<br>${costHtml(udef.cost)}<br>HP ${udef.hp} · ATK ${udef.atk}${p.age < udef.age ? `<br>Requires ${AGES[udef.age - 1].name}` : ''}`,
            !usable(), costHtml(udef.cost));
          btn.onclick = () => {
            if (p.age < udef.age) { this.game.sound('error'); return; }
            if (!b.queueTrain(ut)) this.game.sound('error'); else this.game.sound('command');
          };
          this.dyn.push(() => btn.classList.toggle('disabled', !usable()));
          this.addCmd(btn);
        }
      }
      if (b.complete && b.def.researchesAge && p.age < AGES.length) {
        const next = AGES[p.age];
        const usable = () => !p.ageResearchInProgress && canAfford(p.res, next.cost);
        const btn = this.button('\u{1F3F0}', `Advance`, `Advance to ${next.name}<br>${costHtml(next.cost)}<br>${next.time}s`, !usable(), costHtml(next.cost));
        btn.onclick = () => { if (usable() && b.startAgeResearch()) this.game.sound('command'); else this.game.sound('error'); };
        this.dyn.push(() => btn.classList.toggle('disabled', !usable()));
        this.addCmd(btn);
      }
      // demolish: full refund while under construction, none once complete
      const del = this.button('\u{1F5D1}', b.complete ? 'Demolish' : 'Cancel',
        b.complete ? `Demolish this ${b.def.name} (no refund)` : `Cancel construction<br>full refund`);
      del.onclick = () => { game.deleteBuilding(b); this.input.select([]); };
      this.addCmd(del);
      // town bell on the TC: garrison nearby villagers / release them
      if (b.complete && b.type === 'towncenter') {
        const bell = this.button('\u{1F514}', (b.garrison?.length ? 'Release' : 'Bell'),
          b.garrison?.length ? `Release ${b.garrison.length} villagers` : 'Ring the bell: nearby villagers hide inside (they add arrows)');
        bell.onclick = () => { game.townBell(b); };
        this.addCmd(bell);
      }

      // production queue (progress widths patch live; cancel is identity-checked)
      if (b.researching) {
        const q = document.createElement('div');
        q.className = 'q-item';
        q.innerHTML = `<div class="prog"></div><span>\u{1F3F0}</span>`;
        const prog = q.querySelector('.prog');
        const patch = () => { if (b.researching) prog.style.width = (b.researching.t / b.researching.dur) * 100 + '%'; };
        patch(); this.dyn.push(patch);
        queueRow.appendChild(q);
      }
      b.trainQueue.forEach((ut, i) => {
        const q = document.createElement('div');
        q.className = 'q-item';
        q.title = 'Click to cancel';
        q.innerHTML = `<div class="prog"></div><span>${UNITS[ut].icon}</span>`;
        const prog = q.querySelector('.prog');
        const patch = () => { prog.style.width = (i === 0 && b.trainQueue[0] === ut ? (b.trainT / UNITS[ut].trainTime) * 100 : 0) + '%'; };
        patch(); this.dyn.push(patch);
        q.onclick = () => {
          // the queue may have shifted since render — cancel by identity
          const idx = b.trainQueue[i] === ut ? i : b.trainQueue.indexOf(ut);
          if (idx >= 0) b.cancelTrain(idx);
        };
        queueRow.appendChild(q);
      });
      if (b.complete && b.def.trains) {
        const hint = document.createElement('span');
        hint.style.cssText = 'font-size:11px;color:#9c8f6e;margin-left:4px';
        hint.textContent = b.trainQueue.length ? '' : 'Right-click ground/resource to set rally';
        queueRow.appendChild(hint);
      }
    }
  }

  // append a command button and give it the next free hotkey
  addCmd(btn) {
    const code = CARD_KEYS[this._keyIdx++];
    if (code) {
      this.hotkeys.set(code, btn);
      const k = document.createElement('span');
      k.className = 'key';
      k.textContent = code.slice(3);
      btn.appendChild(k);
    }
    this.el.cmdPanel.appendChild(btn);
  }

  button(icon, label, tooltip, disabled = false, cost = '') {
    const btn = document.createElement('button');
    btn.className = 'cmd-btn' + (disabled ? ' disabled' : '');
    btn.innerHTML = `<span>${icon}</span><span class="lbl">${label}</span>` +
      (cost ? `<span class="cost">${cost}</span>` : '') +
      `<div class="tooltip">${tooltip}</div>`;
    return btn;
  }
}
