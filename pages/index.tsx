import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home(props:any){
  return (
    <div>
      <Head><title>StakeMyGoal</title></Head>
      <Navbar theme={props.theme} toggleTheme={props.toggleTheme} />
      <main style={{paddingBottom:40}}>
        <Hero />
        <section className="container" style={{marginTop:20}}>
          <div className="grid cols-3">
            <div className="card">
              <h3>Why it works</h3>
              <p className="muted">Skin in the game + social accountability = better results.</p>
            </div>
            <div className="card">
              <h3>Security</h3>
              <p className="muted">Payments handled via Stripe (placeholder). We store minimal data.</p>
            </div>
            <div className="card">
              <h3>Community</h3>
              <p className="muted">Share progress and climb the leaderboard.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>© {new Date().getFullYear()} StakeMyGoal</div>
          <div>Demo MVP</div>
        </div>
      </footer>
    </div>
  )
}
