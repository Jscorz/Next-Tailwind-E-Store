import React from "react";
import Router from "next/router";
import { useAppContext } from "../context/CardContext";
import { GiShoppingCart } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import logo from "../images/ShoesInStock.png";

function Header({ toggleSidebar }) {
	const { state, dispatch } = useAppContext();
	const [displayCheckout, setDisplayCheckout] = React.useState(false);
	const modalRef = React.useRef();

	async function checkout() {
		const lineItems = Object.keys(state.products).map((id) => {
			return {
				price: id,
				quantity: state.products[id],
			};
		});

		const res = await fetch("api/checkout", {
			method: "POST",
			body: JSON.stringify({ lineItems }),
		});
		const data = await res.json();
		Router.push(data.session.url);
	}
	function increment(id, count) {
		return () =>
			dispatch({
				type: "vary_count",
				value: [id, count + 1],
			});
	}
	function decrement(id, count) {
		if (count - 1 > 0) {
			return () =>
				dispatch({
					type: "vary_count",
					value: [id, count - 1],
				});
		}
		return () =>
			dispatch({
				type: "remove_product",
				value: id,
			});
	}

	return (
		<div className=' shadow-lg py-2  flex sticky top-0 justify-center items-center bg-white z-50 lg:px-4'>
			{displayCheckout && (
				<div
					ref={modalRef}
					className='absolute bg-white shadow border border-gray-200 border-solid z-20 top-0 h-screen w-screen sm:w-80 right-0 flex flex-col gap-2 px-2'
				>
					<div className='overflow-auto flex-1'>
						<div className='flex justify-between items-center'>
							<h1 className='text-4xl py-4 pl-4'>CART</h1>
							<div
								className='ml-auto w-fit p-2 cursor-pointer select-none transition duration-300 opacity-60 hover:text-red-700 text-lg'
								onClick={() => setDisplayCheckout(false)}
							>
								╳
							</div>
						</div>
						<hr className='py-2' />
						{Object.keys(state.products).map((productId, index) => {
							const prod = state.products[productId];
							const product = state.prices.find(
								(val) => val.id === productId
							);

							return (
								<div
									key={index}
									className='border-l border-solid border-gray-100 text-xs  p-2 flex flex-col gap-3'
								>
									<div className='flex items-center justify-between'>
										<p className='truncate'>
											{product.product.name}
										</p>
										<p>${product.unit_amount / 100}</p>
									</div>
									<div className='font-extralight flex justify-between items-center'>
										<div>
											<h1 className='flex justify-between items-center'>
												QUANTITY:{" "}
												<span className='pl-4 border border-solid py-1 pr-6 border-gray-400 ml-3 relative'>
													{state.products[productId]}
													<div className='absolute top-0 right-0 h-full w-3 flex flex-col '>
														<div
															className='leading-none scale-75 cursor-pointer'
															onClick={increment(
																productId,
																state.products[
																	productId
																]
															)}
														>
															<i className='fa-solid fa-chevron-up'></i>
														</div>
														<div
															className='leading-none scale-75 cursor-pointer'
															onClick={decrement(
																productId,
																state.products[
																	productId
																]
															)}
														>
															<i className='fa-solid fa-chevron-down'></i>
														</div>
													</div>
												</span>
											</h1>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<button
						onClick={checkout}
						className=' m-1 shadow bg-mintGreen text-slate-700 font-light text-sm py-2 transition duration-300 border border-slate-700 hover:bg-cyan-600 hover:text-white select-none'
					>
						CHECKOUT
					</button>
				</div>
			)}

			<div className='flex-1 pt-1 pl-10 cursor-pointer select-none transition hover:opacity-50 duration-300 -z-20'>
				<Image src={logo} alt='' onClick={() => Router.push("/")} />
			</div>

			<div className='flex justify-between space-x-10 lg:space-x-16'>
				<h1
					onClick={() => Router.push("/products")}
					className='hidden relative overflow-hidden cursor-pointer text-lg select-none transition duration-300  hover:text-cyan-400 md:block  after:h-[1px] after:w-full after:bottom-0 after:right-full after:bg-cyan-400 after:absolute hover:after:translate-x-full after:duration-300 '
				>
					Shop
				</h1>
				<h1
					onClick={() => Router.push("/products")}
					className='hidden relative overflow-hidden cursor-pointer text-lg select-none transition duration-300  hover:text-cyan-400 md:block  after:h-[1px] after:w-full after:bottom-0 after:right-full after:bg-cyan-400 after:absolute hover:after:translate-x-full after:duration-300 '
				>
					Products
				</h1>
				<h1
					onClick={() => Router.push("/about")}
					className='hidden relative overflow-hidden cursor-pointer text-lg select-none transition duration-300  hover:text-cyan-400 md:block  after:h-[1px] after:w-full after:bottom-0 after:right-full after:bg-cyan-400 after:absolute hover:after:translate-x-full after:duration-300  '
				>
					About
				</h1>
				<h1
					onClick={() => Router.push("/contact")}
					className='hidden relative overflow-hidden cursor-pointer text-lg select-none transition duration-300  hover:text-cyan-400 md:block  after:h-[1px] after:w-full after:bottom-0 after:right-full after:bg-cyan-400 after:absolute hover:after:translate-x-full after:duration-300  '
				>
					Contact
				</h1>
			</div>
			{/* <div className='flex'>
				<AiOutlineHeart
					className='hidden 
					text-pink-500
					pl-6
					py-2
					h-14
					w-14
					mr-4
					transition
					hover:text-pink-600
					hover:translate-y-0.5
					duration-300
					cursor-pointer md:block
					'
				/>
			</div> */}
			{/* <div className='hidden  items-center justify-center border border-gray-700 text-sm text-gray-900 rounded-full h-6 w-6 text-center -ml-3 select-none md:flex '>
				0
			</div> */}
			<button onClick={() => Router.push("/")}>
				{displayCheckout === false && (
					<FaHome className='text-cyan-500  pl-7 py-2 w-14 h-14 mr-2 transition duration-100  hover:scale-105' />
				)}
			</button>
			<button onClick={() => setDisplayCheckout(!displayCheckout)}>
				{displayCheckout === false && (
					<GiShoppingCart className='text-slate-600 pr-0.5 pl-6 py-1 w-14 h-14 mr-4 transition duration-100  hover:scale-105' />
				)}
			</button>
			<div className='flex items-center justify-center border border-gray-700 text-sm text-gray-900 rounded-full h-6 w-6 text-center -ml-4 mr-7  select-none'>
				<div>{Object.keys(state.products).length}</div>
			</div>
			<button
				type='button'
				className='border-2 border-cyan-500 flex items-center justify-center p-2 rounded-full text-xl text-cyan-500 mr-7 transition duration-300 cursor-pointer md:hidden'
				onClick={toggleSidebar}
			>
				<GiHamburgerMenu />
			</button>
		</div>
	);
}

export default Header;
