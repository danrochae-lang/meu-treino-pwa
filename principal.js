// Fichas principais têm IDs próprios; IDs históricos de exercícios são mantidos.
const principalVideo = {
  supino_reto_maquina:'https://www.youtube.com/watch?v=uowc-nClg0w',
  pulley_frente:'https://www.youtube.com/watch?v=HQJvDXgcweo',
  elevacao_lateral_sentada:'https://www.youtube.com/watch?v=XJYDDjbnNK4',
  triceps_maquina:'https://www.youtube.com/watch?v=xKV1MiePXaU',
  crucifixo_maquina:'https://www.youtube.com/watch?v=zEcIgGm7fxU',
  rosca_alternada:'https://www.youtube.com/watch?v=NCXmFggsH9Y',
  rosca_martelo:'https://www.youtube.com/watch?v=ZmsU54ntlOA',
  leg_press:'https://www.youtube.com/watch?v=waAxlYvtCcI',
  cadeira_flexora:'https://www.youtube.com/watch?v=y9pl2WmFSfI',
  cadeira_extensora:'https://www.youtube.com/watch?v=PTIVgR2_d00',
  remada_apoio:'https://www.youtube.com/watch?v=RfblWBArs4k',
  panturrilha_sentada:'https://www.youtube.com/watch?v=20m0Es3f024',
  bird_dog:'https://www.youtube.com/watch?v=xEDnlOxeJH4',
  ponte_solo:'https://www.youtube.com/watch?v=1satDE63Bwc',
  supino_inclinado_maquina:'https://www.youtube.com/watch?v=0iM8Fi9boT4',
  peck_invertido:'https://www.youtube.com/watch?v=EaQy_Xn0SNw'
};
const principalSource = Object.values(DB).flatMap(w=>w.exercises);
function principalExercise(id, name, sets, reps, rest, target, cue) {
  const original=principalSource.find(e=>e.id===(id==='supino_inclinado_maquina'?'supino_reto_maquina':id));
  if(!original) throw new Error(`Exercício ausente: ${id}`);
  const guide={...original.guide,watch:[cue]};
  if(id==='supino_inclinado_maquina') {
    guide.setup='Ajuste o banco e mantenha pés e costas apoiados.';
    guide.steps=['Segure os pegadores e empurre com controle, sem elevar os ombros.','Retorne lentamente até uma amplitude confortável.'];
    delete guide.animation;
  }
  const search='https://www.youtube.com/results?search_query='+encodeURIComponent(name+' execução correta exercício');
  return {...original,id,name,sets:String(sets),reps,rest,target,cue,guide,
    img:id==='supino_inclinado_maquina'?'generated/supino-inclinado-maquina.png':original.img,
    url:principalVideo[id]||search,videoDirect:!!principalVideo[id]};
}
const pe=principalExercise;
const principalWorkouts={
  PR_A:{name:'Superiores primeiro',focus:'Peito, costas, ombros, braços e pernas',exercises:[
    pe('supino_reto_maquina','Supino na máquina',3,'8–12','90–120 s','Peito e tríceps','Mantenha costas e pés apoiados; empurre sem arquear demais a lombar.'),
    pe('pulley_frente','Puxada frontal na máquina',3,'8–12','90–120 s','Costas e bíceps','Puxe em direção à parte superior do peito sem jogar o tronco para trás.'),
    pe('crucifixo_maquina','Crucifixo na máquina',2,'10–15','60–90 s','Peito','Abra os braços até uma posição confortável para os ombros e controle a volta.'),
    pe('elevacao_lateral_sentada','Elevação lateral sentada',2,'12–15','60–90 s','Ombros','Suba controladamente, sem balançar o corpo ou encolher os ombros.'),
    pe('triceps_maquina','Tríceps na máquina',2,'10–15','60–90 s','Tríceps','Mantenha o apoio e estenda os cotovelos sem impulsionar o tronco.'),
    pe('rosca_alternada','Rosca com halteres',2,'10–15','60–90 s','Bíceps','Mantenha cotovelos próximos ao corpo; não use as costas para levantar o peso.'),
    pe('leg_press','Leg press 45°',2,'10–15','90–120 s','Coxas e glúteos','Mantenha quadril e costas apoiados; desça apenas até preservar o apoio.'),
    pe('cadeira_flexora','Cadeira flexora',2,'10–15','60–90 s','Posterior das coxas','Flexione os joelhos devagar, sem tirar o quadril do banco.')
  ]},
  PR_B:{name:'Pernas primeiro',focus:'Pernas, costas, peito, ombros e braços',exercises:[
    pe('cadeira_extensora','Cadeira extensora',3,'10–15','60–90 s','Frente das coxas','Ajuste o banco e estenda os joelhos sem chutar o peso.'),
    pe('cadeira_flexora','Cadeira flexora',3,'10–15','60–90 s','Posterior das coxas','Controle a subida e a volta, mantendo o quadril apoiado.'),
    pe('panturrilha_sentada','Panturrilha sentada',3,'12–20','60–90 s','Panturrilhas','Suba e desça com controle, sem quicar.'),
    pe('remada_apoio','Remada na máquina com apoio no peito',3,'8–12','90–120 s','Costas','Mantenha o peito no apoio e leve os cotovelos para trás sem impulso. Se incomodar, peça ao professor para ajustar; avalie puxada frontal com pegada confortável.'),
    pe('supino_inclinado_maquina','Supino inclinado na máquina',2,'8–12','90–120 s','Peito, ombros e tríceps','Ajuste o banco, mantenha as costas apoiadas e não eleve os ombros.'),
    pe('peck_invertido','Crucifixo inverso na máquina',2,'12–15','60–90 s','Posterior dos ombros e costas','Abra os braços sem encolher os ombros.'),
    pe('triceps_maquina','Tríceps na máquina',2,'10–15','60–90 s','Tríceps','Evite mover o corpo para ajudar na extensão.'),
    pe('rosca_martelo','Rosca martelo com halteres',2,'10–15','60–90 s','Bíceps e antebraços','Mantenha as palmas voltadas uma para a outra e os cotovelos estáveis.')
  ]},
  PR_C:{name:'Superiores primeiro',focus:'Costas, peito, ombros, braços, pernas e core',exercises:[
    pe('pulley_frente','Puxada frontal na máquina',3,'8–12','90–120 s','Costas e bíceps','Mantenha o tronco estável e controle a volta.'),
    pe('supino_inclinado_maquina','Supino inclinado na máquina',3,'8–12','90–120 s','Peito, ombros e tríceps','Mantenha pés e costas apoiados, sem forçar a lombar.'),
    pe('remada_apoio','Remada com apoio no peito',2,'10–12','90 s','Costas','Puxe sem afastar o peito do apoio. Se incomodar, avalie a puxada frontal com pegada confortável e peça ajuste ao professor.'),
    pe('elevacao_lateral_sentada','Elevação lateral sentada',2,'12–15','60–90 s','Ombros','Use uma carga que permita subir sem balançar.'),
    pe('triceps_maquina','Tríceps na máquina',2,'10–15','60–90 s','Tríceps','Faça o movimento controlado, sem travar os cotovelos com força.'),
    pe('rosca_alternada','Rosca com halteres',2,'10–15','60–90 s','Bíceps','Evite projetar o tronco para trás; a máquina é uma alternativa, com histórico próprio.'),
    pe('leg_press','Leg press 45°',2,'10–15','90–120 s','Coxas e glúteos','Respeite a amplitude em que o quadril permanece apoiado.'),
    pe('bird_dog','Bird-dog',2,'6–8 / lado','45–60 s','Tronco e glúteos','Estenda braço e perna opostos sem girar o quadril; segure por 2–3 segundos e respire.')
  ]},
  PR_D:{name:'Pernas primeiro',focus:'Pernas, glúteos, peito, costas, ombros e braços',exercises:[
    pe('cadeira_extensora','Cadeira extensora',3,'10–15','60–90 s','Frente das coxas','Suba e desça com controle, sem forçar uma amplitude dolorosa.'),
    pe('cadeira_flexora','Cadeira flexora',3,'10–15','60–90 s','Posterior das coxas','Mantenha o quadril apoiado. A mesa flexora é uma alternativa com histórico próprio; escolha a mais confortável para a lombar.'),
    pe('ponte_solo','Elevação de quadril no chão',2,'10–15','60–90 s','Glúteos','Comece sem carga; eleve o quadril sem compensar arqueando a lombar.'),
    pe('panturrilha_sentada','Panturrilha sentada',3,'12–20','60–90 s','Panturrilhas','Faça o movimento devagar e com amplitude confortável.'),
    pe('supino_reto_maquina','Supino na máquina',2,'8–12','90–120 s','Peito e tríceps','Mantenha o apoio das costas durante toda a série.'),
    pe('pulley_frente','Puxada frontal na máquina',2,'10–12','90–120 s','Costas e bíceps','Evite inclinar o tronco para puxar mais peso.'),
    pe('elevacao_lateral_sentada','Elevação lateral sentada',2,'12–15','60–90 s','Ombros','Evite usar impulso.'),
    pe('triceps_maquina','Tríceps na máquina',2,'10–15','60–90 s','Tríceps','Controle também a volta do peso.'),
    pe('rosca_martelo','Rosca martelo',2,'10–15','60–90 s','Bíceps e antebraços','Mantenha o corpo estável e não balance os halteres.')
  ]}
};
for(const [id,w] of Object.entries(principalWorkouts)) DB[id]={...w, family:'PR', variant:'Principal',code:'PRINCIPAL '+id.slice(-1),duration:'',regions:[],warmup:'Faça um aquecimento leve e séries de preparação conforme orientação.',cardio:'Opcional, conforme sua orientação e recuperação.',note:'Respeite as cargas e amplitudes orientadas para você.'};
