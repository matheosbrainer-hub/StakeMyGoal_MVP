import Navbar from '@/components/Navbar';
import UserDashboard from '@/components/UserDashboard';
import { useSearchParams } from 'next/navigation';

export default function DashboardPage(){
  const params = useSearchParams();
  const demo = params?.get('demo') === '1';
  return (
    <div>
      <Navbar />
      <main className="container" style={{paddingTop:18}}>
        <UserDashboard uid={demo? 'demo-user' : 'user-uid'} />
      </main>
    </div>
  )
}
