import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
	const { children } = props;
	return (
		<div className='relative min-h-screen flex flex-col '>
			<Header />
			<Hero />
			<div className='flex flex-col flex-1'>
				<main className='flex-1 py-5 sm:max-w-2/3 mx-auto flex-wrap '>
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
