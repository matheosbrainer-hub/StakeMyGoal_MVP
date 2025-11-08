import { db } from '@/lib/db';
import { payments } from '@/lib/schema';

export default async function handler(req:any, res:any){
  if (!db) return res.status(500).json({ error: 'DATABASE_URL not configured' });
  try {
    if (req.method === 'GET') {
      const tx = await db.select().from(payments).orderBy(payments.createdAt.desc).limit(200);
      return res.status(200).json(tx);
    }
    return res.status(405).end();
  } catch(err:any){
    console.error(err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
