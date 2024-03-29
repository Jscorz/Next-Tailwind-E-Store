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
		<div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6 lg:py-6'>
			<img
				src={product.product.images[0]}
				alt={product.product.id}
				style={{ maxHeight: "600px" }}
			/>
			<div>
				<div className='flex flex-col justify-between items-center pt-2  space-y-2 lg:items-start'>
					<h1 className=' py-3 pr-3 text-slate-800 font-light  capitalize text-xl lg:text-2xl'>
						{product.product.name}
					</h1>
					<form>
						<label className='text-slate-700'>
							Size
							<select className='px-3 py-1 ml-4 shadow'>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
								<option value='11'>11</option>
								<option value='12'>12</option>
								<option value='13'>13</option>
							</select>
						</label>
					</form>
					<p className='text-slate-700'>17 in stock</p>
					<p className='text-red-500'>${product.unit_amount / 100}</p>
				</div>
				<div className='max-w-full whitespace-normal text-jusitfy pb-4 font-light'>
					<p>{product.product.description}</p>
				</div>
				<hr />
				<button
					onClick={addToBasket(product)}
					className='w-full my-4 py-4 px-6 border border-solid shadow-md bg-mintGreen text-slate-700  border-slate-700 font-light transition duration-300 hover:bg-cyan-700 hover:text-white '
				>
					ADD TO BASKET
				</button>
			</div>
		</div>
	);
}

export default Description;
