// Verifies real mouse interaction: click-select, box-select, right-click
// move/gather orders, and building placement via the command card.
import { chromium } from 'playwright';
import { preview } from 'vite';

const server = await preview({ preview: { port: 4174 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

await page.goto('http://localhost:4174/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(1200);

const screenOf = (sel) => page.evaluate((sel) => {
  const u = eval(sel);
  const cam = window.__rtsCam.camera;
  const v = window.__rtsCam.target.clone();
  v.set(u.x ?? u.cx, (u.group?.position.y ?? u.groundY) + 1, u.z ?? u.cz);
  v.project(cam);
  return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight };
}, sel);

// 1. click-select a villager
const vPos = await screenOf("window.__game.units.find(u=>u.owner===0&&u.type==='villager')");
await page.mouse.click(vPos.x, vPos.y);
await page.waitForTimeout(300);
const sel1 = await page.evaluate(() => document.getElementById('sel-title').textContent);
console.log('click-select:', sel1);

// 2. command card shows build buttons; click House then place it
const buttons = await page.evaluate(() =>
  [...document.querySelectorAll('#cmd-panel .cmd-btn .lbl')].map(b => b.textContent));
console.log('villager buttons:', buttons.slice(0, 6).join(', '), '…');
await page.evaluate(() => {
  [...document.querySelectorAll('#cmd-panel .cmd-btn')]
    .find(b => b.querySelector('.lbl')?.textContent === 'House')?.click();
});
await page.waitForTimeout(200);
// find a known-valid build spot near the TC and convert to screen coords
const spotPos = await page.evaluate(() => {
  const g = window.__game;
  const tc = g.buildings.find(b => b.owner === 0 && b.type === 'towncenter');
  for (let r = 4; r < 16; r++) {
    for (let a = 0; a < 24; a++) {
      const ang = (a / 24) * Math.PI * 2;
      const gx = Math.round(tc.gx + 2 + Math.cos(ang) * r) - 1;
      const gy = Math.round(tc.gy + 2 + Math.sin(ang) * r) - 1;
      if (g.map.canPlace(gx - 1, gy - 1, 4)) {
        const v = window.__rtsCam.target.clone();
        v.set((gx + 1) * 2, g.map.heightAt((gx + 1) * 2, (gy + 1) * 2), (gy + 1) * 2);
        v.project(window.__rtsCam.camera);
        if (Math.abs(v.x) < 0.85 && Math.abs(v.y) < 0.6) {
          return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight };
        }
      }
    }
  }
  return null;
});
console.log('build spot on screen:', spotPos);
await page.mouse.move(spotPos.x, spotPos.y);
await page.waitForTimeout(250);
await page.mouse.click(spotPos.x, spotPos.y);
await page.waitForTimeout(400);
const houses = await page.evaluate(() => window.__game.buildings.filter(b => b.owner === 0 && b.type === 'house').length);
console.log('houses placed by mouse:', houses);

// 3. box-select all villagers: compute bounding box of their screen positions
const box = await page.evaluate(() => {
  const g = window.__game;
  const cam = window.__rtsCam.camera;
  let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, n = 0;
  for (const u of g.units) {
    if (u.owner !== 0 || u.type !== 'villager') continue;
    const v = window.__rtsCam.target.clone().set(u.x, u.group.position.y + 1, u.z).project(cam);
    if (Math.abs(v.x) > 0.95 || Math.abs(v.y) > 0.8) continue;
    const sx = (v.x + 1) / 2 * innerWidth, sy = (1 - v.y) / 2 * innerHeight;
    x0 = Math.min(x0, sx); y0 = Math.min(y0, sy);
    x1 = Math.max(x1, sx); y1 = Math.max(y1, sy);
    n++;
  }
  return { x0: x0 - 30, y0: y0 - 40, x1: x1 + 30, y1: y1 + 20, n };
});
await page.mouse.move(box.x0, box.y0);
await page.mouse.down();
await page.mouse.move(box.x1, box.y1, { steps: 8 });
await page.mouse.up();
await page.waitForTimeout(300);
const boxCount = await page.evaluate(() => document.getElementById('sel-title').textContent);
console.log(`box-select (${box.n} on screen):`, boxCount);

// 4. right-click ground => move order
await page.mouse.click(900, 300, { button: 'right' });
await page.waitForTimeout(300);
const states = await page.evaluate(() =>
  window.__game.units.filter(u => u.owner === 0 && u.type === 'villager').map(u => u.state).join(','));
console.log('states after right-click move:', states);

// 5. select TC and train a villager via button
const tcPos = await screenOf("window.__game.buildings.find(b=>b.owner===0&&b.type==='towncenter')");
await page.mouse.click(tcPos.x, tcPos.y);
await page.waitForTimeout(300);
const tcTitle = await page.evaluate(() => document.getElementById('sel-title').textContent);
await page.evaluate(() => {
  [...document.querySelectorAll('#cmd-panel .cmd-btn')]
    .find(b => b.querySelector('.lbl')?.textContent === 'Villager')?.click();
});
await page.waitForTimeout(200);
const queued = await page.evaluate(() =>
  window.__game.buildings.find(b => b.owner === 0 && b.type === 'towncenter').trainQueue.length);
console.log('TC selected:', tcTitle, '| queue after train click:', queued);

await page.screenshot({ path: 'scripts/shot-interact.png' });
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS');
await browser.close();
await server.close();
process.exit(errors.length ? 1 : 0);
