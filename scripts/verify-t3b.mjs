// Tier 3b probes: scenario objectives + naval-lite (fish, dock, boats).
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4270 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const BASE='http://localhost:4270/aoge/';
const R=[];

// S1: blitz — objective UI + winning by razing enemy TCs
await page.goto(BASE+'?scenario=blitz', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(1200);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const objShown=!document.getElementById('objective').classList.contains('hidden')&&
    /Lightning War/.test(document.getElementById('objective').textContent);
  for(let i=0;i<150;i++)g.update(0.05); // pass grace period
  for(const b of [...g.buildings]) if(b.owner!==0&&b.type==='towncenter') g.razeBuilding(b,true);
  for(let i=0;i<30;i++)g.update(0.05);
  return `S1 blitz: objectiveUI=${objShown} winOnTCkill=${g.gameOver} ${objShown&&g.gameOver?'PASS':'FAIL'}`;
}));

// S2: survive — timeout means victory
await page.goto(BASE+'?scenario=survive', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(1200);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  g.time=599;
  for(let i=0;i<60;i++)g.update(0.05);
  const title=document.getElementById('gameover-title').textContent;
  return `S2 survive: timeoutWin=${g.gameOver} title=${title} ${g.gameOver&&/Victory/.test(title)?'PASS':'FAIL'}`;
}));

// S3: tycoon — 2000 gold wins
await page.goto(BASE+'?scenario=tycoon', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(1200);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  for(let i=0;i<120;i++)g.update(0.05);
  g.players[0].res.gold=2100;
  for(let i=0;i<30;i++)g.update(0.05);
  return `S3 tycoon: goldWin=${g.gameOver} ${g.gameOver?'PASS':'FAIL'}`;
}));

// N1..N3: naval — find a seed whose map has fish + a shore spot
let navalDone=false;
for (const seed of ['sea1','sea2','sea3','sea4','sea5','sea6','pond','lake']) {
  await page.goto(BASE+`?seed=${seed}&nofog`, { waitUntil: 'networkidle' });
  const feasible=await page.evaluate(()=>{
    const g=window.__game, map=g.map;
    const fish=g.nodes.filter(n=>n.type==='fish'&&!n.dead);
    if(!fish.length) return null;
    // find a land spot with adjacent water where a 2x2 dock fits
    for(const f of fish){
      for(let r=1;r<14;r++)for(let a=0;a<24;a++){
        const gx=Math.round(f.gx+Math.cos(a/24*6.28)*r), gy=Math.round(f.gy+Math.sin(a/24*6.28)*r);
        if(g.canPlaceBuilding(gx,gy,2)&&map.hasAdjacentWater(gx,gy,2)) return {fishId:f.id,gx,gy};
      }
    }
    return null;
  });
  if(!feasible) continue;
  navalDone=true;
  R.push(await page.evaluate((F)=>{
    const g=window.__game, p=g.players[0];
    p.res.wood+=1000; p.age=2;
    // N1: placement rule — inland dock rejected, shore dock accepted
    const tc=g.buildings.find(b=>b.owner===0);
    let inland=null;
    for(let r=2;r<10&&!inland;r++)for(let a=0;a<24;a++){
      const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);
      if(g.canPlaceBuilding(gx,gy,2)&&!g.map.hasAdjacentWater(gx,gy,2)){inland=[gx,gy];break;}
    }
    const rejected=inland?g.placeBuilding(0,'dock',inland[0],inland[1])===null:true;
    const dock=g.placeBuilding(0,'dock',F.gx,F.gy,true);
    const placed=!!dock;
    // N2: boat trains at the dock, spawns on water
    dock.trainQueue.push('fishingboat'); dock.trainT=998; // fast-forward
    for(let i=0;i<60;i++)g.update(0.05);
    const boat=g.units.find(u=>u.type==='fishingboat'&&u.owner===0);
    const onWater=boat?g.map.isWater(...g.map.worldToGrid(boat.x,boat.z)):false;
    return `N1 dock: inlandRejected=${rejected} shorePlaced=${placed} boatSpawned=${!!boat} onWater=${onWater} ${rejected&&placed&&boat&&onWater?'PASS':'FAIL'}`;
  }, feasible));
  R.push(await page.evaluate((F)=>{
    const g=window.__game;
    const boat=g.units.find(u=>u.type==='fishingboat'&&u.owner===0);
    const fish=g.nodes.find(n=>n.id===F.fishId);
    const f0=g.players[0].res.food;
    boat.orderGather(fish);
    for(let i=0;i<2600&&g.players[0].res.food<=f0;i++)g.update(0.05);
    const gained=g.players[0].res.food-f0;
    const stillWater=g.map.isWater(...g.map.worldToGrid(boat.x,boat.z));
    return `N2 fishing: foodGained=${gained} boatOnWater=${stillWater} fishDepleted=${fish.amount<380} ${gained>0&&stillWater?'PASS':'FAIL'}`;
  }, feasible));
  break;
}
if(!navalDone) R.push('N1 naval: no fishable map found across 8 seeds FAIL');

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
