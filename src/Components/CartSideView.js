import { AiOutlineClose } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/reducers/productsSlice";

const ProductCartSidebar = ({ isOpen, onClose }) => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div
      className={`fixed h-auto z-50 inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className='flex justify-between items-center p-4'>
        <h2 className='text-lg font-semibold'>Your Cart</h2>
        <button onClick={onClose}>
          <AiOutlineClose className='text-xl' />
        </button>
      </div>
      <div className='border-b border-gray-300'></div>
      <div className='flex flex-col p-4'>
        {cart.map((product) => (
          <div
            key={product.id}
            className='flex mr-3 items-center justify-between mb-4'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-20 h-20'
            />
            <div className='flex-1 ml-4'>
              <h3 className='font-semibold'>{product.title}</h3>
              <p className='text-gray-600'>${product.price}</p>
            </div>
            <div
              onClick={() => handleRemove(product.id)}
              className='text-red-500 cursor-pointer'
            >
              <FaTrash />
            </div>
          </div>
        ))}
        {cart.length === 0 && (
          <p className='text-center text-gray-600 mt-4'>Your cart is empty</p>
        )}
      </div>
      <div className='border-b border-gray-300'></div>
      <div className='p-4'>
        <div className='flex justify-between mb-2'>
          <p>Subtotal:</p>
          <p className='font-semibold'>${total}</p>
        </div>
        <button className='bg-black text-white py-2 px-4 w-full'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductCartSidebar;
