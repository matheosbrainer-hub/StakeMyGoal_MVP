'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Hero(){
  const router = useRouter();
  const [users,setUsers]=useState(1248);
  useEffect(()=>{ const t = setInterval(()=> setUsers(u=>u + Math.floor(Math.random()*3)), 3000); return ()=>clearInterval(t); },[]);
  return (
    <section className="hero container">
      <div className="left">
        <h1>Bet on yourself — win your progress.</h1>
        <p>Stake money on measurable goals, choose a validator, and achieve real results. Join <strong className="badge">{users.toLocaleString()} users</strong> already using the platform.</p>
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <button className="btn" onClick={()=>router.push('/create-goal')}>Create Your Goal</button>
          <button className="btn ghost" onClick={()=>router.push('/dashboard?demo=1')}>Try Demo</button>
        </div>
      </div>
      <div className="right card" style={{width:420}}>
        <h3 style={{margin:0}}>How it works</h3>
        <ol style={{color:'var(--muted)',paddingLeft:18}}>
          <li>Set a measurable goal with a deadline</li>
          <li>Stake an amount & choose a validator (optional)</li>
          <li>Complete it, get payout — or forfeit 25% if you quit</li>
        </ol>
        <div style={{marginTop:12}}><small className="muted">Tip: Goals with a validator have a lower platform fee (£2). Going solo costs £3.50.</small></div>
      </div>
    </section>
  )
}
