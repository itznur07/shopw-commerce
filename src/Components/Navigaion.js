import React from "react";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className='bg-blue-500'>
        <nav className='flex items-center justify-between flex-wrap  p-6 md:mx-24'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'>
              <p className='text-2xl font-bold uppercase'>Shopw</p>
            </Link>
          </div>
          <div className='w-1/3'>
            <form className='bg-white flex items-center rounded-full px-3 py-2'>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded-full'
                type='button'
              >
                <FiSearch />
              </button>
            </form>
          </div>
          <div className='flex items-center'>
            <Link
              to='/'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              About
            </Link>
            <Link
              to='/shop'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Shop
            </Link>
            <Link
              to='/contact'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4'
            >
              Contact
            </Link>
            <div className='flex items-center ml-9'>
              <FiUser className='text-white' size={25} />
              <Link to='/cart' className='inline-block relative ml-4'>
                <FiHeart className='text-white' size={20} />
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  2
                </span>
              </Link>
              <Link to='/cart' className='inline-block relative ml-4'>
                <FiShoppingCart className='text-white' size={20} />
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  2
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
