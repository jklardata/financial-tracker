-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/crxddnkwehlwtqegidaf/sql)

-- Users table (linked to Clerk)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Purchases table
CREATE TABLE purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_tier TEXT NOT NULL CHECK (product_tier IN ('starter', 'pro', 'complete')),
  amount_cents INTEGER NOT NULL,
  currency TEXT DEFAULT 'USD',
  gumroad_sale_id TEXT,
  purchased_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User preferences
CREATE TABLE user_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  currency TEXT DEFAULT 'USD',
  date_format TEXT DEFAULT 'MM/DD/YYYY',
  notifications_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Waitlist
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  source TEXT DEFAULT 'landing_page',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policies for users table (users can only see their own data)
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (clerk_id = current_setting('request.jwt.claims')::json->>'sub');

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (clerk_id = current_setting('request.jwt.claims')::json->>'sub');

-- Policies for purchases (users can only see their own purchases)
CREATE POLICY "Users can view own purchases" ON purchases
  FOR SELECT USING (user_id IN (
    SELECT id FROM users WHERE clerk_id = current_setting('request.jwt.claims')::json->>'sub'
  ));

-- Policies for preferences (users can manage their own preferences)
CREATE POLICY "Users can view own preferences" ON user_preferences
  FOR SELECT USING (user_id IN (
    SELECT id FROM users WHERE clerk_id = current_setting('request.jwt.claims')::json->>'sub'
  ));

CREATE POLICY "Users can update own preferences" ON user_preferences
  FOR UPDATE USING (user_id IN (
    SELECT id FROM users WHERE clerk_id = current_setting('request.jwt.claims')::json->>'sub'
  ));

CREATE POLICY "Users can insert own preferences" ON user_preferences
  FOR INSERT WITH CHECK (user_id IN (
    SELECT id FROM users WHERE clerk_id = current_setting('request.jwt.claims')::json->>'sub'
  ));

-- Waitlist is insert-only from anonymous users
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_purchases_user_id ON purchases(user_id);
CREATE INDEX idx_waitlist_email ON waitlist(email);
