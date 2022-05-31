import React from "react";
import Router from "next/router";

function Header() {
  return (
    <div className='shadow-lg py-8 flex sticky top-0 justify-center items-center bg-white'>
      <h1
        onClick={() => Router.push("/")}
        className=' flex-1 text-center cursor-pointer select-none transition hover:opacity-50 duration-300'
      >
        Modern Styles
      </h1>
      <div>
        <div className='fa-solid fa-bag-shopping px-2 py-2 text-xl sm:text-3xl mr-4 transition hover:opacity-60 duration-300 cursor-pointer'></div>
      </div>
    </div>
  );
}

export default Header;
