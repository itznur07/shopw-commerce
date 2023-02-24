import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const HappyClient = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const clients = [
    {
      name: "John Doe",
      job: "CEO, ABC Company",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      name: "Jamyia Smit",
      job: "Marketing Manager, XYZ Inc.",
      quote: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    },
    {
      name: "Bob Johnson",
      job: "Product Manager, PQR Corp.",
      quote: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">Happy Clients</h2>
      <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.name} className="p-4">
            <div className="bg-white p-8 text-dark flex flex-col items-center rounded-lg shadow-lg">
              <img src={client.image} alt={client.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-lg font-bold mb-2">{client.name}</h3>
              <p className="text-gray-600">{client.job}</p>
              <div className="mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.707 10.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm mt-4">{client.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HappyClient;
