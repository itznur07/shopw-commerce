import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  /** Slider settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imgSrc = [
    "/images/shop1_shop_banner.jpg",
    "/images/shop36_home_banner9.jpg",
    "/images/shop36_home_banner2.jpg",
  ];

  return (
    <>
      <Slider {...settings}>
        <div className='relative h-96'>
          <img
            src={imgSrc[0]}
            alt='Banner 1'
            className='w-full h-full object-cover '
          />
          <div className='absolute top-28 left-36'>
            <div className='font-bold uppercase'>
              <span className='text-5xl'>ELECTRONIC</span> <br />
              <span className='text-5xl'>DEALS</span>
              <br />
              <button className="mt-4 uppercase bg-black px-5 py-2.5 rounded text-white">Get yours!</button>
            </div>
          </div>
          <div className='absolute top-32 left-2/4' >
            <span className="text-md bg-white text-semibold px-5 py-2 font-semibold">Exclusive COUPON</span><br /><br />
            <span className="text-xl  bg-white text-semibold px-5 py-2 font-bold">$100</span>
            <span className="text-xl uppercase text-semibold ml-2 font-bold">off</span>
          </div>
        </div>
        <div className='relative h-96'>
          <img
            src={imgSrc[1]}
            alt='Banner 2'
            className='w-full h-full object-cover '
          />
          <div className='absolute top-28 left-36'>
            <div className='font-bold uppercase'>
              <span className='text-5xl'>Best Forien</span> <br />
              <span className='text-5xl'>Sofa</span>
              <br />
              <button className="mt-4 uppercase bg-black px-5 py-2.5 rounded text-white">Get yours!</button>
            </div>
          </div>
          <div className='absolute top-32 right-56' >
            <span className="text-md bg-white text-semibold px-5 py-2 font-semibold">Exclusive COUPON</span><br /><br />
            <span className="text-xl  bg-white text-semibold px-5 py-2 font-bold">$500</span>
            <span className="text-xl uppercase text-semibold ml-2 font-bold">off</span>
          </div>
        </div>
        <div className='relative h-96 '>
          <img
            src={imgSrc[2]}
            alt='Banner 3'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-28 left-36'>
            <div className='font-bold uppercase'>
              <span className='text-5xl'>Drone Pro</span> <br />
              <span className='text-5xl'>Sales</span>
              <br />
              <button className="mt-4 uppercase  bg-black px-5 py-2.5 rounded text-white">Get yours!</button>
            </div>
          </div>
          <div className='absolute top-32 right-56' >
            <span className="text-md bg-black text-white text-semibold px-5 py-2 font-semibold">Exclusive COUPON</span><br /><br />
            <span className="text-xl  bg-black text-white text-semibold px-5 py-2 font-bold">$400</span>
            <span className="text-xl uppercase text-semibold ml-2 font-bold">off</span>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
