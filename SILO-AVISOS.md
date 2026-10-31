# Avisos de descanso

O PWA mantém a contagem local e, quando o aparelho é ativado em Ajustes, envia o prazo a uma Edge Function no projeto Supabase exclusivo do Silo. Um job verifica prazos a cada 10 segundos e envia Web Push ao navegador. O navegador exibe o aviso e pode encaminhá-lo ao relógio, conforme as configurações do aparelho.

O Web Push depende de internet, de permissão de notificações e da disponibilidade do serviço. A entrega pode atrasar ou falhar. Não substitui um temporizador nativo quando o prazo precisa ser preciso ou funcionar offline. O serviço não cria janela flutuante sobre outros aplicativos.

As chaves VAPID, o código de ativação e o token do agendador ficam no Vault do projeto. Não adicione esses valores a arquivos ou commits. A tabela usa RLS e não é acessível às funções anon/authenticated; as funções SQL internas são restritas ao service_role. Uma credencial aleatória de cada aparelho fica no armazenamento local. O código de ativação é necessário para registrar um novo aparelho e deve permanecer privado. A função admite até cinco aparelhos.

O registro inclui inscrição Web Push, prazo e identificador aleatório, sem cargas ou dados do treino. Trocar o prazo ou cancelar usa um número crescente de revisão. O service worker descarta uma notificação recebida para uma revisão antiga se o estado local já tiver sido atualizado. Caso o aparelho perca a conexão ao cancelar, o servidor pode ainda tentar enviar o aviso anterior; mensagens expiram rapidamente e o service worker verifica a revisão local.

`supabase/silo.sql` e `supabase/silo-cron.sql` descrevem as estruturas implantadas. Os segredos devem ser criados no Vault separadamente; sem eles o serviço não deve ser ativado. Os testes locais podem ser executados com `node tests/push-validation.cjs`, `node tests/rest-cloud.cjs` e `node tests/push-service-worker.cjs`.

Para validar em aparelho: habilite notificações do PWA, inicie um intervalo e abra outro aplicativo; repita com a tela bloqueada, com cancelamento e alteração de tempo, e depois sem internet. Confirme no Galaxy Wearable se as notificações do navegador/PWA estão permitidas para o relógio.
