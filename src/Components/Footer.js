import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className='md:mx-14'>
      <Newsletter />
      <footer className='bg-gray-100 py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {/* CUSTOMER SERVICE */}
            <div>
              <h4 className='text-md font-bold mb-4'>CUSTOMER SERVICE</h4>
              <ul>
                <li className='mb-2'>
                  <a href='# '>Help &amp; FAQs</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Order Tracking</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Shipping &amp; Delivery</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Orders History</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Advanced Search</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Login</a>
                </li>
              </ul>
            </div>

            {/* ABOUT US */}
            <div>
              <h4 className='text-md font-bold mb-4'>ABOUT US</h4>
              <ul>
                <li className='mb-2'>
                  <a href='# '>Help &amp; FAQs</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Order Tracking</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Shipping &amp; Delivery</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Orders History</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Advanced Search</a>
                </li>
              </ul>
            </div>

            {/* MORE INFORMATION */}
            <div>
              <h4 className='text-md font-bold mb-4'>MORE INFORMATION</h4>
              <ul>
                <li className='mb-2'>
                  <a href='# '>Affiliates</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Refer a Friend</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Student Beans Offers</a>
                </li>
                <li className='mb-2'>
                  <a href='# '>Gift Vouchers</a>
                </li>
              </ul>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h1 className="text-md font-bold mb-4">SOCIAL MEDIA</h1>
                <div className='flex space-x-4'>
                  <a href='# '>
                    <FaFacebook className='text-xl text-gray-600 hover:text-blue-500' />
                  </a>
                  <a href='# '>
                    <FaInstagram className='text-xl text-gray-600 hover:text-pink-500' />
                  </a>
                  <a href='# '>
                    <FaTwitter className='text-xl text-gray-600 hover:text-blue-400' />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
