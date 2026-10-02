// Formato compatível com os backups V13. Somente dados do app, nunca tokens.
const BACKUP_KEY = /^(carga::[\w-]+|peso_[\w-]+|done::\d{4}-\d{2}-\d{2}::[\w-]+|sets::\d{4}-\d{2}-\d{2}::[\w-]+::[\w-]+|hist::sessions|rest::seconds|theme|plan::[ABC])$/;
function makeBackup() {
  const data={};
  for(const key of Object.keys(localStorage))if(BACKUP_KEY.test(key))data[key]=storageRead(key);
  return JSON.stringify({format:'meu-treino-silo',version:1,createdAt:new Date().toISOString(),data},null,2);
}
function validateBackup(backup) {
  if(!backup||backup.format!=='meu-treino-silo'||backup.version!==1||!backup.data||typeof backup.data!=='object'||Array.isArray(backup.data))throw new Error('Arquivo de backup incompatível.');
  const entries=Object.entries(backup.data);
  if(entries.length>10000)throw new Error('Backup grande demais.');
  for(const [key,value] of entries){
    if(!BACKUP_KEY.test(key)||typeof value!=='string'||value.length>1000000)throw new Error('Backup contém dados inválidos.');
    if(key.startsWith('sets::')){
      const sets=JSON.parse(value);
      if(!Array.isArray(sets)||sets.length>30||sets.some(s=>s!==null&&(typeof s!=='object'||Array.isArray(s)||s.done!=null&&typeof s.done!=='boolean'||s.load!=null&&(!Number.isFinite(s.load)||s.load<0||s.load>9999)||s.reps!=null&&(!Number.isInteger(s.reps)||s.reps<0||s.reps>999))))throw new Error('Séries inválidas no backup.');
    }
    if(key.startsWith('done::')){const done=JSON.parse(value);if(!done||typeof done!=='object'||Array.isArray(done)||Object.values(done).some(v=>![true,false,'skipped'].includes(v)))throw new Error('Marcações inválidas no backup.');}
    if(key==='hist::sessions'){const h=JSON.parse(value);if(!Array.isArray(h)||h.some(x=>!x||typeof x.key!=='string'||typeof x.workout!=='string'||typeof x.name!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(x.date)||!Number.isFinite(Date.parse(x.date+'T12:00:00'))||typeof x.at!=='string'||!Number.isFinite(Date.parse(x.at))))throw new Error('Sessões inválidas no backup.');}
    if(/^(carga::|peso_)/.test(key)&&(value!==''&&(!Number.isFinite(Number(value))||Number(value)<0||Number(value)>9999)))throw new Error('Carga inválida no backup.');
    if(key==='theme'&&!['light','dark'].includes(value))throw new Error('Tema inválido.');
    if(key==='rest::seconds'&&!REST_OPTIONS.includes(Number(value)))throw new Error('Descanso inválido.');
    if(key.startsWith('plan::')&&DB[value]?.family!==key.slice(6))throw new Error('Ficha preferida inválida.');
  }
  return entries;
}
function restoreBackupEntries(entries) {
  // Validação completa antes de escrever; restaura os dados originais se uma escrita falhar.
  const original=Object.entries(localStorage).filter(([k])=>BACKUP_KEY.test(k));
  try{
    entries.forEach(([key,value])=>localStorage.setItem(key,value));
    const incoming=new Set(entries.map(([key])=>key));
    original.filter(([key])=>!incoming.has(key)).forEach(([key])=>localStorage.removeItem(key));
  }catch(error){
    try{Object.keys(localStorage).filter(k=>BACKUP_KEY.test(k)).forEach(k=>localStorage.removeItem(k));original.forEach(([key,value])=>localStorage.setItem(key,value));}catch{}
    throw new Error('Não foi possível restaurar. Confira o espaço do aparelho; mantenha seu arquivo de backup.');
  }
  setTheme(storageRead('theme')||'dark');refreshApp();
}
$('#localBackup').onclick=()=>{
  try{const blob=new Blob([makeBackup()],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='meu-treino-backup-'+iso()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Arquivo de backup gerado.');}catch{toast('Não foi possível exportar o backup.');}
};
$('#localRestore').onclick=()=>$('#backupFile').click();
$('#backupFile').onchange=async event=>{
  const file=event.target.files[0];if(!file)return;
  try{if(file.size>10*1024*1024)throw new Error('Backup grande demais.');const entries=validateBackup(JSON.parse(await file.text()));if(!confirm('Restaurar este backup e substituir os registros locais?'))return;restoreBackupEntries(entries);toast('Backup restaurado.');}catch(error){toast(error.message||'Backup inválido.');}finally{event.target.value='';}
};
