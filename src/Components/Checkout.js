import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShippingForm from "./ShippingForm";

const Checkout = () => {
  const { cart } = useSelector((state) => state.products);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 5;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className='w-full bg-gray-100 min-h-screen'>
      <div className='mx-auto w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 py-12'>
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center'>
            <Link to='/cart'>
              <FiChevronLeft className='text-lg mr-2' />
            </Link>
            <h2 className='text-2xl font-bold'>Checkout</h2>
          </div>
          
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Shipping Information</h3>
            <ShippingForm />
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Order Summary</h3>
            <div className='bg-white rounded-lg shadow-md px-6 py-4'>
              <div className='flex justify-between mt-4'>
                <p>Subtotal:</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p>Shipping:</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p>Tax:</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className='border-t border-gray-300 my-4' />
              <div className='flex justify-between font-bold'>
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <button className='bg-blue-500 text-white rounded-lg py-2 px-4 mt-4 w-full'>
                Place Order
              </button>
            </div>
            {/* cupon code here */}
            <div className='md:my-5 md:space-y-4'>
            <input
              type='text'
              className='border border-gray-400 outline-none focus:border-blue-500 rounded px-2 py-1.5 w-48'
              placeholder='Enter coupon code'
            />
            <p className='text-gray-700'>
              <span className="font-bold">Have a coupon?</span>{" "}
              <a href='# ' className='text-white bg-blue-500 px-5 py-1  font-semibold'>
                Enter
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
