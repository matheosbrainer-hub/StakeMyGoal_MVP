'use client';
import { useRouter } from 'next/navigation';
export default function HeroSection(){
  const router = useRouter();
  const oauth = (provider:string)=>alert('OAuth flow placeholder for '+provider);
  return (
    <section className="hero container">
      <div className="left">
        <h1>Commit publicly. Win privately. <span style={{color:'#7c3aed'}}>StakeMyGoal</span></h1>
        <p>Create goals, stake money, and prove you achieved them — or lose your stake. Gamified accountability that works.</p>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <button className="btn" onClick={()=>router.push('/dashboard?demo=1')}>Preview App (No signup)</button>
          <button className="btn ghost" onClick={()=>alert('Sign up flow placeholder')}>Sign up</button>
        </div>
        <div style={{marginTop:16}}>
          <div style={{marginBottom:8,color:'#94a3b8'}}>Or sign in with</div>
          <div className="oauth-buttons">
            <div className="oauth-btn" onClick={()=>oauth('Google')}>Google</div>
            <div className="oauth-btn" onClick={()=>oauth('Facebook')}>Facebook</div>
            <div className="oauth-btn" onClick={()=>oauth('Apple')}>Apple</div>
            <div className="oauth-btn" onClick={()=>oauth('Email')}>Email</div>
          </div>
        </div>
        Preview the full dashboard without signing up →
      </div>
      <div className="right card" style={{width:380}}>
        <h3 style={{margin:0}}>How it works</h3>
        <ol style={{color:'#94a3b8',paddingLeft:18}}>
          <li>Set a measurable goal and stake an amount</li>
          <li>Choose a validator or go solo</li>
          <li>Complete by the deadline or forfeit 25%</li>
          <li>Get payout minus fees, or celebrate your win 🎉</li>
        </ol>
      </div>
    </section>
  )
}
