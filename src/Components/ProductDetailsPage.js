import React from "react";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigaion";

const ProductDetailsPage = () => {
  var { id } = useParams();
  const realid = id - 1;
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Navigation />
      <div className='flex items-center flex-wrap mt-8'>
        <div className='w-full md:w-1/2 p-4'>
          <div className='flex justify-center'>
            <div className='relative'>
              <img
                src={products[realid].image}
                alt='Product'
                className='max-w-full h-auto'
              />
              
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='text-3xl font-semibold mb-4'>
            {products[realid].title}
          </h2>
          <div className='flex items-center mb-4'>
            <span className='text-yellow-500 mr-2'>
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <span className='text-gray-600 text-sm'>(4.5)</span>
          </div>
          <div className='flex items-center mb-4'>
            <span className='text-gray-600 text-lg line-through mr-2'>
              ${products[realid].price}
            </span>
            <span className='text-red-500 text-lg'>
              ${products[realid].discountPrice}
            </span>
          </div>
          <p className='text-gray-600 mb-4'>{products[realid].desc}</p>
          <div className='flex items-center mb-4'>
            <span className='mr-2 font-semibold text-md uppercase'>Quantity:</span>
            <button className='bg-black text-white py-1 px-2 hover:bg-gray-800'>
              -
            </button>
            <span className='bg-black text-white py-1 px-2'>1</span>
            <button className='bg-black text-white py-1 px-2  hover:bg-gray-800'>
              +
            </button>
          </div>
          <button className='flex items-center bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded uppercase'>Add to cart</button>
          <div className='flex items-center mt-4'>
            <span className='text-gray-500 mr-4'>Share:</span>
            <FaShareAlt className='text-gray-500 hover:text-gray-600 cursor-pointer mr-2' />
            <FaRegHeart className='text-gray-500 hover:text-red-500 cursor-pointer' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
