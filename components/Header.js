import React from "react";
import Router from "next/router";
import { useAppContext } from "../context/CardContext";

function Header() {
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
		// const lineItems = [
		//   {
		//     price: prices[0].id,
		//     quantity: 1,
		//   },
		// ];
		const res = await fetch("api/checkout", {
			method: "POST",
			body: JSON.stringify({ lineItems }),
		});
		const data = await res.json();
		console.log(data);
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
		<div className='shadow-lg py-8 flex sticky top-0 justify-center items-center bg-white z-50'>
			{displayCheckout && (
				<div
					ref={modalRef}
					className='absolute bg-white shadow border border-gray-200 border-solid z-0 top-0 h-screen w-screen sm:w-80 right-0 flex flex-col gap-2 px-2'
				>
					<div className='overflow-auto flex-1'>
						<div className='flex justify-between items-center'>
							<h1 className='text-4xl py-4'>CART</h1>
							<div
								className='ml-auto w-fit p-2 cursor-pointer select-none transition duration-300 opacity-50'
								onClick={() => setDisplayCheckout(false)}
							>
								╳
							</div>
						</div>
						<hr className='py-2' />
						{Object.keys(state.products).map((productId, index) => {
							console.log(product);
							const prod = state.products[productId];
							const product = state.prices.find(
								(val) => val.id === productId
							);
							console.log(product);
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
						className=' m-1 shadow bg-black text-white font-light text-sm py-2 transition duration-300 hover:opacity-50 select-none'
					>
						CHECKOUT
					</button>
				</div>
			)}
			<h1
				onClick={() => Router.push("/")}
				className=' flex-1 text-left  pl-7 cursor-pointer select-none transition hover:opacity-50 duration-300'
			>
				Your next e-commerce
			</h1>
			<div className='flex justify-between space-x-10'>
				<h1 className='hidden cursor-pointer select-none transition hover:opacity-50 duration-300 md:block '>
					Shop
				</h1>
				<h1 className='hidden cursor-pointer select-none transition hover:opacity-50 duration-300 md:block '>
					Products
				</h1>
				<h1 className='hidden cursor-pointer select-none transition hover:opacity-50 duration-300 md:block '>
					About
				</h1>
				<h1 className='hidden cursor-pointer select-none transition hover:opacity-50 duration-300 md:block '>
					Contact
				</h1>
			</div>
			<div className='flex'>
				<i class='fa-solid fa-heart text-pink-500  pl-6 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300 cursor-pointer'></i>
			</div>
			<div className='flex align-center justify-center border border-gray-700 text-gray-900 rounded-full h-7 w-7 text-center -ml-3'>
				0
			</div>
			<div onClick={() => setDisplayCheckout(!displayCheckout)}>
				<i className='fa-solid fa-bag-shopping text-gray-800 pr-0.5 pl-6 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300 cursor-pointer'></i>
			</div>
			<div className='flex align-center justify-center border border-gray-700 text-gray-900 rounded-full h-7 w-7 text-center -ml-3 mr-7'>
				0
			</div>
		</div>
	);
}

export default Header;
