'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GoalCelebration from './GoalCelebration';

export default function GoalCard({ goal }: any){
  const [status, setStatus] = useState(goal?.status || 'active');
  const [show, setShow] = useState(false);
  const stake = goal?.stake || 0;

  const handleComplete = async ()=>{
    if (goal.hasValidator) {
      alert('Sent request to validator');
      setStatus('pending_validation');
    } else {
      setStatus('payout_processing');
      setShow(true);
    }
  };

  const handleForfeit = async ()=>{
    if (!confirm('Forfeit and lose 25%?')) return;
    setStatus('forfeited');
    alert('Forfeited');
  };

  return (
    <motion.div className="goal card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3 style={{margin:0}}>{goal.title}</h3>
        <div style={{fontSize:13,color:'#94a3b8'}}>£{stake}</div>
      </div>
      <div className="progress"><i style={{width:`${goal.progress}%`}}></i></div>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <button className="btn" onClick={handleComplete}>Complete</button>
        <button className="btn ghost" onClick={handleForfeit}>Forfeit</button>
      </div>
      {show && <GoalCelebration show={show} message={'🎉 Goal Completed!'} onClose={()=>setShow(false)} />}
    </motion.div>
  )
}
