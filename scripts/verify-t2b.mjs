// Tier 2b probes: blacksmith tech tree, spearman anti-cavalry counter,
// market trading, AI adoption, raze refunds.
import { chromium } from 'playwright';
import { preview } from 'vite';
const server = await preview({ preview: { port: 4263 } });
const browser = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errs=[]; page.on('pageerror',e=>errs.push(e.message));
await page.goto('http://localhost:4263/aoge/', { waitUntil: 'networkidle' });
await page.evaluate(()=>document.getElementById('start-normal').click()); await page.waitForTimeout(2200);
const R=[];

// helper injected once: find a clear placement spot near the player TC
await page.evaluate(()=>{
  window.__spot=(sz)=>{const g=window.__game,tc=g.buildings.find(b=>b.owner===0);
    for(let r=4;r<20;r++)for(let a=0;a<28;a++){const gx=Math.round(tc.gx+Math.cos(a/28*6.28)*r),gy=Math.round(tc.gy+Math.sin(a/28*6.28)*r);if(g.canPlaceBuilding(gx,gy,sz))return[gx,gy];}return null;};
});

// B1: spearman bonus vs cavalry — 18 dmg per hit, and 2 spearmen beat 1 knight
R.push(await page.evaluate(()=>{
  const g=window.__game, tc=g.buildings.find(b=>b.owner===0);
  const kn=g.spawnUnit('knight',1,tc.cx+14,tc.cz+14);
  const sp=g.spawnUnit('spearman',0,tc.cx+15,tc.cz+15);
  const hp0=kn.hp; sp.strike(kn); const hit=hp0-kn.hp;
  const sp2=g.spawnUnit('spearman',0,tc.cx+13,tc.cz+15);
  sp.orderAttack(kn); sp2.orderAttack(kn); kn.orderAttack(sp);
  for(let i=0;i<500&&!kn.dead;i++)g.update(0.05);
  const win=kn.dead&&(!sp.dead||!sp2.dead);
  for(const u of [sp,sp2,kn]) if(!u.dead)g.killUnit(u);
  return `B1 spear-vs-knight: hit=${hit}(want 18) 2v1win=${win} ${hit===18&&win?'PASS':'FAIL'}`;
}));

// B2: forging research raises attack (militia 7 -> 8)
R.push(await page.evaluate(()=>{
  const g=window.__game, p=g.players[0];
  p.res.wood+=2000; p.res.food+=3000; p.res.gold+=2000; p.res.stone+=1000; p.age=Math.max(p.age,2);
  const s=window.__spot(2);
  const bs=g.placeBuilding(0,'blacksmith',s[0],s[1],true);
  const started=bs.startTech('forging');
  bs.researching.t=999; g.update(0.05);
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const m=g.spawnUnit('militia',0,tc.cx+10,tc.cz+10);
  const e=g.spawnUnit('militia',1,tc.cx+11,tc.cz+10);
  const hp0=e.hp; m.strike(e); const hit=hp0-e.hp;
  g.killUnit(m); g.killUnit(e);
  window.__bs=bs;
  // age 2 (x1.15) + forging (x1.15): round(7*1.15*1.15) = 9 (8 without forging)
  return `B2 forging: started=${started} atkMult=${p.mods.atkMult} militiaHit=${hit}(want 9) ${started&&p.mods.atkMult===1.15&&hit===9?'PASS':'FAIL'}`;
}));

// B3: scale armor & masonry scale existing + new entity HP
R.push(await page.evaluate(()=>{
  const g=window.__game, p=g.players[0], bs=window.__bs;
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const m=g.spawnUnit('militia',0,tc.cx+10,tc.cz+10);
  const uHp0=m.maxHp, tcHp0=tc.maxHp;
  bs.startTech('scalearmor'); bs.researching.t=999; g.update(0.05);
  const uScaled=m.maxHp===Math.round(uHp0*1.15);
  p.age=Math.max(p.age,3);
  bs.startTech('masonry'); bs.researching.t=999; g.update(0.05);
  const bScaled=tc.maxHp===Math.round(tcHp0*1.2);
  const s=window.__spot(2);
  const h=g.placeBuilding(0,'house',s[0],s[1],true);
  const newScaled=h.maxHp===Math.round(280*1.2);
  g.razeBuilding(h,true); g.killUnit(m);
  return `B3 hp-techs: unit ${uHp0}->${m.maxHp} bld ${tcHp0}->${tc.maxHp} newBld=${h.maxHp} ${uScaled&&bScaled&&newScaled?'PASS':'FAIL'}`;
}));

// B4: wheelbarrow gather mult + full tech list exhausts cleanly
R.push(await page.evaluate(()=>{
  const g=window.__game, p=g.players[0], bs=window.__bs;
  bs.startTech('wheelbarrow'); bs.researching.t=999; g.update(0.05);
  const again=bs.startTech('forging'); // already researched
  return `B4 wheelbarrow: gatherMult=${p.mods.gatherMult} techs=${p.techs.length}/4 rersearchBlocked=${!again} ${p.mods.gatherMult===1.15&&p.techs.length===4&&!again?'PASS':'FAIL'}`;
}));

