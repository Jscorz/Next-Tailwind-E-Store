import Head from "next/head";
import Stripe from "stripe";

export async function getServerSideProps(context) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2020-08-27",
  });

  const res = await stripe.prices.list({
    limit: 10,
    expand: ["data.product"],
  });

  const prices = res.data.filter((price) => price.active);

  return {
    props: { prices },
  };
}

export default function Home({ prices }) {
  console.log(prices);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
}
