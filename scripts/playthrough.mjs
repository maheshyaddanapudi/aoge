// Real-input playthrough: drives the actual game UI (mouse clicks, box-select
// drags, right-click commands, build/train buttons, keyboard) to play an Easy
// game from start to victory, recording the session to video. No game-state
// API calls issue commands — only real input events. (Reads game state to
// decide *what* to click, the way a human reads the screen, and uses the
// camera helper for spectator framing.)

import { chromium } from 'playwright';
import { preview } from 'vite';
import fs from 'node:fs';

const PORT = 4200;
const VIDEO_DIR = 'scripts/video';
fs.rmSync(VIDEO_DIR, { recursive: true, force: true });
fs.mkdirSync(VIDEO_DIR, { recursive: true });

const server = await preview({ preview: { port: PORT } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const context = await browser.newContext({
  viewport: { width: 1024, height: 576 },
  recordVideo: { dir: VIDEO_DIR, size: { width: 1024, height: 576 } },
});
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));

const log = (...a) => console.log(`[${(performance.now() / 1000).toFixed(1)}s]`, ...a);
const sleep = (ms) => page.waitForTimeout(ms);

// viewport + safe play area (HUD bottombar is ~178px tall)
const VW = 1024, VH = 576, HUD_TOP = VH - 186;

// --- helpers ----------------------------------------------------------------
const state = () => page.evaluate(() => {
  const g = window.__game;
  const mine = (t) => g.units.filter(u => u.owner === 0 && !u.dead && (!t || u.type === t));
  const myB = (t) => g.buildings.filter(b => b.owner === 0 && !b.dead && (!t || b.type === t));
  const enemyB = g.buildings.filter(b => b.owner === 1 && !b.dead);
  const p = g.players[0];
  return {
    over: g.gameOver, won: g.gameOver && enemyB.length === 0,
    res: { wood: p.res.wood | 0, food: p.res.food | 0, gold: p.res.gold | 0 },
    pop: `${p.popUsed}/${p.popCap}`, popUsed: p.popUsed, popCap: p.popCap,
    vills: mine('villager').length,
    idleVills: mine('villager').filter(u => u.state === 'idle').length,
    militia: mine('militia').length,
    barracks: myB('barracks').length, barracksDone: myB('barracks').filter(b => b.complete).length,
    houses: myB('house').length,
    enemyBuildings: enemyB.length,
  };
});

const proj = (wx, wy, wz) => page.evaluate(([wx, wy, wz]) => window.__project(wx, wy, wz), [wx, wy, wz]);

// camera framing (spectator) — not a gameplay command
const frame = (wx, wz, dist = 48) => page.evaluate(([wx, wz, dist]) => {
  window.__rtsCam.jumpTo(wx, wz); window.__rtsCam.dist = dist;
}, [wx, wz, dist]);

const myTC = () => page.evaluate(() => {
  const b = window.__game.buildings.find(b => b.owner === 0 && b.type === 'towncenter' && !b.dead);
  return b ? { cx: b.cx, cz: b.cz, gx: b.gx, gy: b.gy } : null;
});
const enemyTarget = () => page.evaluate(() => {
  const list = window.__game.buildings.filter(b => b.owner === 1 && !b.dead);
  const tc = list.find(b => b.type === 'towncenter') || list[0];
  return tc ? { cx: tc.cx, cz: tc.cz, n: list.length } : null;
});

// positions of my villagers / militia for box-select
const unitScreens = (type) => page.evaluate((type) => {
  const g = window.__game;
  return g.units.filter(u => u.owner === 0 && !u.dead && u.type === type)
    .map(u => window.__project(u.x, u.group.position.y + 1, u.z))
    .filter(s => s.z < 1);
}, type);

