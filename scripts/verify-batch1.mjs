// Batch 1 verification: all 7 critical fixes.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4250 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4250/aoge/', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click()); await page.waitForTimeout(2200);
const R = [];
const step = (n) => page.evaluate((n)=>{for(let i=0;i<n;i++)window.__game.update(0.05);},n);

// C1: catapult inside minRange of a STATIONARY enemy building must back away and fire
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  // find a 7x7 fully-walkable area so the catapult has room to retreat
  let gx=null,gy=null;
  outer:
  for(let r=8;r<30;r++)for(let a=0;a<24;a++){
    const cx=Math.round(tc.gx+Math.cos(a/24*6.28)*r), cy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);
    let ok=true;
    for(let dy=-3;dy<=3&&ok;dy++)for(let dx=-3;dx<=3&&ok;dx++) if(!g.map.isWalkable(cx+dx,cy+dy)) ok=false;
    if(ok){gx=cx;gy=cy;break outer;}
  }
  const w=g.placeBuilding(1,'wall',gx,gy,true);
  const c=g.spawnUnit('catapult',0, w.cx+1.6, w.cz);
  c.orderAttack(w);
  window.__c1={c:c.id,w:w.id,hp0:w.hp};
});
await step(700);
R.push(await page.evaluate(()=>{
  const g=window.__game; const c=g.units.find(u=>u.id===window.__c1.c);
  const w=g.buildings.find(b=>b.id===window.__c1.w);
  const dmg=w?window.__c1.hp0-w.hp:window.__c1.hp0;
  if(w&&!w.dead)g.razeBuilding(w,true);
  if(c&&!c.dead)g.killUnit(c); // don't leave a splash-happy catapult around
  return `C1 catapult-minrange: dmg=${dmg.toFixed(0)} destroyed=${!w} ${dmg>0?'PASS':'FAIL'}`;
}));

// isolate: remove all enemy units between probes
await page.evaluate(()=>{ const g=window.__game; for(const u of [...g.units]) if(u.owner===1) g.killUnit(u); });
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


// isolate: remove all enemy units between probes
await page.evaluate(()=>{ const g=window.__game; for(const u of [...g.units]) if(u.owner===1) g.killUnit(u); });
// C3: villager flees (gets a move order home) when an archer opens fire
await page.evaluate(()=>{
  const g=window.__game; const vs=g.units.filter(u=>u.owner===0&&u.type==='villager');
  const v=vs[1]||vs[0]; v.clearOrder(); v.hp=v.maxHp;
  const a=g.spawnUnit('archer',1,v.x+9,v.z); a.orderAttack(v);
  window.__c3={v:v.id};
});
await step(70);
R.push(await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.id===window.__c3.v);
  const fled=v&&(v.state==='move'||v.order?.kind==='move'||v.fleeCd>0);
  return `C3 flee-from-ranged: alive=${!!v} state=${v?.state} fleeCd=${v?.fleeCd>0} ${fled?'PASS':'FAIL'}`;
}));

// isolate: remove all enemy units between probes
await page.evaluate(()=>{ const g=window.__game; for(const u of [...g.units]) if(u.owner===1) g.killUnit(u); });
// C5: cannot place building on units
R.push(await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  const [gx,gy]=g.map.worldToGrid(v.x,v.z);
  const before=g.players[0].res.wood; g.players[0].res.wood+=100;
  const b=g.placeBuilding(0,'house',gx-1,gy-1);
  return `C5 entombment-guard: placeBuilding over unit -> ${b===null?'rejected PASS':'PLACED FAIL'}`;
}));

// C6: gate pathing — find a guaranteed-walkable vertical corridor first
await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  let tgx=null,tgy=null;
  outer:
  for(let r=6;r<26;r++){
    for(let a=0;a<24;a++){
      const cx=Math.round(tc.gx+Math.cos(a/24*6.28)*r), cy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);
      let ok=true;
      for(let dy=-3;dy<=3;dy++) if(!g.map.isWalkable(cx,cy+dy)) { ok=false; break; }
      for(let dx=-2;dx<=2;dx++) if(!g.map.isWalkable(cx+dx,cy)) { ok=false; break; }
      if(ok){ tgx=cx; tgy=cy; break outer; }
    }
  }
  window.__walls=[];
  for(let k=-8;k<=8;k++){
    const type = k===0?'gate':'wall';
    const b=g.placeBuilding(0,type,tgx+k,tgy,true);
    if(b) window.__walls.push(b.id);
  }
  window.__gate={tgx,tgy};
});
R.push(await page.evaluate(async ()=>{
  const g=window.__game; const {tgx,tgy}=window.__gate;
  const { findPath } = await import('/src/world/pathfinding.js').catch(()=>({findPath:null}));
  // bundled build: use a unit's requestPath instead of importing
  const probe=(owner)=>{
    // temp unit-less path probe via game map + the real findPath through a unit
    const u=g.spawnUnit('villager',owner, (tgx+0.5)*2, (tgy+3+0.5)*2);
    u.orderMove((tgx+0.5)*2,(tgy-3+0.5)*2);
    // walk it
    for(let i=0;i<400;i++)g.update(0.05);
    const crossed=u.z < (tgy+0.5)*2; // got past the wall line (north side)
    g.killUnit(u);
    return crossed;
  };
  const ownCross=probe(0);
  const foeCross=probe(1);
  const ok=ownCross&&!foeCross;
  return `C6a gate-pathing: ownerCrossed=${ownCross} enemyCrossed=${foeCross} ${ok?'PASS':'FAIL'}`;
}));

await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  // enemy militia fully BOXED IN by player walls, ordered onto the TC:
  // path is impossible, so the stuck-retarget must make it attack a wall
  const [mgx,mgy]=[tc.gx+14, tc.gy+14];
  const [wx,wz]=g.map.gridToWorld(mgx,mgy);
  const m=g.spawnUnit('militia',1,wx,wz);
  m.hp=m.maxHp=4000;
  window.__box=[];
  for(const [dx,dy] of [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]){
    const b=g.placeBuilding(0,'wall',mgx+dx,mgy+dy,true);
    if(b)window.__box.push(b.id);
  }
  m.orderAttack(tc);
  window.__c6b={m:m.id, hp0:g.buildings.filter(b=>window.__box.includes(b.id)).reduce((s,b)=>s+b.hp,0)};
});
await step(600);
R.push(await page.evaluate(()=>{
  const g=window.__game; const m=g.units.find(u=>u.id===window.__c6b.m);
  const hp=g.buildings.filter(b=>window.__box.includes(b.id)).reduce((s,b)=>s+b.hp,0);
  const ok=hp<window.__c6b.hp0;
  return `C6b stuck-attacker-chews-wall: boxHp ${window.__c6b.hp0}->${hp} mState=${m?.state} ${ok?'PASS':'FAIL'}`;
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
