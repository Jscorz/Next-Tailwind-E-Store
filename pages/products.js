import React, { useState, useEffect } from "react";
import Stripe from "stripe";
import { useAppContext } from "../context/CardContext";
import PurchaseCard from "../components/PurchaseCard";
import ProductsBanner from "../components/ProductsBanner";
import Router from "next/router";

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

const Products = ({ prices }) => {
	const { state, dispatch } = useAppContext();
	const [index, setIndex] = useState(true);
	// const featuredPrices = prices.slice(2, 6);

	useEffect(() => {
		dispatch({
			type: "set_prices",
			value: prices,
		});
	}, [prices]);

	return (
		<div className='border-b-2 border-zinc-700 pb-24'>
			<title>Shoe-In-Stock</title>
			<meta name='description' content='Generated by create next app' />
			<meta
				content='width=device-width, initial-scale=1'
				name='viewport'
			/>
			<link rel='icon' href='/favicon.ico' />

			<ProductsBanner />
			<div className='w-10/12 flex justify-center items-center space-x-4 py-14 mx-auto lg:justify-between '>
				<h1 className=' pl-4 text-lg text-slate-900 font-semibold tracking-wider whitespace-nowrap md:text-2xl md:pl-0 lg:text-3xl'>
					Save up to 60% off
				</h1>
				<div>
					<h2 className='mr-4 text-xs uppercase md:whitespace-nowrap md:text-lg md:mr-0'>
						Login and use code save60 at checkout
					</h2>
					<div className='bg-slate-900 h-0.5 w-11/12 md:w-full'></div>
				</div>
			</div>
			<div className='w-10/12 mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 lg:grid-cols-8 lg:grid-rows-2 '>
				{prices.map((price, index) => {
					return (
						<PurchaseCard key={index} price={price}></PurchaseCard>
					);
				})}
			</div>
			<div className='w-full flex items-center mt-16'>
				<button
					onClick={() => Router.push("/")}
					className='border border-slate-900 bg-zinc-200 text-slate-800  py-2 px-7 uppercase mx-auto rounded-sm transition duration-300 hover:bg-white hover:text-slate-900 select-none'
				>
					back to home
				</button>
			</div>
		</div>
	);
};

export default Products;
