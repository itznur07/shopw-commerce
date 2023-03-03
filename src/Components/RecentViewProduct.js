import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./ProductCard";

const RecentViewProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const { products } = useSelector((state) => state.products);

  return (
    <>
      <div className='md:mx-14 md:my-14 '>
        <h1 className="text-3xl font-bold uppercase">Recently View Products</h1>
        <div className='col-span-12 border mt-5'>
          {/* recent view section */}
          <Slider {...settings} className='grid grid-cols-1'>
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} offQuick={true}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default RecentViewProduct;
