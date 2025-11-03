import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home(){
  return (
    <div>
      <Head><title>StakeMyGoal — Bet on your goals</title></Head>
      <Navbar />
      <main style={{paddingBottom:40}}>
        <HeroSection />
        <section className="container">
          <div className="grid cols-3" style={{marginTop:20}}>
            <div className="card">
              <h3>Why it works</h3>
              <p className="muted">Skin in the game + social accountability = better results. We make commitment fun and real.</p>
            </div>
            <div className="card">
              <h3>Security</h3>
              <p className="muted">Payments handled with Stripe. Personal data stored securely; privacy respectful defaults.</p>
            </div>
            <div className="card">
              <h3>Community</h3>
              <p className="muted">Share progress, celebrate wins, and climb the leaderboard.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>© {new Date().getFullYear()} StakeMyGoal</div>
          <div>Made with ❤️ — MVP demo</div>
        </div>
      </footer>
    </div>
  )
}
