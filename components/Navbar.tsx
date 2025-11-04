'use client';
import Link from 'next/link';
export default function Navbar(){
  return (
    <header className="header container">
      <div className="logo">
        <svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="12" fill="#7c3aed"/><path d="M18 40 L26 24 L34 40 L42 24" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
        <div><div style={{fontWeight:700}}>StakeMyGoal</div><div style={{fontSize:12,color:'#94a3b8'}}>Bet on your progress</div></div>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/"><span className="btn ghost">Home</span></Link>
        <Link href="/create-goal"><span className="btn">Create Goal</span></Link>
        <Link href="/dashboard"><span className="btn ghost">Dashboard</span></Link>
        <Link href="/transactions"><span className="btn ghost">Transactions</span></Link>
        <Link href="/profile"><span className="btn ghost">Profile</span></Link>
      </nav>
    </header>
  )
}
