'use client';
import { useEffect, useState } from 'react';
export default function GoalStreak({ uid }: { uid: string }){
  const [streak, setStreak] = useState(0);
  useEffect(()=>{ setStreak(3); },[uid]);
  return (<div><h4 style={{margin:0}}>🔥 Current Streak</h4><p style={{fontSize:20,fontWeight:700}}> {streak} days</p></div>)
}
