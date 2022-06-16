import React from "react";
import Router from "next/router";

export default function PurchaseCard(props) {
	const { price } = props;

	return (
		<div
			onClick={() => Router.push(`/${price.id}`)}
			className='mx-auto w-full h-100 shadow-md border border-solid border-gray-100 cursor-pointer transition hover:opacity-50 hover:shadow-lg bg-cyan-500 relative overflow-hidden'
		>
			{price.product.images && (
				<div className=''>
					<img
						src={price.product.images[0]}
						alt={price.product.name}
						className='w-full h-60 object-cover md:hover:scale-110 duration-200'
					/>
				</div>
			)}
			<div className='flex'>
				<div>-</div>
				<div>1</div>
				<div>+</div>
				<div></div>
			</div>
			{/* <h1 className='text-white text-sm text-center pt-6 pb-3 font-light tracking-wide'>
				{price.product.name}
			</h1> */}
			{/* <p className='text-center text-sm pb-2 font-extralight'>
				${price.unit_amount / 100}
			</p> */}
		</div>
	);
}
