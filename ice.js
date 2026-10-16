// How the phone and the big screen reach each other.
//
// STUN servers help the two devices find a direct path. That works on many networks, but school and
// building Wi-Fi, cellular data, VPNs and some phone privacy settings block it. A TURN relay carries the
// game data when the direct path fails, so every phone can join. It's only used as a fallback.
//
// The relay comes from Metered's free TURN service (metered.ca/tools/openrelay). Fill in your app name
// (the part before .metered.live) and your API key. Leave them empty to run with STUN only.
const METERED_APP = 'serpentine-3d';
const METERED_KEY = '2797580234feb29bbeef77e23b3e794c4a3b';

const STUN = [{urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun.cloudflare.com:3478']}];

// Resolves to the ICE server list for PeerJS. Never fails: if the relay can't be fetched in time,
// it falls back to STUN only so the game still starts.
window.getIceServers = async function getIceServers(){
  if (!METERED_APP || !METERED_KEY) return STUN;
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 4000);
    const res = await fetch(`https://${METERED_APP}.metered.live/api/v1/turn/credentials?apiKey=${encodeURIComponent(METERED_KEY)}`, {signal: ctl.signal});
    clearTimeout(timer);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const relay = await res.json();
    return Array.isArray(relay) && relay.length ? STUN.concat(relay) : STUN;
  } catch (err) {
    console.warn('Serpentine: no TURN relay, using STUN only.', err);
    return STUN;
  }
};
