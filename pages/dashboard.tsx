'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import GoalCard from '@/components/GoalCard';
import GoalFormSmall from '@/components/GoalFormSmall';

export default function DashboardPage(props:any){
  const [goals,setGoals]=useState<any[]>([]);

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem('smg_goals')||'null');
    if (stored) setGoals(stored);
    else {
      const demo = [
        { id:'g1', title:'Run 5km 3x week', desc:'Run consistently', deadline:'2025-12-01', stake:20, useValidator:true, fee:2, total:22, status:'active', progress:60 },
        { id:'g2', title:'Read 1 book/month', desc:'Read regularly', deadline:'2025-10-01', stake:15, useValidator:false, fee:3.5, total:18.5, status:'completed', progress:100 },
      ];
      setGoals(demo);
      localStorage.setItem('smg_goals', JSON.stringify(demo));
    }
  },[]);

  useEffect(()=>{ localStorage.setItem('smg_goals', JSON.stringify(goals)); },[goals]);

  const removeGoal = (id:string)=> setGoals(prev=>prev.filter(g=>g.id!==id));

  return (
    <div>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      <main className="container" style={{paddingTop:18}}>
        <h1 style={{fontSize:26}}>Dashboard</h1>
        <div className="row" style={{marginTop:12}}>
          <div className="col">
            <div className="stats">
              <div className="stat card"><div style={{color:'var(--muted)'}}>Active Goals</div><div style={{fontWeight:700,fontSize:18}}>{goals.filter(g=>g.status==='active').length}</div></div>
              <div className="stat card"><div style={{color:'var(--muted)'}}>Total Staked</div><div style={{fontWeight:700,fontSize:18}}>£{goals.reduce((s,g)=>s+ (g.stake||0),0)}</div></div>
              <div className="stat card"><div style={{color:'var(--muted)'}}>Completed</div><div style={{fontWeight:700,fontSize:18}}>{goals.filter(g=>g.status==='completed').length}</div></div>
            </div>
            <div className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h3 style={{margin:0}}>My Goals</h3><GoalFormSmall onCreate={(g:any)=>setGoals(prev=>[g,...prev])} /></div>
              <div style={{marginTop:12}} className="goals-grid">
                {goals.map(g=> <div key={g.id}><GoalCard goal={g} onDelete={()=>removeGoal(g.id)} onUpdate={(u:any)=>setGoals(prev=>prev.map(p=>p.id===u.id?u:p))} /></div>)}
              </div>
            </div>
          </div>
          <aside style={{width:320,marginLeft:12}}>
            <div className="card"><h3 style={{margin:0}}>Profile</h3><div style={{color:'var(--muted)'}}>Demo User — demo@example.com</div></div>
            <div className="card"><h3 style={{margin:0}}>Notifications</h3><div style={{color:'var(--muted)'}}>You have no new notifications</div></div>
          </aside>
        </div>
      </main>
    </div>
  )
}
