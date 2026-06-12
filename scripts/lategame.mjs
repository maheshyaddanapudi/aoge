// Verifies the AI exercises late-game systems when resources allow:
// ages 3-4, stable, siege workshop, knights and catapults.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4177 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.goto('http://localhost:4177/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(800);
const out = await page.evaluate(() => {
  const g = window.__game;
  // boost both players so age progression is resource-unconstrained;
  // keep player passive but indestructible-ish (give it a wall of towers? no — just watch AI)
  g.players[1].res = { wood: 99999, food: 99999, gold: 99999 };
  g.players[0].res = { wood: 99999, food: 99999, gold: 99999 };
  // make the player's TC very tanky so the game doesn't end before age 4
  const tc = g.buildings.find(b => b.owner === 0);
  tc.maxHp = 1e9; tc.hp = 1e9;
  const log = [];
  for (let s = 0; s < 1500; s++) {
    for (let i = 0; i < 20; i++) g.update(0.05);
    if (s % 150 === 0) {
      const e = g.players[1];
      log.push({
        t: s, age: e.age,
        b: [...new Set(g.buildings.filter(b => b.owner === 1).map(b => b.type))].join(','),
        u: [...new Set(g.units.filter(u => u.owner === 1).map(u => u.type))].join(','),
        army: g.units.filter(u => u.owner === 1 && u.type !== 'villager').length,
      });
    }
    if (g.players[1].age === 4 && g.units.some(u => u.owner === 1 && u.type === 'catapult')) {
      log.push({ done: 'AI reached Imperial with catapults at sim ' + s + 's' });
      break;
    }
  }
  return log;
});
console.log(JSON.stringify(out, null, 1));
console.log(errors.length ? 'ERRORS: ' + errors.join(';') : 'NO PAGE ERRORS');
await page.screenshot({ path: 'scripts/shot-lategame.png' });
await browser.close(); await server.close(); process.exit(0);
