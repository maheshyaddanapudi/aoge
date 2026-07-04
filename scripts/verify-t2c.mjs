// Tier 2c probes: map variety params, 1v2 team hostility + win condition,
// match stats + score screen, save/load round-trip.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4265 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
const BASE='http://localhost:4265/aoge/';
const R=[];

// C1: map params — size/seed/biome respected and deterministic
await page.goto(BASE+'?seed=zz7&size=small&biome=arid', { waitUntil: 'networkidle' });
const c1a=await page.evaluate(()=>({size:window.__game.map.size,seed:window.__game.map.seed,nodes:window.__game.nodes.slice(0,8).map(n=>n.gx+','+n.gy).join(';'),trees:window.__game.nodes.filter(n=>n.type==='tree').length}));
await page.goto(BASE+'?seed=zz7&size=small&biome=arid', { waitUntil: 'networkidle' });
const c1b=await page.evaluate(()=>({nodes:window.__game.nodes.slice(0,8).map(n=>n.gx+','+n.gy).join(';')}));
await page.goto(BASE+'?seed=zz7&size=small&biome=lush', { waitUntil: 'networkidle' });
const c1c=await page.evaluate(()=>({trees:window.__game.nodes.filter(n=>n.type==='tree').length}));
{
  const wantSeed=parseInt('zz7',36)>>>0;
  const ok=c1a.size===72&&c1a.seed===wantSeed&&c1a.nodes===c1b.nodes&&c1c.trees>c1a.trees;
  R.push(`C1 map-params: size=${c1a.size}(want 72) seedOk=${c1a.seed===wantSeed} deterministic=${c1a.nodes===c1b.nodes} arid ${c1a.trees} < lush ${c1c.trees} trees ${ok?'PASS':'FAIL'}`);
}

// C2: 1v2 — three players, allied AIs, win only after BOTH enemies fall
await page.goto(BASE+'?foes=2', { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(1800);
R.push(await page.evaluate(()=>{
  const g=window.__game;
  const setup=g.players.length===3&&g.ais.length===2&&
    g.buildings.some(b=>b.owner===2&&b.type==='towncenter');
  const teams=!g.hostile(1,2)&&g.hostile(0,1)&&g.hostile(0,2);
  // wipe enemy 1 only -> game continues
  for(let i=0;i<200;i++)g.update(0.05); // pass the t=5 grace period
  for(const b of [...g.buildings]) if(b.owner===1) g.razeBuilding(b,true);
  for(const u of [...g.units]) if(u.owner===1) g.killUnit(u);
  g.update(0.05);
  const stillOn=!g.gameOver;
  for(const b of [...g.buildings]) if(b.owner===2) g.razeBuilding(b,true);
  for(const u of [...g.units]) if(u.owner===2) g.killUnit(u);
  g.update(0.05);
  const wonNow=g.gameOver;
  return `C2 1v2: setup=${setup} teams=${teams} oneDownContinues=${stillOn} bothDownWins=${wonNow} ${setup&&teams&&stillOn&&wonNow?'PASS':'FAIL'}`;
}));

// C3: stats + score screen (fresh page)
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.click('#start-normal'); await page.waitForTimeout(1800);
R.push(await page.evaluate(()=>{
  const g=window.__game, tc=g.buildings.find(b=>b.owner===0);
  const m=g.spawnUnit('knight',0,tc.cx+10,tc.cz+10);
  const e=g.spawnUnit('militia',1,tc.cx+11,tc.cz+10);
  g.applyDamage(e, 9999, m);
  const kills=g.stats[0].kills===1&&g.stats[1].lost===1;
  // razing an enemy building credits the attacker
  let s=null;for(let r=4;r<18&&!s;r++)for(let a=0;a<24;a++){const gx=Math.round(tc.gx+Math.cos(a/24*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/24*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const hb=g.placeBuilding(1,'house',s[0],s[1],true);
  g.applyDamage(hb, 99999, m);
  const razed=g.stats[0].razed===1&&g.stats[1].bLost===1;
  g.killUnit(m);
  // score screen renders a table
  g.onGameOver(true);
  const table=document.querySelector('#score-table table.score');
  const hasScore=!!table&&/SCORE/.test(table.textContent)&&/Enemy units killed/.test(table.textContent);
  document.getElementById('gameover-overlay').classList.add('hidden');
  return `C3 stats+score: kills=${kills} razed=${razed} scoreTable=${hasScore} ${kills&&razed&&hasScore?'PASS':'FAIL'}`;
}));

// C4: save -> reload -> resume restores the match
const snap=await page.evaluate(()=>{
  const g=window.__game, p=g.players[0];
  p.res.wood=777; p.res.food=1234; p.age=2; p.techs.push('forging'); p.mods.atkMult*=1.15;
  const tc=g.buildings.find(b=>b.owner===0);
  g.spawnUnit('spearman',0,tc.cx+8,tc.cz+8);
  // deplete one tree so node restoration is observable
  const tree=g.nodes.find(n=>n.type==='tree'&&!n.dead);
  const treeKey=tree.gx+','+tree.gy;
  tree.amount=0; g.depleteNode(tree);
  window.__save();
  const meta=JSON.parse(localStorage.getItem('aoge-save'));
  return { units:g.units.filter(u=>!u.dead).length, buildings:g.buildings.filter(b=>!b.dead).length,
           nodes:g.nodes.filter(n=>!n.dead).length, treeKey,
           url:`?load=1&seed=${meta.seed}&size=${meta.size}&biome=${meta.biome}&foes=${meta.foes}` };
});
await page.goto(BASE+snap.url, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
R.push(await page.evaluate((snap)=>{
  const g=window.__game, p=g.players[0];
  const resumeVisible=!document.getElementById('resume-btn').classList.contains('hidden');
  const res=p.res.wood===777&&p.res.food===1234;
  const age=p.age===2&&p.techs.includes('forging')&&Math.abs(p.mods.atkMult-1.15)<1e-9;
  const units=g.units.filter(u=>!u.dead).length===snap.units;
  const blds=g.buildings.filter(b=>!b.dead).length===snap.buildings;
  const spear=g.units.some(u=>u.type==='spearman'&&u.owner===0);
  const treeGone=!g.nodes.some(n=>n.gx+','+n.gy===snap.treeKey&&!n.dead);
  const nodes=g.nodes.filter(n=>!n.dead).length===snap.nodes;
  const ok=resumeVisible&&res&&age&&units&&blds&&spear&&treeGone&&nodes;
  return `C4 save/load: resumeBtn=${resumeVisible} res=${res} age+tech=${age} units=${units} bldgs=${blds} spear=${spear} depletedTree=${treeGone} nodes=${nodes} ${ok?'PASS':'FAIL'}`;
}, snap));

// C4b: continue button starts the resumed game
await page.click('#resume-btn'); await page.waitForTimeout(600);
R.push(await page.evaluate(()=>{
  const hidden=document.getElementById('start-overlay').classList.contains('hidden');
  return `C4b resume-start: overlayHidden=${hidden} ${hidden?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
