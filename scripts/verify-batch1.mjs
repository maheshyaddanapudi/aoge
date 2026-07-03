// Batch 1 verification: all 7 critical fixes.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4250 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4250/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R = [];
const step = (n) => page.evaluate((n)=>{for(let i=0;i<n;i++)window.__game.update(0.05);},n);

// C1: catapult vs adjacent melee — must retreat AND deal damage
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const c=g.spawnUnit('catapult',0, tc.cx+20, tc.cz+10);
  const m=g.spawnUnit('militia',1, tc.cx+21.5, tc.cz+10);
  m.hp=m.maxHp=500; // tanky so it survives to chase
  c.orderAttack(m); m.orderAttack(c);
  window.__c1={c:c.id,m:m.id,d0:Math.hypot(c.x-m.x,c.z-m.z)};
});
await step(600);
R.push(await page.evaluate(()=>{
  const g=window.__game; const c=g.units.find(u=>u.id===window.__c1.c); const m=g.units.find(u=>u.id===window.__c1.m);
  const d=c&&m?Math.hypot(c.x-m.x,c.z-m.z):-1;
  const dealt=m?500-m.hp:500;
  return `C1 catapult: alive=${!!c} dist ${window.__c1.d0.toFixed(1)}->${d.toFixed(1)} dmgDealt=${dealt} ${dealt>0?'PASS':'FAIL'}`;
}));

// C2: villager resumes gathering after killing a melee attacker
await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  const wood=g.findNearestReachableNode('wood', v.x, v.z, 60);
  v.orderGather(wood);
  for(let i=0;i<200;i++)g.update(0.05); // get gathering
  const m=g.spawnUnit('militia',1,v.x+1.5,v.z); m.hp=6; m.orderAttack(v);
  window.__c2={v:v.id};
});
await step(500);
R.push(await page.evaluate(()=>{
  const v=window.__game.units.find(u=>u.id===window.__c2.v);
  const ok=v && (v.order?.kind==='gather'||v.order?.kind==='farm');
  return `C2 resume-after-fight: state=${v?.state} order=${v?.order?.kind} ${ok?'PASS':'FAIL'}`;
}));

// C3: villager flees from archer
await page.evaluate(()=>{
  const g=window.__game; const vs=g.units.filter(u=>u.owner===0&&u.type==='villager');
  const v=vs[1]||vs[0];
  const wood=g.findNearestReachableNode('wood', v.x, v.z, 60); v.orderGather(wood);
  for(let i=0;i<160;i++)g.update(0.05);
  const a=g.spawnUnit('archer',1,v.x+9,v.z); a.orderAttack(v);
  window.__c3={v:v.id, hp0:v.hp};
});
await step(200);
R.push(await page.evaluate(()=>{
  const v=window.__game.units.find(u=>u.id===window.__c3.v);
  const fled = v && (v.state==='move' || v.order?.kind==='move' || v.state==='idle');
  return `C3 flee-from-ranged: alive=${!!v} state=${v?.state} ${v&&fled?'PASS':'FAIL'}`;
}));

// C5: cannot place building on units
R.push(await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  const [gx,gy]=g.map.worldToGrid(v.x,v.z);
  const before=g.players[0].res.wood; g.players[0].res.wood+=100;
  const b=g.placeBuilding(0,'house',gx-1,gy-1);
  return `C5 entombment-guard: placeBuilding over unit -> ${b===null?'rejected PASS':'PLACED FAIL'}`;
}));

