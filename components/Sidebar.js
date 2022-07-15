import React from "react";
import Router from "next/router";
import links from "../constants/links";
import socialLinks from "../constants/social_links";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
			<button className='close-btn' type='button' onClick={toggleSidebar}>
				<FaTimes />
			</button>
			<div className='side-container'>
				<ul className={isOpen ? "sidebar-links" : null}>
					<li onClick={toggleSidebar}>
						<div onClick={() => Router.push("/")}>Home</div>
					</li>
					<li>
						<div onClick={() => Router.push("/about")}>About</div>
					</li>
					<li>
						<div onClick={() => Router.push("/products")}>Shop</div>
					</li>
					<li>
						<div onClick={() => Router.push("/contact")}>
							Contact
						</div>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
