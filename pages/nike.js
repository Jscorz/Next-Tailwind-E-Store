import React, { useEffect } from "react";
import Stripe from "stripe";
import { useAppContext } from "../context/CardContext";
import NikePurchaseCard from "../components/NikePurchaseCard";
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

const NikeProducts = ({ prices }) => {
	const { state, dispatch } = useAppContext();

	const nikePrices = Object.values(prices).filter((item) => {
		return item.product.metadata["Brand"] === "Nike";
	});

	useEffect(() => {
		dispatch({
			type: "set_prices",
			value: prices,
		});
	}, [prices]);

	return (
		<div className='border-b-2 border-zinc-700 pb-24 relative'>
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
				<div className='absolute bottom-44 left-40 right-0 bg-cyan-600/50 h-[115%] w-1/2 translate-y-96 -z-20 rotate-45'></div>
				{nikePrices.map((price, index) => {
					return (
						<NikePurchaseCard
							key={index}
							price={price}
						></NikePurchaseCard>
					);
				})}
			</div>
			<div className='w-full flex items-center mt-16'>
				<button
					onClick={() => Router.push("/")}
					className='border border-slate-900 bg-mintGreen/75 opacity-90 text-slate-800  py-2 px-7 uppercase mx-auto rounded-md transition duration-300 hover:bg-mintGreen/25 hover:text-slate-900 select-none'
				>
					back to all brands
				</button>
			</div>
		</div>
	);
};

export default NikeProducts;
