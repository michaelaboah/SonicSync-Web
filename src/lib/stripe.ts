import Stripe from "stripe"


import.meta.env.VITE_API


export const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",

})
