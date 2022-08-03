import React from "react";
import Image from "next/image";
import modalImg from "../images/shoe-8.jpg";

const contact = () => {
	return (
		<div className='w-full  h-screen/90  relative z-0 mx-auto  overflow-hidden  '>
			<Image
				src={modalImg}
				alt=''
				layout='fill'
				placeholder='blur'
				priority
				className='object-cover z-0'
			/>
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 '></div>
			<div className='min-w-full flex flex-col z-10 absolute text-center top-1/4 '>
				<div className='w-10/12 mx-auto space-y-4 border border-white bg-slate-700 bg-opacity-50 rounded md:space-y-8 md:w-1/2 '>
					<h2 className='text-white text-2xl tracking-wide py-2 leading-loose md:pt-4 md:pb-2'>
						Contact Us
					</h2>

					<form className='grid grid-cols-1 gap-y-2 w-3/4 mx-auto md:grid-cols-2 md:gap-x-2 md:w-11/12 lg:w-full md:px-10'>
						<input
							type='text'
							placeholder='First Name'
							className='p-2 px-4 text-center text-zinc-800 bg-gray-200 border border-zinc-600  rounded placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none '
						/>
						<input
							type='text'
							placeholder='Last Name'
							className='p-2 px-4 text-center  text-zinc-800 bg-gray-200 border border-zinc-600 rounded placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none'
						/>
						<input
							type='text'
							placeholder='Your email address'
							className='p-2 px-4 text-center  text-zinc-800 bg-gray-200 border border-zinc-600 rounded placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none md:col-span-2'
						/>
						<input
							type='text'
							placeholder='Phone'
							className='p-2 px-4 text-center  text-zinc-800 bg-gray-200 border border-zinc-600 rounded placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none md:col-span-2'
						/>
						<button
							type='submit'
							className='px-5 py-3 mb-10 text-xs  text-zinc-800 rounded bg-mintGreen/75 hover:bg-cyan-600 hover:text-white duration-500 md:col-span-2'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default contact;
