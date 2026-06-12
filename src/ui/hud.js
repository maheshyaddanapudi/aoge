// DOM HUD: resource bar, alerts, selection panel, command card, game over.

import { PLAYER, AGES, UNITS, BUILDINGS, BUILD_MENU, canAfford } from '../config.js';
import { playSound } from '../audio.js';
import { stopMusic } from '../music.js';

const RES_ICONS = { wood: '\u{1FAB5}', food: '\u{1F356}', gold: '\u{1FA99}' };

function costHtml(cost) {
  if (!cost) return '';
  const parts = [];
  for (const r of ['wood', 'food', 'gold']) {
    if (cost[r]) parts.push(`${RES_ICONS[r]}${cost[r]}`);
  }
  return parts.join(' ');
}

export class HUD {
  constructor(game, input) {
    this.game = game;
    this.input = input;
    this.selection = [];
    this.refreshT = 0;

    this.el = {
      wood: document.getElementById('res-wood'),
      food: document.getElementById('res-food'),
      gold: document.getElementById('res-gold'),
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
    };

    game.onAlert = (msg, good) => this.alert(msg, good);
    game.onGameOver = (won) => this.showGameOver(won);
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
    this.renderSelection();
  }

  update(dt) {
    const p = this.game.players[PLAYER];
    this.el.wood.textContent = Math.floor(p.res.wood);
    this.el.food.textContent = Math.floor(p.res.food);
    this.el.gold.textContent = Math.floor(p.res.gold);
    this.el.pop.textContent = `${p.popUsed}/${p.popCap}`;
    this.el.age.textContent = AGES[p.age - 1].name + (p.ageResearchInProgress ? ' ⏳' : '');

    this.refreshT -= dt;
    if (this.refreshT <= 0) {
      this.refreshT = 0.3;
      this.renderSelection();
    }
  }

  renderSelection() {
    const sel = this.selection.filter(e => !e.dead);
    const { selTitle, selSub, selCards, queueRow, cmdPanel } = this.el;
    selCards.innerHTML = '';
    queueRow.innerHTML = '';
    cmdPanel.innerHTML = '';

    if (!sel.length) {
      selTitle.textContent = 'No selection';
      selSub.textContent = 'Left-click or drag to select your units.';
      return;
    }

    const first = sel[0];
    if (sel.length === 1) {
      const def = first.def;
      selTitle.textContent = def.name + (first.owner !== PLAYER ? ' (enemy)' : '');
      let sub = `HP ${Math.ceil(first.hp)}/${first.maxHp}`;
      if (first.isBuilding && !first.complete) sub += ` — under construction ${Math.floor(first.progress * 100)}%`;
      if (first.isUnit && first.carry?.amt > 0) sub += ` — carrying ${Math.floor(first.carry.amt)} ${first.carry.res}`;
      if (first.isUnit && def.atk) sub += ` — ATK ${def.atk}`;
      selSub.textContent = sub;
    } else {
      selTitle.textContent = `${sel.length} units selected`;
      selSub.textContent = '';
    }

    // unit cards
    for (const e of sel.slice(0, 21)) {
      const card = document.createElement('div');
      card.className = 'sel-card';
      card.innerHTML = `<span>${e.def.icon}</span><div class="hpbar"><div style="width:${Math.max(3, (e.hp / e.maxHp) * 100)}%"></div></div>`;
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
        const locked = p.age < def.age;
        const afford = canAfford(p.res, def.cost);
        const btn = this.button(def.icon, def.name, `${def.name}<br>${costHtml(def.cost)}${locked ? `<br>Requires ${AGES[def.age - 1].name}` : ''}`, locked || !afford);
        if (!locked && afford) btn.onclick = () => this.input.startPlacement(type);
        cmdPanel.appendChild(btn);
      }
    }

    if (units.length) {
      const stop = this.button('\u{1F6D1}', 'Stop (T)', 'Stop current order');
      stop.onclick = () => { for (const u of units) u.clearOrder(); };
      cmdPanel.appendChild(stop);
    }

    if (sel.length === 1 && first.isBuilding && first.complete) {
      const b = first;
      if (b.def.trains) {
        for (const ut of b.def.trains) {
          const udef = UNITS[ut];
          const locked = p.age < udef.age;
          const afford = canAfford(p.res, udef.cost);
          const btn = this.button(udef.icon, udef.name,
            `Train ${udef.name}<br>${costHtml(udef.cost)}<br>HP ${udef.hp} · ATK ${udef.atk}${locked ? `<br>Requires ${AGES[udef.age - 1].name}` : ''}`,
            locked || !afford);
          if (!locked) btn.onclick = () => { if (!b.queueTrain(ut)) this.game.sound('error'); else this.game.sound('command'); this.renderSelection(); };
          cmdPanel.appendChild(btn);
        }
      }
      if (b.def.researchesAge && p.age < AGES.length) {
        const next = AGES[p.age];
        const busy = p.ageResearchInProgress;
        const afford = canAfford(p.res, next.cost);
        const btn = this.button('\u{1F3F0}', `Advance`, `Advance to ${next.name}<br>${costHtml(next.cost)}<br>${next.time}s`, busy || !afford);
        if (!busy && afford) btn.onclick = () => { if (b.startAgeResearch()) { this.game.sound('command'); this.renderSelection(); } };
        cmdPanel.appendChild(btn);
      }
      // production queue
      if (b.researching) {
        const q = document.createElement('div');
        q.className = 'q-item';
        const pct = (b.researching.t / b.researching.dur) * 100;
        q.innerHTML = `<div class="prog" style="width:${pct}%"></div><span>\u{1F3F0}</span>`;
        queueRow.appendChild(q);
      }
      b.trainQueue.forEach((ut, i) => {
        const q = document.createElement('div');
        q.className = 'q-item';
        q.title = 'Click to cancel';
        const pct = i === 0 ? (b.trainT / UNITS[ut].trainTime) * 100 : 0;
        q.innerHTML = `<div class="prog" style="width:${pct}%"></div><span>${UNITS[ut].icon}</span>`;
        q.onclick = () => { b.cancelTrain(i); this.renderSelection(); };
        queueRow.appendChild(q);
      });
      if (b.def.trains) {
        const hint = document.createElement('span');
        hint.style.cssText = 'font-size:11px;color:#9c8f6e;margin-left:4px';
        hint.textContent = b.trainQueue.length ? '' : 'Right-click ground/resource to set rally';
        queueRow.appendChild(hint);
      }
    }
  }

  button(icon, label, tooltip, disabled = false) {
    const btn = document.createElement('button');
    btn.className = 'cmd-btn' + (disabled ? ' disabled' : '');
    btn.innerHTML = `<span>${icon}</span><span class="lbl">${label}</span><div class="tooltip">${tooltip}</div>`;
    return btn;
  }
}
