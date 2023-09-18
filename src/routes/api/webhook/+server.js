import { stripeWebhookSecret, stripeSecretKey } from '$lib/config'; // Import the webhook secret
import { Stripe } from 'stripe';
import { supabase } from '$lib/supabaseClient';
// function getuserfromemail(email){

// }

export async function POST(request) {
  const sig = request.request.headers.get('stripe-signature');
  const stripe = new Stripe(stripeSecretKey); // Create a Stripe instance

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
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      // const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      // console.log("paymentIntentSucceeded ",paymentIntentSucceeded);
      break;
    case 'customer.created':
      const chargecaptured = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      console.log("customer.created ", chargecaptured);
      await supabase
        .from('profile')
        .update({new: false})
        .eq('email', chargecaptured.email)
        .select();

      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response()

}
