import React from "react";
import Router from "next/router";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
function Footer() {
	return (
		<footer className='bg-zinc-900 text-white'>
			<div className='container mx-auto pt-12 px-5 pb-10'>
				<div className='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					<div className='mt-10 space-y-6'>
						<div className='flex items-center space-x-3 md:-mt-10'>
							<div className='w-6'>
								<AiOutlinePhone className='scale-10 text-2xl' />
							</div>
							<div>+1-533-489-3980</div>
						</div>

						<div className='flex items-center space-x-3'>
							<div className='w-6'>
								<MdOutlineMail className='scale-10 text-2xl' />
							</div>
							<div>productmanagement@shoesinstock.com</div>
						</div>
					</div>

					<div className='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
						<div className='flex flex-col space-y-3'>
							<a
								href='#'
								onClick={() => Router.push("/about")}
								className='transition duration-300 hover:text-teal-400'
							>
								About
							</a>
							<a
								href='#'
								className='transition duration-300 hover:text-teal-400'
							>
								Jobs
							</a>
							<a
								href='#'
								className='transition duration-300 hover:text-teal-400'
							>
								Press
							</a>
							<a
								href='#'
								className='transition duration-300 hover:text-teal-400'
							>
								Blog
							</a>
						</div>
						<div className='flex flex-col space-y-3'>
							<a
								href='#'
								onClick={() => Router.push("/contact")}
								className='transition duration-300 hover:text-teal-400'
							>
								Contact Us
							</a>
							<a
								href='#'
								className='transition duration-300 hover:text-teal-400'
							>
								Terms
							</a>
							<a
								href='#'
								className='transition duration-300 hover:text-teal-400'
							>
								Privacy
							</a>
						</div>
					</div>

					<div className='flex justify-center pb-10 space-x-3'>
						<div classNameName='w-10 h-20'>
							<a href='#'>
								<BsFacebook className='p-2 rounded-full ficon text-blue-700 w-10 h-10 ' />
							</a>
						</div>
						<div classNameName='w-10 h-20'>
							<a href='#'>
								<BsTwitter className='p-2 rounded-full ficon text-blue-700 w-10 h-10 ' />
							</a>
						</div>
						<div classNameName='w-10 h-20'>
							<a href='#'>
								<BsInstagram className='p-2  ficon w-10 h-10 text-blue-700' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
