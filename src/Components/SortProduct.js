import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";

const ProductSort = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div>
        {/* quick view */}
        <div className='grid grid-cols-12 mt-14 mb-10 md:mx-14'>
          {/* 1st section */}
          <div className='col-span-3 h-auto rounded bg-white px-5 py-5 md:space-y-14'>
            <h1 className='text-2xl font-bold'>Sort By</h1>
            <ul className='md:space-y-3 text-slate-500 cursor-pointer'>
              <li className='hover:text-blue-400'>Kids Fashion</li>
              <li className='hover:text-blue-500'>Casual Shoes</li>
              <li className='hover:text-blue-400'>Spring &amp; Autumn</li>
              <li className='hover:text-blue-400'>Man</li>
              <li className='hover:text-blue-400'>Accessories</li>
              <li className='hover:text-blue-400'>Pants &amp; Denim</li>
              <li className='hover:text-blue-400'>Tees, Knits &amp; Polos</li>
              <li className='hover:text-blue-400'>Watch Fashion</li>
              <li className='hover:text-blue-400'>Woman</li>
              <li className='hover:text-blue-400'>Accessories</li>
              <li className='hover:text-blue-400'>Dresses &amp; Skirts</li>
              <li className='hover:text-blue-400'>Shoes &amp; Boots</li>
              <li className='hover:text-blue-400'>Top &amp; Blouses</li>
            </ul>
            <button className='text-blue-400 '>
              <Link to="/shop">View all <span>&#x2192;</span></Link>
            </button>
          </div>
          {/* 2nd section */}
          <div className='col-span-3 h-auto rounded relative'>
            <img
              src='/images/sort.jpg'
              className='w-full h-full object-cover'
              alt='sort-cover'
            />
            <div className='absolute top-10 right-10 md:space-y-3 text-right'>
              <h1 className='text-3xl font-bold uppercase text-slate-200'>
                Mega sale
              </h1>
              <h2 className='text-6xl font-bold uppercase text-slate-200'>
                70% off
              </h2>
              <p className='text-md font-bold uppercase text-slate-200'>
                Starting at <span className='bg-blue-400 px-4 py-1'>$199</span>
              </p>
            </div>
          </div>
          {/* 2nd section ends here */}
          <div className='col-span-6 border ml-3'>
            {/* 3rd section */}
            <div className='grid grid-cols-3'>
              {products.slice(2, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
