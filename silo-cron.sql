select cron.schedule('silo_rest_dispatch','10 seconds',
  $job$
  select net.http_post(
    url:='https://napeqjzkwwsycdhqgejb.supabase.co/functions/v1/silo-push',
    headers:=jsonb_build_object('Content-Type','application/json','x-dispatch-token',(select decrypted_secret from vault.decrypted_secrets where name='silo_dispatch_token')),
    body:='{"action":"dispatch"}'::jsonb
  ) where exists(select 1 from public.silo_timer_devices where due_at <= clock_timestamp() and due_at > clock_timestamp()-interval '30 seconds' and (claimed_at is null or claimed_at < clock_timestamp()-interval '20 seconds'));
  $job$
);
select cron.schedule('silo_rest_log_cleanup','0 4 * * *',
  $job$
  delete from cron.job_run_details where end_time < now()-interval '2 days' and jobid in (select jobid from cron.job where jobname in ('silo_rest_dispatch','silo_rest_log_cleanup'));
  $job$
);
