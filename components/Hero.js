import React, { useState, useEffect } from "react";
import Router from "next/router";
import Image from "next/image";
import heroImg from "../images/shoe-9.jpg";

function Hero() {
	let [index, setIndex] = useState();

	return (
		<div className='w-full h-screen/90 relative z-0 overflow-hidden'>
			<Image
				src={heroImg}
				alt=''
				layout='fill'
				placeholder='blur'
				priority
				className='object-cover z-0 '
			/>
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '></div>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/3'>
				<div className='w-30 space-y-8'>
					<h2 className='text-white text-xl tracking-wide '>
						Sale up to 50% Off
					</h2>
					<h1 className='uppercase text-2xl text-white font-semibold tracking-wide md:text-5xl'>
						Black / Orange Nike
					</h1>
					<h1 className='absolute -inset-0 uppercase hidden text-7xl text-white opacity-10 font-semibold tracking-wide whitespace-nowrap -z-50 md:block lg:tracking-wider lg:text-9xl'>
						Black / Orange Nike
					</h1>

					<button
						onClick={() => Router.push("/products")}
						className=' m-1 shadow bg-slate-800 bg-opacity-70 text-white font-light text-sm uppercase tracking-wider py-3 px-6 transition duration-300 hover:scale-95 select-none relative before:absolute before:w-2/3 before:h-2/3 before:top-0 before:left-0 before:border-t before:border-l before:border-red-600 after:absolute after:w-2/3 after:h-2/3 after:bottom-0 after:right-0 after:border-b after:border-r after:border-red-600 hover:after:w-full hover:after:h-full hover:before:w-full hover:before:h-full before:duration-300 after:duration-300'
					>
						Start Shopping
					</button>
				</div>
			</div>

			<div className='absolute bottom-12 right-10'>
				<div>
					<button
						onClick={() => Router.push("/contact")}
						className='m-1 shadow bg-white text-blackfont-light rounded-full text-sm uppercase tracking-wider py-5 px-6 transition duration-300 hover:bg-transparent hover:text-white hover: border hover:border-white select-none'
					>
						Chat with us!
					</button>
					<div className='absolute bottom-11 right-1 flex items-center justify-center border border-gray-700 text-sm bg-red-700 text-white rounded-full h-6 w-6 text-center'>
						1
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
