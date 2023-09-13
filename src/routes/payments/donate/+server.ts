import Stripe from "stripe"
import { SECRET_STRIPE_KEY } from "$env/static/private"

const stripe = new Stripe(SECRET_STRIPE_KEY, {
  apiVersion: "2023-08-16",

})

export async function POST() {

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 10,
    currency: "usd",
    payment_method_types: ["card"],
  })




  return {
    body: { clientSecret: paymentIntent.client_secret}
  }
}
