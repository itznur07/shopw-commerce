import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
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
            <ul className="md:space-y-3 text-slate-500 cursor-pointer">
              <li className="hover:text-blue-400">Kids Fashion</li>
              <li className="hover:text-blue-500">Casual Shoes</li>
              <li className="hover:text-blue-400">Spring &amp; Autumn</li>
              <li className="hover:text-blue-400">Man</li>
              <li className="hover:text-blue-400">Accessories</li>
              <li className="hover:text-blue-400">Pants &amp; Denim</li>
              <li className="hover:text-blue-400">Tees, Knits &amp; Polos</li>
              <li className="hover:text-blue-400">Watch Fashion</li>
              <li className="hover:text-blue-400">Woman</li>
              <li className="hover:text-blue-400">Accessories</li>
              <li className="hover:text-blue-400">Dresses &amp; Skirts</li>
              <li className="hover:text-blue-400">Shoes &amp; Boots</li>
              <li className="hover:text-blue-400">Top &amp; Blouses</li>
            </ul>
            <button className="text-blue-400 ">View all <span>&#x2192;</span></button>
          </div>
          {/* 2nd section */}
          <div className='col-span-3 h-auto rounded'>
            <img src="/images/product-2.jpg" className="w-full h-full object-cover" alt="" />
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
