import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4186 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
await page.goto('http://localhost:4186/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal');
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  const tree = g.findNearestNode('wood', tc.cx, tc.cz, 60);
  const vills = g.units.filter(u => u.owner === 0 && u.type === 'villager');
  const before = tree.amount;
  vills.forEach(v => v.orderGather(tree));
  let removed = false;
  // run until the tree depletes
  for (let i = 0; i < 4000 && !removed; i++) { g.update(0.05); if (tree.dead) removed = true; }
  const woodGained = g.players[0].res.wood - 220;
  return { startAmount: before, treeDepleted: tree.dead, woodGained };
});
console.log('chop test:', JSON.stringify(r));
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
