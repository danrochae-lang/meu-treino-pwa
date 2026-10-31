importScripts('./offline-media.js');
const CACHE = 'meu-treino-silo-web-v18-rest-push';
const FILES = ['./','./index.html','./styles.css','./workouts.js','./app.js','./progress.js','./backup.js','./drive.js','./manifest.json','./icon-192.png','./icon-512.png','./favicon.png','./cadeira-extensora.jpg','./peck-invertido.jpg','./elevacao-lateral.jpg','./bird-dog.jpg','./puxada-triangulo.jpg','./pulley-frente.jpg','./remada-maquina-apoio.jpg','./cadeira-adutora.jpg','./cadeira-flexora.jpg','./panturrilha-maquina.jpg','./triceps-maquina.jpg','./dead-bug.jpg','./supino-inclinado.jpg','./supino-reto-maquina.jpg','./rosca-martelo.jpg','./elevacao-pelvica.jpg','./crucifixo-maquina.jpg','./cadeira-abdutora.jpg','./rosca-alternada.jpg','./crucifixo-inclinado.jpg'];
FILES.push('./offline-media.js', './principal.js', './apple-silo.css', './rest-cloud.js', './generated/supino-inclinado-maquina.png', ...OFFLINE_MEDIA);
const ASSETS = new Set(FILES.map(file=>new URL(file,self.registration.scope).href));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([...new Set(FILES)]))));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('meu-treino-silo-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
  // Somente assets do aplicativo. OAuth e chamadas ao Drive passam direto para a rede.
  const canonical=url.origin+url.pathname;
  if(!ASSETS.has(canonical))return;
  event.respondWith(caches.open(CACHE).then(async cache=>{
    const cached=await cache.match(canonical);if(cached)return cached;
    try{const response=await fetch(event.request);if(response.ok&&response.type==='basic')await cache.put(canonical,response.clone());return response;}catch{return new Response('Reabra o aplicativo conectado para preparar o modo offline.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}
  }));
});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(windows=>{const current=windows.find(w=>w.url.startsWith(self.registration.scope));return current?current.focus():clients.openWindow('./');}));});
self.addEventListener('push',event=>event.waitUntil((async()=>{
  let data;try{data=event.data?.json();}catch{return;}
  if(data?.type!=='rest-complete'||!Number.isSafeInteger(data.revision))return;
  const cache=await caches.open('silo-rest-revision');
  const stored=await cache.match(new URL('./__silo_rest_revision__',self.registration.scope));
  if(!stored||Number(await stored.text())!==data.revision)return;
  await self.registration.showNotification('Descanso concluído',{body:'Pode iniciar a próxima série.',tag:'silo-rest',renotify:true,icon:'silo-icon.png',badge:'favicon.png',vibrate:[180,100,180]});
})()));
