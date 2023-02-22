import React from "react";
import Navigation from "./Navigaion";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className='flex flex-col items-center justify-center mt-16 md:mx-14'>
        <h1 className='text-4xl font-bold mb-8'>About Us</h1>
        <div className='flex flex-col md:flex-row md:items-start'>
          <div className='md:w-1/2 md:pr-8 mb-8'>
            <img
              src='/images/product-4.jpg'
              alt='About Us'
              className='w-full rounded-md'
            />
          </div>
          <div className='md:w-1/2'>
            <p className='text-lg leading-relaxed mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
              semper velit, id lobortis est. Nam ut erat euismod, fermentum quam
              ut, laoreet arcu. Sed quis tristique lectus. Vestibulum faucibus
              neque vel diam bibendum, vitae convallis ante auctor. Suspendisse
              scelerisque fringilla nulla, in tincidunt quam. Aliquam ultrices
              nisl sit amet aliquet varius.
            </p>
            <p className='text-lg leading-relaxed mb-8'>
              Duis hendrerit lorem id metus efficitur, nec ultricies sem
              iaculis. Praesent in justo ut odio molestie elementum. Donec
              lacinia arcu ut consectetur commodo. Sed sollicitudin semper nibh,
              quis varius enim malesuada in. Integer dapibus ipsum quis tellus
              feugiat molestie. Proin et gravida nisi, eget gravida nisl. Aenean
              in velit quis orci malesuada bibendum. Morbi egestas vitae magna
              ac commodo.
            </p>
            <p className='text-lg leading-relaxed mb-8'>
              Vestibulum tincidunt nisi velit, ut auctor lorem commodo vel.
              Nullam vel leo ut magna bibendum maximus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Proin sit amet massa tincidunt, maximus lectus quis, bibendum
              urna. Integer tristique vel libero sit amet blandit. Suspendisse
              potenti. In hac habitasse platea dictumst.
            </p>
            {/* <Link
            to={currentUser ? "/shop" : "/signin"}
            className="bg-black text-white rounded-full py-3 px-6 hover:bg-gray-800 transition duration-200 ease-in-out inline-block"
          >
            {currentUser ? "Shop Now" : "Sign In"}
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
