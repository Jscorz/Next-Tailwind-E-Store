import React from "react";
import Image from "next/image";
import heroImg from "../images/shoe-15.jpg";

function AboutBanner() {
	return (
		<div className='w-full  h-screen   relative z-0 mx-auto  overflow-hidden col-span-2 md:col-span-4 lg:row-span-2'>
			<Image
				src={heroImg}
				alt=''
				layout='fill'
				className='object-cover z-0'
			/>
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900'></div>
			<div className='min-w-full flex flex-col z-10 absolute text-center mt-20'>
				<div className='w-30 space-y-4 md:space-y-8'>
					<h1 className='uppercase text-4xl text-white font-semibold tracking-wide md:text-5xl'>
						Our Story
					</h1>
					<h1 className='absolute -inset-0 uppercase hidden text-7xl text-white opacity-10 font-semibold tracking-wide whitespace-nowrap -z-50 md:block lg:tracking-wider lg:text-9xl'>
						Our Story
					</h1>

					<article className=' absolute  top-16 mx-20  bg-transparent text-white border border-white font-light text-sm  tracking-wider p-6 transition duration-300 hover:bg-white hover:bg-opacity-50 hover:text-slate-900 select-none md:top-32 lg:mx-96'>
						We need to future-proof this win-win-win. Great plan!
						Let me diarize this, and we can synchronize ourselves at
						a later timeframe, for strategic staircase wiggle room.
						Idea shower: what&apos;s our go to market strategy?
						Table the discussion; I just wanted to give you a
						heads-up, and run it up the flag pole for a performance
						review. It&apos;s a simple lift and shift job.
						Throughput criticality, pre-think our game-plan. So if
						you could do that, that would be great for critical
						mass. Pull in ten extra bodies to help roll the
						tortoise, a loss a day will keep you focused, then loop
						back. Back-end of third quarter, meeting assassins get
						buy-in to close the loop. When does this sun set?
					</article>
				</div>
			</div>
		</div>
	);
}

export default AboutBanner;
