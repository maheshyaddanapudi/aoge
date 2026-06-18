import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4185 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4185/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(2500);
// find a forest cluster and aim the camera at it
const where = await page.evaluate(() => {
  const g = window.__game;
  const trees = g.nodes.filter(n => n.type === 'tree' && !n.dead);
  // pick the densest 8x8 area
  let best = null, bestCount = 0;
  for (const t of trees) {
    let c = 0;
    for (const o of trees) if (Math.abs(o.wx - t.wx) < 9 && Math.abs(o.wz - t.wz) < 9) c++;
    if (c > bestCount) { bestCount = c; best = t; }
  }
  window.__rtsCam.jumpTo(best.wx, best.wz + 4);
  window.__rtsCam.dist = 11;
  return { count: trees.length, cluster: bestCount };
});
await page.waitForTimeout(900);
await page.screenshot({ path: 'scripts/shot-trees.png' });
console.log('trees:', JSON.stringify(where));
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
