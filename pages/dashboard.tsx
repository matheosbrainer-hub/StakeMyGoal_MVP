'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import GoalCard from '@/components/GoalCard';
import GoalFormSmall from '@/components/GoalFormSmall';
import axios from 'axios';

export default function DashboardPage(props:any){
  const [goals,setGoals]=useState<any[]>([]);
  const [txs,setTxs]=useState<any[]>([]);
  const [quote, setQuote] = useState('Keep pushing — small wins add up.');

  useEffect(()=>{
    const q = ['Keep pushing — small wins add up.','Momentum builds success — keep it going!','You’re closer than you think.'];
    const t = setInterval(()=> setQuote(q[Math.floor(Math.random()*q.length)]),4000);
    fetchData();
    return ()=>clearInterval(t);
  },[]);

  const fetchData = async ()=>{
    try {
      const res = await axios.get('/api/goals'); setGoals(res.data || []);
      const r2 = await axios.get('/api/transactions'); setTxs(r2.data || []);
    } catch(e){ console.error(e); }
  };

  const removeGoal = async (id:string)=>{ setGoals(prev=>prev.filter(g=>g.id!==id)); };

  const celebrate = ()=> alert('🎉 Keep going — you are doing great!');

  return (
    <div>
      <Navbar />
      <main className="container" style={{paddingTop:18}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h1 style={{fontSize:26}}>Welcome back, Demo User</h1>
            <div className="muted" style={{marginTop:6}}>{quote}</div>
          </div>
          <div><button className="btn ghost" onClick={()=>window.location.href='/transactions'}>Transactions</button></div>
        </div>

        <div style={{marginTop:12}} className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div><div style={{color:'var(--muted)'}}>Streak</div><div style={{fontSize:20,fontWeight:800}}>7 days</div></div>
            <div><div style={{color:'var(--muted)'}}>Motivation</div><div><button className="btn" onClick={celebrate}>Celebrate 🎉</button></div></div>
            <div><div style={{color:'var(--muted)'}}>Total at stake</div><div style={{fontSize:20,fontWeight:800}}>£{goals.reduce((s,g)=>s+(Number(g.stakeAmount||g.stake||0)),0)}</div></div>
          </div>
        </div>

        <div className="row" style={{marginTop:12}}>
          <div className="col">
            <div className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h3 style={{margin:0}}>My Goals</h3><GoalFormSmall onCreate={async (g:any)=>{ try{ await axios.post('/api/goals', {...g, userId: process.env.NEXT_PUBLIC_DEMO_USER_ID || null}); fetchData(); }catch(e){console.error(e)} }} /></div>
              <div style={{marginTop:12}} className="goals-grid">{goals.map((g:any)=> <div key={g.id}><GoalCard goal={g} onDelete={()=>removeGoal(g.id)} onUpdate={async (u:any)=>{ await axios.post('/api/goals', u); fetchData(); }} /></div>)}</div>
            </div>
          </div>
          <aside style={{width:320,marginLeft:12}}>
            <div className="card"><h3 style={{margin:0}}>Profile</h3><div className="muted">Demo User — demo@example.com</div></div>
            <div className="card"><h3 style={{margin:0}}>Achievements</h3><ul className="muted"><li>First Goal ✅</li><li>3-day streak 🔥</li></ul></div>
            <div className="card"><h3 style={{margin:0}}>Tips</h3><div className="muted">Set specific deadlines and pick a validator to lower the fee.</div></div>
          </aside>
        </div>
      </main>
    </div>
  )
}
