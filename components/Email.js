import React from "react";
import Image from "next/image";
import emailImg from "../images/shoe-10.jpg";

function Email() {
	return (
		<div className='w-full  h-screen/70  mt-16 md:h-screen/70 relative z-0 mx-auto  overflow-hidden  '>
			<Image
				src={emailImg}
				alt=''
				layout='fill'
				className='object-cover z-0'
			/>
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '></div>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/3'>
				<div className='w-30 space-y-4 md:space-y-8'>
					<h2 className='text-white text-2xl tracking-wide mb-9 leading-loose'>
						Daily Update Of Exclusive <br />
						Deals & New Shoes
					</h2>

					<form className='flex flex-col w-1/2 mx-auto lg:w-1/4 '>
						<input
							type='text'
							placeholder='Your email address'
							className='p-2 px-4 text-center text-zinc-700 bg-gray-200 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none'
						/>
						<button
							type='submit'
							className='px-5 py-3 text-xs  text-zinc-800 bg-mintGreen/75 hover:bg-cyan-600  hover:text-white transition duration-300'
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Email;
