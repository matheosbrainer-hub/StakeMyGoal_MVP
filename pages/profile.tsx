'use client';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
export default function Profile({ theme, toggleTheme }: any){
  const [name,setName]=useState('Demo User');
  const [email,setEmail]=useState('demo@example.com');
  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('smg_profile')||'null');
    if (saved){ setName(saved.name||name); setEmail(saved.email||email); }
  },[]);
  const save = ()=>{ localStorage.setItem('smg_profile', JSON.stringify({name,email})); alert('Profile saved (demo)'); };
  const reset = ()=>{ localStorage.removeItem('smg_goals'); localStorage.removeItem('smg_tx'); localStorage.removeItem('smg_profile'); alert('Demo data reset'); location.reload(); };
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container" style={{paddingTop:18}}>
        <h1>Profile</h1>
        <div className="card" style={{marginTop:12}}>
          <label style={{display:'block',marginBottom:8}}>Name</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} />
          <label style={{display:'block',marginTop:8,marginBottom:8}}>Email</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} />
          <div style={{display:'flex',gap:8,marginTop:12}}>
            <button className="btn" onClick={save}>Save</button>
            <button className="btn ghost" onClick={()=>window.location.href='/'}>Back to Main Page</button>
            <button className="btn ghost" onClick={reset}>Reset Demo Data</button>
          </div>
        </div>
      </main>
    </div>
  )
}
