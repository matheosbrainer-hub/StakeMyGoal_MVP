import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SuccessStories from '@/components/SuccessStories';

export default function Home(props:any){
  return (
    <div>
      <Head><title>StakeMyGoal</title></Head>
      <Navbar />
      <main style={{paddingBottom:40}}>
        <Hero />
        <SuccessStories />
        <section className="container" style={{marginTop:20}}>
          <div className="grid cols-3">
            <div className="card"><h3>Why it works</h3><p className="muted">Skin in the game + social accountability = better results.</p></div>
            <div className="card"><h3>Security</h3><p className="muted">Payments are simulated in this demo. You can plug Stripe test keys later.</p></div>
            <div className="card"><h3>Community</h3><p className="muted">Share progress and climb the leaderboard.</p></div>
          </div>
        </section>
      </main>
    </div>
  )
}
