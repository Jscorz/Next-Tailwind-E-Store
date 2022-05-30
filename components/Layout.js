import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { children } = props;
  return (
    <div className='relative min-h-screen'>
      <Header />
      <div className='flex flex-col'>
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
