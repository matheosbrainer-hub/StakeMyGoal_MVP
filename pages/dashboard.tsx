'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import GoalCard from '@/components/GoalCard';
import GoalFormSmall from '@/components/GoalFormSmall';

export default function DashboardPage(props:any){
  const [goals,setGoals]=useState<any[]>([]);
  const [txs,setTxs]=useState<any[]>([]);
  const [quote, setQuote] = useState('Keep pushing — small wins add up.');
  useEffect(()=>{
    const q = ['Keep pushing — small wins add up.','Momentum builds success — keep it going!','You’re closer than you think.'];
    const t = setInterval(()=> setQuote(q[Math.floor(Math.random()*q.length)]),4000);
    const stored = JSON.parse(localStorage.getItem('smg_goals')||'null');
    if (stored) setGoals(stored);
    else {
      const demo = [
        { id:'g1', title:'Run 5km 3x week', desc:'Run consistently', deadline:'2025-12-01', stake:20, useValidator:true, validatorEmail:'val@example.com', fee:2, total:22, status:'active', paid:true, progress:60, createdAt: Date.now()-1000*60*60*24*10 },
        { id:'g2', title:'Read 1 book/month', desc:'Read regularly', deadline:'2025-10-01', stake:15, useValidator:false, fee:3.5, total:18.5, status:'completed', paid:true, progress:100, createdAt: Date.now()-1000*60*60*24*40 },
      ];
      setGoals(demo);
      localStorage.setItem('smg_goals', JSON.stringify(demo));
    }
    const tx = JSON.parse(localStorage.getItem('smg_tx')||'[]');
    setTxs(tx);
    return ()=>clearInterval(t);
  },[]);

  useEffect(()=>{ localStorage.setItem('smg_goals', JSON.stringify(goals)); },[goals]);
  useEffect(()=>{ localStorage.setItem('smg_tx', JSON.stringify(txs)); },[txs]);

  const removeGoal = (id:string)=> setGoals(prev=>prev.filter(g=>g.id!==id));
  const celebrate = ()=> alert('🎉 Keep going — you are doing great!');

  return (
    <div>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
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
            <div>
              <div style={{color:'var(--muted)'}}>Streak</div>
              <div style={{fontSize:20,fontWeight:800}}>7 days</div>
            </div>
            <div>
              <div style={{color:'var(--muted)'}}>Motivation</div>
              <div><button className="btn" onClick={celebrate}>Celebrate 🎉</button></div>
            </div>
            <div>
              <div style={{color:'var(--muted)'}}>Total at stake</div>
              <div style={{fontSize:20,fontWeight:800}}>£{goals.reduce((s,g)=>s+(g.stake||0),0)}</div>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop:12}}>
          <div className="col">
            <div className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h3 style={{margin:0}}>My Goals</h3><GoalFormSmall onCreate={(g:any)=>setGoals(prev=>[g,...prev])} /></div>
              <div style={{marginTop:12}} className="goals-grid">
                {goals.map(g=> <div key={g.id}><GoalCard goal={g} onDelete={()=>removeGoal(g.id)} onUpdate={(u:any)=>setGoals(prev=>prev.map(p=>p.id===u.id?u:p))} /></div>)}
              </div>
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
