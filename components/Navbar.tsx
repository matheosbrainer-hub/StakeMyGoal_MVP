import Link from 'next/link';
export default function Navbar(){
  return (
    <header className="header container">
      <div className="logo">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="64" height="64" rx="12" fill="#0ea5b6"/>
          <path d="M18 40 L26 24 L34 40 L42 24" stroke="#071023" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div>
          <div style={{fontWeight:700,color:'#fff'}}>StakeMyGoal</div>
          <div style={{fontSize:12,color:'#94a3b8'}}>Bet on your progress</div>
        </div>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  )
}
