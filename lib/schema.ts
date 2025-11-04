import { pgTable, uuid, varchar, text, decimal, boolean, timestamp, jsonb, date } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull(),
  passwordHash: text('password_hash'),
  avatarUrl: text('avatar_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const goals = pgTable('goals', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  deadline: date('deadline').notNull(),
  stakeAmount: decimal('stake_amount', { precision: 10, scale: 2 }).notNull(),
  feeAmount: decimal('fee_amount', { precision: 10, scale: 2 }).notNull(),
  totalPaid: decimal('total_paid', { precision: 10, scale: 2 }).default('0.00'),
  hasValidator: boolean('has_validator').default(false),
  validatorEmail: varchar('validator_email', { length: 255 }),
  status: varchar('status', { length: 50 }).default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const payments = pgTable('payments', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  goalId: uuid('goal_id').references(() => goals.id).notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 50 }).default('initiated'),
  transactionRef: varchar('transaction_ref', { length: 255 }),
  paymentProvider: varchar('payment_provider', { length: 100 }).default('stripe'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const validators = pgTable('validators', {
  id: uuid('id').defaultRandom().primaryKey(),
  goalId: uuid('goal_id').references(() => goals.id).notNull(),
  validatorEmail: varchar('validator_email', { length: 255 }).notNull(),
  invitedAt: timestamp('invited_at').defaultNow(),
  confirmed: boolean('confirmed').default(false),
  confirmedAt: timestamp('confirmed_at'),
});

export const transactions = pgTable('transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  goalId: uuid('goal_id').references(() => goals.id),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const auditLogs = pgTable('audit_logs', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  action: varchar('action', { length: 255 }),
  details: jsonb('details'),
  createdAt: timestamp('created_at').defaultNow(),
});
