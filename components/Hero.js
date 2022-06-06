import React from "react";
import Image from "next/image";
import heroImg from "../images/shoe-3.jpg";
function Hero() {
	return (
		<div className='w-full h-96 relative'>
			<Image
				src={heroImg}
				alt=''
				layout='fill'
				className='object-cover z-0'
			/>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/3'>
				<div className='w-30 space-y-4'>
					<h2 className='text-white '>Sale up to 50% Off</h2>
					<h1 className='uppercase text-xl text-white'>Black Nike</h1>

					<button className=' m-1 shadow bg-black text-white font-light text-sm py-2 px-5 transition duration-300 hover:opacity-50 select-none'>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
