'use client';
import { useEffect, useState } from 'react';
export default function LeaderboardRealtime(){ const [leaders,setLeaders]=useState<any[]>([]); useEffect(()=>{ setLeaders([ {uid:'u1', displayName:'Alice', totalEarned:120}, {uid:'u2', displayName:'Bob', totalEarned:90} ]); },[]); return (
  <div><h4 style={{margin:0}}>🏆 Leaderboard</h4><ol style={{color:'#94a3b8'}}>{leaders.map((l,i)=><li key={l.uid}>{i+1}. {l.displayName} - £{l.totalEarned}</li>)}</ol></div>
)}