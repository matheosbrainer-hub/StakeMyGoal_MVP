import Link from 'next/link';
import DarkToggle from './DarkToggle';
export default function Navbar({ theme, toggleTheme }: any){
  return (
    <header className="header container">
      <div className="logo">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="64" height="64" rx="12" fill="#7c3aed"/>
          <path d="M18 40 L26 24 L34 40 L42 24" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        <div>
          <div style={{fontWeight:700,color:'var(--text)'}}>StakeMyGoal</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Bet on your progress</div>
        </div>
      </div>
      <nav style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/terms" className="btn ghost">Terms</Link>
        <Link href="/privacy" className="btn ghost">Privacy</Link>
        <Link href="/create-goal" className="btn">Create Goal</Link>
        <Link href="/dashboard" className="btn ghost">Dashboard</Link>
        <DarkToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  )
}
