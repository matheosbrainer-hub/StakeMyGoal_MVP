import Navbar from '@/components/Navbar';
export default function Terms(){ return (<div><Navbar /><main className='container'><div className='card' style={{marginTop:20}}><h1>Terms & Conditions</h1><p>Last updated: {new Date().toLocaleDateString()}</p><p>These are sample terms for the MVP. Review with counsel before publishing.</p></div></main></div>) }
