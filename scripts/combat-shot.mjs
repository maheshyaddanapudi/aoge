import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4188 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4188/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(4000);

async function pose(state, t, label) {
  return page.evaluate(({ state, t }) => {
    const g = window.__game;
    const tc = g.buildings.find(b => b.owner === 0);
    // clear any posed units from a previous frame
    for (const u of (window.__posed || [])) { g.scene.remove(u.group); }
    window.__posed = [];
    const cfg = state === 'melee'
      ? [['militia', 'melee'], ['knight', 'melee']]
      : [['archer', 'shoot'], ['villager', 'work']];
    cfg.forEach(([type, act], i) => {
      const u = g.spawnUnit(type, 0, tc.cx - 2 + i * 4, tc.cz + 10);
      g.units.splice(g.units.indexOf(u), 1); // freeze: exclude from sim
      u.group.position.set(tc.cx - 2 + i * 4, g.map.heightAt(tc.cx - 2 + i * 4, tc.cz + 10), tc.cz + 10);
      u.group.rotation.y = Math.PI * 0.78; // 3/4 view
      const a = u.actions?.[act];
      if (a) { a.reset(); a.play(); a.setEffectiveWeight(1); a.time = t; }
      if (u.mixer) u.mixer.update(0); else window.__noMixer = (window.__noMixer||0)+1;
      window.__posed.push(u);
    });
    window.__rtsCam.jumpTo(tc.cx, tc.cz + 9.6);
    window.__rtsCam.minDist = 3; window.__rtsCam.dist = 6;
  }, { state, t });
}

await pose('melee', 0.32);
await page.waitForTimeout(1000);
await page.screenshot({ path: 'scripts/shot-melee.png' });

await pose('shoot', 0.42);
await page.waitForTimeout(1000);
await page.screenshot({ path: 'scripts/shot-bow.png' });

console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close(); await server.close(); process.exit(errors.length ? 1 : 0);
