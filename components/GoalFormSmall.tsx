'use client';
import { useState } from 'react';
export default function GoalFormSmall({ onCreate }: any){
  const [title,setTitle]=useState('');
  const [stake,setStake]=useState(10);
  const handle = ()=>{
    if (!title) return alert('Add title');
    const id = 'g'+Date.now();
    const g = { id, title, desc:'', deadline:'', stake, useValidator:false, fee:3.5, total: stake+3.5, status:'active', progress:0 };
    onCreate && onCreate(g);
    setTitle(''); setStake(10);
  };
  return (
    <div style={{display:'flex',gap:8}}>
      <input className="input" placeholder="Quick goal title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input type="number" className="input" style={{width:100}} value={stake} onChange={e=>setStake(Number(e.target.value))} />
      <button className="btn" onClick={handle}>Add</button>
    </div>
  )
}
