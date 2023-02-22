import React from "react";

const Electronices = () => {
  return (
    <div className='md:mx-14 md:space-y-5 bg-white p-5 rounded'>
      <h1 className='text-3xl font-semibold'>Electornices</h1>
      <div className='grid grid-cols-12 gap-4  mb-16'>
        <div className='col-span-6 border'>
          <div className='relative h-52 rounded-lg overflow-hidden'>
            <img
              src='/images/shop36_home_banner2.jpg'
              alt='Product Hint Cover'
              className='object-cover h-full w-full'
            />
            <div className='absolute bottom-0 text-right top-10 right-10 p-6'>
              <h2 className='text-3xl font-bold uppercase text-slate-600'>
                Drone & <br /> Cameras
              </h2>
            </div>
          </div>
        </div>
        <div className='col-span-6'>
          <div className='relative h-52 rounded-lg overflow-hidden'>
            <img
              src='/images/shop36_home_banner7.jpg'
              alt='Product Hint Product'
              className='object-cover h-full w-full'
            />
            <div className='absolute top-20 bottom-0 md:space-y-3 right-10 '>
              <div className='flex items-center md:space-x-10'>
                <h2 className='text-3xl font-bold uppercase text-white'>
                  Electornice <br /> deals
                </h2>
                <p className='text-slate-500 text-xl font-medium md:space-y-3'>
                  <span className='px-5 py-1 bg-white'>Ex.CUPON</span>
                  <h1 className='text-3xl font-bold uppercase text-slate-200'>
                    100% off
                  </h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronices;
