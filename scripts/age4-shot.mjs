import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4183 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4183/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(2500); // give pack models time to load
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  g.players[0].res = { wood: 9999, food: 9999, gold: 9999 };
  const spot = (s, dx, dz) => {
    for (let r = 3; r < 18; r++) for (let a = 0; a < 24; a++) {
      const gx = Math.round(tc.gx + dx + Math.cos(a/24*6.28)*r), gy = Math.round(tc.gy + dz + Math.sin(a/24*6.28)*r);
      if (g.map.canPlace(gx, gy, s)) return [gx, gy];
    }
  };
  for (const [t, s, dx, dz] of [['house',2,6,2],['house',2,-6,3],['barracks',3,8,-4],['archeryrange',3,-8,-4],['farm',2,5,8],['farm',2,-5,8],['tower',1,10,4],['storehouse',2,0,10],['stable',3,12,8],['siegeworkshop',3,-12,8]]) {
    const b = g.placeBuilding(0, t, ...spot(s, dx, dz), true);
  }
  g.recalcPop(0);
  // jump to Imperial Age for SecondAge models
  g.advanceAge(0, 4);
  const vills = g.units.filter(u => u.owner === 0 && u.type === 'villager');
  const wood = g.findNearestNode('wood', tc.cx, tc.cz, 60);
  vills.forEach(v => v.orderGather(wood));
  for (let i = 0; i < 600; i++) g.update(0.05);
  window.__rtsCam.jumpTo(tc.cx, tc.cz + 5);
  window.__rtsCam.dist = 44;
});
await page.waitForTimeout(1200);
await page.screenshot({ path: 'scripts/shot-age4.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
