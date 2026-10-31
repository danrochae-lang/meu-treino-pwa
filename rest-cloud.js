// The server never receives workout data, only a push subscription and a rest deadline.
window.RestCloud = (() => {
  const endpoint='https://napeqjzkwwsycdhqgejb.supabase.co/functions/v1/silo-push';
  const tokenKey='silo::push-device', revKey='silo::push-revision', enabledKey='silo::push-enabled';
  let chain=Promise.resolve(), writes=Promise.resolve(), subscription=null;
  const nextRevision=()=>{const n=Math.max(Number(localStorage.getItem(revKey)||0)+1,Date.now()*1000);localStorage.setItem(revKey,String(n));return n;};
  const token=()=>{let t=localStorage.getItem(tokenKey);if(!t){t=[...crypto.getRandomValues(new Uint8Array(32))].map(x=>x.toString(16).padStart(2,'0')).join('');localStorage.setItem(tokenKey,t);}return t;};
  const remember=r=>writes=writes.catch(()=>{}).then(async()=>{const cache=await caches.open('silo-rest-revision');await cache.put(new URL('./__silo_rest_revision__',location.href),new Response(String(r)));});
  const post=async (body,headers={})=>{const r=await fetch(endpoint,{method:'POST',signal:AbortSignal.timeout(5000),headers:{'content-type':'application/json',...headers},body:JSON.stringify(body)});if(!r.ok)throw Error('Aviso em segundo plano indisponível');return r.json();};
  const enqueue=fn=>{const p=chain.catch(()=>{}).then(fn);chain=p;return p;};
  const decode=s=>Uint8Array.from(atob(s.replace(/-/g,'+').replace(/_/g,'/')+'='.repeat((4-s.length%4)%4)),c=>c.charCodeAt(0));
  async function subscribe(){
    const reg=await navigator.serviceWorker.ready;
    const key=(await post({action:'key'})).publicKey;
    if(!key)throw Error('Chave de notificação ausente');
    subscription=await reg.pushManager.getSubscription() || await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:decode(key)});
    return subscription.toJSON();
  }
  function activate(code){
    if(!/^[a-f0-9]{32}$/i.test(code))return Promise.reject(Error('Código de ativação inválido'));
    if(!('Notification' in window)||!('serviceWorker' in navigator)||!('PushManager' in window)||!navigator.onLine)return Promise.reject(Error('Ative a internet e abra o app no Chrome'));
    const permission=Notification.permission==='default'?Notification.requestPermission():Promise.resolve(Notification.permission);
    const revision=nextRevision(),saved=remember(revision);
    return enqueue(async()=>{await saved;if(await permission!=='granted')throw Error('Permita as notificações');const sub=await subscribe();const result=await post({action:'cancel',revision,subscription:sub,setupCode:code.toLowerCase()},{'x-device-token':token()});if(!result.ok)throw Error('Código recusado');localStorage.setItem(enabledKey,'1');});
  }
  function start(until){
    if(localStorage.getItem(enabledKey)!=='1')return Promise.reject(Error('Ative os avisos em Ajustes'));
    if(!('Notification' in window)||!('serviceWorker' in navigator)||!('PushManager' in window)||!navigator.onLine)return Promise.reject(Error('Notificações em segundo plano indisponíveis'));
    const permission=Notification.permission==='default'?Notification.requestPermission():Promise.resolve(Notification.permission);
    const revision=nextRevision(), saved=remember(revision);
    return enqueue(async()=>{await saved;if(await permission!=='granted')throw Error('Permita as notificações para receber o aviso');const sub=await subscribe();if(Date.now()>=until)throw Error('O descanso já terminou');const result=await post({action:'schedule',until,revision,subscription:sub},{'x-device-token':token()});if(!result.ok)throw Error('Não foi possível agendar o aviso');return revision;});
  }
  function cancel(){
    if(localStorage.getItem(enabledKey)!=='1')return Promise.resolve();
    const revision=nextRevision(), saved=remember(revision);
    return enqueue(async()=>{await saved;const reg=await navigator.serviceWorker.ready;const sub=subscription||await reg.pushManager.getSubscription();if(!sub)return;await post({action:'cancel',revision,subscription:sub.toJSON()},{'x-device-token':token()});});
  }
  return {activate,start,cancel,enabled:()=>localStorage.getItem(enabledKey)==='1'};
})();
