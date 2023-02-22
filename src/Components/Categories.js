import React from "react";

const Categories = () => {
  return (
    <>
      <div className='md:mx-14 my-16'>
        <div className='md:grid md:grid-cols-8  grid grid-cols-2 md:space-y-0 items-center'>
          <CateCard
            img='/images/product-1.jpg'
            title='Fashion'
            caption='7 Products'
          />
          <CateCard
            img='/images/product-2.jpg'
            title='Furniture'
            caption='12 Products'
          />
          <CateCard
            img='/images/product-3.jpg'
            title='Headphones'
            caption='4 Products'
          />
          <CateCard
            img='/images/product-4.jpg'
            title='Caps'
            caption='5 Products'
          />
          <CateCard
            img='/images/product-5.jpg'
            title='Gamings'
            caption='8 Products'
          />
          <CateCard
            img='/images/product-6.jpg'
            title='Drones'
            caption='10 Products'
          />
          <CateCard
            img='/images/product-14.jpg'
            title='Watch'
            caption='20 Products'
          />
          <CateCard
            img='/images/product-10.jpg'
            title='Cameras'
            caption='15 Products'
          />
        </div>
      </div>
    </>
  );
};

const CateCard = ({ img, title, caption }) => {
  return (
    <div className='flex flex-col items-center text-center justify-center space-y-3 cursor-pointer'>
      <img
        className='w-32 rounded-full bg-[#ffffff] hover:bg-[#c3c3c3]'
        src={img}
        alt='product-1'
      />
      <div className='space-y-1'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <p className='text-xs font-medium uppercase text-[#3d3d3d]'>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Categories;
