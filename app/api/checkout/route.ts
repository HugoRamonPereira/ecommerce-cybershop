import { NextResponse } from 'next/server';
// @ts-ignore
import { validateCartItems } from 'use-shopping-cart/utilities';

import { deviceInventory } from '@/config/device-inventory';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const cartDetails = await request.json();
  // We are using this validateCartItems() to make a strict validation in case the client
  // manages to change, tamper with the price of a product, so the client could buy any product
  // with whichever price he wanted and that is really bad for the product
  const lineItems = validateCartItems(deviceInventory, cartDetails);

  // We are getting the origin of the request to use it for the success and cancel url
  const origin = request.headers.get('origin');

  const session = await stripe.checkout.sessions.create({
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'BR', 'CH', 'GB']
    },
    shipping_options: [
      {
        shipping_rate: 'shr_1NnkciAvTTmGNqxsGBXAY9IK'
      }
    ],
    billing_address_collection: 'auto',
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`
  });

  //We cannot forget to return the session which contains all of the information about the
  // purchase using NextResponse and pass the session
  return NextResponse.json(session);
}
