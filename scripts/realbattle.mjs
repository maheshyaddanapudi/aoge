import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4193 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4193/aoge/', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click());
await page.waitForTimeout(3500);
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  const types = ['militia','archer','knight'];
  for (let i = 0; i < 12; i++) {
    g.spawnUnit(types[i%3], 0, tc.cx - 5 + (i%4)*2, tc.cz + 8 + ((i/4)|0)*1.5);
    g.spawnUnit(types[i%3], 1, tc.cx - 5 + (i%4)*2, tc.cz + 18 + ((i/4)|0)*1.5);
  }
  for (const u of g.units) if (u.type !== 'villager') {
    const foe = g.nearestEnemy(u.owner, u.x, u.z, 999, false);
    if (foe) u.orderAttack(foe);
  }
  window.__rtsCam.jumpTo(tc.cx, tc.cz + 13); window.__rtsCam.minDist = 6; window.__rtsCam.dist = 14;
});
// run real frames so they close and fight
for (let i = 0; i < 30; i++) { await page.evaluate(() => { for (let k=0;k<5;k++) window.__game.update(0.03); }); await page.waitForTimeout(40); }
const stats = await page.evaluate(() => {
  const g = window.__game;
  const fighting = g.units.filter(u => u.state === 'fighting');
  const actions = {};
  for (const u of fighting) { const a = u.actionName || 'none'; actions[a] = (actions[a]||0)+1; }
  return { totalUnits: g.units.length, fighting: fighting.length, actionsInUse: actions };
});
console.log('battle:', JSON.stringify(stats));
await page.waitForTimeout(300);
await page.screenshot({ path: 'scripts/shot-realbattle.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
