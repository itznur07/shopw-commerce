import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./ProductCard";

const SelectedProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div className='md:mx-14 md:my-10'>
        {/* nav here */}
        <div className='flex items-center justify-between md:my-5'>
          <div className='flex items-center space-x-14'>
            <h1 className='uppercase text-3xl font-bold'>Selected Product</h1>
            <ul className='flex items-center space-x-7 text-slate-700 font-medium cursor-pointer'>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Best Ratings</li>
            </ul>
          </div>
          <Link className="text-blue-500 hover:text-blue-700" to='/shop'>View all &#x2192;</Link>
        </div>
        {/* nav here */}
        <div>
          <div className='col-span-12 border'>
            {/* 2nd section */}
            <Slider {...settings} className='grid grid-cols-6'>
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} offQuick={true} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedProduct;
