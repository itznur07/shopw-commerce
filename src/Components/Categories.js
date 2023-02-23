import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div className='md:mx-14 my-16'>
        <div className='md:grid md:grid-cols-8  grid grid-cols-2 md:space-y-0 items-center'>
          {products.slice(0, 8).map((product) => (
            <CateCard
              img={product.image}
              title={product.title}
              caption='15 Products'
            />
          ))}
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
        <h1 className='text-xl font-semibold'>{title.slice(0, 10)}</h1>
        <p className='text-xs font-medium uppercase text-[#3d3d3d]'>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Categories;
