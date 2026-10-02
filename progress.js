const chartState = { workout: 'A', exercise: DB.A.exercises[0].id, metric: 'load' };
function chartPoints(workout, exerciseId, metric) {
  const prefix = 'sets::';
  const points = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.startsWith(prefix)) continue;
    const parts = key.split('::');
    if (parts.length !== 4 || parts[2] !== workout || parts[3] !== exerciseId || !/^\d{4}-\d{2}-\d{2}$/.test(parts[1])) continue;
    let sets;
    try { sets = JSON.parse(storageRead(key)); } catch { continue; }
    if (!Array.isArray(sets)) continue;
    const done = sets.filter(item => item?.done);
    if (!done.length) continue;
    const numbers = done.map(item => metric === 'load' ? Number(item.load) : Number(item.reps))
      .filter((value, index) => Number.isFinite(value) && value >= 0 && (metric === 'load' ? done[index].load !== null && done[index].load !== undefined : done[index].reps !== null && done[index].reps !== undefined));
    if (!numbers.length) continue;
    points.push({ date: parts[1], value: metric === 'load' ? Math.max(...numbers) : numbers.reduce((sum, value) => sum + value, 0) });
  }
  return points.sort((a, b) => a.date.localeCompare(b.date)).slice(-12);
}
function renderChart() {
  const root = document.getElementById('historyGraph');
  const exercises = [...DB[chartState.workout].exercises, ...(ARCHIVED_EXERCISES[chartState.workout] || []).map(e => ({...e, name: e.name + ' · registro antigo'}))];
  if (!exercises.some(e => e.id === chartState.exercise)) chartState.exercise = exercises[0].id;
  const points = chartPoints(chartState.workout, chartState.exercise, chartState.metric);
  const options = Object.entries(DB).map(([key]) => `<option value="${key}" ${key === chartState.workout ? 'selected' : ''}>Treino ${key} · ${DB[key].variant}</option>`).join('');
  const exerciseOptions = exercises.map(e => `<option value="${e.id}" ${e.id === chartState.exercise ? 'selected' : ''}>${e.name}</option>`).join('');
  root.innerHTML = `<span class="eyebrow">CONSISTÊNCIA, SÉRIE A SÉRIE</span><h2>Evolução por exercício</h2><p>Exibe até 12 dias com séries marcadas. Carga = maior peso do dia; repetições = soma das séries concluídas. Em exercícios por lado, a soma usa as repetições registradas por lado.</p><div class="chartControls"><select id="chartWorkout" aria-label="Treino do gráfico">${options}</select><select id="chartExercise" aria-label="Exercício do gráfico">${exerciseOptions}</select><select id="chartMetric" aria-label="Medida do gráfico"><option value="load" ${chartState.metric === 'load' ? 'selected' : ''}>Carga máxima (kg)</option><option value="reps" ${chartState.metric === 'reps' ? 'selected' : ''}>Repetições totais</option></select></div><div id="chartCanvas"></div>`;
  const canvas = root.querySelector('#chartCanvas');
  if (!points.length) canvas.innerHTML = '<div class="emptyState">Registre carga ou repetições e marque uma série para começar seu gráfico.</div>';
  else {
    const w = 320, h = 142, left = 40, right = 10, top = 15, bottom = 24;
    const max = Math.max(1, ...points.map(p => p.value));
    const x = i => left + (points.length === 1 ? (w - left - right) / 2 : i * (w - left - right) / (points.length - 1));
    const y = value => h - bottom - value * (h - top - bottom) / max;
    const coords = points.map((p, i) => `${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(' ');
    canvas.innerHTML = `<div class="chartStat"><strong>${points[points.length-1].value}${chartState.metric === 'load' ? ' kg' : ' reps'}</strong><span>último registro</span></div><svg class="chartSvg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Evolução: ${points.map(p => `${p.date}: ${p.value}`).join('; ')}"><line x1="${left}" x2="${w - right}" y1="${h - bottom}" y2="${h - bottom}" stroke="var(--line)"/><line x1="${left}" x2="${w - right}" y1="${top}" y2="${top}" stroke="var(--line)" stroke-dasharray="3 5"/><text x="0" y="${top + 4}" fill="var(--muted)" font-size="10">${max}</text><polyline points="${coords}" fill="none" stroke="var(--amber)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>${points.map((p, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(p.value).toFixed(1)}" r="4" fill="var(--amber2)"/>`).join('')}</svg><div class="chartRows">${points.map(p => `<span>${p.date.slice(8)}/${p.date.slice(5, 7)}: ${p.value}${chartState.metric === 'load' ? ' kg' : ' reps'}</span>`).join('')}</div>`;
  }
  root.querySelector('#chartWorkout').onchange = event => { chartState.workout = event.target.value; chartState.exercise = DB[chartState.workout].exercises[0].id; renderChart(); };
  root.querySelector('#chartExercise').onchange = event => { chartState.exercise = event.target.value; renderChart(); };
  root.querySelector('#chartMetric').onchange = event => { chartState.metric = event.target.value; renderChart(); };
}

document.getElementById('clearHistory').onclick = () => {
  if (!confirm('Apagar sessões finalizadas e séries de dias anteriores? As cargas e as séries de hoje serão mantidas.')) return;
  saveHist([]);
  Object.keys(localStorage).filter(key => (key.startsWith('sets::') || key.startsWith('done::')) && !key.includes(`::${iso()}::`)).forEach(key => localStorage.removeItem(key));
  renderHistory(); renderHome();
};
