// Backup voluntário na pasta privada do appDataFolder do Google Drive.
// O ID OAuth Web é público; o token só existe na memória durante a operação.
(() => {
  const name = 'meu-treino-silo-backup.json';
  const scope = 'https://www.googleapis.com/auth/drive.appdata';
  const idInput = document.getElementById('googleClientId');
  const status = document.getElementById('backupStatus');
  idInput.value = localStorage.getItem('google::clientId') || '';
  idInput.addEventListener('change', () => localStorage.setItem('google::clientId', idInput.value.trim()));
  const message = value => { status.textContent = value; };
  function loadGIS() {
    if (window.google?.accounts?.oauth2) return Promise.resolve();
    if (!navigator.onLine) throw new Error('Conecte à internet para acessar o Google Drive.');
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Não foi possível carregar o login do Google.'));
      document.head.appendChild(script);
    });
  }
  async function token() {
    const clientId = idInput.value.trim();
    if (!clientId.endsWith('.apps.googleusercontent.com')) throw new Error('Informe um ID OAuth Web válido nas configurações.');
    localStorage.setItem('google::clientId', clientId);
    await loadGIS();
    return new Promise((resolve, reject) => {
      const client = google.accounts.oauth2.initTokenClient({
        client_id: clientId, scope,
        callback: response => response.error ? reject(new Error(response.error)) : resolve(response.access_token),
        error_callback: error => reject(new Error(error.message || 'Login do Google cancelado.'))
      });
      client.requestAccessToken({ prompt: 'consent' });
    });
  }
  async function driveRequest(url, accessToken, options = {}) {
    const response = await fetch(url, {
      ...options,
      headers: { Authorization: `Bearer ${accessToken}`, ...options.headers }
    });
    if (!response.ok) {
      let detail = '';
      try { detail = (await response.json()).error?.message || ''; } catch {}
      throw new Error(`Drive: ${detail || response.status}`);
    }
    return response;
  }
  async function findBackup(accessToken) {
    const q = encodeURIComponent(`name = '${name}' and trashed = false`);
    const url = `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=${q}&fields=files(id,name,modifiedTime),nextPageToken&page_size=100`;
    const result = await (await driveRequest(url, accessToken)).json();
    return (result.files || []).sort((a, b) => b.modifiedTime.localeCompare(a.modifiedTime))[0] || null;
  }
  async function save(accessToken) {
    const existing = await findBackup(accessToken);
    const payload = makeBackup();
    if (existing) {
      await driveRequest(`https://www.googleapis.com/upload/drive/v3/files/${encodeURIComponent(existing.id)}?uploadType=media`, accessToken, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: payload });
    } else {
      const boundary = 'siloBackupBoundary';
      const multipart = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify({ name, parents: ['appDataFolder'], mimeType: 'application/json' })}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n${payload}\r\n--${boundary}--`;
      await driveRequest('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', accessToken, { method: 'POST', headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body: multipart });
    }
    message(`Backup salvo em ${new Date().toLocaleString('pt-BR')}.`);
  }
  async function restore(accessToken) {
    const file = await findBackup(accessToken);
    if (!file) throw new Error('Nenhum backup deste app foi encontrado no Drive.');
    const response = await driveRequest(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(file.id)}?alt=media`, accessToken);
    const entries = validateBackup(await response.json());
    if (!confirm(`Restaurar o backup de ${new Date(file.modifiedTime).toLocaleString('pt-BR')}? Cargas, histórico e repetições locais serão substituídos.`)) { message('Restauração cancelada.'); return; }
    restoreBackupEntries(entries);
    message('Backup restaurado. Seus treinos e cargas já estão disponíveis.');
  }
  async function run(action) {
    document.getElementById('driveBackup').disabled = true;
    document.getElementById('driveRestore').disabled = true;
    message('Conectando ao Google Drive…');
    try { const accessToken = await token(); await action(accessToken); }
    catch (error) { message(error.message || 'Falha na conexão com o Drive.'); }
    finally { document.getElementById('driveBackup').disabled = false; document.getElementById('driveRestore').disabled = false; }
  }
  document.getElementById('driveBackup').onclick = () => run(save);
  document.getElementById('driveRestore').onclick = () => run(restore);
})();
