'use client';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

export default function GoalCelebration({ show, message='🎉', onClose }: any){
  const [visible, setVisible] = useState(show);
  useEffect(()=>{ setVisible(show); if (show){ const t=setTimeout(()=>{ setVisible(false); onClose&&onClose(); },4000); return ()=>clearTimeout(t);} },[show,onClose]);
  if (!visible) return null;
  return (
    <div className="card" style={{position:'fixed',left:'50%',top:'20%',transform:'translateX(-50%)',zIndex:50}}>
      <Confetti numberOfPieces={200} gravity={0.2} />
      <div style={{padding:12,fontWeight:700}}>{message}</div>
    </div>
  );
}
