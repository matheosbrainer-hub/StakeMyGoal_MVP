'use client';
import { useState } from 'react';
export default function GoalFormSmall({ onCreate }: any){
  const [title,setTitle]=useState('');
  const [stake,setStake]=useState(10);
  const [deadline,setDeadline]=useState('');
  const [useValidator,setUseValidator]=useState(false);
  const handle = ()=>{
    if (!title) return alert('Add title');
    const id = 'g'+Date.now();
    const g = { id, title, desc:'', deadline, stake, useValidator, validatorEmail:'', fee: useValidator?2:3.5, total: stake + (useValidator?2:3.5), status:'active', progress:0, createdAt: Date.now() };
    onCreate && onCreate(g);
    setTitle(''); setStake(10); setDeadline(''); setUseValidator(false);
  };
  return (
    <div style={{display:'flex',gap:8,alignItems:'center'}}>
      <input className="input" placeholder="Quick goal" value={title} onChange={e=>setTitle(e.target.value)} />
      <input type="date" className="input" style={{width:140}} value={deadline} onChange={e=>setDeadline(e.target.value)} />
      <input type="number" className="input" style={{width:80}} value={stake} onChange={e=>setStake(Number(e.target.value))} />
      <label style={{color:'var(--muted)'}}><input type="checkbox" checked={useValidator} onChange={e=>setUseValidator(e.target.checked)} /> val</label>
      <button className="btn" onClick={handle}>Add</button>
    </div>
  )
}
