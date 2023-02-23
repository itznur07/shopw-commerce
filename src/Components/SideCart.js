import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import ProductCartSidebar from "./CartSideView";

const SideCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useSelector((state) => state.products);
  return (
    <div  className='z-50'>
      <div>
        <div className='fixed bottom-5 right-0 p-4'>
          <ProductCartButton
            onClick={() => setIsCartOpen(true)}
            count={cart.length}
          />
        </div>
        <ProductCartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </div>
  );
};

const ProductCartButton = ({ onClick, count }) => (
  <button
    className='flex animate-bounce text-2xl md:mx-14 relative items-center text-black hover:text-gray-900 transition-colors duration-150'
    onClick={onClick}
  >
    <FiShoppingCart className='mr-2 font-bold' />
    <span className='text-sm font-bold text-white bg-red-500 px-2.5 py-1 rounded-full absolute -top-3 left-7'>{count}</span>
  </button>
);

export default SideCart;
