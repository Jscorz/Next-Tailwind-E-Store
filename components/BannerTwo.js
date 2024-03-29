import React, { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import heroImg from "../images/shoe-11.jpg";

function BannerTwo() {
	return (
		<div className='w-full  h-96  md:h-screen/70 relative z-0 mx-auto  rounded-md overflow-hidden col-span-2 md:col-span-4 lg:row-span-2  lg:col-span-6'>
			<Image
				src={heroImg}
				alt=''
				layout='fill'
				placeholder='blur'
				priority
				className='object-cover z-0'
			/>
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '></div>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/3'>
				<div className='w-30 space-y-4 md:space-y-8'>
					<h2 className='text-white text-xl tracking-wide '>
						Sale up to 50% Off
					</h2>
					<h1 className='uppercase text-2xl text-white font-semibold tracking-wide md:text-5xl'>
						On Sale
					</h1>
					<h1 className='absolute -inset-0 uppercase hidden text-7xl text-white opacity-10 font-semibold tracking-wide whitespace-nowrap -z-50 md:block lg:tracking-wider lg:text-9xl'>
						On Sale
					</h1>

					<button
						className=' m-1 shadow-lg bg-mintGreen/75 text-slate-800 font-light text-sm uppercase tracking-wider py-3 px-6 transition duration-200 rounded-md hover:bg-mintGreen/50 select-none'
						onClick={() => Router.push("/products")}
					>
						See Products
					</button>
				</div>
			</div>
		</div>
	);
}

export default BannerTwo;
