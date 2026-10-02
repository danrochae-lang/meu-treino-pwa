// npm ci && npx playwright install chromium && npm test
// Opcional: CHROMIUM_EXECUTABLE=/caminho/chrome npm test
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname,'..');
let revision = 'v14-1';
const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg'};
const server=http.createServer((req,res)=>{
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname==='/')pathname='/index.html';
  const file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  try{let body=fs.readFileSync(file);if(pathname==='/sw.js')body=Buffer.from(body.toString().replace('v14-1',revision));res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body);}catch{res.writeHead(404).end();}
});
const passed=[];let browser;
async function check(name,task){await task();passed.push(name);console.log('PASS '+name);}
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const url='http://127.0.0.1:'+server.address().port;
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE,args:['--no-sandbox','--disable-dev-shm-usage']}:{} )});
  const context=await browser.newContext({viewport:{width:412,height:915},isMobile:true,hasTouch:true,colorScheme:'dark'}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('dialog',dialog=>dialog.accept());
  await page.goto(url);await page.waitForFunction(()=>typeof makeBackup==='function');
  await check('Oito fichas e compatibilidade com preferências',async()=>{
    assert.deepEqual(await page.evaluate(()=>Object.keys(DB)),['A','B','C','A2','B2','C2','D','E']);
    assert.equal(await page.evaluate(()=>Object.values(DB).some(w=>w.exercises.some(e=>/leg_press|stiff|hack|smith|triceps_corda|frances/.test(e.id)))),false);
    assert.equal(await page.evaluate(()=>['A2','B2','C2','D','E'].some(k=>DB[k].exercises.some(e=>/pulley|triangulo/.test(e.id)))),false);
    for(const category of ['base','variation','flex']){await page.locator(`[data-library="${category}"]`).click();assert.equal(await page.locator('[data-w]').count(),category==='flex'?2:3);}
  });
  await check('Dados V13, carga zero e histórico conservados ao recarregar',async()=>{
    await page.evaluate(()=>{localStorage.setItem('peso_supino_inclinado','12.5');localStorage.setItem('carga::triceps_maquina','0');localStorage.setItem('hist::sessions',JSON.stringify([{key:'2026-09-01-A',workout:'A',date:'2026-09-01',at:'2026-09-01T12:00:00Z',name:DB.A.name}]));localStorage.setItem('sets::2026-09-01::C::leg_press',JSON.stringify([{done:true,load:35,reps:12}]));});
    await page.reload();assert.equal(await page.evaluate(()=>getLoad('supino_inclinado')),12.5);assert.equal(await page.evaluate(()=>getLoad('triceps_maquina')),0);assert.equal(await page.evaluate(()=>hist().length),1);
    await page.locator('[data-tab="history"]').click();await page.selectOption('#chartWorkout','C');await page.selectOption('#chartExercise','leg_press');assert.equal(await page.locator('.chartStat').innerText(),'35 kg\núltimo registro');
  });
  await check('Série final isolada não conclui e campos sobrevivem a reload',async()=>{
    await page.evaluate(()=>openSheet('A2'));await page.locator('[data-open="0"]').click();
    await page.locator('#load-2').fill('17.5');await page.locator('#reps-2').fill('11');await page.locator('[data-set="2"]').click();
    assert.equal(await page.evaluate(()=>getDone('A2').supino_reto_maquina),undefined);
    await page.reload();await page.evaluate(()=>openSheet('A2'));await page.locator('[data-open="0"]').click();
    assert.equal(await page.locator('#load-2').inputValue(),'17.5');assert.equal(await page.locator('#reps-2').inputValue(),'11');
    await page.locator('[data-set="0"]').click();await page.locator('[data-set="1"]').click();assert.equal(await page.evaluate(()=>getDone('A2').supino_reto_maquina),true);
    await page.locator('[data-set="1"]').click();assert.equal(await page.evaluate(()=>getDone('A2').supino_reto_maquina),undefined);
  });
  await check('Variações independentes e sequência pela família',async()=>{
    assert.equal(await page.evaluate(()=>getSets('A',DB.A.exercises[2]).length),0);
    await page.evaluate(()=>{openSheet('B2');for(const e of DB.B2.exercises)updateCompletion(e,true);});
    assert.equal(await page.evaluate(()=>DB[nextWorkout()].family),'C');assert.equal(await page.evaluate(()=>hist().filter(x=>x.workout==='B2'&&x.date===iso()).length),1);
    await page.evaluate(()=>{openSheet('D');for(const e of DB.D.exercises)updateCompletion(e,true);});assert.equal(await page.evaluate(()=>DB[nextWorkout()].family),'C');
  });
  await check('Pular distinto de feito e sessão sem duplicação',async()=>{
    await page.evaluate(()=>{openSheet('E');DB.E.exercises.forEach((e,i)=>updateCompletion(e,i===0?true:'skipped'));});
    assert.equal(await page.evaluate(()=>hist().find(x=>x.workout==='E').skipped),5);
    await page.evaluate(()=>updateCompletion(DB.E.exercises[0],true));assert.equal(await page.evaluate(()=>hist().filter(x=>x.workout==='E').length),1);
    await page.evaluate(()=>updateCompletion(DB.E.exercises[1],false));assert.equal(await page.evaluate(()=>hist().filter(x=>x.workout==='E').length),0);
  });
  await check('Gráficos ignoram séries sem marcação e preservam carga zero',async()=>{
    const result=await page.evaluate(()=>{localStorage.setItem('sets::2026-09-25::A2::supino_reto_maquina',JSON.stringify([{load:100,reps:20,done:false},{load:0,reps:10,done:true},{load:12.5,reps:8,done:true}]));return [chartPoints('A2','supino_reto_maquina','load').find(x=>x.date==='2026-09-25').value,chartPoints('A2','supino_reto_maquina','reps').find(x=>x.date==='2026-09-25').value];});
    assert.deepEqual(result,[12.5,18]);
  });
  await check('Backup V13/V14 validado e importação sem perda em erro',async()=>{
    const result=await page.evaluate(()=>{const backup=JSON.parse(makeBackup()),entries=validateBackup(backup);localStorage.setItem('carga::supino_inclinado','99');restoreBackupEntries(entries);let rejected=false;try{validateBackup({...backup,data:{...backup.data,'sets::2026-10-01::A::teste':'[{"load":"<img>","done":true}]'}});}catch{rejected=true;}return {rejected,value:getLoad('supino_inclinado'),plan:storageRead('plan::B'),token:Object.keys(backup.data).some(k=>/token|google/.test(k))};});
    assert.equal(result.rejected,true);assert.equal(result.value,12.5);assert.equal(result.plan,'B2');assert.equal(result.token,false);
    await page.evaluate(()=>show('settings'));const download=page.waitForEvent('download');await page.locator('#localBackup').click();assert.match((await download).suggestedFilename(),/meu-treino-backup-.*\.json/);
  });
  await check('Backup Drive com OAuth simulado: formato e restore',async()=>{
    let sent;
    await context.route('https://www.googleapis.com/**',async route=>{const request=route.request(),address=request.url();if(address.includes('/upload/')){sent=request.postData();await route.fulfill({json:{id:'backup-1'}});}else if(address.includes('alt=media')){await route.fulfill({json:{format:'meu-treino-silo',version:1,data:{'carga::supino_inclinado':'9'}}});}else await route.fulfill({json:{files:[{id:'backup-1',name:'meu-treino-silo-backup.json',modifiedTime:'2026-10-02T12:00:00Z'}]}});});
    await page.evaluate(()=>{document.getElementById('googleClientId').value='test.apps.googleusercontent.com';window.google={accounts:{oauth2:{initTokenClient:opts=>({requestAccessToken:()=>opts.callback({access_token:'test-only-token'})})}}};});
    await page.locator('#driveBackup').click();await page.waitForFunction(()=>document.getElementById('backupStatus').textContent.startsWith('Backup salvo'));assert.equal(JSON.parse(sent).format,'meu-treino-silo');assert.ok(JSON.parse(sent).data['plan::B']);
    await page.locator('#driveRestore').click();await page.waitForFunction(()=>document.getElementById('backupStatus').textContent.startsWith('Backup restaurado'));assert.equal(await page.evaluate(()=>getLoad('supino_inclinado')),9);
  });
  await check('Cronômetro persiste e corrige tempo real',async()=>{
    await page.evaluate(()=>startRestTimer(60));const until=await page.evaluate(()=>storageRead(timerKey));await page.reload();assert.equal(await page.evaluate(()=>storageRead(timerKey)),until);assert.match(await page.locator('#timerText').innerText(),/^(0:\d\d|1:00)$/);await page.locator('#addTime').click();assert.ok(Number(await page.evaluate(()=>storageRead(timerKey)))>Number(until));await page.locator('#stopTimer').click();assert.equal(await page.locator('#timerToast').isVisible(),false);
    await page.evaluate(()=>{storageWrite(timerKey,Date.now()-1);refreshRest();});assert.equal(await page.evaluate(()=>storageRead(timerKey)),null);
  });
  await check('Layout 320/360/412/480, temas e todas as fichas',async()=>{
    for(const width of [320,360,412,480]){await page.setViewportSize({width,height:915});for(const theme of ['light','dark']){await page.evaluate(t=>setTheme(t),theme);for(const k of ['A','B','C','A2','B2','C2','D','E']){await page.evaluate(k=>openSheet(k),k);await page.locator('[data-open="0"]').click();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width} ${theme} ${k}`);assert.equal(await page.locator('[data-set]').count(),await page.evaluate(()=>setCount(DB[state.workout].exercises[0])));}}}
    await page.setViewportSize({width:412,height:915});await page.evaluate(()=>{cancelRest();setTheme('dark');renderHome();show('home');state.library='base';renderLibrary();});
    fs.mkdirSync(path.join(root,'test-results'),{recursive:true});await page.screenshot({path:path.join(root,'test-results/home-dark.png'),fullPage:true});
    await page.evaluate(()=>openSheet('A2'));await page.locator('[data-open="0"]').click();await page.screenshot({path:path.join(root,'test-results/session-dark.png'),fullPage:true});
    await page.evaluate(()=>setTheme('light'));await page.screenshot({path:path.join(root,'test-results/session-light.png'),fullPage:true});
  });
  await check('Modo offline recarrega ficha e conserva campos',async()=>{
    await page.evaluate(async()=>{await navigator.serviceWorker.ready;});await page.reload();await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await context.setOffline(true);await page.reload();await page.evaluate(()=>openSheet('C2'));await page.locator('[data-open="0"]').click();await page.locator('#load-0').fill('8');await page.locator('#reps-0').fill('12');await page.reload();await page.evaluate(()=>openSheet('C2'));await page.locator('[data-open="0"]').click();assert.equal(await page.locator('#load-0').inputValue(),'8');await context.setOffline(false);
  });
  await check('Atualização espera ação e conserva registros',async()=>{
    revision='v14-2-test';await page.evaluate(async()=>{const reg=await navigator.serviceWorker.getRegistration();await reg.update();});await page.waitForFunction(()=>document.getElementById('updateBanner').hidden===false,{timeout:15000});
    assert.equal(await page.evaluate(async()=>{const reg=await navigator.serviceWorker.getRegistration();return !!reg.waiting;}),true);
    const before=await page.evaluate(()=>storageRead('sets::'+iso()+'::C2::extensora_unilateral'));await Promise.all([page.waitForEvent('load'),page.locator('#applyUpdate').click()]);await page.waitForFunction(()=>typeof DB!=='undefined');assert.equal(await page.evaluate(()=>storageRead('sets::'+iso()+'::C2::extensora_unilateral')),before);
  });
  await check('Sem erros JavaScript',async()=>assert.deepEqual(errors,[]));
  console.log(`${passed.length} verificações aprovadas.`);await context.close();
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(async()=>{await browser?.close();server.close();});
