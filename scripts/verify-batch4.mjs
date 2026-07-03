import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4255 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4255/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// A1: AI repairs a damaged building
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const eb=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  eb.hp=eb.maxHp*0.4;
  g.players[1].res.wood+=200;
  const hp0=eb.hp;
  for(let i=0;i<1600;i++)g.update(0.05); // 80s: eco loop assigns a repairer
  const ok=eb.hp>hp0+50;
  return `A1 ai-repairs: TC hp ${Math.round(hp0)}->${Math.round(eb.hp)}/${eb.maxHp} ${ok?'PASS':'FAIL'}`;
}));

// A2: player repair works via orderBuild
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  tc.hp=tc.maxHp*0.3; g.players[0].res.wood+=200;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder(); v.orderBuild(tc);
  const hp0=tc.hp;
  for(let i=0;i<800;i++)g.update(0.05);
  const ok=tc.hp>hp0+80;
  return `A2 player-repair: TC hp ${Math.round(hp0)}->${Math.round(tc.hp)} ${ok?'PASS':'FAIL'}`;
}));

// A3: AI defends a REMOTE structure (map-wide defense)
R.push(await page.evaluate(()=>{
  const g=window.__game; const ai=g.ai;
  // plant an AI storehouse far from its base, then hit it
  let s=null; const [rgx,rgy]=g.map.worldToGrid(ai.baseX-40, ai.baseZ-40);
  for(let r=0;r<14&&!s;r++)for(let a=0;a<20;a++){const gx=rgx+Math.round(Math.cos(a/20*6.28)*r),gy=rgy+Math.round(Math.sin(a/20*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const store=g.placeBuilding(1,'storehouse',s[0],s[1],true);
  // give the AI a couple of defenders at home
  for(let i=0;i<3;i++)g.spawnUnit('militia',1,ai.baseX+3+i,ai.baseZ);
  const raider=g.spawnUnit('militia',0,store.cx-3,store.cz);
  raider.hp=raider.maxHp=2000;
  raider.orderAttack(store);
  for(let i=0;i<200;i++)g.update(0.05);
  const responders=g.units.filter(u=>u.owner===1&&u.type!=='villager'&&(u.order?.kind==='attackmove'||u.order?.kind==='attack')&&Math.hypot((u.order.x??u.order.target?.x??0)-store.cx,(u.order.z??u.order.target?.z??0)-store.cz)<25).length;
  g.killUnit(raider);
  return `A3 remote-defense: responders heading to raid=${responders} ${responders>0?'PASS':'FAIL'}`;
}));

// A4: wave retreat — mangle a wave and confirm survivors pull back
R.push(await page.evaluate(()=>{
  const g=window.__game; const ai=g.ai;
  // force a wave
  for(let i=0;i<8;i++)g.spawnUnit('militia',1,ai.baseX+2+(i%4)*1.5,ai.baseZ+2+((i/4)|0)*1.5);
  ai.waveT=0; ai.update(0.05);
  const launched=!!ai.wave && ai.wave.length>=6;
  // kill most of the wave
  const members=g.units.filter(u=>ai.wave?.includes(u.id));
  members.slice(0,Math.ceil(members.length*0.75)).forEach(u=>g.killUnit(u));
  ai.attackTargetT=0; ai.update(0.05); // triggers retarget -> retreat
  const retreated=!ai.attacking;
  return `A4 wave-retreat: launched=${launched} retreatedAfterLosses=${retreated} ${launched&&retreated?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
