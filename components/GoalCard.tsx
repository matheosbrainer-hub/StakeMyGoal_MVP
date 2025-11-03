'use client';
import { useState } from 'react';
export default function GoalCard({ goal, onDelete, onUpdate }: any){
  const [showEdit, setShowEdit] = useState(false);
  const [local, setLocal] = useState(goal);
  const complete = ()=>{ const u = {...local, status:'completed', progress:100}; setLocal(u); onUpdate && onUpdate(u); alert('Marked complete (demo)'); };
  const forfeit = ()=>{ if (!confirm('Forfeit and lose 25%?')) return; const penalty = (local.stake||0)*0.25; const u = {...local, status:'forfeited'}; setLocal(u); onUpdate && onUpdate(u); alert('Forfeited — penalty £'+penalty.toFixed(2)); };
  const save = ()=>{ onUpdate && onUpdate(local); setShowEdit(false); };
  return (
    <div className="goal card">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <strong>{local.title}</strong>
        <div style={{color:'var(--muted)'}}>£{local.stake}</div>
      </div>
      <div style={{color:'var(--muted)'}}>{local.desc}</div>
      <div className="progress"><i style={{width:`${local.progress||0}%`}}></i></div>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="btn" onClick={complete}>Complete</button>
        <button className="btn ghost" onClick={forfeit}>Forfeit</button>
        <button className="btn ghost" onClick={()=>setShowEdit(s=>!s)}>{showEdit? 'Close':'Edit'}</button>
        <button className="btn ghost" onClick={onDelete}>Delete</button>
      </div>
      {showEdit && <div style={{marginTop:8}}>
        <input className="input" value={local.title} onChange={e=>setLocal({...local,title:e.target.value})} />
        <input className="input" value={local.desc} onChange={e=>setLocal({...local,desc:e.target.value})} />
        <div style={{display:'flex',gap:8,marginTop:8}}>
          <button className="btn" onClick={save}>Save</button>
        </div>
      </div>}
    </div>
  )
}
