'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Hero(){
  const router = useRouter();
  const [users,setUsers]=useState(1248);
  useEffect(()=>{ const t = setInterval(()=> setUsers(u=>u + Math.floor(Math.random()*3)), 3000); return ()=>clearInterval(t); },[]);
  const oauth = (p:string)=>alert('OAuth placeholder: '+p);
  return (
    <section className="hero container">
      <div className="left">
        <h1>Bet on yourself — win your progress.</h1>
        <p>Stake money on measurable goals, choose a validator, and achieve real results. Join <strong className="badge">{users.toLocaleString()} users</strong> already using the platform.</p>
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <button className="btn" onClick={()=>router.push('/create-goal')}>Create Your Goal</button>
          <button className="btn ghost" onClick={()=>router.push('/dashboard?demo=1')}>Preview (demo)</button>
        </div>
        <div style={{marginTop:16}}>
          <div style={{marginBottom:8,color:'var(--muted)'}}>Sign in with</div>
          <div className="oauth-buttons">
            <div className="oauth-btn" onClick={()=>oauth('Google')}>Google</div>
            <div className="oauth-btn" onClick={()=>oauth('Facebook')}>Facebook</div>
            <div className="oauth-btn" onClick={()=>oauth('Apple')}>Apple</div>
            <div className="oauth-btn" onClick={()=>oauth('Email')}>Email</div>
          </div>
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
