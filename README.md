# StakeMyGoal v6 - Neon + Drizzle + Tailwind (Node 18.x ready)

This package connects the frontend to your Neon DB using Drizzle ORM and includes Tailwind CSS.

Quick start:
1. Copy `.env.example` -> `.env.local` and fill DATABASE_URL (use your Neon connection string).
2. npm install
3. npm run dev
4. Open http://localhost:3000

Notes:
- API routes (/api/goals, /api/payments, /api/transactions) require DATABASE_URL to be set.
- If you see package version errors, run `npm install @neondatabase/serverless@0.9.0 pg drizzle-orm`.
