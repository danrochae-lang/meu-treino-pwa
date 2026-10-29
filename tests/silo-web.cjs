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
    assert.equal(await page.evaluate(()=>Object.keys(DB).length),12);
    for (const category of ['base','classic','flex']) {await page.locator(`[data-library="${category}"]`).click();assert.equal(await page.locator('[data-w]').count(),3);}
    await page.locator('[data-library="classic"]').click();await page.locator('[data-w="CL_B"]').click();
    await page.locator('[data-open="0"]').click();
    assert.equal(await page.locator('#load-0').inputValue(),'');
    assert.equal(await page.locator('.executionGuide').count(),1);
    await page.locator('#load-0').fill('10');await page.locator('#reps-0').fill('8');await page.locator('[data-set="0"]').click();
    assert.equal(await page.evaluate(()=>getSets('CL_B',DB.CL_B.exercises[0])[0]?.done),true, await page.evaluate(()=>JSON.stringify({state:state.workout, sets:getSets('CL_B',DB.CL_B.exercises[0]), errors:document.querySelector('#storageError').textContent})));
    await page.locator('[data-open="1"]').click();assert.equal(await page.locator('.exerciseEntry.expanded').count(),1);
    assert.match(await page.locator('#sheetProgress').innerText(),/Leg Press/);
    const backup=await page.evaluate(()=>makeBackup());
    await page.evaluate(b=>validateBackup(JSON.parse(b)),backup);
    await page.evaluate(()=>validateBackup({format:'meu-treino-silo',version:1,data:{'ui::transparency':'0.6'}}));
    assert.equal(await page.evaluate(()=>nextWorkout()),'A');
    await context.grantPermissions(['notifications']);
    await page.evaluate(()=>startRestTimer(1));
    await page.waitForFunction(()=>document.querySelector('#timerText').textContent.includes('Pronto'),null,{timeout:5000});
    assert.equal(await page.evaluate(()=>Number(localStorage.getItem('rest::until'))),0);
    await page.evaluate(()=>navigator.serviceWorker.ready);
    await context.setOffline(true);await page.reload();
    assert.equal(await page.locator('#home').isVisible(),true);
    assert.equal(await page.evaluate(()=>getSets('CL_B',DB.CL_B.exercises[0])[0].load),10);
    assert.deepEqual(errors,[]);
    console.log('PASS: fichas, séries, guias, progresso, backups e funcionamento offline');
  } finally {if(browser)await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
