import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
	const { children } = props;
	return (
		<div className='relative min-h-screen flex flex-col '>
			<Header />

			<div className='flex flex-col flex-1'>
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
