import React from "react";
import { useAppContext } from "../../context/CardContext";

export async function getServerSideProps(context) {
	const { params } = context;
	return {
		props: { id: params.id },
	};
}

function Description(props) {
	const { id: path } = props;
	const { state: { prices } = [], dispatch } = useAppContext();
	const product = prices.filter((val) => val.id === path.replace("/", ""))[0];

	function addToBasket(prod) {
		return () => {
			dispatch({
				type: "add_product",
				value: prod.id,
			});
		};
	}

	if (!product) {
		return <div>no product</div>;
	}
	return (
		<div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6'>
			<img
				src={product.product.images[0]}
				alt={product.product.id}
				style={{ maxHeight: "600px" }}
			/>
			<div className=''>
				<div className='flex justify-between items-center pb-8'>
					<h1 className='text-sm py-3 font-light tracking-wide capitalize text-2xl lg:text-3xl'>
						{product.product.name}
					</h1>
					<p>${product.unit_amount / 100}</p>
				</div>
				<div className='max-w-full whitespace-normal text-jusitfy pb-4 font-light'>
					<p>{product.product.description}</p>
				</div>
				<hr />
				<button
					onClick={addToBasket(product)}
					className='w-full my-4 py-4 border border-solid border-gray-100 shadow bg-slate-100 text-slate-700 font-light transition duration-300 hover:opacity-50'
				>
					ADD TO BASKET
				</button>
			</div>
		</div>
	);
}

export default Description;