async function boxSelect(screens, pad = 26) {
  if (!screens.length) return false;
  const xs = screens.map(s => s.x), ys = screens.map(s => s.y);
  let x0 = Math.max(2, Math.min(...xs) - pad), y0 = Math.max(2, Math.min(...ys) - pad);
  let x1 = Math.min(VW - 4, Math.max(...xs) + pad), y1 = Math.min(HUD_TOP, Math.max(...ys) + pad);
  await page.mouse.move(x0, y0);
  await page.mouse.down();
  await page.mouse.move((x0 + x1) / 2, (y0 + y1) / 2, { steps: 4 });
  await page.mouse.move(x1, y1, { steps: 6 });
  await page.mouse.up();
  await sleep(70);
  return true;
}

async function rightClickWorld(wx, wz, wy = 1) {
  const s = await proj(wx, wy, wz);
  if (s.z >= 1 || s.x < 2 || s.x > VW - 2 || s.y < 2 || s.y > HUD_TOP) return false;
  await page.mouse.move(s.x, s.y);
  await page.mouse.click(s.x, s.y, { button: "right" });
  await sleep(70);
  return true;
}

async function clickWorld(wx, wz, wy = 1) {
  const s = await proj(wx, wy, wz);
  if (s.z >= 1) return false;
  await page.mouse.click(s.x, s.y);
  await sleep(70);
  return true;
}

// click a command-card button by its visible label
async function clickCmd(label) {
  const ok = await page.evaluate((label) => {
    const btn = [...document.querySelectorAll('#cmd-panel .cmd-btn')]
      .find(b => b.querySelector('.lbl')?.textContent === label && !b.classList.contains('disabled'));
    if (!btn) return false;
    const r = btn.getBoundingClientRect();
    window.__btnXY = { x: r.x + r.width / 2, y: r.y + r.height / 2 };
    return true;
  }, label);
  if (!ok) return false;
  const xy = await page.evaluate(() => window.__btnXY);
  await page.mouse.click(xy.x, xy.y);
  await sleep(80);
  return true;
}

// find nearest resource node of a type to a point (returns world pos)
const nearestNode = (res, wx, wz) => page.evaluate(([res, wx, wz]) => {
  const g = window.__game;
  let best = null, bd = 1e9;
  for (const n of g.nodes) {
    if (n.dead || n.res !== res || n.amount <= 0) continue;
    const d = Math.hypot(n.wx - wx, n.wz - wz);
    if (d < bd) { bd = d; best = n; }
  }
  return best ? { wx: best.wx, wz: best.wz } : null;
}, [res, wx, wz]);

// find a valid build spot near a point for a given footprint size
const buildSpot = (wx, wz, size) => page.evaluate(([wx, wz, size]) => {
  const g = window.__game; const map = g.map;
  const [cgx, cgy] = map.worldToGrid(wx, wz);
  for (let r = 3; r < 18; r++) {
    for (let a = 0; a < 16; a++) {
      const ang = (a / 16) * Math.PI * 2 + r;
      const gx = Math.round(cgx + Math.cos(ang) * r) - (size >> 1);
      const gy = Math.round(cgy + Math.sin(ang) * r) - (size >> 1);
      if (map.canPlace(gx - 1, gy - 1, size + 2)) {
        const cx = (gx + size / 2) * 2, cz = (gy + size / 2) * 2;
        return { cx, cz };
      }
    }
  }
  return null;
}, [wx, wz, size]);

// place a building: select villagers, click build button, click spot
async function build(label, size, nearX, nearZ) {
  const vs = await unitScreens('villager');
  if (!(await boxSelect(vs))) return false;
  if (!(await clickCmd(label))) { await page.keyboard.press('Escape'); return false; }
  const spot = await buildSpot(nearX, nearZ, size);
  if (!spot) { await page.keyboard.press('Escape'); return false; }
  const s = await proj(spot.cx, 0.2, spot.cz);
  await page.mouse.move(s.x, s.y);
  await sleep(120);
  await page.mouse.click(s.x, s.y);
  await sleep(150);
  await page.keyboard.press('Escape');
  return true;
}

