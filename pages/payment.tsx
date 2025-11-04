'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function PaymentPage(props:any){
  const params = useSearchParams();
  const router = useRouter();
  const goalId = params.get('goalId');
  const [goal,setGoal]=useState<any>(null);
  const [processing,setProcessing]=useState(false);
  useEffect(()=>{
    const fetchGoal = async ()=>{
      try {
        const res = await axios.get('/api/goals');
        const list = res.data;
        const g = list.find((x:any)=> x.id === goalId);
        setGoal(g);
      } catch(e){ console.error(e); }
    };
    fetchGoal();
  },[goalId]);

  const pay = async ()=>{
    if (!goal) return;
    setProcessing(true);
    try {
      await axios.post('/api/payments', { userId: goal.userId, goalId: goal.id, amount: goal.stakeAmount || goal.stake || goal.totalPaid || goal.total || 0 });
      alert('Payment simulated and recorded on DB');
      router.push('/dashboard');
    } catch(e){ alert('Payment error: '+e); }
    setProcessing(false);
  };

  if (!goal) return (<div><Navbar /><main className="container"><div className="card" style={{marginTop:20}}>Loading...</div></main></div>);

  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="card" style={{marginTop:20}}>
          <h2>Simulated Payment</h2>
          <p className="muted">Goal: <strong>{goal.title}</strong></p>
          <p className="muted">Total to charge: <strong>£{goal.feeAmount ? (Number(goal.stakeAmount || goal.stake || 0) + Number(goal.feeAmount || 0)).toFixed(2) : (goal.total || goal.totalPaid || goal.total_paid)}</strong></p>
          <div style={{marginTop:12}}>
            <div style={{marginBottom:8}}>Enter test card details (e.g. <code>4242 4242 4242 4242</code>) — this is a simulated flow.</div>
            <input className="input" placeholder="Card number (test)" defaultValue="4242 4242 4242 4242" />
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button className="btn" onClick={pay} disabled={processing}>{processing? 'Processing...':'Pay (Test)'} </button>
              <button className="btn ghost" onClick={()=>router.push('/dashboard')}>Skip Payment (Demo)</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
