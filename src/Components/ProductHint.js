import React from "react";

const ProductHint = () => {
  return (
    <div className='grid grid-cols-12 gap-4 md:mx-14 mb-16'>
      <div className='col-span-4'>
        <div className='relative h-52 rounded-lg overflow-hidden'>
          <img
            src='/images/product-hint-cover1.jpg'
            alt='Product Hint Cover'
            className='object-cover h-full w-full'
          />
          <div className='absolute bottom-0 text-right right-0 p-6 text-white'>
            <h1 className='text-1xl text-yellow-500 font-bold uppercase'>Discount Offer</h1>
            <h2 className='text-md text-orange-500 font-bold uppercase'>Up to 50% off</h2>
            <div className="mt-5 text-right">
            <p className='text-sm font-semibold text-slate-300'>FLASH SALES ON</p>
            <p className='text-3xl font-bold'>NICE SHOES</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-8'>
        <div className='relative h-52 rounded-lg overflow-hidden'>
          <img
            src='/images/product-hint-cover2.jpg'
            alt='Product Hint Product'
            className='object-cover h-full w-full'
          />
          <div className='absolute top-20 bottom-0 md:space-y-3 right-10 '>
            <h2 className='text-4xl font-bold'>TOP ELECTRONIC</h2>
            <p className='text-slate-500 text-xl font-medium'>
              Some additional product details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHint;
