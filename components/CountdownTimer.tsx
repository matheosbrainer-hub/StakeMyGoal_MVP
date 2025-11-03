'use client';
import { useEffect, useState } from 'react';
export default function CountdownTimer({ deadline }: { deadline: string }){
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(()=>{
    const end = new Date(deadline).getTime();
    const interval = setInterval(()=>{
      const diff = end - Date.now();
      setTimeLeft(diff>0?diff:0);
    },1000);
    return ()=>clearInterval(interval);
  },[deadline]);
  const fmt=(ms:number)=>{ const s=Math.floor(ms/1000); const d=Math.floor(s/86400); const h=Math.floor((s%86400)/3600); const m=Math.floor((s%3600)/60); const sec=s%60; return `${d}d ${h}h ${m}m ${sec}s`; }
  return <span className={timeLeft===0? 'text-red-400':'text-yellow-400'}>{timeLeft===0? 'Deadline Passed': fmt(timeLeft)}</span>
}
