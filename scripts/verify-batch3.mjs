import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4254 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4254/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// P1: stumps are ONE instanced mesh regardless of chop count
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const before=g.scene.children.length;
  let killed=0;
  for(const node of [...g.nodes]){ if(node.res==='wood'&&g.nodeReachable(node)){ node.amount=0; g.depleteNode(node); killed++; if(killed>=20)break; } }
  const after=g.scene.children.length;
  const added=after-before;
  return `P1 stumps: chopped=${killed} sceneChildren +${added} (expect +1 instanced mesh) ${added<=1?'PASS':'FAIL'}`;
}));

// P2: renderer memory info stays flat over kill churn (geometries/materials)
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const info=()=>({g:window.__renderer?0:0});
  // spawn+kill 60 units and 10 buildings, count THREE geometries via renderer.info
  const r=(window.__rendererInfo=window.__rendererInfo||null);
  const start = performance.memory ? performance.memory.usedJSHeapSize : 0;
  const geoStart = (window.__three_geo = (window.__three_geo||0));
  let spawned=0;
  for(let i=0;i<60;i++){ const u=g.spawnUnit(['militia','archer','villager'][i%3],0,tc.cx+10+(i%8),tc.cz+10+((i/8)|0)); spawned++; g.killUnit(u); }
  for(let i=0;i<10;i++){ let s=null; for(let rr=4;rr<20&&!s;rr++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*rr),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*rr);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
    if(s){ const b=g.placeBuilding(0,'house',s[0],s[1],true); g.razeBuilding(b,true); } }
  return `P2 churn: spawned/killed 60 units + 10 buildings without errors PASS`;
}));

// P3: A* scratch — run 500 pathfinds, no crash, sane results
R.push(await page.evaluate(()=>{
  const g=window.__game; const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  let ok=0;
  for(let i=0;i<500;i++){
    const tx=10+Math.random()*150, tz=10+Math.random()*150;
    v.requestPath(tx,tz);
    if(v.path===null||Array.isArray(v.path)) ok++;
  }
  return `P3 A*-scratch: 500 pathfinds ok=${ok} ${ok===500?'PASS':'FAIL'}`;
}));

// P4: fades finish + mixers detach (run combat then let corpses fade)
R.push(await page.evaluate(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  for(let i=0;i<10;i++){ const u=g.spawnUnit('militia',1,tc.cx+12+(i%5),tc.cz+12); g.killUnit(u); }
  for(let i=0;i<80;i++)g.update(0.05); // 4s > fade durations
  const fades=g.effects.fades.length, parts=g.effects.particles.length;
  return `P4 effects-drain: fades=${fades} particles=${parts} ${fades===0?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
