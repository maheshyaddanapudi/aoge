import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4184 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
await page.goto('http://localhost:4184/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(2500);
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  // line up one of each unit type, walking down-screen
  const types = ['villager', 'militia', 'archer', 'knight', 'catapult'];
  types.forEach((t, i) => {
    const u = g.spawnUnit(t, 0, tc.cx - 6 + i * 3, tc.cz + 10);
    u.orderMove(tc.cx - 6 + i * 3, tc.cz + 18);
  });
  const e = g.spawnUnit('militia', 1, tc.cx + 8, tc.cz + 14);
  for (let i = 0; i < 30; i++) g.update(0.05);
  window.__rtsCam.jumpTo(tc.cx, tc.cz + 14);
  window.__rtsCam.dist = 19;
});
await page.waitForTimeout(900);
await page.screenshot({ path: 'scripts/shot-units.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
