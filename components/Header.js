import React from "react";
import Router from "next/router";
import { useAppContext } from "../context/CardContext";

function Header() {
  const { state, dispatch } = useAppContext();
  const [displayCheckout, setDisplayCheckout] = React.useState(false);
  const modalRef = React.useRef();
  console.log(state.products);

  async function checkout() {
    const lineItems = [
      {
        price: prices[0].id,
        quantity: 1,
      },
    ];
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
    return () =>
      dispatch({
        type: "vary_count",
        value: [id, count - 1],
      });
  }

  return (
    <div className='shadow-lg py-8 flex sticky top-0 justify-center items-center bg-white'>
      {displayCheckout && (
        <div
          ref={modalRef}
          className='absolute bg-white shadow border border-gray-200 border-solid z-50 top-0 h-screen w-screen sm:w-80 right-0 flex flex-col gap-2 px-2'
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
            {Object.keys(
              state.products.map((productId, index) => {
                console.log(product);
                const prod = state.products[productId];
                const product = state.prices.find(
                  (val) => val.id === productId
                );
                console.log(product);
                return <div key={index} className='h2 w-2 bg-green-200'></div>;
              })
            )}
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
        className=' flex-1 text-center cursor-pointer select-none transition hover:opacity-50 duration-300'
      >
        Modern Styles
      </h1>
      <div onClick={() => setDisplayCheckout(!displayCheckout)}>
        <i className='fa-solid fa-bag-shopping px-2 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300 cursor-pointer'></i>
      </div>
    </div>
  );
}

export default Header;
