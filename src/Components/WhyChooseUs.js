import React from "react";
import { BsHeadphones } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineShieldCheck } from "react-icons/hi";

const WhyChooseUs = () => {
  return (
    <section className='bg-gray-100 py-12 mt-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl uppercase text-center font-bold text-gray-900'>
          Why Choose Us?
        </h2>
        <div className='mt-10'>
          <div className='md:grid md:grid-cols-3 md:gap-8'>
            <div className='mt-5 md:mt-0 md:col-span-1'>
              <div className='px-4 py-5 bg-white shadow rounded overflow-hidden sm:p-6'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <FaShippingFast className='h-6 w-6' />
                </div>
                <div className='mt-4'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Free Shipping
                  </h3>
                  <p className='mt-2 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus velit eu odio accumsan imperdiet.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-1'>
              <div className='px-4 py-5 bg-white shadow rounded overflow-hidden sm:p-6'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <HiOutlineShieldCheck className='h-6 w-6' />
                </div>
                <div className='mt-4'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Secure Transactions
                  </h3>
                  <p className='mt-2 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus velit eu odio accumsan imperdiet.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-1'>
              <div className='px-4 py-5 bg-white shadow rounded overflow-hidden sm:p-6'>
                <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white'>
                  <BsHeadphones className='h-6 w-6' />
                </div>
                <div className='mt-4'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    24/7 Customer Support
                  </h3>
                  <p className='mt-2 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus velit eu odio accumsan imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
