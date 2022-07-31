import React, { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import heroImg from "../images/shoe-17.jpg";

function BannerThree() {
	return (
		<div className='w-full  h-96 mt-10  md:h-screen/70 relative z-0 mx-auto  overflow-hidden col-span-2 md:col-span-4 lg:row-span-2 '>
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
						Sale up to 60% Off
					</h2>
					<h1 className='uppercase text-2xl text-white font-semibold tracking-wide md:text-5xl'>
						MEGA SUMMER SALE
					</h1>
					<h1 className='absolute -inset-0 uppercase hidden text-7xl text-white opacity-10 font-semibold tracking-wide whitespace-nowrap -z-50 md:block lg:tracking-wider lg:text-9xl'>
						MEGA SUMMER SALE
					</h1>

					<button
						className=' m-1 shadow bg-transparent text-white font-light text-sm uppercase tracking-wider py-3 px-6 transition duration-300   select-none relative before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0 before:border-t before:border-l before:border-white after:absolute after:w-2/3 after:h-2/3 after:bottom-0 after:right-0 after:border-b after:border-r after:border-white hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full before:duration-300 after:duration-300'
						onClick={() => Router.push("/products")}
					>
						go to products
					</button>
				</div>
			</div>
		</div>
	);
}

export default BannerThree;
