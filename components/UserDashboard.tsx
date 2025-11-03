'use client';
import GoalStreak from './GoalStreak';
import Achievements from './Achievements';
import LeaderboardRealtime from './LeaderboardRealtime';
import NotificationsCenter from './NotificationsCenter';
import GoalCard from './GoalCard';
import PaymentMethods from './PaymentMethods';

export default function UserDashboard({ uid }: { uid: string }){
  const demoGoals = [
    { id:'g1', title:'Run 5km 3x week', stake:20, progress:60, status:'active', hasValidator:true },
    { id:'g2', title:'Read 1 book/month', stake:15, progress:100, status:'completed', hasValidator:false },
    { id:'g3', title:'Lose 3kg', stake:50, progress:20, status:'active', hasValidator:false },
  ];

  return (
    <div style={{paddingBottom:60}}>
      <h1 style={{fontSize:28,fontWeight:700}}>Your Dashboard</h1>
      <div className="stats" style={{marginTop:12}}>
        <div className="stat card">
          <div style={{color:'#94a3b8'}}>Total Stake</div>
          <div style={{fontSize:20,fontWeight:700}}>£85</div>
        </div>
        <div className="stat card">
          <div style={{color:'#94a3b8'}}>Total Earned</div>
          <div style={{fontSize:20,fontWeight:700}}>£42</div>
        </div>
        <div className="stat card">
          <div style={{color:'#94a3b8'}}>Active Goals</div>
          <div style={{fontSize:20,fontWeight:700}}>2</div>
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:18,marginTop:18}}>
        <div>
          <div className="card" style={{marginBottom:12}}>
            <h3 style={{margin:0}}>Goals</h3>
            <div className="goals-grid" style={{marginTop:12}}>
              {demoGoals.map(g => <div key={g.id} className="goal card"><h4 style={{margin:0}}>{g.title}</h4><div style={{color:'#94a3b8'}}>£{g.stake} • {g.hasValidator? 'Validator':'Solo'}</div><div className="progress"><i style={{width: `${g.progress}%`}}></i></div></div>)}
            </div>
          </div>

          <div className="card" style={{marginTop:12}}>
            <h3>Recent Activity</h3>
            <ul style={{color:'#94a3b8'}}>
              <li>Goal "Read 1 book/month" marked complete — payout processed</li>
              <li>You earned an achievement: First Goal!</li>
              <li>Validator requested confirmation for "Run 5km"</li>
            </ul>
          </div>
        </div>

        <aside style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="card"><h3>Profile</h3><div style={{color:'#94a3b8'}}>Demo User — demo@example.com</div></div>
          <div className="card"><GoalStreak uid={uid} /></div>
          <div className="card"><Achievements uid={uid} /></div>
          <div className="card"><LeaderboardRealtime /></div>
          <div className="card"><NotificationsCenter uid={uid} /></div>
          <div className="card"><PaymentMethods /></div>
        </aside>
      </div>
    </div>
  )
}
