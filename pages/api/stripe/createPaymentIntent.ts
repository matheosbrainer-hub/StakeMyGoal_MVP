export default function handler(req,res){
  // placeholder: return client secret simulation
  res.status(200).json({ clientSecret: 'simulated_secret_123', ok:true });
}
