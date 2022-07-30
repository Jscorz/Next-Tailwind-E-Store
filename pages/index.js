import React, { useState, useEffect } from "react";
import Stripe from "stripe";
import Head from "next/head";
import Hero from "../components/Hero";
import PurchaseCard from "../components/PurchaseCard";
import PurchaseCardTwo from "../components/PurchaseCardTwo";
import Email from "../components/Email";
import { useAppContext } from "../context/CardContext";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";

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
	const featuredPrices = prices.slice(0, 4);
	const secondFeaturedPrices = prices.slice(4, 10);

	useEffect(() => {
		dispatch({
			type: "set_prices",
			value: prices,
		});
	}, [prices]);

	return (
		<div className='pb-10'>
			<Head>
				<title>Shoe-In-Stock</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					content='width=device-width, initial-scale=1'
					name='viewport'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Hero />
			<div className='flex justify-center items-center space-x-4 py-14 px-5 lg:justify-between lg:px-16'>
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
			<div className='w-11/12 mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-8 lg:grid-rows-2 '>
				<Banner />
				{featuredPrices.map((price, index) => {
					return (
						<PurchaseCard key={index} price={price}></PurchaseCard>
					);
				})}
			</div>
			{/* Email / Subscribe */}
			<Email />
			<div className='flex justify-center items-center space-x-4 py-14 px-5 lg:justify-between lg:px-16'>
				<h1 className='text-lg text-slate-900 font-semibold tracking-wider whitespace-nowrap md:text-2xl lg:text-3xl'>
					Featured Products
				</h1>
				<div>
					<h2 className='text-sm uppercase whitespace-nowrap md:text-xl lg:text-2xl'>
						View All Products
					</h2>
					<div className='bg-slate-900 h-0.5 w-full'></div>
				</div>
			</div>
			<div className='w-11/12 mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-8 lg:grid-rows-2 '>
				<BannerTwo />
				{secondFeaturedPrices.map((price, index) => {
					return (
						<PurchaseCardTwo
							key={index}
							price={price}
						></PurchaseCardTwo>
					);
				})}
			</div>
		</div>
	);
}
