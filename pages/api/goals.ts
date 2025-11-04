import { db } from '@/lib/db';
import { goals } from '@/lib/schema';

export default async function handler(req:any, res:any){
  if (!db) return res.status(500).json({ error: 'DATABASE_URL not configured' });
  try {
    if (req.method === 'GET') {
      const all = await db.select().from(goals).limit(200);
      return res.status(200).json(all);
    }
    if (req.method === 'POST') {
      const body = req.body;
      const inserted = await db.insert(goals).values({
        userId: body.userId,
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        stakeAmount: body.stakeAmount,
        feeAmount: body.feeAmount,
        hasValidator: body.hasValidator || false,
        validatorEmail: body.validatorEmail || null,
      }).returning();
      return res.status(201).json(inserted);
    }
    return res.status(405).end();
  } catch (err:any) {
    console.error(err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
