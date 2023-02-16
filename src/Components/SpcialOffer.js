import React from "react";
import {
  FaGift,
  FaHeart,
  FaRegEye,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt
} from "react-icons/fa";
import { useSelector } from "react-redux";

const SpcialOffer = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div>
        <span className='flex items-center font-bold text-3xl text-slate-800 md:mx-24'>
          <FaGift className='mr-3' />
          Special Offer
        </span>
        <div className='grid grid-cols-12 mt-10 mb-10 md:mx-24'>
          {/* 1st section */}
          <div className='col-span-4 h-auto border-blue-500 border-l border-t border-b rounded'>
            <img src='/images/product-6.jpg' alt='main-product' />
            <div className='text-center bottom-0 right-0  my-10 md:space-y-5'>
              <div className='space-y-1'>
                <h1 className='text-2xl text-slate-500 font-semibold'>
                  Drone Pro
                </h1>
                <span className='flex items-center justify-center space-x-1 text-yellow-400'>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <FaStarHalfAlt />
                </span>
                <p className='text-xl font-bold'>$500.0</p>
              </div>
              <div className='flex items-center justify-center space-x-5 group'>
                <button className=' hover:text-blue-500 bg-slate-200 px-2 py-2 rounded'>
                  <FaHeart size={20} />
                </button>
                <button className='flex items-center bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded uppercase'>
                  <FaShoppingCart size={20} className='mr-2' /> Add To Cart
                </button>
                <button className=' text-gray-500 hover:text-gray-600 bg-slate-200 px-2 py-2 rounded'>
                  <FaRegEye size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-8 border ml-3'>
            {/* 2nd section */}
            <div className='grid grid-cols-4'>
              {products.slice(0, 8).map((index) => (
                <div
                  key={index}
                  className='relative border hover:shadow-lg cursor-pointer group group-hover:transition-all ease-linear duration-200 delay-200'
                >
                  <div className='absolute top-3 left-2  text-white bg-blue-500  px-3 '>
                    {index.status}
                  </div>
                  <button className='absolute top-3 right-2 z-10  hover:text-blue-500'>
                    <FaShoppingCart size={20} />
                  </button>
                  <img src={index.image} alt={index.title} className='' />
                  <div className='flex justify-center'>
                    <button className='bg-blue-500 hover:bg-orange-500 absolute top-44 text-white px-7 py-2 hidden group-hover:block group-hover:transition-all ease-linear duration-200'>
                      Quick view
                    </button>
                  </div>
                  <div className='bottom-0 left-0 w-full p-4'>
                    <h3 className='text-base font-bold'>{index.title}</h3>
                    <span className='flex items-center mt-1 text-sm text-yellow-400'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      <FaStarHalfAlt />
                    </span>
                    <div className='flex justify-between items-center mt-3'>
                      <div className='space-x-2'>
                        <span className='text-base text-gray-400 line-through'>
                          ${index.price}
                        </span>
                        <span className='text-base font-bold text-yellow-600'>
                          ${index.discountPrice}
                        </span>
                      </div>
                      <button className='text-gray-700 hover:text-red-500'>
                        <FaHeart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpcialOffer;
