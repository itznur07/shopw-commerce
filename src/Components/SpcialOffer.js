import React, { useState } from "react";
import {
  FaGift,
  FaHeart,
  FaRegEye,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaTimes
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/productsSlice";

const SpcialOffer = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const { products } = useSelector((state) => state.products);

  const items = products.map((item) => {
    return item;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  };

  return (
    <>
      <div>
        <QuickViewModel
          product={items}
          isOpen={isOpen}
          quantity={quantity}
          setQuantity={setQuantity}
          onClose={onClose}
        />
        <span className='flex items-center font-bold text-3xl text-slate-800 md:mx-24'>
          <FaGift className='mr-3' />
          Special Offer
        </span>
        <div className='grid grid-cols-12 mt-10 mb-10 md:mx-24'>
          {/* 1st section */}
          <div className='col-span-4 h-auto border-blue-500 border-l border-t border-b rounded'>
            <img src='/images/product-6.jpg' alt='main-product' />
            <div className='text-center bottom-0 right-0  my-10 md:space-y-5'>
              <div className='space-y-1'>
                <h1 className='text-2xl text-slate-500 font-semibold'>
                  Drone Pro
                </h1>
                <span className='flex items-center justify-center space-x-1 text-yellow-400'>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  <FaStarHalfAlt />
                </span>
                <p className='text-xl font-bold'>$500.0</p>
              </div>
              <div className='flex items-center justify-center space-x-5 group'>
                <button className=' hover:text-blue-500 bg-slate-200 px-2 py-2 rounded'>
                  <FaHeart size={20} />
                </button>
                <button
                  className='flex items-center bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded uppercase'
                >
                  <FaShoppingCart size={20} className='mr-2' /> Add To Cart
                </button>
                <button className=' text-gray-500 hover:text-gray-600 bg-slate-200 px-2 py-2 rounded'>
                  <FaRegEye size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-8 border ml-3'>
            {/* 2nd section */}
            <div className='grid grid-cols-4'>
              {products.slice(0, 8).map((product) => (
                <div
                  key={product}
                  className='relative border hover:shadow-lg cursor-pointer group group-hover:transition-all ease-linear duration-200 delay-200'
                >
                  <div className='absolute top-3 left-2  text-white bg-blue-500  px-3 '>
                    {product.status}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className='hidden group-hover:block bg-white hover:bg-blue-500 p-2 hover:text-white rounded-full absolute top-3 right-2 z-10 '
                  >
                    <FaShoppingCart size={20} />
                  </button>
                  <img src={product.image} alt={product.title} className='' />
                  <div className='flex justify-center'>
                    <button
                      onClick={() => setIsOpen(true)}
                      className='bg-blue-500 hover:bg-orange-500 absolute top-44 text-white px-7 py-2 hidden group-hover:block group-hover:transition-all ease-linear duration-200'
                    >
                      Quick view
                    </button>
                  </div>
                  <div className='bottom-0 left-0 w-full p-4'>
                    <h3 className='text-base font-bold'>{product.title}</h3>
                    <span className='flex items-center mt-1 text-sm text-yellow-400'>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      <FaStarHalfAlt />
                    </span>
                    <div className='flex justify-between items-center mt-3'>
                      <div className='space-x-2'>
                        <span className='text-base text-gray-400 line-through'>
                          ${product.price}
                        </span>
                        <span className='text-base font-bold text-yellow-600'>
                          ${product.discountPrice}
                        </span>
                      </div>
                      <button className='text-gray-700 hover:text-red-500'>
                        <FaHeart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const QuickViewModel = ({
  product,
  isOpen,
  onClose,
  quantity,
  setQuantity,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <div className='relative z-50 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <div className='absolute top-0 right-0 pt-2 pr-2'>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500'
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <img
              src={product.image}
              alt={product.title}
              className='mx-auto w-full h-96 object-contain'
            />
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              {product.title}
            </h3>
            <p className='text-gray-700 text-sm'>{product.tag}</p>
            <div className='mt-4 flex items-center justify-between'>
              <div>
                <p className='text-gray-700 text-sm'>
                  Rating: {product.rating}
                </p>
                <p className='text-gray-700 text-sm'>Price: ${product.price}</p>
                {product.discountPrice && (
                  <p className='text-gray-500 line-through text-sm'>
                    ${product.discountPrice}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='quantity' className='sr-only'>
                  Quantity
                </label>
                <input
                  id='quantity'
                  name='quantity'
                  type='number'
                  min='1'
                  max={product.qty}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className='w-20 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 text-center'
                />
                <button className='ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpcialOffer;
