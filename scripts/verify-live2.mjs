import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader', '--ignore-certificate-errors'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('https://maheshyaddanapudi.github.io/aoge/', { waitUntil: 'networkidle', timeout: 60000 });
await page.click('#start-btn');
await page.waitForTimeout(5000); // let packs load
const r = await page.evaluate(() => {
  const g = window.__game;
  // spawn a quick fight to confirm weapons + combat clips load live
  const tc = g.buildings.find(b => b.owner === 0);
  const a = g.spawnUnit('knight', 0, tc.cx-3, tc.cz+8);
  const b = g.spawnUnit('archer', 0, tc.cx+3, tc.cz+8);
  return {
    treesLoaded: g.trees.ready && g.trees.species.length,
    knightAnimated: !!a.mixer, knightMelee: !!a.actions?.melee,
    archerAnimated: !!b.mixer, archerShoot: !!b.actions?.shoot,
    nodes: g.nodes.length, buildings: g.buildings.length,
  };
});
console.log('LIVE:', JSON.stringify(r));
console.log(errors.length ? 'ERRORS:\n' + errors.slice(0,5).join('\n') : 'NO PAGE ERRORS — LIVE VERIFIED');
await browser.close();
process.exit(errors.length ? 1 : 0);
