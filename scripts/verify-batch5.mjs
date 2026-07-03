import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4256 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4256/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// G1: stone — nodes exist, villager mines it, counter rises, tower needs it
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const stones=g.nodes.filter(n=>n.res==='stone').length;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  const node=g.findNearestReachableNode('stone', v.x, v.z, 300);
  v.clearOrder(true); v.orderGather(node);
  const s0=g.players[0].res.stone;
  for(let i=0;i<2000;i++){g.update(0.05); if(g.players[0].res.stone>s0)break;}
  const gained=g.players[0].res.stone>s0;
  // tower affordability honors stone
  g.players[0].res={wood:500,food:500,gold:500,stone:0};
  const blocked=g.placeBuilding(0,'tower',5,5)===null;
  g.players[0].res.stone=200;
  return `G1 stone: nodes=${stones} mined=${gained} towerNeedsStone=${blocked} ${stones>0&&gained&&blocked?'PASS':'FAIL'}`;
}));

// G2: attack-move via armed click
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('militia',0,tc.cx+6,tc.cz+6);
  window.__input.select([m]);
  window.__input.armAttackMove();
  const s=window.__project(tc.cx+20,1,tc.cz+20);
  window.__input.fireAttackMove(s.x,s.y);
  const ok=m.order?.kind==='attackmove';
  return `G2 attack-move: armed+click -> order=${m.order?.kind} ${ok?'PASS':'FAIL'}`;
}));

// G3: shift-queued orders run in sequence
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('militia',0,tc.cx+4,tc.cz+8);
  window.__input.select([m]);
  window.__input.dispatchContext({point:{x:tc.cx+10,y:0,z:tc.cz+8}}, false);
  window.__input.dispatchContext({point:{x:tc.cx+10,y:0,z:tc.cz+16}}, true); // queued
  const q1=m.orderQueue?.length===1;
  for(let i=0;i<600;i++){g.update(0.05); if(Math.hypot(m.x-(tc.cx+10),m.z-(tc.cz+16))<3)break;}
  const arrived=Math.hypot(m.x-(tc.cx+10),m.z-(tc.cz+16))<3;
  return `G3 shift-queue: queued=${q1} reachedSecondWaypoint=${arrived} ${q1&&arrived?'PASS':'FAIL'}`;
}));

// G4: town bell garrisons villagers, TC releases them
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  for(const u of g.units) if(u.owner===0&&u.type==='villager') u.clearOrder(true);
  g.townBell(tc);
  for(let i=0;i<400;i++)g.update(0.05);
  const inside=tc.garrison?.length||0;
  const hidden=tc.garrison?.every(u=>!u.group.visible);
  g.townBell(tc); // release
  const out=(tc.garrison?.length||0)===0;
  const visible=g.units.filter(u=>u.owner===0&&u.type==='villager').every(u=>u.group.visible);
  return `G4 town-bell: garrisoned=${inside} hidden=${hidden} released=${out} visible=${visible} ${inside>0&&hidden&&out&&visible?'PASS':'FAIL'}`;
}));

// G5: pause freezes the sim
await page.keyboard.press('KeyP');
const t1=await page.evaluate(()=>window.__game.time);
await page.waitForTimeout(900);
const t2=await page.evaluate(()=>window.__game.time);
await page.keyboard.press('KeyP');
R.push(`G5 pause: time ${t1.toFixed(1)} -> ${t2.toFixed(1)} while paused ${t1===t2?'PASS':'FAIL'}`);

// G6: minimap ping on player damage + right-click command
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  g.lastPingT=-99;
  const mm=window.__minimap;
  const before=mm?mm.pings.length:-1;
  g.applyDamage(v, 1, null);
  const after=mm?mm.pings.length:-1;
  return `G6 minimap-ping: pings ${before}->${after} ${after>before?'PASS':'FAIL'}`;
}));

// G7: idle badge + hotkey Q starts placement for villager
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder(true);
  window.__input.select([v]);
  return 'setup';
}) && await (async()=>{
  await page.waitForTimeout(300);
  await page.keyboard.press('KeyQ'); // first card slot = House
  await page.waitForTimeout(200);
  const placing = await page.evaluate(()=>window.__input.placing?.type||null);
  await page.keyboard.press('Escape');
  const idleBtn = await page.evaluate(()=>!document.getElementById('idle-btn').classList.contains('hidden'));
  return `G7 hotkeys+idle: KeyQ->placing=${placing} idleBadge=${idleBtn} ${placing==='house'&&idleBtn?'PASS':'FAIL'}`;
})());

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
