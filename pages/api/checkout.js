// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "POST method required" });
  }
  const body = JSON.parse(req.body);

  if (body.lineItems.length === 0) {
    return res
      .status(405)
      .json({ message: "Please select items for checkout" });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2020-08-27",
    });
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "payment",
    });

    res.status(201).json({ session });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
