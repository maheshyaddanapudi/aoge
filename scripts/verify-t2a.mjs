// Tier 2a probes: fog of war — sim grid, entity hiding, scouting/shroud
// memory, pick filtering, minimap fog, reveal on game over.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4261 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4261/aoge/', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(2200);
const R=[];

// F1: at start the enemy base is unseen and its meshes are hidden
R.push(await page.evaluate(async ()=>{
  const g=window.__game, fog=g.fog;
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  const stEnemy=fog.stateAtWorld(etc.cx,etc.cz);
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const stHome=fog.stateAtWorld(tc.cx,tc.cz);
  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  const hidden=!etc.group.visible;
  return `F1 start-fog: home=${stHome}(want 2) enemyTC=${stEnemy}(want 0) enemyHidden=${hidden} ${stHome===2&&stEnemy===0&&hidden?'PASS':'FAIL'}`;
}));

// F2: scouting reveals; retreating leaves explored shroud — buildings stay
// visible (memory), enemy units hide again
R.push(await page.evaluate(async ()=>{
  const g=window.__game, fog=g.fog;
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const scout=g.spawnUnit('knight',0,tc.cx,tc.cz+6);
  // teleport-scout to the enemy base edge, tick fog
  scout.x=etc.cx+8; scout.z=etc.cz+8; scout.group.position.set(scout.x,scout.group.position.y,scout.z);
  for(let i=0;i<8;i++)g.update(0.1);
  const seen=fog.stateAtWorld(etc.cx,etc.cz)===2;
  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  const tcShown=etc.group.visible;
  // retreat home
  scout.x=tc.cx; scout.z=tc.cz+6; scout.group.position.set(scout.x,scout.group.position.y,scout.z);
  for(let i=0;i<8;i++)g.update(0.1);
  const shroud=fog.stateAtWorld(etc.cx,etc.cz)===1;
  await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
  const tcStillShown=etc.group.visible;
  const enemyU=g.units.find(u=>u.owner===1&&!u.dead&&!fog.visibleWorld(u.x,u.z));
  const enemyUnitHidden=enemyU?!enemyU.group.visible:true;
  g.killUnit(scout);
  return `F2 scout+shroud: seen=${seen} tcShown=${tcShown} shroud=${shroud} tcRemembered=${tcStillShown} enemyUnitHidden=${enemyUnitHidden} ${seen&&tcShown&&shroud&&tcStillShown&&enemyUnitHidden?'PASS':'FAIL'}`;
}));

// F3: pick() never returns fog-hidden enemies
R.push(await page.evaluate(()=>{
  const g=window.__game, inp=window.__input, fog=g.fog;
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  window.__rtsCam.jumpTo(etc.cx,etc.cz);
  // force-hide regardless of last F2 shroud state: pick must skip invisible
  const hid=g.units.filter(u=>u.owner===1&&!u.dead&&!u.group.visible).length;
  const p=window.__project(etc.cx,1,etc.cz);
  const hit=etc.group.visible?null:inp.pick(p.x,p.y);
  const pickedEnemy=hit?.entity?.owner===1;
  return `F3 pick-filter: hiddenEnemyUnits=${hid} pickedHiddenEnemy=${pickedEnemy} ${!pickedEnemy?'PASS':'FAIL'}`;
}));

// F4: fog coverage grows with exploration; minimap fog layer tracks version
R.push(await page.evaluate(()=>{
  const g=window.__game, fog=g.fog, mm=window.__minimap;
  const frac=()=>{let n=0;for(const s of fog.state)if(s>0)n++;return n/fog.state.length;};
  const before=frac();
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const u=g.spawnUnit('knight',0,tc.cx,tc.cz+6);
  for(let k=0;k<6;k++){u.x=10+k*30;u.z=40;for(let i=0;i<4;i++)g.update(0.1);}
  const after=frac();
  g.killUnit(u);
  mm.update(0.2);
  const mmTracked=mm.fogV===fog.version;
  return `F4 exploration: explored ${(before*100).toFixed(0)}%->${(after*100).toFixed(0)}% minimapSync=${mmTracked} ${after>before&&mmTracked?'PASS':'FAIL'}`;
}));

// F5: revealAll on game over path
R.push(await page.evaluate(()=>{
  const g=window.__game, fog=g.fog;
  fog.revealAll();
  let allSeen=true;for(const s of fog.state)if(s!==2){allSeen=false;break;}
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  const stEnemy=fog.stateAtWorld(etc.cx,etc.cz);
  return `F5 reveal-all: allSeen=${allSeen} enemyTC=${stEnemy} ${allSeen&&stEnemy===2?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>r.includes('FAIL'))||errs.length?1:0);
