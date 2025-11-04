'use client';
import { useEffect, useState } from 'react';
const STORIES = [
  { name:'Alice', text:'I finally ran my first 10K — StakeMyGoal kept me accountable!' },
  { name:'Sam', text:'Lost 8kg in 3 months, thanks to consistent stakes.' },
  { name:'Jules', text:'Finished my certification while juggling work.' }
];
export default function SuccessStories(){
  const [i,setI]=useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(i=> (i+1)%STORIES.length),4000); return ()=>clearInterval(t); },[]);
  const s = STORIES[i];
  return (
    <section className="container" style={{marginTop:20}}>
      <h3>Success Stories</h3>
      <div className="card" style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:56,height:56,borderRadius:999,background:'rgba(255,255,255,0.04)',display:'flex',alignItems:'center',justifyContent:'center'}}>{s.name[0]}</div>
        <div>
          <div style={{fontWeight:700}}>{s.name}</div>
          <div className="muted">{s.text}</div>
        </div>
      </div>
    </section>
  )
}
