'use client';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Transactions(props:any){
  const [txs,setTxs]=useState<any[]>([]);
  useEffect(()=>{ const t = JSON.parse(localStorage.getItem('smg_tx')||'[]'); setTxs(t); },[]);
  return (
    <div>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      <main className="container" style={{paddingTop:18}}>
        <h1>Transactions</h1>
        <div style={{marginTop:12}} className="card">
          {txs.length===0? <div className="muted">No transactions yet (simulate payments on Goal flow)</div> : <ul>{txs.map(tx=><li key={tx.id}>{new Date(tx.time).toLocaleString()} — £{tx.amount} — {tx.status}</li>)}</ul>}
        </div>
      </main>
    </div>
  )
}
