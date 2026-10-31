const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const handlers = {}, notifications=[];
let stored='42';
const ctx={URL,Set,Response,console,importScripts(){},OFFLINE_MEDIA:[],self:{registration:{scope:'https://example.test/app/',showNotification:async (...args)=>notifications.push(args)},location:{origin:'https://example.test'},addEventListener:(name,fn)=>handlers[name]=fn},caches:{open:async()=>({match:async()=>new Response(stored)})}};
ctx.clients={};vm.runInNewContext(fs.readFileSync('sw.js','utf8'),ctx);
async function push(revision){let work;handlers.push({data:{json:()=>({type:'rest-complete',revision})},waitUntil:p=>work=p});await work;}
(async()=>{assert.equal(typeof handlers.push,'function','push handler is registered');await push(41);assert.equal(notifications.length,0);await push(42);assert.equal(notifications.length,1);assert.match(notifications[0][0],/conclu/i);console.log('service worker push passed');})().catch(e=>{console.error(e);process.exit(1)});
