'use client';
import { useEffect, useState } from 'react';
export default function Achievements({ uid }: { uid: string }){
  const [ach, setAch] = useState<any[]>([]);
  useEffect(()=>{
    setAch([ {id:'first', title:'First Goal', unlocked:true}, {id:'five', title:'5 Goals', unlocked:false} ])
  },[uid]);
  return (
    <div>
      <h4 style={{margin:0}}>🏅 Achievements</h4>
      <ul style={{color:'#94a3b8'}}>{ach.map(a=> <li key={a.id}>{a.title} {a.unlocked? '✅':''}</li>)}</ul>
    </div>
  )
}
