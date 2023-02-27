import React from "react";
import Footer from "./Footer";
import HappyClient from "./HappyClient";
import Navigation from "./Navigaion";
import WhyChooseUs from "./WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className='relative'>
        <img
          className='h-72 object-cover'
          src='/images/shop1_shop_banner.jpg'
          alt=''
        />
        <div className='absolute top-20 left-20'>
          <h1 className='text-xl font-bold uppercase'>About us</h1>
          <span className='text-3xl font-bold uppercase'>Our company</span>
          <br />
          <button className='mt-5 bg-black px-5 py-2.5 rounded-sm text-white uppercase font-bold'>
            Contact
          </button>
        </div>
      </div>
      <div className='md:mx-20 mt-5'>
        <h1 className='text-xl font-bold uppercase'>Our Story</h1>
        <p className=' text-slate-600 mt-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className=' mt-5 text-slate-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <p className='text-slate-700 italic mt-5 text-xl'>
          “ Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model search for evolved over sometimes by
          accident, sometimes on purpose ”
        </p>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div className="md:mx-20">
        <HappyClient />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
