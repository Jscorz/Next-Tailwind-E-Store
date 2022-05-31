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
      <div className='min-w-min max-w-min whitespace-nowrap'>
        <h1 className='text-sm py-3 font-light tracking-wide text-xl lg:text-3xl'>
          {product.product.name}
        </h1>
        <div className='max-w-full whitespace-normal text-jusitfy pb-4 font-light'>
          <p>{product.product.description}</p>
        </div>
      </div>
      <button onClick={addToBasket(product)}>ADD TO BASKET</button>
    </div>
  );
}

export default Description;
