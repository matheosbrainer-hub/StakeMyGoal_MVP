'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useSearchParams, useRouter } from 'next/navigation';

export default function PaymentPage(props:any){
  const params = useSearchParams();
  const router = useRouter();
  const goalId = params.get('goalId');
  const [goal,setGoal]=useState<any>(null);
  const [processing,setProcessing]=useState(false);
  useEffect(()=>{
    const goals = JSON.parse(localStorage.getItem('smg_goals')||'[]');
    const g = goals.find((x:any)=>x.id===goalId);
    setGoal(g);
  },[goalId]);

  const pay = ()=>{
    if (!goal) return;
    setProcessing(true);
    setTimeout(()=>{
      const tx = JSON.parse(localStorage.getItem('smg_tx')||'[]');
      tx.unshift({ id:'t'+Date.now(), goalId:goal.id, amount: goal.total, time:Date.now(), status:'succeeded', method:'card (test)' });
      localStorage.setItem('smg_tx', JSON.stringify(tx));
      const goals = JSON.parse(localStorage.getItem('smg_goals')||'[]').map((x:any)=> x.id===goal.id?({...x, status:'active', paid:true}):x);
      localStorage.setItem('smg_goals', JSON.stringify(goals));
      setProcessing(false);
      alert('Payment simulated — £'+goal.total+' charged (test)');
      router.push('/dashboard?demo=1');
    },1500);
  };

  if (!goal) return (<div><Navbar theme={props.theme} toggleTheme={props.toggleTheme} /><main className="container"><div className="card" style={{marginTop:20}}>Loading...</div></main></div>);

  return (
    <div>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      <main className="container">
        <div className="card" style={{marginTop:20}}>
          <h2>Simulated Payment</h2>
          <p className="muted">Goal: <strong>{goal.title}</strong></p>
          <p className="muted">Total to charge: <strong>£{goal.total}</strong> (includes platform fee)</p>
          <div style={{marginTop:12}}>
            <div style={{marginBottom:8}}>Enter test card details (e.g. <code>4242 4242 4242 4242</code>) — this is a simulated flow.</div>
            <input className="input" placeholder="Card number (test)" defaultValue="4242 4242 4242 4242" />
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button className="btn" onClick={pay} disabled={processing}>{processing? 'Processing...':'Pay (Test)'} </button>
              <button className="btn ghost" onClick={()=>router.push('/dashboard?demo=1')}>Skip Payment (Demo)</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
