import React from "react";
import Image from "next/image";
import drMartensLogo from "../images/drmartens-logo.jpg";
import vansLogo from "../images/vans-logo.jpg";
import nikeLogo from "../images/nike-logo.jpg";
import adidasLogo from "../images/adidas-logo.jpg";
import converseLogo from "../images/converse-logo.jpg";

const BrandBanner = () => {
	return (
		<section className='bg-cyan-500 h-[60rem] relative'>
			<h1 className='text-white uppercase text-2xl text-center  font-bold tracking-wider py-5 md:text-5xl md:py-4'>
				Shop By Brand
			</h1>
			<div className=' h-3/4 w-11/12 mx-auto pt-10 text-black z-30 relative grid grid-cols-12 grid-rows-6 gap-5'>
				<div className='border-2  border-slate-700 bg-gray-300 col-start-1 col-end-7 row-start-1 row-span-6  overflow-hidden rounded-md relative group  md:col-end-6 md:row-start-1 md:row-span-6'>
					<button className='hidden top-0 bottom-0 right-0 left-0 w-full bg-gradient-to-t from-transparent to-white group-hover:absolute group-hover:block z-50 relative '>
						<h1 className='text-center text-2xl uppercase  text-bolder py-8 tracking-wider md:text-3xl'>
							Dr. Martens
						</h1>
					</button>
					<Image
						src={drMartensLogo}
						alt=''
						layout='fill'
						placeholder='blur'
						priority
						className='object-cover z-0'
					/>
				</div>
				<div className='border-2  border-slate-700 bg-gray-300 col-start-7 col-end-13 row-start-1 row-end-3 overflow-hidden rounded-md relative group md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-5'>
					<button className='hidden top-0 bottom-0 right-0 left-0 w-full bg-gradient-to-t from-transparent to-white group-hover:absolute group-hover:block z-50 text-center uppercase text-2xl text-bolder py-8 tracking-wider md:text-3xl'>
						Vans
					</button>
					<Image
						src={vansLogo}
						alt=''
						layout='fill'
						placeholder='blur'
						priority
						className='object-cover z-0'
					/>
				</div>
				<div className='border-2  border-slate-700 bg-gray-300 col-start-7 col-end-13  row-start-3 row-end-4 overflow-hidden rounded-md  relative group md:col-start-6 md:col-end-9  md:row-start-5 md:row-end-7'>
					<button className='hidden top-0 bottom-0 right-0 left-0 w-full bg-gradient-to-t from-transparent to-white group-hover:absolute group-hover:block z-50 text-center uppercase text-2xl text-bolder py-8 tracking-wider md:text-3xl'>
						Converse All Star
					</button>
					<Image
						src={converseLogo}
						alt=''
						layout='fill'
						placeholder='blur'
						priority
						className='object-cover z-0'
					/>
				</div>
				<div className='border-2  border-slate-700 bg-gray-300 col-start-7 col-end-13 row-start-4 row-end-6 overflow-hidden rounded-md  relative group md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-4'>
					<button className='hidden top-0 bottom-0 right-0 left-0 w-full bg-gradient-to-t from-transparent to-white group-hover:absolute group-hover:block z-50 text-center uppercase text-2xl text-bolder py-8 tracking-wider md:text-3xl'>
						Adidas
					</button>
					<Image
						src={adidasLogo}
						alt=''
						layout='fill'
						placeholder='blur'
						priority
						className='object-cover z-0'
					/>
				</div>
				<div className='border-2  border-slate-700 bg-gray-300 col-start-7 col-end-13 row-start-6 row-end-7 overflow-hidden rounded-md  relative group md:col-start-9 md:col-end-13 md:row-start-4 md:row-end-7'>
					<button className='hidden top-0 bottom-0 right-0 left-0 w-full bg-gradient-to-t from-transparent to-white group-hover:absolute group-hover:block z-50 text-center uppercase text-2xl text-bolder py-8 tracking-wider md:text-3xl'>
						Nike
					</button>
					<Image
						src={nikeLogo}
						alt=''
						layout='fill'
						placeholder='blur'
						priority
						className='object-cover z-0'
					/>
				</div>
			</div>
			<div className='bg-gray-200 h-1/2 w-full absolute top-20 z-0'></div>
		</section>
	);
};

export default BrandBanner;
