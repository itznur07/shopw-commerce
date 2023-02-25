import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const FeaturesBrandSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const featureCards = [
    {
      icon: "/images/brand1.png",
      alt: "Brand 1",
    },
    {
      icon: "/images/brand2.png",
      alt: "Brand 2",
    },
    {
      icon: "/images/brand3.png",
      alt: "Brand 3",
    },
    {
      icon: "/images/brand4.png",
      alt: "Brand 4",
    },
    {
      icon: "/images/brand5.png",
      alt: "Brand 5",
    },
    {
      icon: "/images/brand6.png",
      alt: "Brand 6",
    },
    {
      icon: "/images/brand2.png",
      alt: "Brand 2",
    },
    {
      icon: "/images/brand4.png",
      alt: "Brand 4",
    },
  ];

  return (
    <section className="md:mx-14 md:my-10 md:space-y-5">
      <h1 className="text-3xl font-bold uppercase">Features Brand</h1>
      <div className="container mx-auto">
        <Slider {...settings}>
          {featureCards.map((card, index) => (
            <div className="bg-white px-16 py-14 border" key={index}>
              <img
                src={card.icon}
                alt={card.alt}
                className="w-32 mx-auto mb-4"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturesBrandSection;

