// One DigiCoin wallet shared by all three games (same origin → same localStorage)
window.Wallet = {
  KEY: 'dk_wallet', START: 2000,
  get() { try { const v = localStorage.getItem(this.KEY); return v === null ? this.START : +v; } catch { return this.START; } },
  set(n) { try { localStorage.setItem(this.KEY, String(n)); } catch {} },
};
