import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4180 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4180/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(1000);
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  const vills = g.units.filter(u => u.owner === 0 && u.type === 'villager');
  const wood = g.findNearestNode('wood', tc.cx, tc.cz, 60);
  const food = g.findNearestNode('food', tc.cx, tc.cz, 60);
  vills.forEach((v, i) => v.orderGather(i % 2 ? wood : (food || wood)));
  tc.queueTrain('villager'); tc.queueTrain('villager');
  const spot = (s, dx, dz) => {
    for (let r = 3; r < 14; r++) for (let a = 0; a < 20; a++) {
      const gx = Math.round(tc.gx + dx + Math.cos(a/20*6.28)*r), gy = Math.round(tc.gy + dz + Math.sin(a/20*6.28)*r);
      if (g.map.canPlace(gx, gy, s)) return [gx, gy];
    }
  };
  g.players[0].res.wood += 400;
  const h = g.placeBuilding(0, 'house', ...spot(2, 6, 2));
  const ba = g.placeBuilding(0, 'barracks', ...spot(3, -6, 4));
  for (let i = 0; i < 2600; i++) g.update(0.05);
  window.__rtsCam.jumpTo(tc.cx + 2, tc.cz + 5);
  window.__rtsCam.dist = 36;
});
await page.waitForTimeout(1200);
await page.screenshot({ path: 'scripts/shot-visual.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
