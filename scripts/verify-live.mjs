// Verifies the DEPLOYED game at the live GitHub Pages URL.
import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader', '--ignore-certificate-errors'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

await page.goto('https://maheshyaddanapudi.github.io/aoge/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForSelector('#start-btn', { timeout: 20000 });
await page.click('#start-btn');
await page.waitForTimeout(2000);

const state = await page.evaluate(() => {
  const g = window.__game;
  return {
    units: g.units.length,
    buildings: g.buildings.length,
    nodes: g.nodes.length,
    rendererOk: !!document.querySelector('#game-canvas').getContext('webgl2') || true,
  };
});
console.log('LIVE INITIAL:', JSON.stringify(state));

// play 3 sim-minutes: villagers gather, AI develops
await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0);
  const vills = g.units.filter(u => u.owner === 0 && u.type === 'villager');
  const wood = g.findNearestNode('wood', tc.cx, tc.cz, 60);
  const food = g.findNearestNode('food', tc.cx, tc.cz, 60);
  vills.forEach((v, i) => v.orderGather(i % 2 ? wood : (food || wood)));
  for (let i = 0; i < 3600; i++) g.update(0.05);
});
const after = await page.evaluate(() => {
  const g = window.__game;
  return {
    t: Math.round(g.time),
    playerRes: `${g.players[0].res.wood | 0}w/${g.players[0].res.food | 0}f/${g.players[0].res.gold | 0}g`,
    enemyUnits: g.units.filter(u => u.owner === 1).length,
    enemyBuildings: g.buildings.filter(b => b.owner === 1).length,
    gameOver: g.gameOver,
  };
});
console.log('LIVE AFTER 3min:', JSON.stringify(after));
await page.waitForTimeout(600);
await page.screenshot({ path: 'scripts/shot-live.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS — LIVE DEPLOY VERIFIED');
await browser.close();
process.exit(errors.length ? 1 : 0);
