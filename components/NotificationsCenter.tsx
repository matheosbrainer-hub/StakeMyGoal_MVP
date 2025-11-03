'use client';
import { useEffect, useState } from 'react';
export default function NotificationsCenter({ uid }: { uid: string }){
  const [notes,setNotes]=useState<any[]>([]);
  useEffect(()=>{ setNotes([ {id:'n1', message:'Validator requested approval'}, {id:'n2', message:'Payout completed'} ]); },[uid]);
  return (
    <div>
      <h4 style={{margin:0}}>🔔 Notifications</h4>
      <ul style={{color:'#94a3b8'}}>{notes.map(n=> <li key={n.id}>{n.message}</li>)}</ul>
    </div>
  );
}
