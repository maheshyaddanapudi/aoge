// Batch 2 verification.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4253 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4253/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];
const ev=(fn,...a)=>page.evaluate(fn,...a);

// H1 siege damage: catapult stone vs building ≈ atk*bonus (84), not 147
R.push(await ev(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0);
  const [gx,gy]=g.map.worldToGrid(tc.cx+30,tc.cz+16);
  const h=g.placeBuilding(1,'house',gx,gy,true);
  const c=g.spawnUnit('catapult',0, h.cx-8, h.cz);
  c.orderAttack(h);
  const hp0=h.hp;
  for(let i=0;i<160;i++){g.update(0.05); if(hp0-h.hp>0) break;}
  const dmg=hp0-h.hp;
  const ok=dmg>=70&&dmg<=100;
  const out=`H1 siege-dmg-per-hit: ${dmg.toFixed(0)} (expect ~84) ${ok?'PASS':'FAIL'}`;
  if(!h.dead)g.razeBuilding(h,true); g.killUnit(c);
  return out;
}));

// H2 raze refunds queue+research
R.push(await ev(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  g.players[0].res={wood:2000,food:2000,gold:2000};
  tc.queueTrain('villager'); tc.queueTrain('villager'); // -100 food
  tc.startAgeResearch(); // -400 food
  const before=g.players[0].res.food; // 1500
  g.razeBuilding(tc);
  const after=g.players[0].res.food;
  const ok=after===2000;
  // rebuild TC for later probes
  let s=null;for(let r=4;r<18&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,4)){s=[gx,gy];break;}}
  g.placeBuilding(0,'towncenter',s[0],s[1],true); g.recalcPop(0);
  return `H2 raze-refunds: food ${before}->${after} ${ok?'PASS':'FAIL'}`;
}));

// H3 defeat rule: zero buildings + villagers alive => NOT game over
R.push(await ev(()=>{
  const g=window.__game;
  const alive=g.units.filter(u=>u.owner===0&&u.type==='villager'&&!u.dead).length;
  for(const b of [...g.buildings]) if(b.owner===0) g.razeBuilding(b,true);
  const notOver=!g.gameOver;
  // restore a TC
  let s=null;const [cgx,cgy]=g.map.worldToGrid(g.units.find(u=>u.owner===0).x,g.units.find(u=>u.owner===0).z);
  for(let r=4;r<20&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(cgx+Math.cos(a/24*6.28)*r),gy=Math.round(cgy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,4)){s=[gx,gy];break;}}
  g.placeBuilding(0,'towncenter',s[0],s[1],true); g.recalcPop(0);
  return `H3 defeat-rule: villagers=${alive}, gameOver after losing all buildings=${!notOver} ${notOver?'PASS':'FAIL'}`;
}));

// H4 construction damage persists + diminishing returns
R.push(await ev(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  g.players[0].res.wood+=1000;
  let s=null;for(let r=4;r<18&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,3)){s=[gx,gy];break;}}
  const b=g.placeBuilding(0,'barracks',s[0],s[1]);
  const vills=g.units.filter(u=>u.owner===0&&u.type==='villager').slice(0,3);
  vills.forEach(v=>v.orderBuild(b));
  // damage it early in the build
  let dmgApplied=false;
  for(let i=0;i<600;i++){ g.update(0.05); if(!dmgApplied && b.progress>0.15 && !b.complete){ b.hp=Math.max(1,b.hp-200); dmgApplied=true; } if(b.complete)break; }
  for(let i=0;i<2000&&!b.complete;i++)g.update(0.05);
  const damagePersisted=b.complete && (!dmgApplied || b.hp <= b.maxHp - 150);
  return `H4 construction: complete=${b.complete} dmgApplied=${dmgApplied} hp=${Math.round(b.hp)}/${b.maxHp} ${damagePersisted?'PASS':'FAIL'}`;
}));

// H5 no jog-in-place: order unit onto water-locked spot; must end idle (not thrash)
R.push(await ev(()=>{
  const g=window.__game;
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder();
  // find an unreachable walkable island tile? cheap proxy: an occupied tile center (tree)
  let tree=null,bd=1e9;
  for(const n of g.nodes){ if(n.res==='wood'&&!g.nodeReachable(n)){ const d=Math.hypot(n.wx-v.x,n.wz-v.z); if(d<bd){bd=d;tree=n;} } }
  if(!tree) return 'H5 jog-in-place: no interior tree on this map, SKIP';
  v.orderMove(tree.wx,tree.wz);
  for(let i=0;i<900;i++){ g.update(0.05); if(v.state==='idle')break; }
  const ok=v.state==='idle';
  return `H5 jog-in-place: final state=${v.state} ${ok?'PASS':'FAIL'}`;
}));

// H6 API holes: enemy farm, wrong-roster training, incomplete TC research
R.push(await ev(()=>{
  const g=window.__game; const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  let s=null;for(let r=4;r<18&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const ef=g.placeBuilding(1,'farm',s[0],s[1],true);
  const v=g.units.find(u=>u.owner===0&&u.type==='villager');
  v.clearOrder(); v.orderGatherFarm(ef);
  const farmBlocked=v.order?.kind!=='farm';
  const barr=g.buildings.find(b=>b.owner===0&&b.type==='barracks'&&b.complete);
  const wrongRoster=barr?!barr.queueTrain('knight'):true;
  let s2=null;for(let r=4;r<18&&!s2;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,4)){s2=[gx,gy];break;}}
  g.players[0].res.wood+=300;
  const tc2=g.placeBuilding(0,'towncenter',s2[0],s2[1]); // incomplete
  const resBlocked=tc2?!tc2.startAgeResearch():true;
  g.razeBuilding(ef,true); if(tc2)g.deleteBuilding(tc2);
  const ok=farmBlocked&&wrongRoster&&resBlocked;
  return `H6 api-holes: enemyFarm=${farmBlocked?'blocked':'OPEN'} roster=${wrongRoster?'blocked':'OPEN'} incompleteResearch=${resBlocked?'blocked':'OPEN'} ${ok?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
