import React from "react";

const bannerImg = "/images/shop36_home_banner8.jpg";

const GiftSale = () => {
  return (
    <div className='relative h-52 md:mx-14'>
      <img
        src={bannerImg}
        alt='Gift Sale Banner'
        className='w-full h-full object-cover'
      />
      <div className='absolute space-x-7 top-14 left-28 flex items-center justify-center'>
        <div>
          {" "}
          <h2 className='text-white text-3xl leading-tight font-bold'>
            THE PERFECT GIFT FOR YOUR GIRLFRIEND
          </h2>
          <p className='text-white text-5xl mt-3 font-bold'>GIFT SELECTION ON SALE</p>
        </div>
        <div className="text-9xl font-bold text-white ">
            50%
        </div>
        <button className='px-8 py-3 bg-white text-black font-bold mt-8 rounded-lg hover:bg-slate-200 transition duration-200'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default GiftSale;
