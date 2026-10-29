const DB = {
  "A": {
    "name": "Peito + Ombros + Tríceps",
    "code": "SETOR A",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro supino.",
    "cardio": "15–20 min depois da musculação: caminhada rápida, bike ou elíptico.",
    "note": "Crucifixo na máquina fica pesado no fim: 2–3 séries são suficientes; não precisa levar tudo à falha.",
    "exercises": [
      {
        "id": "supino_inclinado",
        "name": "Supino inclinado com halteres",
        "sets": "3",
        "reps": "10–15",
        "target": "Peitoral superior",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-inclinado.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+inclinado+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o tronco no banco. Use inclinação moderada e peça ajuda para posicionar os halteres se necessário; respeite sua restrição de carregar peso.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco perto de 30°, apoie cabeça e costas e firme os pés.",
          "steps": [
            "Desça os halteres com cotovelos controlados até amplitude confortável.",
            "Empurre para cima sem bater os halteres; solte o ar na subida."
          ],
          "watch": [
            "Evite arquear a lombar ou levar os ombros muito para trás."
          ]
        }
      },
      {
        "id": "crucifixo_inclinado",
        "name": "Crucifixo inclinado com halteres",
        "sets": "3",
        "reps": "12–15",
        "target": "Peitoral superior",
        "secondary": "Deltoide anterior",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_e.png#0",
        "url": "https://www.youtube.com/results?search_query=crucifixo+inclinado+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Cotovelos levemente flexionados. Limite a descida à amplitude confortável do ombro.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Deite no banco inclinado com pés firmes e cotovelos levemente flexionados.",
          "steps": [
            "Abra os braços em arco até amplitude confortável para os ombros.",
            "Aproxime os halteres sem perder a flexão suave dos cotovelos."
          ],
          "watch": [
            "Evite descer demais ou transformar o movimento em supino."
          ]
        }
      },
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "crucifixo_maquina",
        "name": "Crucifixo na máquina",
        "sets": "2–3",
        "reps": "12–15",
        "target": "Peitoral",
        "secondary": "Deltoide anterior",
        "rest": "45–60 s",
        "img": "crucifixo-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=crucifixo+m%C3%A1quina+peck+deck+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use carga controlável e não estique demais os ombros para trás. Não precisa chegar à falha.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para alinhar as pegadas ao peito e encoste as costas.",
          "steps": [
            "Feche os braços em arco, aproximando as mãos à frente do corpo.",
            "Retorne lentamente, sem deixar os ombros rodarem muito para trás."
          ],
          "watch": [
            "Evite carga que force uma abertura dolorosa do ombro."
          ]
        }
      },
      {
        "id": "elevacao_lateral",
        "name": "Elevação lateral com halteres",
        "sets": "3",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "elevacao-lateral.jpg",
        "url": "https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+lateral+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Eleve sem embalo até a altura confortável do ombro. Não compense arqueando a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Fique estável com halteres ao lado do corpo e cotovelos levemente flexionados.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável, sem encolher os ombros.",
            "Desça de modo controlado, mantendo o tronco parado."
          ],
          "watch": [
            "Evite embalo e compensação pela lombar."
          ]
        }
      },
      {
        "id": "peck_invertido",
        "name": "Peck deck invertido",
        "sets": "3",
        "reps": "12–15",
        "target": "Deltoide posterior",
        "secondary": "Romboides · trapézio médio",
        "rest": "45–60 s",
        "img": "peck-invertido.jpg",
        "url": "https://www.youtube.com/results?search_query=peck+deck+invertido+deltoide+posterior+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o peito no encosto. Abra os braços sem elevar os ombros nem jogar o tronco para trás.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a máquina e apoie o peito no encosto.",
          "steps": [
            "Abra os braços mantendo os ombros baixos e a cabeça alinhada.",
            "Volte devagar sem deixar as escápulas perderem o controle."
          ],
          "watch": [
            "Evite jogar o tronco para trás ou elevar os ombros."
          ]
        }
      },
      {
        "id": "triceps_maquina",
        "name": "Tríceps máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Tríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "triceps-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=tr%C3%ADceps+m%C3%A1quina+muscula%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste o banco e mantenha as costas apoiadas. Estenda os cotovelos sem mover o tronco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule a máquina e mantenha costas e braços bem apoiados.",
          "steps": [
            "Estenda os cotovelos sem mover o tronco.",
            "Retorne lentamente até a amplitude confortável."
          ],
          "watch": [
            "Evite arrancos e pressão desconfortável nos cotovelos."
          ]
        }
      }
    ],
    "family": "A",
    "variant": "Padrão",
    "focus": "Peitoral superior e movimentos de empurrar",
    "regions": [
      "chest",
      "shoulders",
      "arms"
    ],
    "duration": "45–60"
  },
  "B": {
    "name": "Costas + Bíceps + Core",
    "code": "SETOR B",
    "warmup": "5–8 min leves + 1 série de adaptação no Pulley e na remada.",
    "cardio": "Opcional: 15–20 min depois da musculação. Se estiver cansado, deixe para outro dia.",
    "note": "A remada com apoio substitui a remada curvada para facilitar a execução e reduzir a exigência de estabilização do tronco.",
    "exercises": [
      {
        "id": "pulley_frente",
        "name": "Pulley frente",
        "sets": "3",
        "reps": "12",
        "target": "Latíssimo do dorso",
        "secondary": "Bíceps",
        "rest": "60–90 s",
        "img": "pulley-frente.jpg",
        "url": "https://www.youtube.com/results?search_query=pulley+frente+puxada+pronada+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Puxe pela frente, sem levar a barra à nuca ou balançar o tronco. Para evitar polia, escolha B2.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com coxas firmes sob o apoio e segure a barra à frente.",
          "steps": [
            "Puxe a barra para a região alta do peito, conduzindo os cotovelos para baixo.",
            "Retorne com controle sem elevar o tronco ou perder a posição das escápulas."
          ],
          "watch": [
            "Evite puxar atrás da nuca ou balançar a lombar."
          ],
          "animation": "media/pulley_frente.webp"
        }
      },
      {
        "id": "puxada_triangulo",
        "name": "Puxada com triângulo",
        "sets": "3",
        "reps": "12",
        "target": "Latíssimo do dorso",
        "secondary": "Romboides · bíceps",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_e.png#2",
        "url": "https://www.youtube.com/results?search_query=puxada+alta+com+tri%C3%A2ngulo+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o tronco estável e os cotovelos próximos do corpo. Para evitar polia, escolha B2.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com coxas presas e segure o triângulo em pegada neutra.",
          "steps": [
            "Puxe o triângulo em direção ao peito com cotovelos para baixo.",
            "Deixe os braços subir com controle, sem soltar o peso de repente."
          ],
          "watch": [
            "Evite inclinar o tronco para transformar a puxada em remada."
          ],
          "animation": "media/puxada_triangulo.webp"
        }
      },
      {
        "id": "remada_apoio",
        "name": "Remada máquina com apoio do peito",
        "sets": "3",
        "reps": "10–15",
        "target": "Costas médias",
        "secondary": "Latíssimo · romboides · trapézio médio",
        "rest": "60–90 s",
        "img": "remada-maquina-apoio.jpg",
        "url": "https://www.youtube.com/results?search_query=remada+m%C3%A1quina+apoio+peito+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o peito apoiado durante toda a série. Puxe sem compensar com a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para apoiar o peito e alcançar as pegadas sem esticar demais.",
          "steps": [
            "Puxe os cotovelos para trás sem perder contato do peito com o apoio.",
            "Retorne devagar, deixando as escápulas moverem-se naturalmente."
          ],
          "watch": [
            "Evite compensar com a lombar."
          ]
        }
      },
      {
        "id": "rosca_alternada",
        "name": "Rosca alternada",
        "sets": "4",
        "reps": "1×15 · 2×12 · 1×10",
        "target": "Bíceps",
        "secondary": "Braquial · braquiorradial",
        "rest": "45–60 s",
        "img": "rosca-alternada.jpg",
        "url": "https://www.youtube.com/results?search_query=rosca+alternada+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Cotovelos próximos do corpo, sem balançar o tronco. Use banco com encosto se precisar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Fique estável com um halter em cada mão e cotovelos perto do tronco.",
          "steps": [
            "Flexione um cotovelo de cada vez, mantendo o braço sem balanço.",
            "Desça o halter com controle antes de alternar o lado."
          ],
          "watch": [
            "Evite inclinar o corpo para ajudar a subir."
          ]
        }
      },
      {
        "id": "rosca_martelo",
        "name": "Rosca martelo",
        "sets": "3",
        "reps": "12",
        "target": "Braquial · braquiorradial",
        "secondary": "Bíceps",
        "rest": "45–60 s",
        "img": "rosca-martelo.jpg",
        "url": "https://www.youtube.com/results?search_query=rosca+martelo+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha pegada neutra e tronco imóvel. Use banco com encosto se precisar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Segure os halteres com palmas voltadas uma para a outra.",
          "steps": [
            "Flexione os cotovelos mantendo os braços próximos ao corpo.",
            "Desça lentamente, sem perder a pegada neutra."
          ],
          "watch": [
            "Evite impulsionar a carga com ombros ou tronco."
          ]
        }
      },
      {
        "id": "dead_bug",
        "name": "Dead Bug",
        "sets": "3",
        "reps": "8–10 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "dead-bug.jpg",
        "url": "https://www.youtube.com/results?search_query=dead+bug+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use amplitude curta, respire e mantenha o tronco estável. Pare se houver dor ou perda do controle lombar.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Deite de costas com quadris e joelhos flexionados e braços apontados para cima.",
          "steps": [
            "Afaste lentamente um braço e a perna oposta sem perder o controle do tronco.",
            "Volte ao centro e repita com o outro lado."
          ],
          "watch": [
            "Reduza a amplitude se a lombar perder a posição estável."
          ]
        }
      }
    ],
    "family": "B",
    "variant": "Padrão",
    "focus": "Puxadas verticais e costas",
    "regions": [
      "back",
      "arms",
      "core"
    ],
    "duration": "40–55"
  },
  "C": {
    "name": "Pernas + Glúteos + Core",
    "code": "SETOR C",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves na cadeira extensora.",
    "cardio": "Não é obrigatório depois deste treino. Se quiser, faça 5–10 min bem leves; o cardio principal pode ficar após A/B ou em outro dia.",
    "note": "Leg Press retirado conforme sua preferência. Exercícios apoiados ainda exigem ajuste individual de amplitude e carga.",
    "exercises": [
      {
        "id": "cadeira_adutora",
        "name": "Cadeira adutora",
        "sets": "3",
        "reps": "15",
        "target": "Adutores",
        "secondary": "Estabilizadores do quadril",
        "rest": "45–60 s",
        "img": "cadeira-adutora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+adutora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha a pelve apoiada. Use amplitude confortável e feche as pernas sem impulso.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste encosto e amplitude inicial sem forçar o quadril.",
          "steps": [
            "Aproxime as pernas mantendo a pelve apoiada.",
            "Abra de novo com controle, sem deixar os pesos baterem."
          ],
          "watch": [
            "Evite inclinar o tronco ou forçar amplitude dolorosa."
          ]
        }
      },
      {
        "id": "cadeira_abdutora",
        "name": "Cadeira abdutora",
        "sets": "3",
        "reps": "15",
        "target": "Glúteo médio",
        "secondary": "Abdutores do quadril",
        "rest": "45–60 s",
        "img": "cadeira-abdutora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+abdutora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha costas e pelve apoiadas. Abra sem inclinar o tronco nem forçar a amplitude.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com costas apoiadas e ajuste a abertura inicial confortável.",
          "steps": [
            "Afaste as pernas sem tirar a pelve do assento.",
            "Retorne devagar mantendo a tensão controlada."
          ],
          "watch": [
            "Evite projetar o tronco ou girar a lombar."
          ]
        }
      },
      {
        "id": "elevacao_pelvica",
        "name": "Elevação pélvica máquina / articulada",
        "sets": "3",
        "reps": "10–12",
        "target": "Glúteos",
        "secondary": "Posteriores da coxa",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_e.png#3",
        "url": "https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+p%C3%A9lvica+m%C3%A1quina+hip+thrust+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Só use se já estiver liberado e confortável. Alinhe o quadril sem hiperestender a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule a máquina para apoiar a parte superior do tronco e a pelve.",
          "steps": [
            "Empurre pelos pés e estenda o quadril até alinhar tronco e coxas.",
            "Desça com controle sem deixar a carga derrubar a pelve."
          ],
          "watch": [
            "Evite hiperestender a lombar no topo."
          ],
          "animation": "media/elevacao_pelvica.webp"
        }
      },
      {
        "id": "cadeira_flexora",
        "name": "Cadeira flexora",
        "sets": "3",
        "reps": "10–15",
        "target": "Posteriores da coxa",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_e.png#1",
        "url": "https://www.youtube.com/results?search_query=cadeira+flexora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste os apoios da coxa e do tornozelo. Mantenha a pelve encostada no banco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste os apoios da coxa e tornozelo; mantenha a pelve no banco.",
          "steps": [
            "Flexione os joelhos aproximando as pernas do assento.",
            "Estenda novamente de modo controlado, sem bater o peso."
          ],
          "watch": [
            "Evite tirar o quadril do assento ou fazer arrancos."
          ]
        }
      },
      {
        "id": "cadeira_extensora",
        "name": "Cadeira extensora",
        "sets": "4",
        "reps": "1×15 · 2×12 · 1×10",
        "target": "Quadríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "cadeira-extensora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+extensora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Alinhe o eixo da máquina com o joelho. Suba e desça com controle.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Alinhe o eixo da máquina ao joelho e o rolo à parte inferior da perna.",
          "steps": [
            "Estenda os joelhos até amplitude confortável, sem arrancar.",
            "Desça lentamente sem deixar o peso bater."
          ],
          "watch": [
            "Evite elevar a pelve do banco ou forçar o joelho."
          ],
          "animation": "media/cadeira_extensora.webp"
        }
      },
      {
        "id": "panturrilha_sentada",
        "name": "Panturrilha sentada na máquina",
        "sets": "3",
        "reps": "12–20",
        "target": "Panturrilhas · ênfase no sóleo",
        "secondary": "Gastrocnêmio",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_b.png#2",
        "url": "https://www.youtube.com/results?search_query=Panturrilha%20sentada%20na%20m%C3%A1quina%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Use máquina sentada, com apoio sobre as coxas. Mova os tornozelos com controle, sem impulsionar o tronco.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Apoie as coxas sob a almofada e a parte anterior dos pés na plataforma.",
          "steps": [
            "Eleve os calcanhares pelo movimento dos tornozelos.",
            "Desça devagar até alongamento confortável."
          ],
          "watch": [
            "Evite usar impulso do tronco ou deixar os pés escorregarem."
          ],
          "animation": "media/panturrilha_sentada.webp"
        }
      },
      {
        "id": "bird_dog",
        "name": "Bird Dog",
        "sets": "3",
        "reps": "8–10 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "bird-dog.jpg",
        "url": "https://www.youtube.com/results?search_query=bird+dog+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Estenda braço e perna opostos sem girar o quadril. Comece com amplitude curta.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Fique em quatro apoios com mãos sob ombros e joelhos sob quadris.",
          "steps": [
            "Estenda um braço e a perna oposta sem girar o tronco.",
            "Volte com controle e alterne os lados."
          ],
          "watch": [
            "Reduza a amplitude se a lombar arquear ou a pelve rodar."
          ]
        }
      }
    ],
    "family": "C",
    "variant": "Padrão",
    "focus": "Pernas e quadril com apoio",
    "regions": [
      "legs",
      "glutes",
      "core"
    ],
    "duration": "45–60"
  },
  "A2": {
    "name": "Peito horizontal + Ombros + Tríceps",
    "code": "SETOR A",
    "family": "A",
    "variant": "Variação",
    "focus": "Peito horizontal e deltoide lateral",
    "regions": [
      "chest",
      "shoulders",
      "arms"
    ],
    "exercises": [
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "crucifixo_maquina",
        "name": "Crucifixo na máquina",
        "sets": "2",
        "reps": "12–15",
        "target": "Peitoral",
        "secondary": "Deltoide anterior",
        "rest": "45–60 s",
        "img": "crucifixo-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=crucifixo+m%C3%A1quina+peck+deck+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use carga controlável e não estique demais os ombros para trás. Não precisa chegar à falha.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para alinhar as pegadas ao peito e encoste as costas.",
          "steps": [
            "Feche os braços em arco, aproximando as mãos à frente do corpo.",
            "Retorne lentamente, sem deixar os ombros rodarem muito para trás."
          ],
          "watch": [
            "Evite carga que force uma abertura dolorosa do ombro."
          ]
        }
      },
      {
        "id": "elevacao_lateral_sentada",
        "name": "Elevação lateral sentada com encosto",
        "sets": "3",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_d.png#0",
        "url": "https://www.youtube.com/results?search_query=Eleva%C3%A7%C3%A3o%20lateral%20sentada%20com%20encosto%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Banco com encosto, halteres leves e pés firmes. Eleve sem impulso e sem arquear a lombar.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Sente com as costas no encosto e halteres ao lado do corpo.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável.",
            "Desça devagar sem desencostar o tronco do banco."
          ],
          "watch": [
            "Evite encolher os ombros ou jogar a cabeça à frente."
          ],
          "animation": "media/elevacao_lateral_sentada.webp"
        }
      },
      {
        "id": "triceps_maquina",
        "name": "Tríceps máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Tríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "triceps-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=tr%C3%ADceps+m%C3%A1quina+muscula%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste o banco e mantenha as costas apoiadas. Estenda os cotovelos sem mover o tronco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule a máquina e mantenha costas e braços bem apoiados.",
          "steps": [
            "Estenda os cotovelos sem mover o tronco.",
            "Retorne lentamente até a amplitude confortável."
          ],
          "watch": [
            "Evite arrancos e pressão desconfortável nos cotovelos."
          ]
        }
      },
      {
        "id": "peck_invertido",
        "name": "Peck deck invertido",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide posterior",
        "secondary": "Romboides · trapézio médio",
        "rest": "45–60 s",
        "img": "peck-invertido.jpg",
        "url": "https://www.youtube.com/results?search_query=peck+deck+invertido+deltoide+posterior+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o peito no encosto. Abra os braços sem elevar os ombros nem jogar o tronco para trás.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a máquina e apoie o peito no encosto.",
          "steps": [
            "Abra os braços mantendo os ombros baixos e a cabeça alinhada.",
            "Volte devagar sem deixar as escápulas perderem o controle."
          ],
          "watch": [
            "Evite jogar o tronco para trás ou elevar os ombros."
          ]
        }
      }
    ],
    "duration": "35–45",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro exercício.",
    "cardio": "Opcional após a musculação: 10–20 min leves a moderados, conforme disposição e orientação.",
    "note": "Substitui A. Mais espaço para o supino horizontal e os ombros, com menos movimentos repetidos para peito; sem polia."
  },
  "B2": {
    "name": "Costas médias + Bíceps + Core",
    "code": "SETOR B",
    "family": "B",
    "variant": "Variação",
    "focus": "Remadas, costas médias e deltoide posterior",
    "regions": [
      "back",
      "shoulders",
      "arms",
      "core"
    ],
    "exercises": [
      {
        "id": "remada_apoio",
        "name": "Remada máquina com apoio do peito",
        "sets": "3",
        "reps": "10–15",
        "target": "Costas médias",
        "secondary": "Latíssimo · romboides · trapézio médio",
        "rest": "60–90 s",
        "img": "remada-maquina-apoio.jpg",
        "url": "https://www.youtube.com/results?search_query=remada+m%C3%A1quina+apoio+peito+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o peito apoiado durante toda a série. Puxe sem compensar com a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para apoiar o peito e alcançar as pegadas sem esticar demais.",
          "steps": [
            "Puxe os cotovelos para trás sem perder contato do peito com o apoio.",
            "Retorne devagar, deixando as escápulas moverem-se naturalmente."
          ],
          "watch": [
            "Evite compensar com a lombar."
          ]
        }
      },
      {
        "id": "remada_apoio_aberta",
        "name": "Remada com apoio · pegada aberta",
        "sets": "2",
        "reps": "10–15",
        "target": "Costas médias · romboides e trapézio",
        "secondary": "Deltoide posterior · bíceps",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_c.png#1",
        "url": "https://www.youtube.com/results?search_query=Remada%20com%20apoio%20%C2%B7%20pegada%20aberta%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Se a máquina oferecer pegada aberta, mantenha o peito apoiado e os cotovelos um pouco afastados. Não eleve os ombros ou force a amplitude.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o apoio do peito e use as pegadas abertas da máquina.",
          "steps": [
            "Puxe com cotovelos um pouco afastados, mantendo o peito apoiado.",
            "Retorne lentamente sem perder a posição do tronco."
          ],
          "watch": [
            "Evite elevar os ombros ou compensar com a lombar."
          ]
        }
      },
      {
        "id": "peck_invertido",
        "name": "Peck deck invertido",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide posterior",
        "secondary": "Romboides · trapézio médio",
        "rest": "45–60 s",
        "img": "peck-invertido.jpg",
        "url": "https://www.youtube.com/results?search_query=peck+deck+invertido+deltoide+posterior+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o peito no encosto. Abra os braços sem elevar os ombros nem jogar o tronco para trás.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a máquina e apoie o peito no encosto.",
          "steps": [
            "Abra os braços mantendo os ombros baixos e a cabeça alinhada.",
            "Volte devagar sem deixar as escápulas perderem o controle."
          ],
          "watch": [
            "Evite jogar o tronco para trás ou elevar os ombros."
          ]
        }
      },
      {
        "id": "rosca_alternada",
        "name": "Rosca alternada",
        "sets": "2",
        "reps": "10–15",
        "target": "Bíceps",
        "secondary": "Braquial · braquiorradial",
        "rest": "45–60 s",
        "img": "rosca-alternada.jpg",
        "url": "https://www.youtube.com/results?search_query=rosca+alternada+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Cotovelos próximos do corpo, sem balançar o tronco. Use banco com encosto se precisar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Fique estável com um halter em cada mão e cotovelos perto do tronco.",
          "steps": [
            "Flexione um cotovelo de cada vez, mantendo o braço sem balanço.",
            "Desça o halter com controle antes de alternar o lado."
          ],
          "watch": [
            "Evite inclinar o corpo para ajudar a subir."
          ]
        }
      },
      {
        "id": "rosca_martelo",
        "name": "Rosca martelo",
        "sets": "2",
        "reps": "10–15",
        "target": "Braquial · braquiorradial",
        "secondary": "Bíceps",
        "rest": "45–60 s",
        "img": "rosca-martelo.jpg",
        "url": "https://www.youtube.com/results?search_query=rosca+martelo+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha pegada neutra e tronco imóvel. Use banco com encosto se precisar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Segure os halteres com palmas voltadas uma para a outra.",
          "steps": [
            "Flexione os cotovelos mantendo os braços próximos ao corpo.",
            "Desça lentamente, sem perder a pegada neutra."
          ],
          "watch": [
            "Evite impulsionar a carga com ombros ou tronco."
          ]
        }
      },
      {
        "id": "bird_dog",
        "name": "Bird Dog",
        "sets": "2",
        "reps": "6–8 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "bird-dog.jpg",
        "url": "https://www.youtube.com/results?search_query=bird+dog+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Estenda braço e perna opostos sem girar o quadril. Comece com amplitude curta.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Fique em quatro apoios com mãos sob ombros e joelhos sob quadris.",
          "steps": [
            "Estenda um braço e a perna oposta sem girar o tronco.",
            "Volte com controle e alterne os lados."
          ],
          "watch": [
            "Reduza a amplitude se a lombar arquear ou a pelve rodar."
          ]
        }
      }
    ],
    "duration": "35–50",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro exercício.",
    "cardio": "Opcional após a musculação: 10–20 min leves a moderados, conforme disposição e orientação.",
    "note": "Substitui B. Puxadas horizontais com apoio do peito; sem polia. Se a máquina não oferecer duas pegadas, pule a remada aberta."
  },
  "C2": {
    "name": "Pernas unilateral + Glúteos + Core",
    "code": "SETOR C",
    "family": "C",
    "variant": "Variação",
    "focus": "Controle de cada lado, sóleo e glúteos",
    "regions": [
      "legs",
      "glutes",
      "core"
    ],
    "exercises": [
      {
        "id": "extensora_unilateral",
        "name": "Cadeira extensora unilateral",
        "sets": "2",
        "reps": "10–15 / lado",
        "target": "Quadríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_d.png#1",
        "url": "https://www.youtube.com/results?search_query=Cadeira%20extensora%20unilateral%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Somente em máquina compatível com uso unilateral. Comece leve, com o joelho alinhado ao eixo e a pelve apoiada; faça os dois lados antes de marcar a série.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a extensora para usar uma perna por vez e estabilize a pelve.",
          "steps": [
            "Estenda o joelho de uma perna até amplitude confortável.",
            "Retorne com controle e repita com a outra perna."
          ],
          "watch": [
            "Evite girar o corpo ou comparar cargas entre lados."
          ]
        }
      },
      {
        "id": "flexora_unilateral",
        "name": "Cadeira flexora unilateral",
        "sets": "2",
        "reps": "10–15 / lado",
        "target": "Posteriores da coxa",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_d.png#2",
        "url": "https://www.youtube.com/results?search_query=Cadeira%20flexora%20unilateral%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Somente em máquina compatível com uso unilateral. Mantenha a pelve apoiada e faça os dois lados antes de marcar a série.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Confirme que a máquina permite uso unilateral e mantenha a pelve apoiada.",
          "steps": [
            "Flexione um joelho sem tirar o quadril do banco.",
            "Retorne com controle e complete o outro lado."
          ],
          "watch": [
            "Evite arrancos ou rotação do tronco."
          ]
        }
      },
      {
        "id": "cadeira_abdutora",
        "name": "Cadeira abdutora",
        "sets": "2",
        "reps": "12–15",
        "target": "Glúteo médio",
        "secondary": "Abdutores do quadril",
        "rest": "45–60 s",
        "img": "cadeira-abdutora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+abdutora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha costas e pelve apoiadas. Abra sem inclinar o tronco nem forçar a amplitude.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com costas apoiadas e ajuste a abertura inicial confortável.",
          "steps": [
            "Afaste as pernas sem tirar a pelve do assento.",
            "Retorne devagar mantendo a tensão controlada."
          ],
          "watch": [
            "Evite projetar o tronco ou girar a lombar."
          ]
        }
      },
      {
        "id": "ponte_solo",
        "name": "Ponte de glúteos no solo",
        "sets": "2",
        "reps": "10–12",
        "target": "Glúteos",
        "secondary": "Posteriores da coxa",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_d.png#3",
        "url": "https://www.youtube.com/results?search_query=Ponte%20de%20gl%C3%BAteos%20no%20solo%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Sem carga externa e somente se liberado e confortável. Eleve o quadril sem arquear a lombar; não procure altura máxima.",
        "unit": "reps",
        "bodyweight": true,
        "reference": true,
        "guide": {
          "setup": "Deite de costas, joelhos flexionados e pés apoiados no chão.",
          "steps": [
            "Eleve a pelve pressionando os pés, sem hiperestender a lombar.",
            "Desça lentamente até perto do solo."
          ],
          "watch": [
            "Evite compensar com o pescoço ou perder o alinhamento dos joelhos."
          ]
        }
      },
      {
        "id": "panturrilha_sentada",
        "name": "Panturrilha sentada na máquina",
        "sets": "3",
        "reps": "12–20",
        "target": "Panturrilhas · ênfase no sóleo",
        "secondary": "Gastrocnêmio",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_b.png#2",
        "url": "https://www.youtube.com/results?search_query=Panturrilha%20sentada%20na%20m%C3%A1quina%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Use máquina sentada, com apoio sobre as coxas. Mova os tornozelos com controle, sem impulsionar o tronco.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Apoie as coxas sob a almofada e a parte anterior dos pés na plataforma.",
          "steps": [
            "Eleve os calcanhares pelo movimento dos tornozelos.",
            "Desça devagar até alongamento confortável."
          ],
          "watch": [
            "Evite usar impulso do tronco ou deixar os pés escorregarem."
          ],
          "animation": "media/panturrilha_sentada.webp"
        }
      },
      {
        "id": "dead_bug",
        "name": "Dead Bug",
        "sets": "2",
        "reps": "6–8 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "dead-bug.jpg",
        "url": "https://www.youtube.com/results?search_query=dead+bug+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use amplitude curta, respire e mantenha o tronco estável. Pare se houver dor ou perda do controle lombar.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Deite de costas com quadris e joelhos flexionados e braços apontados para cima.",
          "steps": [
            "Afaste lentamente um braço e a perna oposta sem perder o controle do tronco.",
            "Volte ao centro e repita com o outro lado."
          ],
          "watch": [
            "Reduza a amplitude se a lombar perder a posição estável."
          ]
        }
      }
    ],
    "duration": "35–45",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro exercício.",
    "cardio": "Opcional após a musculação: 10–20 min leves a moderados, conforme disposição e orientação.",
    "note": "Substitui C. Unilateral somente em máquinas compatíveis; marque a série após fazer os dois lados. Sem Leg Press, agachamento ou stiff."
  },
  "D": {
    "name": "Superiores equilibrado",
    "code": "SETOR D",
    "family": "D",
    "variant": "Alternativa",
    "focus": "Peito, costas e braços em uma sessão",
    "regions": [
      "chest",
      "back",
      "shoulders",
      "arms"
    ],
    "exercises": [
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "remada_apoio",
        "name": "Remada máquina com apoio do peito",
        "sets": "3",
        "reps": "10–15",
        "target": "Costas médias",
        "secondary": "Latíssimo · romboides · trapézio médio",
        "rest": "60–90 s",
        "img": "remada-maquina-apoio.jpg",
        "url": "https://www.youtube.com/results?search_query=remada+m%C3%A1quina+apoio+peito+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o peito apoiado durante toda a série. Puxe sem compensar com a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para apoiar o peito e alcançar as pegadas sem esticar demais.",
          "steps": [
            "Puxe os cotovelos para trás sem perder contato do peito com o apoio.",
            "Retorne devagar, deixando as escápulas moverem-se naturalmente."
          ],
          "watch": [
            "Evite compensar com a lombar."
          ]
        }
      },
      {
        "id": "elevacao_lateral_sentada",
        "name": "Elevação lateral sentada com encosto",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_d.png#0",
        "url": "https://www.youtube.com/results?search_query=Eleva%C3%A7%C3%A3o%20lateral%20sentada%20com%20encosto%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Banco com encosto, halteres leves e pés firmes. Eleve sem impulso e sem arquear a lombar.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Sente com as costas no encosto e halteres ao lado do corpo.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável.",
            "Desça devagar sem desencostar o tronco do banco."
          ],
          "watch": [
            "Evite encolher os ombros ou jogar a cabeça à frente."
          ],
          "animation": "media/elevacao_lateral_sentada.webp"
        }
      },
      {
        "id": "peck_invertido",
        "name": "Peck deck invertido",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide posterior",
        "secondary": "Romboides · trapézio médio",
        "rest": "45–60 s",
        "img": "peck-invertido.jpg",
        "url": "https://www.youtube.com/results?search_query=peck+deck+invertido+deltoide+posterior+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o peito no encosto. Abra os braços sem elevar os ombros nem jogar o tronco para trás.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a máquina e apoie o peito no encosto.",
          "steps": [
            "Abra os braços mantendo os ombros baixos e a cabeça alinhada.",
            "Volte devagar sem deixar as escápulas perderem o controle."
          ],
          "watch": [
            "Evite jogar o tronco para trás ou elevar os ombros."
          ]
        }
      },
      {
        "id": "triceps_maquina",
        "name": "Tríceps máquina",
        "sets": "2",
        "reps": "10–15",
        "target": "Tríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "triceps-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=tr%C3%ADceps+m%C3%A1quina+muscula%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste o banco e mantenha as costas apoiadas. Estenda os cotovelos sem mover o tronco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule a máquina e mantenha costas e braços bem apoiados.",
          "steps": [
            "Estenda os cotovelos sem mover o tronco.",
            "Retorne lentamente até a amplitude confortável."
          ],
          "watch": [
            "Evite arrancos e pressão desconfortável nos cotovelos."
          ]
        }
      },
      {
        "id": "rosca_martelo",
        "name": "Rosca martelo",
        "sets": "2",
        "reps": "10–15",
        "target": "Braquial · braquiorradial",
        "secondary": "Bíceps",
        "rest": "45–60 s",
        "img": "rosca-martelo.jpg",
        "url": "https://www.youtube.com/results?search_query=rosca+martelo+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha pegada neutra e tronco imóvel. Use banco com encosto se precisar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Segure os halteres com palmas voltadas uma para a outra.",
          "steps": [
            "Flexione os cotovelos mantendo os braços próximos ao corpo.",
            "Desça lentamente, sem perder a pegada neutra."
          ],
          "watch": [
            "Evite impulsionar a carga com ombros ou tronco."
          ]
        }
      }
    ],
    "duration": "35–50",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro exercício.",
    "cardio": "Opcional após a musculação: 10–20 min leves a moderados, conforme disposição e orientação.",
    "note": "Substitui uma sessão de superiores em uma semana corrida. Não some D a A/B em dias consecutivos; preserve a recuperação."
  },
  "E": {
    "name": "Corpo inteiro · foco superiores",
    "code": "SETOR E",
    "family": "E",
    "variant": "Alternativa",
    "focus": "Superiores com manutenção de pernas",
    "regions": [
      "chest",
      "back",
      "shoulders",
      "legs",
      "core"
    ],
    "exercises": [
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "3",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "remada_apoio",
        "name": "Remada máquina com apoio do peito",
        "sets": "3",
        "reps": "10–15",
        "target": "Costas médias",
        "secondary": "Latíssimo · romboides · trapézio médio",
        "rest": "60–90 s",
        "img": "remada-maquina-apoio.jpg",
        "url": "https://www.youtube.com/results?search_query=remada+m%C3%A1quina+apoio+peito+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o peito apoiado durante toda a série. Puxe sem compensar com a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para apoiar o peito e alcançar as pegadas sem esticar demais.",
          "steps": [
            "Puxe os cotovelos para trás sem perder contato do peito com o apoio.",
            "Retorne devagar, deixando as escápulas moverem-se naturalmente."
          ],
          "watch": [
            "Evite compensar com a lombar."
          ]
        }
      },
      {
        "id": "elevacao_lateral_sentada",
        "name": "Elevação lateral sentada com encosto",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_d.png#0",
        "url": "https://www.youtube.com/results?search_query=Eleva%C3%A7%C3%A3o%20lateral%20sentada%20com%20encosto%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Banco com encosto, halteres leves e pés firmes. Eleve sem impulso e sem arquear a lombar.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Sente com as costas no encosto e halteres ao lado do corpo.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável.",
            "Desça devagar sem desencostar o tronco do banco."
          ],
          "watch": [
            "Evite encolher os ombros ou jogar a cabeça à frente."
          ],
          "animation": "media/elevacao_lateral_sentada.webp"
        }
      },
      {
        "id": "cadeira_extensora",
        "name": "Cadeira extensora",
        "sets": "2",
        "reps": "12–15",
        "target": "Quadríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "cadeira-extensora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+extensora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Alinhe o eixo da máquina com o joelho. Suba e desça com controle.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Alinhe o eixo da máquina ao joelho e o rolo à parte inferior da perna.",
          "steps": [
            "Estenda os joelhos até amplitude confortável, sem arrancar.",
            "Desça lentamente sem deixar o peso bater."
          ],
          "watch": [
            "Evite elevar a pelve do banco ou forçar o joelho."
          ],
          "animation": "media/cadeira_extensora.webp"
        }
      },
      {
        "id": "cadeira_flexora",
        "name": "Cadeira flexora",
        "sets": "2",
        "reps": "12–15",
        "target": "Posteriores da coxa",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_e.png#1",
        "url": "https://www.youtube.com/results?search_query=cadeira+flexora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste os apoios da coxa e do tornozelo. Mantenha a pelve encostada no banco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste os apoios da coxa e tornozelo; mantenha a pelve no banco.",
          "steps": [
            "Flexione os joelhos aproximando as pernas do assento.",
            "Estenda novamente de modo controlado, sem bater o peso."
          ],
          "watch": [
            "Evite tirar o quadril do assento ou fazer arrancos."
          ]
        }
      },
      {
        "id": "dead_bug",
        "name": "Dead Bug",
        "sets": "2",
        "reps": "6–8 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "dead-bug.jpg",
        "url": "https://www.youtube.com/results?search_query=dead+bug+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use amplitude curta, respire e mantenha o tronco estável. Pare se houver dor ou perda do controle lombar.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Deite de costas com quadris e joelhos flexionados e braços apontados para cima.",
          "steps": [
            "Afaste lentamente um braço e a perna oposta sem perder o controle do tronco.",
            "Volte ao centro e repita com o outro lado."
          ],
          "watch": [
            "Reduza a amplitude se a lombar perder a posição estável."
          ]
        }
      }
    ],
    "duration": "35–50",
    "warmup": "5–8 min de caminhada ou bike leve + 1–2 séries leves do primeiro exercício.",
    "cardio": "Opcional após a musculação: 10–20 min leves a moderados, conforme disposição e orientação.",
    "note": "Substitui uma sessão em uma semana com menos idas à academia. Alternativa pontual; não precisa ser acrescentada ao volume de A/B/C."
  },
  "CL_A": {
    "name": "Peitoral + Ombros + Tríceps",
    "code": "CLÁSSICO A",
    "family": "CL",
    "variant": "Clássico A",
    "focus": "Sequência da foto A · peitoral e movimentos de empurrar",
    "duration": "40–55",
    "regions": [
      "chest",
      "shoulders",
      "arms"
    ],
    "warmup": "5–8 min de caminhada ou bike leve e 1–2 séries leves de supino.",
    "cardio": "Opcional: 10–20 min leves após a musculação, conforme sua rotina.",
    "note": "Duas séries por exercício são o ponto de partida; registre apenas a carga que executou com controle.",
    "exercises": [
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "2",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "supino_inclinado",
        "name": "Supino inclinado com halteres · 30°",
        "sets": "2",
        "reps": "10–15",
        "target": "Peitoral superior",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-inclinado.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+inclinado+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Apoie o tronco no banco. Use inclinação moderada e peça ajuda para posicionar os halteres se necessário; respeite sua restrição de carregar peso.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco perto de 30°, apoie cabeça e costas e firme os pés.",
          "steps": [
            "Desça os halteres com cotovelos controlados até amplitude confortável.",
            "Empurre para cima sem bater os halteres; solte o ar na subida."
          ],
          "watch": [
            "Evite arquear a lombar ou levar os ombros muito para trás."
          ]
        }
      },
      {
        "id": "crucifixo_maquina",
        "name": "Crucifixo na máquina",
        "sets": "2",
        "reps": "12–15",
        "target": "Peitoral",
        "secondary": "Deltoide anterior",
        "rest": "45–60 s",
        "img": "crucifixo-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=crucifixo+m%C3%A1quina+peck+deck+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use carga controlável e não estique demais os ombros para trás. Não precisa chegar à falha.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para alinhar as pegadas ao peito e encoste as costas.",
          "steps": [
            "Feche os braços em arco, aproximando as mãos à frente do corpo.",
            "Retorne lentamente, sem deixar os ombros rodarem muito para trás."
          ],
          "watch": [
            "Evite carga que force uma abertura dolorosa do ombro."
          ]
        }
      },
      {
        "id": "elevacao_frontal",
        "name": "Elevação frontal com halteres",
        "target": "Deltoide anterior",
        "secondary": "Peitoral superior",
        "img": "generated/exercise_sheet_a.png#0",
        "cue": "Eleve os halteres à frente sem balançar o tronco.",
        "url": "https://www.youtube.com/results?search_query=Eleva%C3%A7%C3%A3o+frontal+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Segure halteres leves à frente das coxas com tronco estável.",
          "steps": [
            "Eleve os braços à frente até altura confortável dos ombros.",
            "Desça devagar sem balançar o corpo."
          ],
          "watch": [
            "Evite inclinar a lombar para ganhar impulso."
          ],
          "animation": "media/elevacao_frontal.webp"
        }
      },
      {
        "id": "elevacao_lateral",
        "name": "Elevação lateral com halteres",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "elevacao-lateral.jpg",
        "url": "https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+lateral+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Eleve sem embalo até a altura confortável do ombro. Não compense arqueando a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Fique estável com halteres ao lado do corpo e cotovelos levemente flexionados.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável, sem encolher os ombros.",
            "Desça de modo controlado, mantendo o tronco parado."
          ],
          "watch": [
            "Evite embalo e compensação pela lombar."
          ]
        }
      },
      {
        "id": "triceps_testa",
        "name": "Tríceps testa",
        "target": "Tríceps",
        "secondary": "",
        "img": "generated/exercise_sheet_a.png#1",
        "cue": "Mantenha os braços estáveis e mova os cotovelos com controle.",
        "url": "https://www.youtube.com/results?search_query=Tr%C3%ADceps+testa+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Deite com cabeça e tronco apoiados; mantenha os braços apontados para cima.",
          "steps": [
            "Flexione os cotovelos levando o implemento para perto da testa em amplitude confortável.",
            "Estenda os cotovelos sem mover o tronco."
          ],
          "watch": [
            "Evite abrir demais os cotovelos ou forçar ombros e punhos."
          ]
        }
      },
      {
        "id": "triceps_pulley",
        "name": "Tríceps pulley",
        "target": "Tríceps",
        "secondary": "",
        "img": "generated/exercise_sheet_a.png#2",
        "cue": "Mantenha os cotovelos perto do corpo e estenda sem impulsionar o tronco.",
        "url": "https://www.youtube.com/results?search_query=Tr%C3%ADceps+pulley+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste a polia alta e fique estável com cotovelos próximos ao corpo.",
          "steps": [
            "Estenda os cotovelos levando a pegada para baixo.",
            "Retorne lentamente sem deixar os ombros puxarem o peso."
          ],
          "watch": [
            "Evite balanço do tronco ou inclinação excessiva."
          ]
        }
      }
    ]
  },
  "CL_B": {
    "name": "Pernas + Panturrilhas",
    "code": "CLÁSSICO B",
    "family": "CL",
    "variant": "Clássico B",
    "focus": "Sequência da foto B · quadríceps, posterior e panturrilhas",
    "duration": "55–75",
    "regions": [
      "legs",
      "glutes",
      "core"
    ],
    "warmup": "5–8 min de caminhada ou bike leve; faça séries de preparação com barra leve antes do agachamento.",
    "cardio": "Opcional: caminhada leve depois da musculação, conforme sua recuperação.",
    "note": "Agachamento, leg press e stiff: use apenas as cargas leves já liberadas. Não há sugestão automática de carga.",
    "exercises": [
      {
        "id": "agachamento_barra_livre",
        "name": "Agachamento livre com barra",
        "target": "Quadríceps · glúteos",
        "secondary": "Posterior de coxa · core",
        "img": "generated/exercise_sheet_a.png#3",
        "cue": "Use somente a carga leve liberada e amplitude que preserve o controle do tronco.",
        "url": "https://www.youtube.com/results?search_query=Agachamento+livre+com+barra+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "8–12",
        "rest": "90–120 s",
        "prefillLoad": false,
        "bodyweight": false,
        "guide": {
          "setup": "Posicione a barra sobre a parte alta das costas e firme os pés em distância confortável.",
          "steps": [
            "Flexione quadris e joelhos juntos, descendo apenas até onde mantém o tronco estável.",
            "Empurre o chão pelos pés para subir sem perder o alinhamento."
          ],
          "watch": [
            "Use a carga leve liberada; evite arredondar a lombar ou forçar profundidade."
          ],
          "animation": "media/agachamento_barra_livre.webp"
        }
      },
      {
        "id": "leg_press",
        "name": "Leg Press 45°",
        "sets": "2",
        "reps": "10–12",
        "target": "Quadríceps",
        "secondary": "Glúteos",
        "rest": "90–120 s",
        "img": "leg-press.jpg",
        "url": "https://www.youtube.com/results?search_query=leg+press+45+execu%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "prefillLoad": false,
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco e mantenha pelve e costas apoiadas; posicione os pés com estabilidade.",
          "steps": [
            "Flexione os joelhos até amplitude que não retire a lombar do encosto.",
            "Empurre a plataforma com controle sem travar os joelhos com força."
          ],
          "watch": [
            "Use a carga leve liberada; evite levantar a pelve do banco."
          ],
          "animation": "media/leg_press.webp"
        }
      },
      {
        "id": "cadeira_extensora",
        "name": "Cadeira extensora",
        "sets": "2",
        "reps": "12–15",
        "target": "Quadríceps",
        "secondary": "",
        "rest": "45–60 s",
        "img": "cadeira-extensora.jpg",
        "url": "https://www.youtube.com/results?search_query=cadeira+extensora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Alinhe o eixo da máquina com o joelho. Suba e desça com controle.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Alinhe o eixo da máquina ao joelho e o rolo à parte inferior da perna.",
          "steps": [
            "Estenda os joelhos até amplitude confortável, sem arrancar.",
            "Desça lentamente sem deixar o peso bater."
          ],
          "watch": [
            "Evite elevar a pelve do banco ou forçar o joelho."
          ],
          "animation": "media/cadeira_extensora.webp"
        }
      },
      {
        "id": "mesa_flexora",
        "name": "Mesa flexora",
        "target": "Posterior de coxa",
        "secondary": "Panturrilhas",
        "img": "generated/exercise_sheet_b.png#0",
        "cue": "Ajuste os apoios e não tire a pelve do banco.",
        "url": "https://www.youtube.com/results?search_query=Mesa+flexora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Deite de barriga para baixo com pelve apoiada e rolo acima dos calcanhares.",
          "steps": [
            "Flexione os joelhos aproximando os pés do corpo.",
            "Estenda lentamente, mantendo o quadril no banco."
          ],
          "watch": [
            "Evite arquear a lombar ou levantar a pelve."
          ]
        }
      },
      {
        "id": "cadeira_flexora",
        "name": "Cadeira flexora",
        "sets": "2",
        "reps": "12–15",
        "target": "Posteriores da coxa",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_e.png#1",
        "url": "https://www.youtube.com/results?search_query=cadeira+flexora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste os apoios da coxa e do tornozelo. Mantenha a pelve encostada no banco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste os apoios da coxa e tornozelo; mantenha a pelve no banco.",
          "steps": [
            "Flexione os joelhos aproximando as pernas do assento.",
            "Estenda novamente de modo controlado, sem bater o peso."
          ],
          "watch": [
            "Evite tirar o quadril do assento ou fazer arrancos."
          ]
        }
      },
      {
        "id": "stiff",
        "name": "Stiff",
        "target": "Posterior de coxa · glúteos",
        "secondary": "Eretores da coluna",
        "img": "generated/exercise_sheet_b.png#1",
        "cue": "Faça a dobradiça pelo quadril, mantendo a coluna estável e a carga leve liberada.",
        "url": "https://www.youtube.com/results?search_query=Stiff+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "8–12",
        "rest": "90–120 s",
        "prefillLoad": false,
        "bodyweight": false,
        "guide": {
          "setup": "Fique em pé com joelhos suavemente flexionados e peso próximo às coxas.",
          "steps": [
            "Leve o quadril para trás com a coluna estável, descendo até sentir tensão confortável no posterior.",
            "Volte estendendo o quadril, sem jogar o tronco para trás."
          ],
          "watch": [
            "Use a carga leve liberada; evite arredondar a lombar ou descer além do controle."
          ]
        }
      },
      {
        "id": "panturrilha",
        "name": "Panturrilha em pé máquina",
        "sets": "2",
        "reps": "12–20",
        "target": "Panturrilhas",
        "secondary": "Gastrocnêmio · sóleo",
        "rest": "45–60 s",
        "img": "panturrilha-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=panturrilha+em+p%C3%A9+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste os apoios da máquina e firme a parte anterior dos pés na plataforma.",
          "steps": [
            "Eleve os calcanhares pelo movimento dos tornozelos.",
            "Desça devagar até alongamento confortável."
          ],
          "watch": [
            "Evite impulsionar o tronco ou dobrar os joelhos para ajudar."
          ],
          "animation": "media/panturrilha.webp"
        }
      },
      {
        "id": "panturrilha_sentada",
        "name": "Panturrilha sentada na máquina",
        "sets": "2",
        "reps": "12–20",
        "target": "Panturrilhas · ênfase no sóleo",
        "secondary": "Gastrocnêmio",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_b.png#2",
        "url": "https://www.youtube.com/results?search_query=Panturrilha%20sentada%20na%20m%C3%A1quina%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Use máquina sentada, com apoio sobre as coxas. Mova os tornozelos com controle, sem impulsionar o tronco.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Apoie as coxas sob a almofada e a parte anterior dos pés na plataforma.",
          "steps": [
            "Eleve os calcanhares pelo movimento dos tornozelos.",
            "Desça devagar até alongamento confortável."
          ],
          "watch": [
            "Evite usar impulso do tronco ou deixar os pés escorregarem."
          ],
          "animation": "media/panturrilha_sentada.webp"
        }
      },
      {
        "id": "panturrilha_leg_press",
        "name": "Panturrilha no leg press",
        "target": "Panturrilhas",
        "secondary": "",
        "img": "generated/exercise_sheet_b.png#3",
        "cue": "Mova apenas os tornozelos com as pernas estáveis; não deixe os pés escorregarem da plataforma.",
        "url": "https://www.youtube.com/results?search_query=Panturrilha+no+leg+press+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–20",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Sente no leg press com costas apoiadas e a parte anterior dos pés firme na plataforma.",
          "steps": [
            "Com os joelhos estáveis, empurre a plataforma apenas pelos tornozelos.",
            "Deixe os calcanhares voltar com controle, sem soltar a plataforma."
          ],
          "watch": [
            "Evite estender os joelhos com força ou posicionar os pés na borda insegura."
          ]
        }
      }
    ]
  },
  "CL_C": {
    "name": "Costas + Bíceps",
    "code": "CLÁSSICO C",
    "family": "CL",
    "variant": "Clássico C",
    "focus": "Sequência da foto C · puxadas, remadas e bíceps",
    "duration": "35–50",
    "regions": [
      "back",
      "arms"
    ],
    "warmup": "5–8 min leves e 1–2 séries de preparação na primeira puxada.",
    "cardio": "Opcional: 10–20 min leves após a musculação, conforme sua rotina.",
    "note": "Puxada alta é a versão com triângulo; a remada aberta usa máquina com apoio do peito.",
    "exercises": [
      {
        "id": "pulley_frente",
        "name": "Pulley frente",
        "sets": "2",
        "reps": "10–15",
        "target": "Latíssimo do dorso",
        "secondary": "Bíceps",
        "rest": "60–90 s",
        "img": "pulley-frente.jpg",
        "url": "https://www.youtube.com/results?search_query=pulley+frente+puxada+pronada+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Puxe pela frente, sem levar a barra à nuca ou balançar o tronco. Para evitar polia, escolha B2.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com coxas firmes sob o apoio e segure a barra à frente.",
          "steps": [
            "Puxe a barra para a região alta do peito, conduzindo os cotovelos para baixo.",
            "Retorne com controle sem elevar o tronco ou perder a posição das escápulas."
          ],
          "watch": [
            "Evite puxar atrás da nuca ou balançar a lombar."
          ],
          "animation": "media/pulley_frente.webp"
        }
      },
      {
        "id": "remada_baixa_cabo",
        "name": "Remada baixa no cabo",
        "target": "Costas médias · latíssimo",
        "secondary": "Bíceps",
        "img": "generated/exercise_sheet_c.png#0",
        "cue": "Puxe em direção ao tronco sem arredondar ou jogar a lombar para trás.",
        "url": "https://www.youtube.com/results?search_query=Remada+baixa+no+cabo+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "10–15",
        "rest": "60–90 s",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com pés firmes e alcance a pegada mantendo o tronco estável.",
          "steps": [
            "Puxe a pegada em direção ao abdômen, levando os cotovelos para trás.",
            "Estenda os braços de modo controlado sem arredondar a lombar."
          ],
          "watch": [
            "Evite balançar o tronco para mover a carga."
          ]
        }
      },
      {
        "id": "puxada_triangulo",
        "name": "Puxada alta com triângulo",
        "sets": "2",
        "reps": "10–15",
        "target": "Latíssimo do dorso",
        "secondary": "Romboides · bíceps",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_e.png#2",
        "url": "https://www.youtube.com/results?search_query=puxada+alta+com+tri%C3%A2ngulo+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o tronco estável e os cotovelos próximos do corpo. Para evitar polia, escolha B2.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com coxas presas e segure o triângulo em pegada neutra.",
          "steps": [
            "Puxe o triângulo em direção ao peito com cotovelos para baixo.",
            "Deixe os braços subir com controle, sem soltar o peso de repente."
          ],
          "watch": [
            "Evite inclinar o tronco para transformar a puxada em remada."
          ],
          "animation": "media/puxada_triangulo.webp"
        }
      },
      {
        "id": "remada_apoio_aberta",
        "name": "Remada aberta na máquina com apoio",
        "sets": "2",
        "reps": "10–15",
        "target": "Costas médias · romboides e trapézio",
        "secondary": "Deltoide posterior · bíceps",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_c.png#1",
        "url": "https://www.youtube.com/results?search_query=Remada%20com%20apoio%20%C2%B7%20pegada%20aberta%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Se a máquina oferecer pegada aberta, mantenha o peito apoiado e os cotovelos um pouco afastados. Não eleve os ombros ou force a amplitude.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o apoio do peito e use as pegadas abertas da máquina.",
          "steps": [
            "Puxe com cotovelos um pouco afastados, mantendo o peito apoiado.",
            "Retorne lentamente sem perder a posição do tronco."
          ],
          "watch": [
            "Evite elevar os ombros ou compensar com a lombar."
          ]
        }
      },
      {
        "id": "rosca_direta_barra",
        "name": "Rosca direta com barra",
        "target": "Bíceps",
        "secondary": "Braquial · antebraço",
        "img": "generated/exercise_sheet_c.png#2",
        "cue": "Flexione os cotovelos sem balanço do tronco.",
        "url": "https://www.youtube.com/results?search_query=Rosca+direta+com+barra+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Segure a barra com punhos confortáveis e cotovelos junto ao tronco.",
          "steps": [
            "Flexione os cotovelos para elevar a barra sem mover os ombros.",
            "Desça lentamente até quase estender os braços."
          ],
          "watch": [
            "Evite inclinar o tronco ou dobrar os punhos."
          ],
          "animation": "media/rosca_direta_barra.webp"
        }
      },
      {
        "id": "rosca_inclinada_45",
        "name": "Rosca inclinada 45° com halteres",
        "target": "Bíceps",
        "secondary": "Braquial",
        "img": "generated/exercise_sheet_c.png#3",
        "cue": "Mantenha as costas apoiadas no banco a 45° e os braços controlados.",
        "url": "https://www.youtube.com/results?search_query=Rosca+inclinada+45%C2%B0+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "unit": "reps",
        "sets": "2",
        "reps": "12–15",
        "rest": "45–60 s",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco a 45° e apoie as costas com braços ao lado do corpo.",
          "steps": [
            "Flexione os cotovelos levantando os halteres sem projetar os ombros.",
            "Desça com controle até amplitude confortável."
          ],
          "watch": [
            "Evite tirar o tronco do encosto ou balançar os braços."
          ],
          "animation": "media/rosca_inclinada_45.webp"
        }
      }
    ]
  },
  "FB": {
    "name": "Corpo inteiro",
    "code": "FULL BODY",
    "family": "FB",
    "variant": "Full body",
    "focus": "Pernas, posterior, peito, costas, ombros, panturrilhas e core",
    "duration": "45–60",
    "regions": [
      "legs",
      "glutes",
      "chest",
      "back",
      "shoulders",
      "core"
    ],
    "warmup": "5–8 min leves e 1–2 séries de preparação no leg press.",
    "cardio": "Opcional: caminhada ou bike leves após a sessão, conforme sua recuperação.",
    "note": "Ficha opcional e manual. O leg press não sugere a carga antiga; mantenha a carga leve liberada.",
    "exercises": [
      {
        "id": "leg_press",
        "name": "Leg Press 45°",
        "sets": "2",
        "reps": "10–12",
        "target": "Quadríceps",
        "secondary": "Glúteos",
        "rest": "90–120 s",
        "img": "leg-press.jpg",
        "url": "https://www.youtube.com/results?search_query=leg+press+45+execu%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "prefillLoad": false,
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco e mantenha pelve e costas apoiadas; posicione os pés com estabilidade.",
          "steps": [
            "Flexione os joelhos até amplitude que não retire a lombar do encosto.",
            "Empurre a plataforma com controle sem travar os joelhos com força."
          ],
          "watch": [
            "Use a carga leve liberada; evite levantar a pelve do banco."
          ],
          "animation": "media/leg_press.webp"
        }
      },
      {
        "id": "supino_reto_maquina",
        "name": "Supino reto máquina",
        "sets": "2",
        "reps": "10–15",
        "target": "Peitoral",
        "secondary": "Tríceps · deltoide anterior",
        "rest": "60–90 s",
        "img": "supino-reto-maquina.jpg",
        "url": "https://www.youtube.com/results?search_query=supino+reto+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Regule o banco para as pegadas ficarem na linha do peito. Mantenha costas apoiadas e pés firmes.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Regule banco e pegadas na altura do peito; apoie costas e pés.",
          "steps": [
            "Empurre as pegadas à frente com controle, sem tirar o tronco do encosto.",
            "Volte devagar até uma amplitude confortável para os ombros."
          ],
          "watch": [
            "Evite travar os cotovelos com força ou arquear a lombar."
          ]
        }
      },
      {
        "id": "remada_apoio",
        "name": "Remada máquina com apoio do peito",
        "sets": "2",
        "reps": "10–15",
        "target": "Costas médias",
        "secondary": "Latíssimo · romboides · trapézio médio",
        "rest": "60–90 s",
        "img": "remada-maquina-apoio.jpg",
        "url": "https://www.youtube.com/results?search_query=remada+m%C3%A1quina+apoio+peito+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o peito apoiado durante toda a série. Puxe sem compensar com a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste o banco para apoiar o peito e alcançar as pegadas sem esticar demais.",
          "steps": [
            "Puxe os cotovelos para trás sem perder contato do peito com o apoio.",
            "Retorne devagar, deixando as escápulas moverem-se naturalmente."
          ],
          "watch": [
            "Evite compensar com a lombar."
          ]
        }
      },
      {
        "id": "cadeira_flexora",
        "name": "Cadeira flexora",
        "sets": "2",
        "reps": "12–15",
        "target": "Posteriores da coxa",
        "secondary": "",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_e.png#1",
        "url": "https://www.youtube.com/results?search_query=cadeira+flexora+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Ajuste os apoios da coxa e do tornozelo. Mantenha a pelve encostada no banco.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Ajuste os apoios da coxa e tornozelo; mantenha a pelve no banco.",
          "steps": [
            "Flexione os joelhos aproximando as pernas do assento.",
            "Estenda novamente de modo controlado, sem bater o peso."
          ],
          "watch": [
            "Evite tirar o quadril do assento ou fazer arrancos."
          ]
        }
      },
      {
        "id": "puxada_triangulo",
        "name": "Puxada com triângulo",
        "sets": "2",
        "reps": "10–15",
        "target": "Latíssimo do dorso",
        "secondary": "Romboides · bíceps",
        "rest": "60–90 s",
        "img": "generated/exercise_sheet_e.png#2",
        "url": "https://www.youtube.com/results?search_query=puxada+alta+com+tri%C3%A2ngulo+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Mantenha o tronco estável e os cotovelos próximos do corpo. Para evitar polia, escolha B2.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Sente com coxas presas e segure o triângulo em pegada neutra.",
          "steps": [
            "Puxe o triângulo em direção ao peito com cotovelos para baixo.",
            "Deixe os braços subir com controle, sem soltar o peso de repente."
          ],
          "watch": [
            "Evite inclinar o tronco para transformar a puxada em remada."
          ],
          "animation": "media/puxada_triangulo.webp"
        }
      },
      {
        "id": "elevacao_lateral",
        "name": "Elevação lateral com halteres",
        "sets": "2",
        "reps": "12–15",
        "target": "Deltoide lateral",
        "secondary": "",
        "rest": "45–60 s",
        "img": "elevacao-lateral.jpg",
        "url": "https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+lateral+com+halteres+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Eleve sem embalo até a altura confortável do ombro. Não compense arqueando a lombar.",
        "unit": "reps",
        "bodyweight": false,
        "guide": {
          "setup": "Fique estável com halteres ao lado do corpo e cotovelos levemente flexionados.",
          "steps": [
            "Eleve os braços lateralmente até altura confortável, sem encolher os ombros.",
            "Desça de modo controlado, mantendo o tronco parado."
          ],
          "watch": [
            "Evite embalo e compensação pela lombar."
          ]
        }
      },
      {
        "id": "panturrilha_sentada",
        "name": "Panturrilha sentada na máquina",
        "sets": "2",
        "reps": "12–20",
        "target": "Panturrilhas · ênfase no sóleo",
        "secondary": "Gastrocnêmio",
        "rest": "45–60 s",
        "img": "generated/exercise_sheet_b.png#2",
        "url": "https://www.youtube.com/results?search_query=Panturrilha%20sentada%20na%20m%C3%A1quina%20execu%C3%A7%C3%A3o%20correta",
        "cue": "Use máquina sentada, com apoio sobre as coxas. Mova os tornozelos com controle, sem impulsionar o tronco.",
        "unit": "reps",
        "reference": true,
        "bodyweight": false,
        "guide": {
          "setup": "Apoie as coxas sob a almofada e a parte anterior dos pés na plataforma.",
          "steps": [
            "Eleve os calcanhares pelo movimento dos tornozelos.",
            "Desça devagar até alongamento confortável."
          ],
          "watch": [
            "Evite usar impulso do tronco ou deixar os pés escorregarem."
          ],
          "animation": "media/panturrilha_sentada.webp"
        }
      },
      {
        "id": "dead_bug",
        "name": "Dead Bug",
        "sets": "2",
        "reps": "6–8 / lado",
        "target": "Core",
        "secondary": "Estabilidade lombopélvica",
        "rest": "30–45 s",
        "img": "dead-bug.jpg",
        "url": "https://www.youtube.com/results?search_query=dead+bug+core+exerc%C3%ADcio+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o",
        "cue": "Use amplitude curta, respire e mantenha o tronco estável. Pare se houver dor ou perda do controle lombar.",
        "unit": "reps",
        "bodyweight": true,
        "guide": {
          "setup": "Deite de costas com quadris e joelhos flexionados e braços apontados para cima.",
          "steps": [
            "Afaste lentamente um braço e a perna oposta sem perder o controle do tronco.",
            "Volte ao centro e repita com o outro lado."
          ],
          "watch": [
            "Reduza a amplitude se a lombar perder a posição estável."
          ]
        }
      }
    ]
  }
};

const ARCHIVED_EXERCISES = {"C": [{"id": "leg_press", "name": "Leg Press 45°", "sets": "3", "reps": "10–12", "target": "Quadríceps", "secondary": "Glúteos", "rest": "60–90 s", "img": "leg-press.jpg", "url": "https://www.youtube.com/results?search_query=leg+press+45+execu%C3%A7%C3%A3o+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o"}, {"id": "panturrilha", "name": "Panturrilha em pé máquina", "sets": "3", "reps": "15–20", "target": "Panturrilhas", "secondary": "Gastrocnêmio · sóleo", "rest": "45–60 s", "img": "panturrilha-maquina.jpg", "url": "https://www.youtube.com/results?search_query=panturrilha+em+p%C3%A9+m%C3%A1quina+execu%C3%A7%C3%A3o+correta+muscula%C3%A7%C3%A3o"}]}
;