// B5: market trading rates + insufficient funds rejected
R.push(await page.evaluate(()=>{
  const g=window.__game, p=g.players[0];
  const s=window.__spot(2);
  const mk=g.placeBuilding(0,'market',s[0],s[1],true);
  const w0=p.res.wood, g0=p.res.gold;
  const sold=g.trade(0,'wood','sell');
  const okSell=sold&&p.res.wood===w0-100&&p.res.gold===g0+60;
  const f0=p.res.food, g1=p.res.gold;
  const bought=g.trade(0,'food','buy');
  const okBuy=bought&&p.res.food===f0+100&&p.res.gold===g1-90;
  const gAll=p.res.gold; p.res.gold=10;
  const rejected=!g.trade(0,'stone','buy');
  p.res.gold=gAll;
  g.razeBuilding(mk,true);
  return `B5 market: sell=${okSell} buy=${okBuy} brokeRejected=${rejected} ${okSell&&okBuy&&rejected?'PASS':'FAIL'}`;
}));

// B6: raze during research refunds the tech cost (fresh enemy-side blacksmith)
R.push(await page.evaluate(()=>{
  const g=window.__game, e=g.players[1];
  e.res.food+=1000; e.res.gold+=1000; e.age=Math.max(e.age,2);
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  let s=null; for(let r=4;r<20&&!s;r++)for(let a=0;a<28;a++){const gx=Math.round(etc.gx+Math.cos(a/28*6.28)*r),gy=Math.round(etc.gy+Math.sin(a/28*6.28)*r);if(g.canPlaceBuilding(gx,gy,2)){s=[gx,gy];break;}}
  const bs=g.placeBuilding(1,'blacksmith',s[0],s[1],true);
  const f0=e.res.food, au0=e.res.gold;
  bs.startTech('forging');
  const paid=e.res.food===f0-120&&e.res.gold===au0-60;
  g.razeBuilding(bs,true);
  const refunded=e.res.food===f0&&e.res.gold===au0;
  const flagIntact=e.ageResearchInProgress===false;
  return `B6 tech-refund: paid=${paid} refunded=${refunded} ageFlagIntact=${flagIntact} ${paid&&refunded&&flagIntact?'PASS':'FAIL'}`;
}));

// B7: AI researches techs and counter-trains spearmen vs player cavalry
R.push(await page.evaluate(()=>{
  const g=window.__game, e=g.players[1];
  e.res={wood:2000,food:3000,gold:2000,stone:800}; e.age=Math.max(e.age,2);
  const etc=g.buildings.find(b=>b.owner===1&&b.type==='towncenter');
  let spots=[]; for(let r=4;r<24&&spots.length<2;r++)for(let a=0;a<28;a++){const gx=Math.round(etc.gx+Math.cos(a/28*6.28)*r),gy=Math.round(etc.gy+Math.sin(a/28*6.28)*r);if(g.canPlaceBuilding(gx,gy,3)&&spots.length<2){spots.push([gx,gy]);}}
  const bs=g.placeBuilding(1,'blacksmith',spots[0][0],spots[0][1],true);
  const bar=g.placeBuilding(1,'barracks',spots[1][0],spots[1][1],true);
  const tc=g.buildings.find(b=>b.owner===0&&b.type==='towncenter');
  const cavs=[0,1,2].map(i=>g.spawnUnit('knight',0,tc.cx+8+i,tc.cz+8));
  for(let i=0;i<300;i++)g.update(0.1);
  const researched=e.techs.length>0||g.buildings.some(b=>b.owner===1&&b.researching?.tech);
  const spear=bar.trainQueue.includes('spearman')||g.units.some(u=>u.owner===1&&u.type==='spearman');
  for(const c of cavs) if(!c.dead)g.killUnit(c);
  return `B7 ai-adoption: researched=${researched} trainsSpearman=${spear} ${researched&&spear?'PASS':'FAIL'}`;
}));

// B8: HUD — blacksmith shows tech buttons, market shows trade buttons
R.push(await page.evaluate(()=>{
  const g=window.__game, inp=window.__input;
  const s=window.__spot(2);
  const mk=g.placeBuilding(0,'market',s[0],s[1],true);
  inp.select([mk]);
  window.__hudCheck={mk};
  return null;
}) ?? '');
await page.waitForTimeout(400);
R[R.length-1] = await page.evaluate(()=>{
  const txt=document.getElementById('cmd-panel')?.textContent||document.body.textContent;
  const hasTrade=/Sell wood/.test(txt)&&/Buy food/.test(txt);
  const g=window.__game, inp=window.__input;
  inp.select([window.__bs]);
  window.__t=txt;
  return hasTrade;
}) ? 'B8a market-hud: trade buttons PASS' : 'B8a market-hud: trade buttons FAIL';
await page.waitForTimeout(400);
R.push(await page.evaluate(()=>{
  const txt=document.getElementById('cmd-panel')?.textContent||document.body.textContent;
  // all four researched already -> no tech buttons; check none shown but card ok
  const noTechBtns=!/Forging/.test(txt);
  return `B8b blacksmith-hud: researched-techs hidden=${noTechBtns} ${noTechBtns?'PASS':'FAIL'}`;
}));

for(const line of R) console.log(line);
console.log(errs.length?'PAGE ERRORS: '+errs.slice(0,3).join(' | '):'no page errors');
await browser.close(); await server.close();
process.exit(R.some(r=>String(r).includes('FAIL'))||errs.length?1:0);
