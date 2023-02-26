import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-20 md:mx-14 right-4 p-2 bg-white text-black rounded-full shadow-md hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
