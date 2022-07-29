import React, { useState } from "react";
import Router from "next/router";
import NextImage from "next/image";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { VscGitCompare } from "react-icons/vsc";
import { GrView } from "react-icons/gr";

export default function PurchaseCardTwo(props) {
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
		<div className='mx-auto w-full h-100 shadow-none transition md:hover:scale-102 duration-200  relative group lg:col-span-2 lg:row-span-1'>
			{price.product.images && (
				<div className=''>
					<img
						src={price.product.images[0]}
						alt={price.product.name}
						className='w-full h-48 object-cover '
					/>
				</div>
			)}
			<div className='flex justify-between file:z-50 align-center bg-red-500 opacity-90 '>
				<div
					className='px-2 text-xl  text-white font-semibold cursor-pointer border border-gray-400 text-center py-2 select-none hover:bg-red-600 hover:scale-102 transition duration-100'
					onClick={() => reduceCount()}
				>
					-
				</div>
				<div className='px-2 text-xl  text-white font-semibold border border-gray-400 py-2 select-none'>
					{numOfItems}
				</div>
				<div
					className='px-2 text-xl  text-white font-semibold cursor-pointer border border-gray-400 py-2 select-none hover:bg-red-600 hover:scale-102 transition duration-100'
					onClick={() => addCount()}
				>
					+
				</div>
				<div
					className='flex flex-1 text-2xl cursor-pointer text-white  border border-gray-400 py-2 pr-2 justify-center select-none hover:bg-red-600 hover:scale-102 transition duration-100'
					onClick={() => Router.push(`/${price.id}`)}
				>
					<GiShoppingCart className='justify-self-end' />
				</div>
			</div>
			{/* Here */}
			<h1 className='text-slate-700 text-md text-left pt-2 pb-1 font-light tracking-wide'>
				{price.product.name}
			</h1>
			<p className='text-left text-red-600 text-md font-light'>
				${price.unit_amount / 100}
			</p>

			<div className='absolute top-5 right-5 max-h-28 w-8 bg-gray-100 opacity-60 hidden group-hover:block transition duration-300'>
				<div className='flex flex-col items-center justify-between'>
					<div className='pb-3 pt-1 hover:scale-105'>
						<AiOutlineHeart className='h-6 w-6' />
					</div>
					<div className='pb-3 hover:scale-105'>
						<VscGitCompare className='h-6 w-6' />
					</div>
					<div className='pb-1 hover:scale-110'>
						<GrView className='h-6 w-6' />
					</div>
				</div>
			</div>
		</div>
	);
}
