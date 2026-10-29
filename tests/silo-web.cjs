const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require('playwright');
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
const server = http.createServer((req,res)=>{
  const url = new URL(req.url,'http://localhost');
  const file = path.resolve(root,'.'+(url.pathname==='/'?'/index.html':decodeURIComponent(url.pathname)));
  if (!file.startsWith(root+path.sep)) return res.writeHead(403).end();
  try {res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(fs.readFileSync(file));} catch {res.writeHead(404).end();}
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser=await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_EXECUTABLE||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
    const context=await browser.newContext({viewport:{width:412,height:915},isMobile:true,hasTouch:true});
    const page=await context.newPage(), errors=[]; page.on('pageerror',e=>errors.push(e.message));
    await page.goto(process.env.SILO_URL || `http://127.0.0.1:${server.address().port}/`);
    await page.waitForFunction(()=>typeof validateBackup==='function');
    if(process.env.SILO_PREVIEW) await page.screenshot({path:process.env.SILO_PREVIEW,fullPage:true});
    assert.equal(await page.evaluate(()=>Object.keys(DB).length),16);
    const expected={
      PR_A:['supino_reto_maquina|3|8–12|90–120 s','pulley_frente|3|8–12|90–120 s','crucifixo_maquina|2|10–15|60–90 s','elevacao_lateral_sentada|2|12–15|60–90 s','triceps_maquina|2|10–15|60–90 s','rosca_alternada|2|10–15|60–90 s','leg_press|2|10–15|90–120 s','cadeira_flexora|2|10–15|60–90 s'],
      PR_B:['cadeira_extensora|3|10–15|60–90 s','cadeira_flexora|3|10–15|60–90 s','panturrilha_sentada|3|12–20|60–90 s','remada_apoio|3|8–12|90–120 s','supino_inclinado_maquina|2|8–12|90–120 s','peck_invertido|2|12–15|60–90 s','triceps_maquina|2|10–15|60–90 s','rosca_martelo|2|10–15|60–90 s'],
      PR_C:['pulley_frente|3|8–12|90–120 s','supino_inclinado_maquina|3|8–12|90–120 s','remada_apoio|2|10–12|90 s','elevacao_lateral_sentada|2|12–15|60–90 s','triceps_maquina|2|10–15|60–90 s','rosca_alternada|2|10–15|60–90 s','leg_press|2|10–15|90–120 s','bird_dog|2|6–8 / lado|45–60 s'],
      PR_D:['cadeira_extensora|3|10–15|60–90 s','cadeira_flexora|3|10–15|60–90 s','ponte_solo|2|10–15|60–90 s','panturrilha_sentada|3|12–20|60–90 s','supino_reto_maquina|2|8–12|90–120 s','pulley_frente|2|10–12|90–120 s','elevacao_lateral_sentada|2|12–15|60–90 s','triceps_maquina|2|10–15|60–90 s','rosca_martelo|2|10–15|60–90 s']
    };
    const actual=await page.evaluate(()=>Object.fromEntries(Object.entries(principalWorkouts).map(([k,w])=>[k,w.exercises.map(e=>[e.id,e.sets,e.reps,e.rest].join('|'))])));
    assert.deepEqual(actual,expected);
    for(const [category,count] of [['principal',4],['base',3]]) {await page.locator(`[data-library="${category}"]`).click();assert.equal(await page.locator('[data-w]').count(),count);}
    await page.locator('[data-library="principal"]').click();await page.locator('[data-w="PR_A"]').click();
    await page.locator('[data-open="0"]').click();
    assert.equal(await page.locator('.executionGuide').count(),1);
    assert.match(await page.locator('.trackerHelp').last().innerText(),/90–120 s/);
    await page.locator('#restLength').selectOption('120');await page.locator('[data-open="1"]').click();
    assert.equal(await page.locator('#restLength').inputValue(),'90');
    await page.locator('[data-open="0"]').click();
    await page.locator('#load-0').fill('10');await page.locator('#reps-0').fill('8');await page.locator('[data-set="0"]').click();
    assert.equal(await page.evaluate(()=>getSets('PR_A',DB.PR_A.exercises[0])[0]?.done),true);
    await page.evaluate(()=>localStorage.setItem('carga::leg_press','180'));
    await page.locator('[data-open="6"]').click();
    assert.equal(await page.locator('#load-0').inputValue(),'');
    assert.equal(await page.locator('#loadBtn').count(),0);
    assert.equal(await page.locator('#restLength').inputValue(),'90');
    await page.locator('[data-open="1"]').click();assert.equal(await page.locator('.exerciseEntry.expanded').count(),1);
    assert.match(await page.locator('#sheetProgress').innerText(),/Puxada frontal/);
    const backup=await page.evaluate(()=>makeBackup());
    await page.evaluate(b=>validateBackup(JSON.parse(b)),backup);
    await page.evaluate(()=>validateBackup({format:'meu-treino-silo',version:1,data:{'ui::transparency':'0.6'}}));
    assert.equal(await page.evaluate(()=>nextWorkout()),'PR_A');
    await page.evaluate(()=>{state.workout='PR_A';DB.PR_A.exercises.forEach(e=>updateCompletion(e,true));});
    assert.equal(await page.evaluate(()=>nextWorkout()),'PR_B');
    await page.evaluate(b=>restoreBackupEntries(validateBackup(JSON.parse(b))),backup);
    assert.equal(await page.evaluate(()=>nextWorkout()),'PR_A');
    for(const [previous,next] of [['PR_A','PR_B'],['PR_B','PR_C'],['PR_C','PR_D'],['PR_D','PR_A']]) {
      await page.evaluate(id=>localStorage.setItem('hist::sessions',JSON.stringify([{key:'2026-10-01-'+id,workout:id,date:'2026-10-01',at:'2026-10-01T12:00:00Z',name:'Teste'},{key:'2026-10-02-A',workout:'A',date:'2026-10-02',at:'2026-10-02T12:00:00Z',name:'Lifetime'}])),previous);
      assert.equal(await page.evaluate(()=>nextWorkout()),next);
    }
    await context.grantPermissions(['notifications']);
    await page.evaluate(()=>startRestTimer(1));
    await page.waitForFunction(()=>document.querySelector('#timerText').textContent.includes('Pronto'),null,{timeout:5000});
    assert.equal(await page.evaluate(()=>Number(localStorage.getItem('rest::until'))),0);
    await page.evaluate(()=>navigator.serviceWorker.ready);
    await context.setOffline(true);await page.reload();
    assert.equal(await page.locator('#home').isVisible(),true);
    assert.equal(await page.evaluate(()=>getSets('PR_A',DB.PR_A.exercises[0])[0].load),10);
    assert.deepEqual(errors,[]);
    console.log('PASS: fichas, séries, guias, progresso, backups e funcionamento offline');
  } finally {if(browser)await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
