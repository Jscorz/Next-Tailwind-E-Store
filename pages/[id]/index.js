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

  return (
    <div className='mx-auto w-fit flex flex-wrap justify-center md:gap-6'>
      <img
        src={product.product.images[0]}
        alt={product.product.id}
        style={{ maxHeight: "600px" }}
      />
      <button onClick={addToBasket(product)}>ADD TO BASKET</button>
    </div>
  );
}

export default Description;
