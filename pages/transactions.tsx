'use client';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Transactions(props:any){
  const [txs,setTxs]=useState<any[]>([]);
  useEffect(()=>{ const fetch = async ()=>{ const r = await axios.get('/api/transactions'); setTxs(r.data || []); }; fetch(); },[]);
  return (
    <div>
      <Navbar />
      <main className="container" style={{paddingTop:18}}>
        <h1>Transactions</h1>
        <div style={{marginTop:12}} className="card">{txs.length===0? <div className="muted">No transactions yet</div> : <ul>{txs.map(tx=><li key={tx.id}>{new Date(tx.createdAt||tx.time||Date.now()).toLocaleString()} — £{tx.amount} — {tx.status}</li>)}</ul>}</div>
      </main>
    </div>
  )
}
