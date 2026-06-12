// Headless playthrough: the "player" plays a scripted decent game via the
// game API while the AI plays normally. Verifies economy, ages, combat,
// and captures screenshots for visual review.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4173 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

await page.goto('http://localhost:4173/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(1000);

// Install a scripted player that acts every sim-second.
await page.evaluate(() => {
  const g = window.__game;
  const me = 0;
  const myVills = () => g.units.filter(u => u.owner === me && u.type === 'villager' && !u.dead);
  const myArmy = () => g.units.filter(u => u.owner === me && u.type !== 'villager' && !u.dead);
  const myB = (t) => g.buildings.filter(b => b.owner === me && !b.dead && (!t || b.type === t));
  const tc = () => myB('towncenter')[0];

  window.__script = () => {
    const p = g.players[me];
    const T = tc();
    if (!T) return;
    // villagers: assign idle to resources round-robin
    const idle = myVills().filter(v => v.state === 'idle');
    for (const v of idle) {
      const res = ['wood', 'food', 'gold'][(Math.random() * 3) | 0];
      const n = g.findNearestNode(res, T.cx, T.cz, 70) || g.findNearestNode('wood', T.cx, T.cz, 70);
      if (n) v.orderGather(n);
    }
    // train villagers to 12
    if (myVills().length < 12 && T.trainQueue.length < 2) T.queueTrain('villager');
    // houses
    if (p.popCap - p.popUsed < 3 && !myB('house').some(h => !h.complete)) {
      const spot = g.ai.constructor.prototype.findSpot.call({ game: g }, T.cx + 10, T.cz + 10, 2);
      if (spot) {
        const b = g.placeBuilding(me, 'house', spot[0], spot[1]);
        if (b) { const v = myVills()[0]; if (v) v.orderBuild(b); }
      }
    }
    // barracks
    if (myB('barracks').length === 0 && p.res.wood >= 125) {
      const spot = g.ai.constructor.prototype.findSpot.call({ game: g }, T.cx - 10, T.cz, 3);
      if (spot) {
        const b = g.placeBuilding(me, 'barracks', spot[0], spot[1]);
        if (b) { const v = myVills()[0]; if (v) v.orderBuild(b); }
      }
    }
    // train militia
    for (const b of myB('barracks')) {
      if (b.complete && b.trainQueue.length < 2) b.queueTrain('militia');
    }
    // age up when possible
    if (!p.ageResearchInProgress && p.age < 4 && T.complete) T.startAgeResearch();
    // counterattack with a big army
    if (myArmy().length >= 12) {
      const eb = g.buildings.find(b => b.owner === 1 && !b.dead);
      if (eb) for (const u of myArmy()) {
        if (u.state === 'idle') u.orderAttackMove(eb.cx, eb.cz);
      }
    }
  };
});

const status = () => page.evaluate(() => {
  const g = window.__game;
  const p = g.players[0], e = g.players[1];
  const cnt = (o, t) => g.units.filter(u => u.owner === o && !u.dead && (t ? u.type === t : u.type !== 'villager')).length;
  return {
    t: Math.round(g.time),
    pAge: p.age, eAge: e.age,
    pRes: `${p.res.wood | 0}/${p.res.food | 0}/${p.res.gold | 0}`,
    pVill: cnt(0, 'villager'), pArmy: cnt(0),
    eVill: cnt(1, 'villager'), eArmy: cnt(1),
    pB: g.buildings.filter(b => b.owner === 0 && !b.dead).length,
    eB: g.buildings.filter(b => b.owner === 1 && !b.dead).length,
    over: g.gameOver,
  };
});

// run N sim-seconds with the script acting once per second
const run = (secs) => page.evaluate((secs) => {
  const g = window.__game;
  for (let s = 0; s < secs; s++) {
    window.__script();
    for (let i = 0; i < 20; i++) g.update(0.05);
    if (g.gameOver) break;
  }
}, secs);

await run(150);
console.log('t=150:', JSON.stringify(await status()));

// screenshot of busy player base
await page.evaluate(() => {
  const g = window.__game;
  const T = g.buildings.find(b => b.owner === 0 && b.type === 'towncenter');
  if (T) { window.__rtsCam.jumpTo(T.cx, T.cz); window.__rtsCam.dist = 34; }
});
await page.waitForTimeout(700);
await page.screenshot({ path: 'scripts/shot-base.png' });

await run(300);
console.log('t=450:', JSON.stringify(await status()));
await run(300);
console.log('t=750:', JSON.stringify(await status()));

// enemy base screenshot
await page.evaluate(() => {
  const g = window.__game;
  const eb = g.buildings.find(b => b.owner === 1 && b.type === 'towncenter') || g.buildings.find(b => b.owner === 1);
  if (eb) { window.__rtsCam.jumpTo(eb.cx, eb.cz); window.__rtsCam.dist = 38; }
});
await page.waitForTimeout(700);
await page.screenshot({ path: 'scripts/shot-enemy.png' });

await run(600);
console.log('t=1350:', JSON.stringify(await status()));
await run(600);
console.log('t=1950:', JSON.stringify(await status()));

await page.screenshot({ path: 'scripts/shot-final.png' });

if (errors.length) {
  console.log('ERRORS:\n' + errors.slice(0, 20).join('\n'));
  process.exitCode = 1;
} else console.log('NO PAGE ERRORS');

await browser.close();
await server.close();
process.exit(process.exitCode || 0);
