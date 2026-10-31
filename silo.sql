create extension if not exists pgcrypto with schema extensions;
create extension if not exists pg_net with schema extensions;
create extension if not exists pg_cron;
create table if not exists public.silo_timer_devices (
  device_hash text primary key,
  subscription jsonb not null,
  due_at timestamptz,
  revision bigint not null default 0,
  last_seen timestamptz not null default now(),
  claimed_at timestamptz
);
alter table public.silo_timer_devices enable row level security;
revoke all on public.silo_timer_devices from anon, authenticated;

create or replace function public.silo_update_timer(p_hash text, p_subscription jsonb, p_due timestamptz, p_revision bigint, p_setup text)
returns boolean language plpgsql security definer set search_path = '' as $$
begin
  if p_hash !~ '^[0-9a-f]{64}$' or p_revision < 1 then raise exception 'invalid'; end if;
  perform pg_catalog.pg_advisory_xact_lock(1289324);
  if not exists(select 1 from public.silo_timer_devices where device_hash=p_hash) then
    if p_setup is null or p_setup is distinct from (select decrypted_secret from vault.decrypted_secrets where name='silo_setup_code') then raise exception 'invalid setup'; end if;
    if (select count(*) from public.silo_timer_devices) >= 5 then raise exception 'device limit'; end if;
    insert into public.silo_timer_devices(device_hash,subscription,revision) values(p_hash,p_subscription,0);
  end if;
  update public.silo_timer_devices set subscription=p_subscription, due_at=p_due, revision=p_revision,
    last_seen=clock_timestamp(), claimed_at=null where device_hash=p_hash and revision < p_revision;
  return found;
end $$;

create or replace function public.silo_claim_timers()
returns table(device_hash text, subscription jsonb, revision bigint, due_at timestamptz)
language sql security definer set search_path='' as $$
  update public.silo_timer_devices t set claimed_at=clock_timestamp()
  where t.due_at <= clock_timestamp() and t.due_at > clock_timestamp() - interval '30 seconds'
    and (t.claimed_at is null or t.claimed_at < clock_timestamp()-interval '20 seconds')
  returning t.device_hash,t.subscription,t.revision,t.due_at;
$$;
create or replace function public.silo_complete_timer(p_hash text,p_revision bigint)
returns void language sql security definer set search_path='' as $$
  update public.silo_timer_devices set due_at=null,claimed_at=null where device_hash=p_hash and revision=p_revision;
$$;
create or replace function public.silo_get_config()
returns table(name text,secret text) language sql security definer set search_path='' as $$
  select v.name,v.decrypted_secret from vault.decrypted_secrets v where v.name in ('silo_vapid_public','silo_vapid_private','silo_dispatch_token');
$$;
revoke all on function public.silo_update_timer(text,jsonb,timestamptz,bigint,text),public.silo_claim_timers(),public.silo_complete_timer(text,bigint),public.silo_get_config() from public,anon,authenticated;
grant execute on function public.silo_update_timer(text,jsonb,timestamptz,bigint,text),public.silo_claim_timers(),public.silo_complete_timer(text,bigint),public.silo_get_config() to service_role;
