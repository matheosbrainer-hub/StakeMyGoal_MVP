'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function CreateGoal(props:any){
  const router = useRouter();
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [deadline,setDeadline]=useState('');
  const [stake,setStake]=useState(10);
  const [useValidator,setUseValidator]=useState(true);
  const [validatorEmail,setValidatorEmail]=useState('');
  const fee = useValidator ? 2 : 3.5;
  const total = Number(stake) + fee;

  const handleSubmit = (e:any)=>{
    e.preventDefault();
    if (!deadline) return alert('Please choose a deadline');
    const goals = JSON.parse(localStorage.getItem('smg_goals')||'[]');
    const id = 'g'+Date.now();
    goals.unshift({id,title,desc,deadline,stake: Number(stake),useValidator,validatorEmail,fee,total,status:'pending_payment',progress:0,createdAt:Date.now()});
    localStorage.setItem('smg_goals', JSON.stringify(goals));
    router.push('/payment?goalId='+id);
  };

  return (
    <div>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      <main className="container">
        <div className="card" style={{marginTop:20}}>
          <h1>Create a Goal</h1>
          <form onSubmit={handleSubmit} style={{marginTop:12,display:'grid',gap:12}}>
            <input className="input" placeholder="Goal title" value={title} onChange={e=>setTitle(e.target.value)} required />
            <textarea className="input" placeholder="Description (what success looks like)" value={desc} onChange={e=>setDesc(e.target.value)} rows={4} />
            <div className="form-row">
              <input type="date" className="input" value={deadline} onChange={e=>setDeadline(e.target.value)} required />
              <input type="number" className="input" value={stake} onChange={e=>setStake(Number(e.target.value))} min={1} required />
            </div>
            <label style={{display:'flex',alignItems:'center',gap:8}}><input type="checkbox" checked={useValidator} onChange={e=>setUseValidator(e.target.checked)} /> Use validation partner (fee £2)</label>
            {useValidator && <input className="input" placeholder="Validator email (optional)" value={validatorEmail} onChange={e=>setValidatorEmail(e.target.value)} />}
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div>Platform fee: £{fee}</div><div style={{fontWeight:700}}>Total: £{total.toFixed(2)}</div></div>
            <div style={{display:'flex',gap:8}}>
              <button className="btn" type="submit">Proceed to Payment (placeholder)</button>
              <button type="button" className="btn ghost" onClick={()=>{localStorage.removeItem('smg_goals'); alert('Cleared demo goals')}}>Clear Demo</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