// select the town center (click it) and queue villagers / set rally
async function selectTC() {
  const tc = await myTC();
  return clickWorld(tc.cx, tc.cz, 3);
}

// select a building by world pos (click)
async function selectBuilding(wx, wz) { return clickWorld(wx, wz, 2); }

// control groups (keyboard) — robust selection regardless of camera/position
async function assignGroup(n) {
  await page.keyboard.down('Control');
  await page.keyboard.press('Digit' + n);
  await page.keyboard.up('Control');
  await sleep(70);
}
async function recall(n) { await page.keyboard.press('Digit' + n); await sleep(90); }

// place a building using the villager control group (group 1)
async function buildG(label, size, nearX, nearZ) {
  await recall(1);
  if (!(await clickCmd(label))) { await page.keyboard.press('Escape'); return false; }
  const spot = await buildSpot(nearX, nearZ, size);
  if (!spot) { await page.keyboard.press('Escape'); return false; }
  const s = await proj(spot.cx, 0.2, spot.cz);
  if (s.z >= 1) { await page.keyboard.press('Escape'); return false; }
  await page.mouse.move(s.x, s.y);
  await sleep(90);
  await page.mouse.click(s.x, s.y);
  await sleep(110);
  await page.keyboard.press('Escape');
  return true;
}

// ============================================================================
log('loading game…');
await page.goto(`http://localhost:${PORT}/aoge/?lite`, { waitUntil: 'networkidle' });
// wait for the unit pack so units are the animated models on camera
await page.waitForFunction(() => {
  const g = window.__game;
  return g && g.units.some(u => u.owner === 0 && u.mixer);
}, { timeout: 30000 }).catch(() => log('unit pack still loading; continuing'));

// --- start: click Easy, set 2x speed (real button clicks) ---
log('clicking Easy + 3x speed');
await page.click('#start-easy');
await sleep(400);
await page.click('.speed-btn[data-speed="3"]');
await sleep(300);

const tc = await myTC();
const baseFrame = () => frame(tc.cx, tc.cz + 4, 30);
await baseFrame();
await sleep(900);

// --- economy: select all villagers, make them group 1, send to food ---
log('villagers → group 1 → food');
await boxSelect(await unitScreens('villager'));
await assignGroup(1);
const berries = await nearestNode('food', tc.cx, tc.cz) || await nearestNode('wood', tc.cx, tc.cz);
if (berries) await rightClickWorld(berries.wx, berries.wz);

// --- build the barracks and let all villagers finish it (placing more
//     buildings now would pull every villager off and orphan the barracks) ---
log('build barracks');
await buildG('Barracks', 3, tc.cx - 8, tc.cz);
log('waiting for barracks to finish…');
for (let i = 0; i < 40; i++) {
  const s = await state();
  if (s.barracksDone > 0) { log('barracks complete'); break; }
  await sleep(1500);
}

async function barracksPos() {
  return page.evaluate(() => {
    const b = window.__game.buildings.find(x => x.owner === 0 && x.type === 'barracks' && !x.dead && x.complete);
    return b ? { cx: b.cx, cz: b.cz } : null;
  });
}

// Right-click a ground point reliably: zoom the camera out until the point
// projects clear of the HUD/edges (the downward pitch otherwise puts far
// points low on screen), then click.
async function rightClickGround(wx, wz, wy = 1) {
  for (const d of [78, 70, 90, 62, 104, 55]) {
    await frame(wx, wz, d);
    await sleep(750);
    const s = await proj(wx, wy, wz);
    if (s.z < 1 && s.x > 16 && s.x < VW - 16 && s.y > 16 && s.y < HUD_TOP - 6) {
      await page.mouse.move(s.x, s.y);
      await page.mouse.click(s.x, s.y, { button: 'right' });
      await sleep(200);
      return true;
    }
  }
  return false;
}

