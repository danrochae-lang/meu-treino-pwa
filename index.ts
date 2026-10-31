import webpush from 'npm:web-push@3.6.7';
import {validSubscription,validDeadline} from './validation.js';
const base = Deno.env.get('SUPABASE_URL')!;
const keys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}');
const secret = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || keys.default;
const cors = {'Access-Control-Allow-Origin':'https://danrochae-lang.github.io','Access-Control-Allow-Headers':'content-type,x-device-token','Access-Control-Allow-Methods':'POST,OPTIONS','Content-Type':'application/json'};
async function rpc(name:string, payload:unknown = {}) {
  const headers:Record<string,string>={apikey:secret,'Content-Type':'application/json'};
  if(!secret.startsWith('sb_secret_'))headers.Authorization=`Bearer ${secret}`;
  const r=await fetch(`${base}/rest/v1/rpc/${name}`,{method:'POST',headers,body:JSON.stringify(payload)});
  if(!r.ok) throw new Error(`database error ${r.status}`);
  return await r.json();
}
async function hash(token:string) {
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token));
  return [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,'0')).join('');
}
const reply=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:cors});
Deno.serve(async req=>{
  if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
  if(req.method!=='POST')return reply({error:'method'},405);
  try{
    const configRows=await rpc('silo_get_config');
    const config=Object.fromEntries(configRows.map((r:any)=>[r.name,r.secret]));
    const body=await req.json();
    if(body.action==='key')return reply({publicKey:config.silo_vapid_public});
    if(body.action==='dispatch'){
      if(req.headers.get('x-dispatch-token')!==config.silo_dispatch_token)return reply({error:'unauthorized'},401);
      webpush.setVapidDetails('mailto:silo@example.com',config.silo_vapid_public,config.silo_vapid_private);
      const jobs=await rpc('silo_claim_timers');
      await Promise.all(jobs.map(async (job:any)=>{
        try {
          await webpush.sendNotification(job.subscription,JSON.stringify({type:'rest-complete',revision:job.revision,due:job.due_at}),{TTL:15,urgency:'high'});
          await rpc('silo_complete_timer',{p_hash:job.device_hash,p_revision:job.revision});
        } catch(e) { console.error('push failed',e instanceof Error?e.message:String(e)); }
      }));
      return reply({ok:true});
    }
    const token=req.headers.get('x-device-token')||'';
    if(!/^[a-f0-9]{64}$/.test(token) || !['schedule','cancel'].includes(body.action) || !validSubscription(body.subscription) || !Number.isSafeInteger(body.revision) || body.revision<1 || (body.setupCode != null && !/^[a-f0-9]{32}$/.test(body.setupCode)))return reply({error:'invalid request'},400);
    if(body.action==='schedule'&&!validDeadline(Date.now(),body.until))return reply({error:'invalid timer'},400);
    const ok=await rpc('silo_update_timer',{p_hash:await hash(token),p_subscription:body.subscription,p_due:body.action==='schedule'?new Date(body.until).toISOString():null,p_revision:body.revision,p_setup:body.setupCode||null});
    return reply({ok});
  }catch(e){console.error(e instanceof Error?e.message:String(e));return reply({error:'service unavailable'},503);}
});
