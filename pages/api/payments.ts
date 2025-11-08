import { db } from '@/lib/db';
import { payments, goals } from '@/lib/schema';

export default async function handler(req:any, res:any){
  if (!db) return res.status(500).json({ error: 'DATABASE_URL not configured' });
  try {
    if (req.method === 'POST') {
      const { userId, goalId, amount } = req.body;
      const inserted = await db.insert(payments).values({
        userId, goalId, amount, status: 'succeeded', transactionRef: 'sim_'+Date.now()
      }).returning();
      await db.update(goals).set({ status: 'active', totalPaid: amount }).where(goals.id.eq(goalId));
      return res.status(201).json(inserted);
    }
    return res.status(405).end();
  } catch (err:any) {
    console.error(err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
