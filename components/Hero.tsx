'use client';
import { useRouter } from 'next/navigation';
export default function Hero(){
  const router = useRouter();
  const oauth = (p:string)=>alert('OAuth placeholder: '+p);
  return (
    <section className="hero container">
      <div className="left">
        <h1>Bet on yourself — win your progress.</h1>
        <p>Stake money on tangible goals, choose a validator or go solo, and get rewarded for consistency.</p>
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
      <div className="right card" style={{width:380}}>
        <h3 style={{margin:0}}>How it works</h3>
        <ol style={{color:'var(--muted)',paddingLeft:18}}>
          <li>Set a measurable goal with a deadline</li>
          <li>Stake money and choose a validator (optional)</li>
          <li>Complete it, get payout — or forfeit 25% if you quit</li>
        </ol>
      </div>
    </section>
  )
}
