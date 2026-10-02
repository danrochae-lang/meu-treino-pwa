const CACHE = 'meu-treino-silo-v14-1';
const FILES = ['./','./index.html','./styles.css','./workouts.js','./app.js','./progress.js','./backup.js','./drive.js','./manifest.json','./icon-192.png','./icon-512.png','./favicon.png','./cadeira-extensora.jpg','./peck-invertido.jpg','./elevacao-lateral.jpg','./bird-dog.jpg','./puxada-triangulo.jpg','./pulley-frente.jpg','./remada-maquina-apoio.jpg','./cadeira-adutora.jpg','./cadeira-flexora.jpg','./panturrilha-maquina.jpg','./triceps-maquina.jpg','./dead-bug.jpg','./supino-inclinado.jpg','./supino-reto-maquina.jpg','./rosca-martelo.jpg','./elevacao-pelvica.jpg','./crucifixo-maquina.jpg','./cadeira-abdutora.jpg','./rosca-alternada.jpg','./crucifixo-inclinado.jpg'];
const ASSETS = new Set(FILES.map(file=>new URL(file,self.registration.scope).href));
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
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
