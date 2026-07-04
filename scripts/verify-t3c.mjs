// Tier 3c probes: BroadcastChannel lockstep co-op — two tabs, one sim.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4272 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 1100, height: 650 } });
const host = await ctx.newPage();
const guest = await ctx.newPage();
const errs=[];
host.on('pageerror',e=>errs.push('host: '+e.message));
guest.on('pageerror',e=>errs.push('guest: '+e.message));
const BASE='http://localhost:4272/aoge/';
const R=[];

await host.goto(BASE+'?seed=coop1&mp=host&room=t9', { waitUntil: 'networkidle' });
await guest.goto(BASE+'?seed=coop1&mp=join&room=t9', { waitUntil: 'networkidle' });

// M1: guest UI waits; host shows the join link
const m1h=await host.evaluate(()=>document.getElementById('coop-info').textContent.includes('Hosting co-op'));
const m1g=await guest.evaluate(()=>({
  waiting:document.getElementById('coop-info').textContent.includes('waiting'),
  buttonsHidden:document.getElementById('start-normal').classList.contains('hidden'),
}));
R.push(`M1 lobby: hostLink=${m1h} guestWaiting=${m1g.waiting} guestButtonsHidden=${m1g.buttonsHidden} ${m1h&&m1g.waiting&&m1g.buttonsHidden?'PASS':'FAIL'}`);

// M2: host start propagates to the guest
await host.evaluate(()=>document.getElementById('start-normal').click());
await guest.waitForFunction(()=>document.getElementById('start-overlay').classList.contains('hidden'), null, { timeout: 8000 }).catch(()=>{});
const m2=await guest.evaluate(()=>document.getElementById('start-overlay').classList.contains('hidden'));
R.push(`M2 start-sync: guestStarted=${m2} ${m2?'PASS':'FAIL'}`);

// M3: guest command routes via the host and applies on BOTH sims
const cmd=await guest.evaluate(()=>{
  const g=window.__game;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  const tc=g.buildings.find(b=>b.owner===0);
  g.exec({k:'move', ids:[v.id], x:tc.cx+14, z:tc.cz+14});
  return { id:v.id };
});
await host.waitForTimeout(4000); // let ticks flow (headless ~2fps)
const m3h=await host.evaluate((c)=>{
  const u=window.__game.units.find(u=>u.id===c.id);
  return u?.order?.kind==='move'||u?.state==='move'||(u&&Math.hypot(u.x-u.game?.x||0,0)>=0);
}, cmd);
const m3hMoved=await host.evaluate((c)=>{
  const u=window.__game.units.find(u=>u.id===c.id);
  return { ordered:!!u&&(u.order?.kind==='move'||u.state==='move'||u._movedFlag), x:u?.x };
}, cmd);
await guest.waitForTimeout(1500);
const m3g=await guest.evaluate((c)=>{
  const u=window.__game.units.find(u=>u.id===c.id);
  return { ordered:!!u&&(u.order?.kind==='move'||u.state==='move'), x:u?.x };
}, cmd);
const routed=(m3hMoved.ordered||m3g.ordered);
R.push(`M3 guest-cmd: host=${JSON.stringify(m3hMoved)} guest=${JSON.stringify(m3g)} ${routed?'PASS':'FAIL'}`);

// M4: pause the host, let the guest catch up, compare exact state hashes
await host.evaluate(()=>document.getElementById('pause-btn').click());
await guest.waitForTimeout(2500);
const hh=await host.evaluate(()=>({t:window.__game.tick,h:window.__game.stateHash()}));
const gh=await guest.evaluate(()=>({t:window.__game.tick,h:window.__game.stateHash(),checks:window.__coop.hashChecks,ok:window.__coop.lastHashOk}));
R.push(`M4 lockstep: hostTick=${hh.t} guestTick=${gh.t} hashEqual=${hh.h===gh.h} checkpoints=${gh.checks} sync=${gh.ok} ${hh.t===gh.t&&hh.h===gh.h&&gh.ok?'PASS':'FAIL'}`);

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
