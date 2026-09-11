const CACHE_NAME = 'meu-treino-silo-v6';
const APP_SHELL = ['./','./index.html','./silo.css','./manifest.json','./icone.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./favicon.png','./assets/metal.jpg','./assets/panel.png','./assets/treino-a.png','./assets/treino-b.png','./assets/treino-c.png','./assets/treino-e.png','./assets/treino-d.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>(key.startsWith('meu-treino-pwa-')||key.startsWith('meu-treino-silo-'))&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
 const cache=await caches.open(CACHE_NAME);
 if(event.request.mode==='navigate'){
  try {const response=await fetch(event.request);if(response.ok){await cache.put('./index.html',response.clone());return response;}return await cache.match('./index.html')||response;}
  catch{return await cache.match('./index.html')||Response.error();}
 }
 const cached=await cache.match(event.request);if(cached)return cached;
 try{const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;}catch{return Response.error();}
 })());
});
