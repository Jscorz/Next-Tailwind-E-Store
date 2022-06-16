import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
function Footer() {
	return (
		<footer class='bg-darkBlue2 text-slate-900'>
			<div class='container mx-auto pt-12 px-5 pb-10'>
				<div class='flex flex-col justify-between space-y-24 md:flex-row md:space-y-0'>
					<div class='mt-10 space-y-6'>
						<div class='flex items-center space-x-3 md:-mt-10'>
							<div class='w-6'>
								<AiOutlinePhone class='scale-10 text-2xl' />
							</div>
							<div>+1-533-489-3980</div>
						</div>

						<div class='flex items-center space-x-3'>
							<div class='w-6'>
								<MdOutlineMail class='scale-10 text-2xl' />
							</div>
							<div>example@shoesinstock.com</div>
						</div>
					</div>

					<div class='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
						<div class='flex flex-col space-y-3'>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								About
							</a>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Jobs
							</a>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Press
							</a>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Blog
							</a>
						</div>
						<div class='flex flex-col space-y-3'>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Contact Us
							</a>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Terms
							</a>
							<a
								href='#'
								class='transition duration-300 hover:text-cyan-500'
							>
								Privacy
							</a>
						</div>
					</div>

					<div class='flex justify-center pb-10 space-x-3'>
						<div className='w-10 h-20'>
							<a href='#'>
								<BsFacebook class='p-2 rounded-full ficon text-blue-900 w-10 h-10 ' />
							</a>
						</div>
						<div className='w-10 h-20'>
							<a href='#'>
								<BsTwitter class='p-2 rounded-full ficon text-blue-900 w-10 h-10 ' />
							</a>
						</div>
						<div className='w-10 h-20'>
							<a href='#'>
								<BsInstagram class='p-2  ficon w-10 h-10 text-blue-900' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
