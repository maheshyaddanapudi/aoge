// Tier 3a probes: deterministic fixed-tick sim, command log recording,
// replay round-trip fidelity, spectator lockout.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4269 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const BASE='http://localhost:4269/aoge/';
const R=[];

// deterministic driver: never click start (rAF stays out of the sim);
// drive g.update manually and issue commands at exact ticks
const SCRIPT = `(()=>{
  const g=window.__game;
  g.cmdLog=[];
  const tc=g.buildings.find(b=>b.owner===0);
  const v=g.units.filter(u=>u.owner===0&&u.type==='villager').map(u=>u.id);
  for(let i=0;i<120;i++)g.update(0.05);
  g.exec({k:'move', ids:[v[0],v[1]], x:tc.cx+12, z:tc.cz+12});
  const n=g.nodes.find(n=>n.type==='tree'&&!n.dead&&Math.hypot(n.wx-tc.cx,n.wz-tc.cz)<40);
  g.exec({k:'gather', ids:[v[2]], n:n.id});
  for(let i=0;i<200;i++)g.update(0.05);
  g.exec({k:'train', b:tc.id, u:'villager'});
  for(let i=0;i<400;i++)g.update(0.05);
  return { t:g.tick, h:g.stateHash(), log:g.cmdLog };
})()`;

// D1: identical seed + identical command script => identical state hash
await page.goto(BASE+'?seed=det1', { waitUntil: 'networkidle' });
const run1=await page.evaluate(SCRIPT);
await page.goto(BASE+'?seed=det1', { waitUntil: 'networkidle' });
const run2=await page.evaluate(SCRIPT);
await page.goto(BASE+'?seed=det2', { waitUntil: 'networkidle' });
const run3=await page.evaluate(SCRIPT);
R.push(`D1 determinism: h1=${run1.h} h2=${run2.h} otherSeed=${run3.h} ${run1.h===run2.h&&run1.h!==run3.h?'PASS':'FAIL'}`);

// D2: replay round-trip — feed the recorded log through ?replay and land on
// the exact same hash at the same tick
await page.evaluate((rec)=>{
  localStorage.setItem('aoge-replay', JSON.stringify({
    seed:'det1', size:'medium', biome:'green', foes:'1', difficulty:'normal', log:rec.log,
  }));
}, run1);
await page.goto(BASE+'?replay=1&seed=det1', { waitUntil: 'networkidle' });
const rep=await page.evaluate((T)=>{
  const g=window.__game;
  while(g.tick<T)g.update(0.05);
  return { h:g.stateHash(), mode:g.replayMode, blocked:g.exec({k:'trade',o:0,kind:'wood',dir:'sell'})===undefined };
}, run1.t);
R.push(`D2 replay: recordedHash=${run1.h} replayHash=${rep.h} spectatorBlocked=${rep.blocked} ${rep.h===run1.h&&rep.mode&&rep.blocked?'PASS':'FAIL'}`);

// D3: command log records tick-stamped entries; UI dispatch flows through exec
R.push(`D3 cmd-log: entries=${run1.log.length} tickStamped=${run1.log.every(c=>typeof c.t==='number')} kinds=${run1.log.map(c=>c.k).join(',')} ${run1.log.length===3&&run1.log.every(c=>typeof c.t==='number')?'PASS':'FAIL'}`);

// D4: fixed-tick main loop — real time advances the tick counter in TICK slices
await page.goto(BASE+'?seed=det1', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click());
// software GL + AO shader warm-up: the first frames can take seconds each
await page.waitForFunction(()=>window.__game.tick>0, null, { timeout: 30000 }).catch(()=>{});
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const t=g.tick, time=g.time;
  const slices=Math.abs(time - t*0.05) < 1e-6;
  return `D4 fixed-tick: tick=${t} time=${time.toFixed(2)} time==tick*0.05=${slices} ${t>0&&slices?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
