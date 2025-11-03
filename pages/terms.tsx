import Navbar from '@/components/Navbar';

export default function Terms(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="card" style={{marginTop:20}}>
          <h1>Terms & Conditions</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Welcome to StakeMyGoal. These Terms & Conditions govern your use of our platform. By accessing or using the service you agree to these terms.</p>

          <h2>1. Service Overview</h2>
          <p>StakeMyGoal allows users to create goals, make financial commitments (stakes), and optionally nominate a validator to confirm completion. Users who fail to meet their stated goals may forfeit a portion of their stake as described below.</p>

          <h2>2. Fees and Payments</h2>
          <p>Platform fees: £2 when a validation partner is used; £3.50 when a user proceeds without a validation partner. All payments are processed via Stripe. You authorize us to charge your selected payment method for stakes and applicable fees.</p>

          <h2>3. Forfeiture</h2>
          <p>If a user forfeits a goal before the deadline, 25% of the stake will be deducted as a penalty. The remaining funds (if any) may be returned according to our payout policy.</p>

          <h2>4. Validators</h2>
          <p>Validation partners are independent third parties who may confirm goal completion. StakeMyGoal is not responsible for a validator's decision. Users should only nominate validators who they trust and who consent to validate.</p>

          <h2>5. Refunds & Disputes</h2>
          <p>Refunds are generally not available for stakes once a goal is accepted and the payment is processed. In exceptional cases (technical errors, fraudulent activity), please contact support; we will investigate and act in good faith.</p>

          <h2>6. Liability</h2>
          <p>To the maximum extent permitted by law, StakeMyGoal disclaims liability for any indirect, incidental, or consequential damages arising from use of the platform.</p>

          <h2>7. Changes to Terms</h2>
          <p>We may modify these Terms. Continued use after changes implies acceptance of the updated terms.</p>

          <p style={{marginTop:12}}>These are model Terms for an MVP. Please review with legal counsel before publishing.</p>
        </div>
      </main>
    </div>
  )
}