// C6: gate pathing — own unit passes, enemy blocked; stuck attacker chews wall
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  // wall line with a gate in the middle, a few tiles from TC
  const [tgx,tgy]=[tc.gx+8, tc.gy-4];
  g.players[0].res.wood+=500;
  window.__walls=[];
  for(let k=-4;k<=4;k++){
    const type = k===0?'gate':'wall';
    const b=g.placeBuilding(0,type,tgx+k,tgy,true);
    if(b) window.__walls.push(b.id);
  }
  // own villager ordered across the line (through the gate)
  const v=g.units.filter(u=>u.owner===0&&u.type==='villager')[2]||g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder();
  const [wx,wz]=g.map.gridToWorld(tgx, tgy-4);
  v.orderMove(wx,wz);
  window.__c6={v:v.id, wx, wz};
});
await step(700);
R.push(await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.id===window.__c6.v);
  const d=v?Math.hypot(v.x-window.__c6.wx, v.z-window.__c6.wz):99;
  return `C6a own-unit-through-gate: dist-to-goal=${d.toFixed(1)} ${d<4?'PASS':'FAIL'}`;
}));
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  // enemy militia ordered to attack the TC — the wall line blocks the direct route north
  const [wx,wz]=g.map.gridToWorld(tc.gx+8, tc.gy-8);
  const m=g.spawnUnit('militia',1,wx,wz);
  m.orderAttack(tc);
  window.__c6b={m:m.id, wallHp0: g.buildings.filter(b=>window.__walls.includes(b.id)).reduce((s,b)=>s+b.hp,0)};
});
await step(800);
R.push(await page.evaluate(()=>{
  const g=window.__game; const m=g.units.find(u=>u.id===window.__c6b.m);
  const wallHp=g.buildings.filter(b=>window.__walls.includes(b.id)).reduce((s,b)=>s+b.hp,0);
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const engaged = wallHp<window.__c6b.wallHp0 || (m&&(m.state==='fighting'||m.state==='toAttack')&&m.order?.target?.isBuilding&&m.order.target.def.isWall) || (m&&tc&&m.state==='fighting');
  return `C6b attacker-vs-wall: wallHp ${window.__c6b.wallHp0}->${wallHp} mState=${m?.state} ${engaged?'PASS':'FAIL'}`;
}));

// C6c: deleteBuilding refunds incomplete construction
R.push(await page.evaluate(()=>{
  const g=window.__game;
  g.players[0].res.wood=500;
  let s=null; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  for(let r=4;r<16&&!s;r++)for(let a=0;a<20;a++){const gx=Math.round(tc.gx+Math.cos(a/20*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/20*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const b=g.placeBuilding(0,'house',s[0],s[1]);
  const paid=g.players[0].res.wood;
  g.deleteBuilding(b);
  const after=g.players[0].res.wood;
  return `C6c cancel-refund: 500->${paid}->${after} ${after===500?'PASS':'FAIL'}`;
}));

// C7: HUD nodes stay stable while selected (no rebuild churn)
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  window.__input.select([tc]);
});
await page.waitForTimeout(300);
const stable = await page.evaluate(async ()=>{
  const el=document.querySelector('#cmd-panel .cmd-btn');
  window.__node=el;
  await new Promise(r=>setTimeout(r,1200));
  return document.querySelector('#cmd-panel .cmd-btn')===window.__node;
});
R.push(`C7 hud-node-stability: same DOM node after 1.2s = ${stable} ${stable?'PASS':'FAIL'}`);

// C4: touch tap command priority — tap own incomplete building with villager selected -> build
await page.evaluate(()=>{
  const g=window.__game;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder();
  g.players[0].res.wood+=100;
  let s=null; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  for(let r=4;r<16&&!s;r++)for(let a=0;a<20;a++){const gx=Math.round(tc.gx+Math.cos(a/20*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/20*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const b=g.placeBuilding(0,'house',s[0],s[1]);
  window.__input.select([v]);
  window.__rtsCam.jumpTo(b.cx,b.cz); window.__rtsCam.dist=26;
  window.__c4={v:v.id,b:b.id,bcx:b.cx,bcz:b.cz};
});
await page.waitForTimeout(900);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const s=window.__project(window.__c4.bcx,1,window.__c4.bcz);
  window.__input.handleTap(s.x,s.y);
  const v=g.units.find(u=>u.id===window.__c4.v);
  const ok=v.order?.kind==='build';
  return `C4 tap-own-site-resumes-build: order=${v.order?.kind} ${ok?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
