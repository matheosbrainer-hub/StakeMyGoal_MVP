import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config();

let db = null;
if (process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql);
} else {
  console.warn('DATABASE_URL not set — API routes will return an error until configured.');
}
export { db };
