import React from "react";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { cart, wish } = useSelector((state) => state.products);

  /** Get Qty Lenght for Show Frontend */
  const cartLength = cart.length;
  const wishLength = wish.length;

  return (
    <>
      <div className='bg-white relative'>
        <nav className='flex items-center justify-between flex-wrap  p-6 md:mx-14'>
          {/* logo here */}
          <div className='flex items-center flex-shrink-0 text-black mr-6'>
            <Link to='/'>
              <p className='text-2xl font-bold uppercase'>Shopw</p>
            </Link>
          </div>
          {/* search form here */}
          <div className='w-1/3'>
            <form className='bg-white flex items-center rounded-full px-3 py-3'>
              <input
                className='appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='  text-md  text-black py-1 px-2 rounded-full'
                type='button'
              >
                <FiSearch />
              </button>
            </form>
          </div>
          {/* navigation link here */}
          <div className='flex items-center'>
            <Link
              to='/'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              About
            </Link>
            <Link
              to='/shop'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Shop
            </Link>

            <Link
              to='/contact'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Contact
            </Link>
            <div>
              {/* login & cart & wish icon here */}
              <div className='flex items-center ml-9'>
                <Link to='/signup'>
                  {" "}
                  <FiUser
                    className='text-black cursor-pointer animate-pulse'
                    size={25}
                  />
                </Link>
                <Link to='/wishlist' className='inline-block relative ml-4'>
                  <FiHeart className='text-black' size={20} />
                  <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                    {wishLength}
                  </span>
                </Link>
                <Link to='/cart' className='inline-block relative ml-4'>
                  <FiShoppingCart className='text-black' size={20} />
                  <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                    {cartLength}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
