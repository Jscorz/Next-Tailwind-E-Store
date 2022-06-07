import React, { useState, useEffect } from "react";
import Image from "next/image";
import heroImg2 from "../images/shoe-2.jpg";

function HeroTwo() {
	let [index, setIndex] = useState();

	return (
		<div className='w-full h-screen/70 relative z-0 overflow-hidden'>
			<Image
				src={heroImg2}
				alt=''
				layout='fill'
				className='object-cover z-0'
			/>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/3'>
				<div className='w-30 space-y-8'>
					<h2 className='text-white '>Sale up to 50% Off</h2>
					<h1 className='uppercase text-3xl text-white text-bold tracking-widest'>
						Blue / Black Nike
					</h1>

					<button className=' m-1 shadow bg-black text-white font-light text-sm py-2 px-5 transition duration-300 hover:opacity-50 select-none'>
						Start Shopping
					</button>
				</div>
			</div>
			<button className='absolute z-10 bg-white text-black text-lg bottom-[55%] left-10'>
				<i className='fa-solid fa-angle-left'></i>
			</button>
			<button className='absolute z-10 bg-white text-black text-lg bottom-[55%] right-10'>
				<i className='fa-solid fa-angle-right'></i>
			</button>
		</div>
	);
}

export default HeroTwo;
