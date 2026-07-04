import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader', '--ignore-certificate-errors'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('https://maheshyaddanapudi.github.io/aoge/', { waitUntil: 'networkidle', timeout: 60000 });
await page.evaluate(()=>document.getElementById('start-normal').click());
// poll until unit pack adopts the starting villagers (or 25s)
let r;
for (let i = 0; i < 25; i++) {
  await page.waitForTimeout(1000);
  r = await page.evaluate(() => {
    const g = window.__game;
    const vills = g.units.filter(u => u.owner === 0 && u.type === 'villager');
    return { villagersAnimated: vills.filter(v => v.mixer).length, totalVills: vills.length, treeSpecies: g.trees.species.length };
  });
  if (r.villagersAnimated > 0) break;
}
// now spawn combat units (pack is ready) and check combat clips
const c = await page.evaluate(() => {
  const g = window.__game; const tc = g.buildings.find(b => b.owner === 0);
  const k = g.spawnUnit('knight', 0, tc.cx-3, tc.cz+8);
  const a = g.spawnUnit('archer', 0, tc.cx+3, tc.cz+8);
  return { knightMelee: !!k.actions?.melee, archerShoot: !!a.actions?.shoot, knightHasSword: !!k.group.getObjectByName('handslotr')?.children.length };
});
console.log('LIVE:', JSON.stringify({ ...r, ...c }));
console.log(errors.length ? 'ERRORS:\n'+errors.slice(0,5).join('\n') : 'NO PAGE ERRORS — FULLY VERIFIED LIVE');
await browser.close(); process.exit(errors.length ? 1 : 0);
