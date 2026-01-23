import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('Missing CLERK_WEBHOOK_SECRET');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  // Get headers
  const svix_id = request.headers.get('svix-id');
  const svix_timestamp = request.headers.get('svix-timestamp');
  const svix_signature = request.headers.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({ error: 'Missing svix headers' }, { status: 400 });
  }

  const body = await request.text();

  // Verify webhook signature
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();

  // Handle different event types
  switch (evt.type) {
    case 'user.created': {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const email = email_addresses[0]?.email_address;
      const name = [first_name, last_name].filter(Boolean).join(' ') || null;

      const { error } = await supabase.from('users').insert([
        {
          clerk_id: id,
          email: email,
          name: name,
        },
      ]);

      if (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
      }

      console.log('User created:', id);
      break;
    }

    case 'user.updated': {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const email = email_addresses[0]?.email_address;
      const name = [first_name, last_name].filter(Boolean).join(' ') || null;

      const { error } = await supabase
        .from('users')
        .update({
          email: email,
          name: name,
          updated_at: new Date().toISOString(),
        })
        .eq('clerk_id', id);

      if (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
      }

      console.log('User updated:', id);
      break;
    }

    case 'user.deleted': {
      const { id } = evt.data;

      const { error } = await supabase.from('users').delete().eq('clerk_id', id);

      if (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
      }

      console.log('User deleted:', id);
      break;
    }

    default:
      console.log('Unhandled webhook event:', evt.type);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
