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
    "https://img.freepik.com/free-vector/mega-sale-banner-your-online-store-realistic-style-with-phone-map-cart-bag-gift-vector-illustration_548887-132.jpg?w=1380&t=st=1676479723~exp=1676480323~hmac=ecba5178eb8b0b472cd209bc70ad1e127433e9ced5f64cfacc3df38a8f4813e5",
    "https://img.freepik.com/free-vector/mega-sale-banner-your-online-store-realistic-style-with-phone-map-cart-bag-gift-vector-illustration_548887-132.jpg?w=1380&t=st=1676479723~exp=1676480323~hmac=ecba5178eb8b0b472cd209bc70ad1e127433e9ced5f64cfacc3df38a8f4813e5",
    "https://img.freepik.com/free-vector/mega-sale-banner-your-online-store-realistic-style-with-phone-map-cart-bag-gift-vector-illustration_548887-132.jpg?w=1380&t=st=1676479723~exp=1676480323~hmac=ecba5178eb8b0b472cd209bc70ad1e127433e9ced5f64cfacc3df38a8f4813e5",
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
        </div>
        <div className='relative h-96'>
          <img
            src={imgSrc[1]}
            alt='Banner 2'
            className='w-full h-full object-cover '
          />
        </div>
        <div className='relative h-96 '>
          <img
            src={imgSrc[3]}
            alt='Banner 3'
            className='w-full h-full object-cover'
          />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
