export function loadGoals() {
  try { return JSON.parse(localStorage.getItem('smg_goals')||'null'); } catch(e){ return null; }
}
export function saveGoals(goals:any[]) { localStorage.setItem('smg_goals', JSON.stringify(goals)); }
export function loadTx() { try { return JSON.parse(localStorage.getItem('smg_tx')||'[]'); } catch(e){ return []; } }
export function saveTx(txs:any[]) { localStorage.setItem('smg_tx', JSON.stringify(txs)); }
