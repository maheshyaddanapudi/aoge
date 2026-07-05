// Cross-feature seam probes: interactions between tiers that no single
// feature suite covers (scenario+save, 1v2+fog, boats+command layer, rally).
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4277 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const BASE='http://localhost:4277/aoge/';
const R=[];

// X1: scenario + save round-trip (survive timer preserved through save/load)
await page.goto(BASE+'?scenario=survive&seed=xx1', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click()); await page.waitForTimeout(1500);
const x1=await page.evaluate(()=>{
  const g=window.__game;
  for(let i=0;i<200;i++)g.update(0.05);
  window.__save();
  const meta=JSON.parse(localStorage.getItem('aoge-save'));
  return { time:g.time, scenarioSaved:meta.scenario==='survive', url:`?load=1&seed=${meta.seed}&size=${meta.size}&biome=${meta.biome}&foes=${meta.foes}&scenario=${meta.scenario}` };
});
await page.goto(BASE+x1.url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
R.push(await page.evaluate((x1)=>{
  const g=window.__game;
  const ok=g.scenario&&Math.abs(g.time-x1.time)<0.6&&!document.getElementById('objective')===false;
  return `X1 scenario+save: scenarioRestored=${!!g.scenario} timeKept=${Math.abs(g.time-x1.time)<0.6} savedFlag=${x1.scenarioSaved} ${ok&&x1.scenarioSaved?'PASS':'FAIL'}`;
}, x1));

// X2: 1v2 + fog — both enemies hidden at start, purple AI acts
await page.goto(BASE+'?foes=2&seed=xx2', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click()); await page.waitForTimeout(1500);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const tc2=g.buildings.find(b=>b.owner===2&&b.type==='towncenter');
  const hidden=g.fog.stateAtWorld(tc2.cx,tc2.cz)===0;
  for(let i=0;i<600;i++)g.update(0.05);
  const purpleActs=g.units.filter(u=>u.owner===2&&!u.dead).length>4||g.buildings.filter(b=>b.owner===2).length>1;
  return `X2 1v2+fog: purpleTCFogged=${hidden} purpleAIActs=${purpleActs} ${hidden&&purpleActs?'PASS':'FAIL'}`;
}));

// X3: boat commands through the replay/exec layer (gather via command object)
await page.goto(BASE+'?seed=sea1&nofog', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click()); await page.waitForTimeout(1500);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  g.cmdLog=[];
  const fish=g.nodes.find(n=>n.type==='fish'&&!n.dead);
  if(!fish) return 'X3 boat+exec: no fish on seed FAIL';
  // spawn a boat on a WATER tile near the fish (boats can't stand on land)
  let wpos=null;
  for(let r=1;r<8&&!wpos;r++)for(let a=0;a<16;a++){
    const gx=fish.gx+Math.round(Math.cos(a/16*6.28)*r), gy=fish.gy+Math.round(Math.sin(a/16*6.28)*r);
    if(g.map.isWater(gx,gy)&&!g.map.occupantAt(gx,gy)){wpos=g.map.gridToWorld(gx,gy);break;}
  }
  if(!wpos) return 'X3 boat+exec: no water spawn tile FAIL';
  const boat=g.spawnUnit('fishingboat',0,wpos[0],wpos[1]);
  const r=g.exec({k:'gather', ids:[boat.id], n:fish.id});
  for(let i=0;i<200;i++)g.update(0.05);
  const gathering=boat.state==='gathering'||boat.carry?.amt>0||boat.state==='toResource';
  const logged=g.cmdLog.length===1&&g.cmdLog[0].k==='gather';
  return `X3 boat+exec: cmdApplied=${r===true} boatWorking=${gathering} logged=${logged} ${r&&gathering&&logged?'PASS':'FAIL'}`;
}));

// X4: villagers no longer poisoned by fish (the E2E bug just fixed)
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const fish=g.nodes.find(n=>n.type==='fish'&&!n.dead);
  const near=g.findNearestNode('food', fish.wx, fish.wz, 200);
  const notFish=near?near.type!=='fish':true;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.orderGather(fish);
  const rejected=v.order?.node!==fish;
  return `X4 fish-guard: finderSkipsFish=${notFish} villagerRejectsFish=${rejected} ${notFish&&rejected?'PASS':'FAIL'}`;
}));

// X5: dock rally onto fish sends new boats fishing
R.push(await page.evaluate(()=>{
  const g=window.__game, map=g.map;
  const fish=g.nodes.find(n=>n.type==='fish'&&!n.dead);
  let s=null;
  for(let r=1;r<14&&!s;r++)for(let a=0;a<24;a++){
    const gx=Math.round(fish.gx+Math.cos(a/24*6.28)*r), gy=Math.round(fish.gy+Math.sin(a/24*6.28)*r);
    if(g.canPlaceBuilding(gx,gy,2)&&map.hasAdjacentWater(gx,gy,2)){s=[gx,gy];break;}
  }
  if(!s) return 'X5 dock-rally: no shore spot FAIL';
  const dock=g.placeBuilding(0,'dock',s[0],s[1],true);
  dock.rally={node:fish};
  const boat=g.spawnFromBuilding(dock,'fishingboat');
  const fishing=boat.order?.kind==='gather'&&boat.order.node===fish;
  return `X5 dock-rally: boatSentToFish=${fishing} ${fishing?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
