import { stripeWebhookSecret, stripeSecretKey } from '$lib/config'; import { Stripe } from 'stripe';
import { supabase } from '$lib/supabaseClient';


export async function POST(request) {
  const sig = request.request.headers.get('stripe-signature');
  const stripe = new Stripe(stripeSecretKey); 
  let event;
  const chunks = [];

  for await (const chunk of request.request.body) {
    chunks.push(chunk);
  }

  const rawBodyBuffer = Buffer.concat(chunks);


  try {
    event = stripe.webhooks.constructEvent(rawBodyBuffer, sig, stripeWebhookSecret);
  } catch (err) {
    return new Response({ message: `Webhook Error: ${err.message}` })
  }
    switch (event.type) {
    case 'payment_intent.succeeded':
                        break;
    case 'customer.created':
      const chargecaptured = event.data.object;
                  await supabase
        .from('profile')
        .update({new: false})
        .eq('email', chargecaptured.email)
        .select();

      break;
        default:
        }

  return new Response()

}
