import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4260 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4260/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// T1a: HOLD stance — unit does not chase a fleeing enemy
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('militia',0,tc.cx+15,tc.cz+15); m.stance='hold';
  const e=g.spawnUnit('militia',1,tc.cx+15,tc.cz+25); e.hp=e.maxHp=3000;
  e.orderMove(tc.cx+15,tc.cz+40); // walks past aggro but outside weapon range
  const x0=m.x,z0=m.z;
  for(let i=0;i<300;i++)g.update(0.05);
  const moved=Math.hypot(m.x-x0,m.z-z0);
  g.killUnit(e);
  return `T1a hold-stance: moved=${moved.toFixed(1)} (expect ~0) ${moved<2?'PASS':'FAIL'}`;
}));

// T1b: DEFENSIVE stance — chases a bit, then returns to post
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('militia',0,tc.cx+20,tc.cz+15); m.stance='defensive';
  const post={x:m.x,z:m.z};
  const e=g.spawnUnit('militia',1,m.x+8,m.z); e.hp=e.maxHp=8;
  e.orderAttack(m);
  for(let i=0;i<500;i++)g.update(0.05);
  const back=Math.hypot(m.x-post.x,m.z-post.z);
  return `T1b defensive-return: distFromPost=${back.toFixed(1)} ${back<4?'PASS':'FAIL'}`;
}));

// T1c: drag-line walls — simulate anchor+drag+release through input APIs
R.push(await page.evaluate(()=>{
  const g=window.__game; const inp=window.__input; const tc=g.buildings.find(b=>b.owner===0);
  g.players[0].res.wood+=300; g.players[0].res.stone+=600; g.players[0].age=2;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  inp.select([v]);
  inp.startPlacement('wall');
  // find a clear 8-tile horizontal strip
  let sx=null,sy=null;
  outer:
  for(let r=5;r<22;r++)for(let a=0;a<24;a++){
    const cx=Math.round(tc.gx+Math.cos(a/24*6.28)*r), cy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);
    let ok=true; for(let k=0;k<8;k++) if(!g.canPlaceBuilding(cx+k,cy,1)) {ok=false;break;}
    if(ok){sx=cx;sy=cy;break outer;}
  }
  inp.placing.gx=sx; inp.placing.gy=sy;
  inp.placing.lineStart={gx:sx,gy:sy};
  inp.placing.gx=sx+7; inp.placing.gy=sy;
  inp.updateWallLine();
  const before=g.buildings.filter(b=>b.type==='wall'&&b.owner===0).length;
  inp.onMouseUp({button:0,shiftKey:false});
  const placed=g.buildings.filter(b=>b.type==='wall'&&b.owner===0).length-before;
  return `T1c drag-walls: placed ${placed} segments in one drag ${placed>=6?'PASS':'FAIL'}`;
}));

// T1d: damage numbers + hit pulse + rubble
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('militia',0,tc.cx+10,tc.cz+10);
  g.applyDamage(m, 7, null);
  const nums=g.effects.dmgNums?.length||0;
  const pulse=m.hitT>0;
  let s=null;for(let r=4;r<18&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const b=g.placeBuilding(0,'house',s[0],s[1],true);
  g.razeBuilding(b,true);
  const rubble=g.effects.rubble?.length||0;
  return `T1d juice: dmgNums=${nums} hitPulse=${pulse} rubble=${rubble} ${nums>0&&pulse&&rubble>0?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
