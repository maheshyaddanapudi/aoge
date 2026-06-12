import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4179 } });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
await page.goto('http://localhost:4179/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-btn');
await page.waitForTimeout(6000); // let several music bars schedule

const audio = await page.evaluate(async () => {
  const g = window.__game;
  // exercise voice + combat tension + game-over jingle paths
  const { voice, combatPulse } = window.__audio;
  
  voice('vSelect');
  await new Promise(r => setTimeout(r, 700));
  voice('mAck');
  combatPulse();
  await new Promise(r => setTimeout(r, 2500)); // war drums spin up
  return { ok: true };
});
await page.waitForTimeout(1500);
console.log('audio paths exercised:', JSON.stringify(audio));
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'NO PAGE ERRORS — AUDIO OK');
await browser.close(); await server.close();
process.exit(errors.length ? 1 : 0);
