import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./ProductCard";

const SomeProduct = () => {
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
      <div className='md:mx-14 md:my-10 '>
      <div className='grid grid-cols-1 gap-4'>
              <Slider {...settings}>
                {products.slice(0, 8).map((product) => (
                  <ProductCard key={product.id} product={product} offQuick={true} />
                ))}
              </Slider>
            </div>
      </div>
    </>
  );
};

export default SomeProduct;