// Staging point just in front of the player base: militia rally here and mass
// safely (trickling one-at-a-time into the enemy base just gets them killed).
const e0 = await enemyTarget();
const _dx = e0.cx - tc.cx, _dz = e0.cz - tc.cz, _L = Math.hypot(_dx, _dz) || 1;
const stage = { x: tc.cx + (_dx / _L) * 9, z: tc.cz + (_dz / _L) * 9 };

// --- macro loop -------------------------------------------------------------
let rallySet = false;
let assaults = 0;
const T0 = performance.now();
const MAX_MS = 9 * 60 * 1000;

while (true) {
  const st = await state();
  if (st.over) { log('GAME OVER —', st.won ? 'VICTORY' : 'defeat'); break; }
  if (performance.now() - T0 > MAX_MS) { log('time budget reached'); break; }
  log(`res ${st.res.wood}/${st.res.food}/${st.res.gold} pop ${st.pop} militia ${st.militia} enemyB ${st.enemyBuildings}`);

  // -- base-side actions: housing + training (camera home, settled) --
  await baseFrame();
  await sleep(700);
  if (st.popCap - st.popUsed <= 4 && st.popCap < 80) {
    await buildG('House', 2, tc.cx + 6, tc.cz - 6);
  }
  const bpos = await barracksPos();
  if (bpos) {
    await selectBuilding(bpos.cx, bpos.cz);
    if (!rallySet) {
      // rally militia to the staging point near base so they gather safely
      if (await rightClickGround(stage.x, stage.z)) { rallySet = true; log('rally → staging set'); }
      await baseFrame();
      await sleep(700);
      await selectBuilding(bpos.cx, bpos.cz);
    }
    for (let i = 0; i < 5; i++) await clickCmd('Militia');
  }

  // -- mass then strike: once a wave is gathered at staging, box-select it
  //    (reliable at the base) and send the whole army at the enemy town centre.
  //    A combined wave + reinforcements overwhelm the base's defenders. --
  const need = assaults === 0 ? 14 : 9;
  if (st.militia >= need) {
    assaults++;
    log(`assault #${assaults} with ~${st.militia} militia`);
    await frame(tc.cx, tc.cz + 4, 34);
    await sleep(750);
    await boxSelect(await unitScreens('militia'), 40);
    const e = await enemyTarget();
    if (e) {
      // rightClickGround zooms onto the enemy and right-clicks the TC body
      // (wy=3) -> attack order; the army stays selected across the camera move
      const sent = await rightClickGround(e.cx, e.cz, 3);
      const eng = await page.evaluate(() => window.__game.units.filter(u => u.owner === 0 && (u.state === 'toAttack' || u.state === 'fighting' || u.order?.kind === 'attack')).length);
      log(`  attack sent=${sent} engaging=${eng}`);
      await sleep(2200);
    }
  } else if (rallySet) {
    // no wave yet — linger on the staging area for the recording
    await frame(stage.x, stage.z, 34);
    await sleep(900);
  }

  await sleep(400);
}

// final framing on the outcome
const fin = await state();
if (fin.won) {
  const last = await page.evaluate(() => {
    const b = window.__game.buildings.find(x => x.owner === 1) ||
              window.__game.buildings.find(x => x.owner === 0 && x.type === 'towncenter');
    return b ? { cx: b.cx, cz: b.cz } : null;
  });
  if (last) await frame(last.cx, last.cz, 40);
}
await sleep(2500); // let the Victory overlay show in the recording

log('result:', JSON.stringify(fin));
log(errors.length ? 'PAGE ERRORS: ' + errors.slice(0, 3).join(' | ') : 'no page errors');

await context.close();   // finalizes the video
const videoPath = await page.video().path().catch(() => null);
await browser.close();
await server.close();
console.log('VIDEO:', videoPath);
process.exit(fin.won ? 0 : 2);
