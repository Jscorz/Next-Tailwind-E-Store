import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout(props) {
	const { children } = props;
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='relative min-h-screen flex flex-col shrink-0'>
			<Header toggleSidebar={toggleSidebar} />
			<Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
			<div className='flex flex-col flex-1 w-full shrink-0'>
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
