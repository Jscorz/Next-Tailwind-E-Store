import React, { useState, useEffect } from "react";
import Stripe from "stripe";
import Head from "next/head";
import Hero from "../components/Hero";
import PurchaseCard from "../components/PurchaseCard";
import { useAppContext } from "../context/CardContext";
import HeroTwo from "../components/HeroTwo";

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
	const { state, dispatch } = useAppContext();
	const [index, setIndex] = useState(true);

	useEffect(() => {
		dispatch({
			type: "set_prices",
			value: prices,
		});
	}, [prices]);

	return (
		<div>
			<Head>
				<title>Shoe-Commerce</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<div className='flex justify-center items-center space-x-4 py-14 px-5'>
				<h1 className='text-lg text-slate-900 font-semibold tracking-wider whitespace-nowrap md:text-2xl lg:text-3xl'>
					Handpicked Items
				</h1>
				<div>
					<h2 className='text-sm uppercase whitespace-nowrap md:text-xl lg:text-2xl'>
						View All Products
					</h2>
					<div className='bg-slate-900 h-0.5 w-full'></div>
				</div>
			</div>
			<HeroTwo />
			<div className='flex flex-col space-y-4 md:flex-row md:space-y-2 md:space-x-5 lg:space-x-20'>
				{prices.map((price, index) => {
					return (
						<PurchaseCard key={index} price={price}></PurchaseCard>
					);
				})}
			</div>
		</div>
	);
}
