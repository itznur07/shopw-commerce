import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaStarHalfAlt,
  FaTimes
} from "react-icons/fa";
// import "react-medium-image-zoom/dist/styles.css";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, addToWish } from "../store/reducers/productsSlice";

const ProductCard = ({ product, settings }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart 🛒!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleAddToWish = (product) => {
    dispatch(addToWish(product));
    toast.success(`${product.title} added to wishlist 😊!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    
          <div
            key={product}
            className='relative border hover:shadow-xl cursor-pointer group group-hover:transition-all ease-linear duration-200 delay-100'
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
            <img src={product.image} alt={product.title} className='w-full' />
            <div className='flex justify-center'>
              <button
                onClick={() => setIsOpen(true)}
                className='bg-blue-500 hover:bg-orange-500 absolute top-44 text-white px-7 py-2 hidden group-hover:block group-hover:transition-all ease-linear duration-200'
              >
                Quick view
              </button>
              <QuickViewModel
                product={product}
                isOpen={isOpen}
                //   quantity={quantity}
                //   setQuantity={setQuantity}
                onClose={onClose}
              />
            </div>
            <div className='bottom-0 left-0 w-full p-4'>
              <h3 className='text-base font-bold'>{product.title}</h3>
              <span className='flex items-center mt-1 text-sm text-yellow-400'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
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
                <button
                  onClick={() => handleAddToWish(product)}
                  className='text-gray-700 hover:text-red-500'
                >
                  <FaHeart size={20} />
                </button>
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
  showProduct,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
            {/* <ImageZoom
              image={{
                src: product.image,
                alt: product.title,
                className: "img",
              }}
              zoomImage={{
                src:product.image,
                alt: product.title,
                className: "img",
              }}
              defaultStyles={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            /> */}
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              {product.title}
            </h3>
            <p className='text-gray-700 text-sm'>{product.tag}</p>
            <div className='mt-4 flex items-center justify-between'>
              <div>
                <p className='text-gray-700 text-sm'>
                  Rating: {product.rating}
                </p>
                <p className='text-gray-700 text-sm'>
                  Discount Price: ${product.discountPrice}
                </p>
                {product.discountPrice && (
                  <p className='text-gray-500  text-sm'>
                    Orginal Price:{" "}
                    <span className='line-through'>${product.price}</span>
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
                <button
                  onClick={() => handleAddToCart(product)}
                  className='ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
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

export default ProductCard;
