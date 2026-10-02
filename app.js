// Silo V14. As chaves da V13 são mantidas; variações têm sessões independentes.
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const state = { screen: 'home', workout: 'A', expanded: -1, library: 'base', timer: null, loadId: null, day: null };
const restKey = 'rest::seconds', timerKey = 'rest::until';
const REST_OPTIONS = [30, 45, 60, 90, 120, 180];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function storageRead(key) { try { return localStorage.getItem(key); } catch { return null; } }
function storageWrite(key, value) {
  try { localStorage.setItem(key, String(value)); return true; }
  catch { $('#storageError').textContent = 'Não foi possível salvar. Exporte um backup e confira o espaço do aparelho antes de continuar.'; $('#storageError').hidden = false; return false; }
}
function parseStored(key, fallback) { try { return JSON.parse(storageRead(key)) ?? fallback; } catch { return fallback; } }
function iso(date = new Date()) { return [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-'); }
state.day = iso();
function sessionKey(w) { return `done::${iso()}::${w}`; }
function setsKey(w,id) { return `sets::${iso()}::${w}::${id}`; }
function getDone(w) { const v = parseStored(sessionKey(w), {}); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; }
function setDone(w,o) { return storageWrite(sessionKey(w), JSON.stringify(o)); }
function getSets(w,e) { const v = parseStored(setsKey(w,e.id), []); return Array.isArray(v) ? v : []; }
function setSets(w,e,v) { return storageWrite(setsKey(w,e.id), JSON.stringify(v)); }
function hist() { const h = parseStored('hist::sessions', []); return Array.isArray(h) ? h.filter(x => x && typeof x.key === 'string' && typeof x.workout === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x.date) && typeof x.at === 'string') : []; }
function saveHist(h) { return storageWrite('hist::sessions', JSON.stringify(h.slice(-120))); }
function getLoad(id) { const v = storageRead('carga::'+id) ?? storageRead('peso_'+id); return v !== null && v !== '' && Number.isFinite(Number(v)) ? Math.max(0, Math.min(9999, Number(v))) : ''; }
function setLoad(id,v) { if (!storageWrite('carga::'+id,v)) return false; storageWrite('peso_'+id,v); return true; }
function setCount(e) { return parseInt(e.sets,10) || 3; }
function allSetsDone(sets,n) { return Array.from({length:n}, (_,i) => sets[i]?.done === true).every(Boolean); }
function getRest(e) { const saved = Number(storageRead(restKey)); return REST_OPTIONS.includes(saved) ? saved : (parseInt(e.rest,10) || 60); }
function processed(w) { const done = getDone(w); return DB[w].exercises.filter(e => done[e.id] === true || done[e.id] === 'skipped').length; }
function getPreferred(family) { const key = storageRead('plan::'+family); return DB[key]?.family === family ? key : family; }
function nextWorkout() {
  const last = hist().slice().sort((a,b)=>b.at.localeCompare(a.at)).find(x => ['A','B','C'].includes(DB[x.workout]?.family || x.workout));
  const seq = ['A','B','C'];
  const family = last ? seq[(seq.indexOf(DB[last.workout]?.family || last.workout)+1)%3] : 'A';
  return getPreferred(family);
}
function muscleMap(regions, label='Áreas trabalhadas') {
  const posterior = regions.includes('back') && !regions.includes('chest');
  const cls = r => `region ${regions.includes(r) ? 'highlight' : ''}`;
  // Esquema qualitativo: áreas do corpo, sem percentuais de ativação.
  return `<svg class="muscleMap" viewBox="0 0 110 210" role="img" aria-label="${escapeHTML(label)}"><circle class="outline" cx="55" cy="20" r="12"/><path class="outline" d="M46 34h18l14 7 8 35 8 30-9 4-13-34-1 27-3 13 8 40-2 43-12 1-5-48-2-27-2 27-5 48-12-1-2-43 8-40-3-13-1-27-13 34-9-4 8-30 8-35z"/><path class="${cls('shoulders')}" d="M42 40 30 46l-5 17 12 2 7-16zm26 0 12 6 5 17-12 2-7-16z"/>${posterior ? `<path class="${cls('back')}" d="M38 48h34l-4 25-13 22-13-22z"/>` : `<path class="${cls('chest')}" d="M43 47h10v22l-17-3zm14 0h10l7 19-17 3z"/>`}<path class="${cls('arms')}" d="m26 69 10 3-11 32-7-3zm58 0-10 3 11 32 7-3z"/>${posterior ? '' : `<path class="${cls('core')}" d="M41 75h28l-3 30-11 9-11-9z"/>`}<path class="${cls('glutes')}" d="M43 111h24l3 12-15 7-15-7z"/><path class="${cls('legs')}" d="m42 132 10 3-4 26-4 31-6-1-1-32zm26 0-10 3 4 26 4 31 6-1 1-32z"/><text class="mapLabel" x="55" y="207" text-anchor="middle">${posterior ? 'POSTERIOR' : 'ÁREAS-ALVO'}</text></svg>`;
}
function show(screen) {
  state.screen = screen;
  $$('.screen').forEach(el=>el.classList.toggle('active',el.id===screen));
  $$('.tab').forEach(tab=> { const active = tab.dataset.tab === (screen==='sheet'?'home':screen); tab.classList.toggle('active',active); if(active)tab.setAttribute('aria-current','page');else tab.removeAttribute('aria-current'); });
  window.scrollTo({top:0,behavior:'instant'});
}
function toast(message) { clearTimeout(state.toastTimeout); $('#toast').textContent=message; $('#toast').hidden=false; state.toastTimeout=setTimeout(()=>$('#toast').hidden=true,3500); }
function renderHome() {
  const n=nextWorkout(),w=DB[n],count=processed(n),total=w.exercises.length;
  $('#nextWorkout').textContent='Treino '+n; $('#nextVariant').textContent=w.variant;
  $('#nextWorkoutSub').textContent=w.name; $('#heroMetrics').innerHTML=`<span>${total} exercícios</span><span>~${w.duration} min</span>`;
  $('#heroMap').innerHTML=muscleMap(w.regions,w.focus);
  $('#heroProgress').innerHTML=`<span class="miniRing" style="--pct:${Math.round(count/total*100)}%"></span><span>${count ? `${count}/${total} exercícios resolvidos hoje` : 'Sua ficha está pronta para começar'}</span>`;
  $('#openNext').onclick=()=>openSheet(n);
  $('#today').textContent=new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'short'}).format(new Date()).replaceAll('.','');
  const sessions=hist(),days=Array.from({length:7},(_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return d;});
  const weekSessions=sessions.filter(x=>x.date>=iso(days[0])&&x.date<=iso()).length;
  $('#weekStrip').innerHTML=`<div class="weekSummary"><strong>${weekSessions.toString().padStart(2,'0')}</strong><small>sessões / 7 dias</small></div>${days.map(d=>{const completed=sessions.some(x=>x.date===iso(d));return `<div class="day ${completed?'done':''} ${iso(d)===iso()?'today':''}"><span>${new Intl.DateTimeFormat('pt-BR',{weekday:'narrow'}).format(d)}</span><i aria-label="${iso(d)}${completed?', sessão finalizada':''}">${completed?'✓':d.getDate()}</i></div>`}).join('')}`;
  renderLibrary();
}
function renderLibrary() {
  const keys={base:['A','B','C'],variation:['A2','B2','C2'],flex:['D','E']}[state.library];
  $('#libraryHint').textContent={base:'Sua rotina A/B/C. Abra uma ficha para escolher a versão que quer fazer.',variation:'Outra ênfase para a mesma sessão. A2 substitui A; B2 substitui B; C2 substitui C.',flex:'Alternativas para semanas diferentes: superiores ou corpo inteiro. Use no lugar de uma sessão.'}[state.library];
  $$('[data-library]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.library===state.library)));
  $('#workoutGrid').innerHTML=keys.map(k=>{const w=DB[k],n=processed(k);return `<button class="workoutBtn" data-w="${k}"><article class="panel workoutCard"><div class="workoutCode">${k}<small>${w.variant==='Padrão'?'BASE':'ALT'}</small></div><div><h3>${w.name}</h3><p class="cardFocus">${w.focus}</p><div class="cardMeta"><span>${w.exercises.length} exercícios</span><span>~${w.duration} min</span>${n?`<span>${n}/${w.exercises.length}</span>`:''}</div>${n?`<div class="cardProgress"><span style="width:${n/w.exercises.length*100}%"></span></div>`:''}</div><span class="arrow" aria-hidden="true">↗</span></article></button>`}).join('');
  $$('[data-w]').forEach(b=>b.onclick=()=>openSheet(b.dataset.w));
}
function openSheet(k) {
  if(!DB[k])return;
  state.workout=k;state.expanded=-1;
  const w=DB[k];
  if(['A','B','C'].includes(w.family))storageWrite('plan::'+w.family,k);
  $('#sheetTitle').textContent='Treino '+k; $('#sheetEyebrow').textContent=w.variant+' / '+w.code;
  $('#sheetSub').textContent=w.name; $('#sheetFocus').textContent=w.focus;
  $('#overviewMetrics').innerHTML=`<span>${w.exercises.length} exercícios</span><span>~${w.duration} min estimados</span>`;
  $('#sheetMap').innerHTML=muscleMap(w.regions,w.focus); $('#sheetCount').textContent=w.exercises.length+' EX';
  $('#warmup').textContent=w.warmup;$('#cardio').textContent=w.cardio;$('#note').textContent=w.note;
  const variants=Object.entries(DB).filter(([,item])=>item.family===w.family);
  $('#variantPicker').innerHTML=variants.length>1?variants.map(([key,item])=>`<button data-variant="${key}" aria-pressed="${key===k}">${item.variant} <span>${key}</span></button>`).join(''):'';
  $$('[data-variant]').forEach(b=>b.onclick=()=>openSheet(b.dataset.variant));
  drawInlineList();show('sheet');
}
function sheetProgress() {
  const w=DB[state.workout],done=getDone(state.workout),n=processed(state.workout),skipped=w.exercises.filter(e=>done[e.id]==='skipped').length;
  $('#sheetProgress').innerHTML=`<div class="progressTop"><span>${n}/${w.exercises.length} resolvidos${skipped?` · ${skipped} pulados`:''}</span><span>${Math.round(n/w.exercises.length*100)}%</span></div><div class="progressTrack"><div class="progressBar" style="width:${n/w.exercises.length*100}%"></div></div>`;
  const finished=n===w.exercises.length;
  $('#startWorkout').innerHTML=finished?(skipped===w.exercises.length?'Todos pulados hoje <span>—</span>':'Sessão finalizada <span>✓</span>'):n?'Abrir próximo exercício <span>↓</span>':'Começar sessão <span>↓</span>';
  $('#startWorkout').disabled=finished;
}
function drawInlineList() {
  const k=state.workout,w=DB[k],done=getDone(k);sheetProgress();
  $('#exerciseList').innerHTML=w.exercises.map((e,i)=>{const status=done[e.id],expanded=state.expanded===i,sets=getSets(k,e);return `<article class="exerciseEntry ${expanded?'expanded':''}" data-entry="${i}"><button class="listItem ${status===true?'completed':status==='skipped'?'skipped':''}" data-open="${i}" aria-expanded="${expanded}" aria-controls="detail-${i}"><span class="exNumber">${status===true?'✓':String(i+1).padStart(2,'0')}</span><div><h3>${e.name}</h3><p>${e.sets} × ${e.reps}</p><div class="exStatus">${status==='skipped'?'Pulado hoje':`${sets.slice(0,setCount(e)).filter(s=>s?.done).length}/${setCount(e)} séries · ${e.target}`}</div></div><span class="chevron" aria-hidden="true">${expanded?'−':'+'}</span></button><div class="inlineDetail" id="detail-${i}" ${expanded?'':'hidden'}></div></article>`}).join('');
  $$('[data-open]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.open);state.expanded=state.expanded===i?-1:i;drawInlineList();$(`[data-open="${i}"]`)?.focus({preventScroll:true});});
  if(state.expanded>=0)drawInlineDetail(state.expanded);
}
function drawInlineDetail(i) {
  const e=DB[state.workout].exercises[i],root=$('#detail-'+i);if(!root)return;
  const sets=getSets(state.workout,e),done=getDone(state.workout)[e.id];
  root.innerHTML=`${e.reference? '':`<div class="exerciseVisual"><img src="${e.img}" alt="Referência de ${e.name}" loading="lazy"><small>REFERÊNCIA VISUAL</small></div>`}<div class="targetLabel">${e.target}${e.secondary?` <span>· ${e.secondary}</span>`:''}</div><p class="cue">${e.cue}</p><div class="trackerTitle"><h3>Registre suas séries</h3><span>${e.reps}</span></div><div class="setHead"><span>Série</span><span>${e.bodyweight?'Corpo':'kg'}</span><span>Reps</span><span>Feito</span></div>${Array.from({length:setCount(e)},(_,j)=>{const s=sets[j]||{},load=s.load??(e.bodyweight?0:getLoad(e.id));return `<div class="setRow"><label for="load-${j}">${String(j+1).padStart(2,'0')}</label><input id="load-${j}" data-load="${j}" type="number" min="0" max="9999" step="0.5" inputmode="decimal" aria-label="Carga da série ${j+1} em kg" value="${escapeHTML(load)}" placeholder="—" ${e.bodyweight?'disabled':''}><input id="reps-${j}" data-reps="${j}" type="number" min="0" max="999" inputmode="numeric" aria-label="Repetições da série ${j+1}" value="${Number.isInteger(s.reps)?s.reps:''}" placeholder="—"><button data-set="${j}" class="${s.done?'checked':''}" aria-pressed="${!!s.done}" aria-label="${s.done?'Desmarcar':'Marcar'} série ${j+1}">${s.done?'✓':'○'}</button></div>`;}).join('')}<p class="trackerHelp">${e.reps.includes('/ lado')?'Registre repetições por lado. Marque após fazer os dois lados. ':''}O exercício conclui quando todas as séries forem marcadas.</p><div class="exerciseActions">${e.bodyweight?'<span class="targetLabel">Sem carga externa</span>':`<button id="loadBtn" class="referenceBtn">Carga de referência: ${getLoad(e.id)===''?'definir':getLoad(e.id)+' kg'}</button>`}</div><div class="restControl"><select id="restLength" aria-label="Tempo de descanso">${REST_OPTIONS.map(s=>`<option value="${s}" ${getRest(e)===s?'selected':''}>${s}s de descanso</option>`).join('')}</select><button id="restBtn">◷ Iniciar descanso</button></div><a class="instruction" href="${e.url}" target="_blank" rel="noopener noreferrer">Ver execução · YouTube <span aria-hidden="true">↗</span></a><div class="skipActions"><button class="textBtn" id="skipExercise">${done==='skipped'?'Reincluir exercício':'Pular hoje'}</button><button class="textBtn" id="inlineDone">${done===true?'Desmarcar exercício':'Concluir sem séries'}</button></div>`;
  $('#loadBtn')?.addEventListener('click',()=>openLoad(e));$('#restBtn').onclick=()=>startRestTimer(getRest(e));
  $('#restLength').onchange=ev=>storageWrite(restKey,ev.target.value);
  root.querySelectorAll('[data-load],[data-reps]').forEach(input=>input.addEventListener('input',()=>{
    const values=getSets(state.workout,e),j=Number(input.dataset.load??input.dataset.reps),isLoad=input.dataset.load!==undefined;
    const value=input.value===''?null:Number(input.value);
    if(value!==null&&(!Number.isFinite(value)||value<0||value>(isLoad?9999:999)||(!isLoad&&!Number.isInteger(value)))){input.setCustomValidity('Informe um valor válido.');return;}
    input.setCustomValidity('');values[j]={...values[j],[isLoad?'load':'reps']:value};
    if(setSets(state.workout,e,values)&&isLoad&&value!==null)setLoad(e.id,value);
  }));
  root.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{
    const j=Number(b.dataset.set),values=getSets(state.workout,e);
    // Captura ambos os campos antes de qualquer redesenho, inclusive preenchimento por teclado/leitor.
    const row=b.closest('.setRow');
    for(const field of row.querySelectorAll('input:not(:disabled)')){if(!field.reportValidity())return;const prop=field.dataset.load!==undefined?'load':'reps';values[j]={...values[j],[prop]:field.value===''?null:Number(field.value)};}
    if(e.bodyweight)values[j]={...values[j],load:0};
    values[j]={...values[j],done:!values[j]?.done};
    if(!setSets(state.workout,e,values))return;
    if(values[j].load!==null&&values[j].load!==undefined&&!e.bodyweight)setLoad(e.id,values[j].load);
    const completed=allSetsDone(values,setCount(e));
    updateCompletion(e,completed?true:false);
    drawInlineList();renderHome();$(`[data-set="${j}"]`)?.focus({preventScroll:true});
    if(completed)toast('Exercício concluído. Próximo quando estiver pronto.');
  });
  $('#skipExercise').onclick=()=>{updateCompletion(e,done==='skipped'?false:'skipped');drawInlineList();renderHome();$('#skipExercise')?.focus({preventScroll:true});};
  $('#inlineDone').onclick=()=>{updateCompletion(e,done===true?false:true);drawInlineList();renderHome();$('#inlineDone')?.focus({preventScroll:true});};
}
function updateCompletion(e,status) {
  const k=state.workout,d=getDone(k);if(status)d[e.id]=status;else delete d[e.id];
  if(!setDone(k,d))return false;
  const w=DB[k],key=iso()+'-'+k,h=hist(),complete=w.exercises.every(x=>d[x.id]===true||d[x.id]==='skipped'),actual=w.exercises.filter(x=>d[x.id]===true).length;
  if(complete&&actual>0){const entry={key,workout:k,date:iso(),at:h.find(x=>x.key===key)?.at||new Date().toISOString(),name:w.name,skipped:w.exercises.filter(x=>d[x.id]==='skipped').length};saveHist([...h.filter(x=>x.key!==key),entry]);}
  else saveHist(h.filter(x=>x.key!==key));
  return true;
}
function openLoad(e) {state.loadId=e.id;$('#loadTitle').textContent=e.name;$('#loadInput').value=getLoad(e.id);$('#loadOverlay').showModal();$('#loadInput').focus();$('#loadInput').select();}
function closeLoad() {$('#loadOverlay').close();$('#loadBtn')?.focus({preventScroll:true});}
function setTheme(theme) {theme=theme==='light'?'light':'dark';document.documentElement.dataset.theme=theme;storageWrite('theme',theme);$('meta[name="theme-color"]').content=theme==='light'?'#f0f1e9':'#101713';$$('[data-theme-option]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeOption===theme)));}
function renderHistory() {
  renderChart();
  const h=hist().slice().sort((a,b)=>b.at.localeCompare(a.at));
  $('#historyList').innerHTML=h.length?h.map(x=>`<article class="panel simpleCard"><strong>Treino ${escapeHTML(x.workout)} · ${escapeHTML(x.name)}</strong><span>${new Intl.DateTimeFormat('pt-BR').format(new Date(x.date+'T12:00:00'))}${x.skipped?` · ${Number(x.skipped)} exercício(s) pulado(s)`:''}</span></article>`).join(''):'<div class="emptyState">Suas sessões finalizadas aparecerão aqui.</div>';
}
let toastEnd;
async function restNotification(title,body,renotify=false) {
  if(!('Notification' in window)||Notification.permission!=='granted'||!('serviceWorker' in navigator))return;
  try {const reg=await navigator.serviceWorker.ready;await reg.showNotification(title,{body,tag:'silo-rest',renotify,icon:'icon-192.png',badge:'favicon.png',vibrate:renotify?[180,100,180]:undefined});}catch{}
}
function cancelRest() {clearInterval(state.timer);clearTimeout(toastEnd);state.timer=null;localStorage.removeItem(timerKey);localStorage.removeItem('rest::duration');$('#timerToast').hidden=true;try{window.SiloAndroid?.stopRestTimer?.();}catch{}if('serviceWorker' in navigator)navigator.serviceWorker.ready.then(r=>r.getNotifications({tag:'silo-rest'}).then(ns=>ns.forEach(n=>n.close()))).catch(()=>{});}
function refreshRest() {
  const until=Number(storageRead(timerKey));if(!until)return;
  const left=Math.ceil((until-Date.now())/1000),duration=Number(storageRead('rest::duration'))||60;
  $('#timerToast').hidden=false;
  if(left<=0){clearInterval(state.timer);state.timer=null;localStorage.removeItem(timerKey);$('#timerText').textContent='Pronto ✓';$('#timerDial').style.setProperty('--pct','100%');if(!window.SiloAndroid?.startRestTimer){restNotification('Descanso concluído','Pode iniciar a próxima série.',true);navigator.vibrate?.([180,100,180]);}toastEnd=setTimeout(()=>$('#timerToast').hidden=true,5000);return;}
  $('#timerText').textContent=`${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`;
  $('#timerDial').style.setProperty('--pct',Math.min(100,left/duration*100)+'%');
}
function startRestTimer(seconds) {
  cancelRest();const until=Date.now()+seconds*1000;
  if(!storageWrite(timerKey,until))return;
  storageWrite('rest::duration',seconds);refreshRest();state.timer=setInterval(refreshRest,500);
  if(window.SiloAndroid?.startRestTimer){try{window.SiloAndroid.startRestTimer(until);return;}catch{}}
  if('Notification' in window&&isSecureContext&&Notification.permission==='default')Notification.requestPermission().then(()=>restNotification('Descanso em andamento',`Intervalo de ${seconds}s.`)).catch(()=>{});
  else restNotification('Descanso em andamento',`Intervalo de ${seconds}s.`);
}
function refreshApp() {renderHome();if(state.screen==='sheet')openSheet(state.workout);if(state.screen==='history')renderHistory();}
$$('[data-home]').forEach(b=>b.onclick=()=>{renderHome();show('home');});
$$('[data-tab]').forEach(b=>b.onclick=()=>{if(b.dataset.tab==='history')renderHistory();if(b.dataset.tab==='home')renderHome();show(b.dataset.tab);});
$$('[data-library]').forEach(b=>b.onclick=()=>{state.library=b.dataset.library;renderLibrary();});
$$('[data-theme-option]').forEach(b=>b.onclick=()=>setTheme(b.dataset.themeOption));
$('#startWorkout').onclick=()=>{state.expanded=DB[state.workout].exercises.findIndex(e=>!getDone(state.workout)[e.id]);if(state.expanded<0)return;drawInlineList();$(`[data-entry="${state.expanded}"]`).scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});$(`[data-open="${state.expanded}"]`).focus({preventScroll:true});};
$('#loadForm').onsubmit=event=>{event.preventDefault();const value=Number($('#loadInput').value);if($('#loadInput').value===''||!$('#loadInput').reportValidity())return;if(!setLoad(state.loadId,value))return;const e=DB[state.workout].exercises[state.expanded],values=getSets(state.workout,e);for(let i=0;i<setCount(e);i++)if(values[i]?.load==null)values[i]={...values[i],load:value};setSets(state.workout,e,values);closeLoad();drawInlineDetail(state.expanded);$('#loadBtn')?.focus();};
$('#minusLoad').onclick=()=>$('#loadInput').value=Math.max(0,(Number($('#loadInput').value)||0)-2.5);
$('#plusLoad').onclick=()=>$('#loadInput').value=Math.min(9999,(Number($('#loadInput').value)||0)+2.5);
$('#cancelLoad').onclick=closeLoad;
$('#stopTimer').onclick=cancelRest;
$('#addTime').onclick=()=>{const until=Number(storageRead(timerKey));if(until>Date.now())startRestTimer(Math.ceil((until-Date.now())/1000)+30);};
$('#resetToday').onclick=()=>{if(!confirm('Limpar as marcações, cargas por série e repetições de hoje? As cargas de referência serão mantidas.'))return;const keys=Object.keys(localStorage).filter(k=>k.startsWith(`done::${iso()}::`)||k.startsWith(`sets::${iso()}::`));keys.forEach(k=>localStorage.removeItem(k));saveHist(hist().filter(x=>x.date!==iso()));refreshApp();toast('Registros de hoje limpos.');};
function updateConnection() {$('#connectionStatus').textContent=navigator.onLine?'No aparelho':'Offline';}
window.addEventListener('online',updateConnection);window.addEventListener('offline',updateConnection);
window.addEventListener('storage',()=>{state.day=iso();refreshApp();refreshRest();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){if(state.day!==iso()){state.day=iso();refreshApp();}refreshRest();}});
setInterval(()=>{if(state.day!==iso()){state.day=iso();refreshApp();}},30000);
setTheme(document.documentElement.dataset.theme||'dark');updateConnection();renderHome();
if(storageRead(timerKey)){refreshRest();if(storageRead(timerKey))state.timer=setInterval(refreshRest,500);}
// A nova versão só assume quando o usuário escolhe atualizar.
let workerRegistration,waitingWorker;
function offerUpdate(reg) {if(reg.waiting){waitingWorker=reg.waiting;$('#updateBanner').hidden=false;$('#updateStatus').textContent='Atualização pronta. Seus dados já estão salvos.';}}
if('serviceWorker' in navigator){window.addEventListener('load',async()=>{try{workerRegistration=await navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'});offerUpdate(workerRegistration);workerRegistration.addEventListener('updatefound',()=>{const worker=workerRegistration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)offerUpdate(workerRegistration);});});}catch{$('#updateStatus').textContent='Não foi possível preparar o modo offline. Tente novamente conectado.';}});let reloading=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(waitingWorker&&!reloading){reloading=true;location.reload();}});}
$('#applyUpdate').onclick=()=>waitingWorker?.postMessage({type:'SKIP_WAITING'});
$('#checkUpdate').onclick=async()=>{try{if(!navigator.onLine)throw new Error('Conecte à internet para verificar.');if(!workerRegistration)throw new Error('Reabra o aplicativo conectado.');await workerRegistration.update();offerUpdate(workerRegistration);if(!workerRegistration.waiting)$('#updateStatus').textContent='Verificação concluída. Uma nova versão aparecerá aqui quando estiver pronta.';}catch(error){$('#updateStatus').textContent=error.message;}};
