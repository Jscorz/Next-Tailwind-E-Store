import React, { useState } from "react";
import Router from "next/router";
import { GiShoppingCart } from "react-icons/gi";

export default function PurchaseCard(props) {
	const { price } = props;
	const [numOfItems, setNumOfItems] = useState(1);

	const reduceCount = () => {
		if (numOfItems <= 0) {
			setNumOfItems(0);
		} else {
			setNumOfItems(numOfItems - 1);
		}
	};
	const addCount = () => {
		if (numOfItems >= 0) {
			setNumOfItems(numOfItems + 1);
		} else if ((numOfItems = 10)) {
			setNumOfItems(numOfItems);
		}
	};

	return (
		<div className='mx-auto w-full h-100 shadow-md border border-solid border-gray-100 transition  hover:shadow-xl bg-red-500 relative overflow-hidden'>
			{price.product.images && (
				<div className=''>
					<img
						src={price.product.images[0]}
						alt={price.product.name}
						className='w-full h-60 object-cover transition md:hover:scale-110 duration-200'
					/>
				</div>
			)}
			<div className='flex justify-between file:z-50 align-center'>
				<div
					className='px-2 text-xl  text-white font-semibold cursor-pointer border border-gray-400 text-center py-2 select-none hover:bg-red-600 hover:scale-105 transition duration-100'
					onClick={() => reduceCount()}
				>
					-
				</div>
				<div className='px-2 text-xl  text-white font-semibold border border-gray-400 py-2 select-none'>
					{numOfItems}
				</div>
				<div
					className='px-2 text-xl  text-white font-semibold cursor-pointer border border-gray-400 py-2 select-none hover:bg-red-600 hover:scale-105 transition duration-100'
					onClick={() => addCount()}
				>
					+
				</div>
				<div
					className='flex flex-1 text-2xl cursor-pointer text-white  border border-gray-400 py-2 pr-2 justify-center select-none hover:bg-red-600 hover:scale-105 transition duration-100'
					onClick={() => Router.push(`/${price.id}`)}
				>
					<GiShoppingCart className='justify-self-end' />
				</div>
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
