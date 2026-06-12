import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4181 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
await page.goto('http://localhost:4181/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(800);
// spawn a big battle for worst-case load
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  g.players[0].res = { wood: 9999, food: 9999, gold: 9999 };
  g.players[1].res = { wood: 9999, food: 9999, gold: 9999 };
  for (let i = 0; i < 30; i++) {
    g.spawnUnit(['militia','archer','knight','catapult'][i%4], 0, tc.cx + 8 + (i%6)*2, tc.cz + 8 + ((i/6)|0)*2);
    g.spawnUnit(['militia','archer','knight'][i%3], 1, tc.cx + 8 + (i%6)*2, tc.cz + 24 + ((i/6)|0)*2);
  }
  for (const u of g.units.filter(u => u.owner === 1)) u.orderAttackMove(tc.cx, tc.cz);
  window.__rtsCam.jumpTo(tc.cx + 8, tc.cz + 14);
  window.__rtsCam.dist = 42;
});
await page.waitForTimeout(3500); // battle underway, smoke + projectiles
const fps = await page.evaluate(() => new Promise(res => {
  let n = 0;
  const t0 = performance.now();
  const tick = () => { n++; if (performance.now() - t0 < 4000) requestAnimationFrame(tick); else res((n / 4).toFixed(1)); };
  requestAnimationFrame(tick);
}));
console.log('FPS during 60-unit battle (software GL):', fps);
await page.screenshot({ path: 'scripts/shot-battle.png' });
console.log(errors.length ? 'ERRORS: ' + errors.join(' | ') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
