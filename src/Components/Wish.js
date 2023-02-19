import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/reducers/productsSlice";
import Navigaion from "./Navigaion";

const Wish = () => {
  const { wish } = useSelector((state) => state.products);

  return (
    <>
      <Navigaion />
      <div className='md:mx-28 mt-5'>
        <h2 className='text-2xl font-medium mb-6 uppercase'>WishList</h2>
        <div className='flex flex-col justify-center items-center'>
          {wish.map((item) => (
            <CardItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

// card Items

const CardItem = ({ item }) => {
    
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <div className='md:w-full'>
      <div className='flex items-center justify-between bg-white shadow p-6 border-top'>
        <img
          src={item.image}
          alt={item.title}
          className='h-24 w-28 object-cover rounded-sm'
        />
        <h3 className='text-lg font-medium mt-4'>{item.title.slice(0, 20)}</h3>

        <p className='text-gray-600 text-md font-medium mt-2'>${item.price}</p>
        <div>
          <button onClick={() => handleAddToCart(item)} className='flex mt-4 items-center bg-blue-500 text-white text-md font-semibold px-4 py-2 rounded uppercase'>
            <FaShoppingCart size={20} className='mr-2' /> Add To Cart
          </button>
        </div>
        <button
          onClick={() => handleRemove(item.id)}
          className='mt-4 text-red-600 hover:underline'
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Wish;
