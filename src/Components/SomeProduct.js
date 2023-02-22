import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const SomeProduct = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div className='md:mx-14 md:my-10'>
        <div className='col-span-12 border'>
          {/* 2nd section */}
          <div className='grid grid-cols-6'>
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeProduct;
