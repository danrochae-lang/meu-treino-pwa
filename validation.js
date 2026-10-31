export function validSubscription(s){
  if (!s || typeof s.endpoint !== 'string' || !s.keys) return false;
  try {
    const u = new URL(s.endpoint);
    return u.protocol === 'https:' && !u.username && !u.password && u.port === '' && u.hostname === 'fcm.googleapis.com' && u.pathname.startsWith('/fcm/send/') && /^[A-Za-z0-9_-]{87}$/.test(s.keys.p256dh) && /^[A-Za-z0-9_-]{22}$/.test(s.keys.auth);
  } catch { return false; }
}
export function validDeadline(now, until){ return Number.isSafeInteger(until) && until > now && until <= now + 3600000; }
