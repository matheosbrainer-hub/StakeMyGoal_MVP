import Navbar from '@/components/Navbar';

export default function Privacy(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="card" style={{marginTop:20}}>
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>StakeMyGoal ("we", "us") collects and processes personal information necessary to operate the service. This Privacy Policy describes how we collect, use, and protect your data.</p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Account information:</strong> email, display name, and profile details.</li>
            <li><strong>Payment information:</strong> payment tokens and transaction records (we do not store full card numbers; payments are processed via Stripe).</li>
            <li><strong>Usage data:</strong> activity logs, goal status, and IP-address metadata for security.</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>We use personal data to provide the service, process payments, communicate about goals, send notifications, and improve the platform.</p>

          <h2>Data Retention</h2>
          <p>We retain personal data for as long as necessary to provide the service and comply with legal obligations.</p>

          <h2>Your Rights</h2>
          <p>You may request access, correction, or deletion of your personal data. Contact support to exercise these rights.</p>

          <h2>Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your data. However, no online transmission is completely secure.</p>

          <p style={{marginTop:12}}>This Privacy Policy is a starting point for an MVP. Consult legal counsel before publishing.</p>
        </div>
      </main>
    </div>
  )
}
