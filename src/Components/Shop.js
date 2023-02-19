import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaList, FaTh } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigaion";
// import {
//     selectFilteredProducts, selectPageNumber, selectSortOption, setPageNumber, setSortOption
// } from "../store/reducers/productsSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);
//   const filteredProducts = useSelector(selectFilteredProducts);
//   const sortOption = useSelector(selectSortOption);
//   const pageNumber = useSelector(selectPageNumber);
  const productsPerPage = 12;

//   const handleSortChange = (e) => {
//     dispatch(setSortOption(e.target.value));
//   };

//   const handlePageChange = (page) => {
//     dispatch(setPageNumber(page));
//   };

//   const sortedProducts = filteredProducts.sort((a, b) => {
//     switch (sortOption) {
//       case "price_asc":
//         return a.price - b.price;
//       case "price_desc":
//         return b.price - a.price;
//       case "name_asc":
//         return a.name.localeCompare(b.name);
//       case "name_desc":
//         return b.name.localeCompare(a.name);
//       default:
//         return 0;
//     }
//   });

//   const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
//   const startIndex = (pageNumber - 1) * productsPerPage;
//   const endIndex = startIndex + productsPerPage;
//   const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
    <Navigation />
    <div className='flex flex-row  md:mx-24'>
      {/* Categories Sidebar */}
      <div className='flex flex-col w-1/4 p-4'>
        <h2 className='text-lg font-bold mb-2'>Categories</h2>
        {/* Dropdowns or Filter Ranges here */}
        {/* ... */}
      </div>

      {/* Product Listing */}
      <div className='flex flex-col w-3/4 p-4'>
        <div className='flex flex-row justify-between items-center mb-4'>
          {/* Sort Options */}
          <div className='flex flex-row items-center'>
            <span className='font-medium mr-2'>Sort by:</span>
            <select
            //   value={sortOption}
            //   onChange={handleSortChange}
              className='border rounded-md px-2 py-1'
            >
              <option value='price_asc'>Price: Low to High</option>
              <option value='price_desc'>Price: High to Low</option>
              <option value='name_asc'>Name: A to Z</option>
              <option value='name_desc'>Name: Z to A</option>
            </select>
          </div>

          {/* View Options */}
          <div className='flex flex-row items-center'>
            <button className='text-gray-400 mr-2'>
              <FaTh size={24} />
            </button>
            <button className='text-gray-400'>
              <FaList size={24} />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className='grid grid-cols-3 gap-4'>
          {products.map((product) => (
            <div
              key={product.id}
              className='border rounded-md p-4 flex flex-col justify-between'
            >
              <div className='flex justify-center'>
                <img
                  src={product.image}
                  alt={product.title}
                  className='max-h-32 object-contain'
                />
              </div>
              <div className='flex flex-col mt-2'>
                <h3 className='font-medium'>{product.title}</h3>
                <p className='text-gray-500'>{product.category}</p>
                <p className='font-bold'>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className='flex flex-row justify-center mt-4'>
          <button
            // onClick={() => handlePageChange(pageNumber - 1)}
            // disabled={pageNumber === 1}
            className='text-gray-400 mr-2'
          >
            <BiChevronLeft size={24} />
          </button>
          {/* {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`border rounded-md px-4 py-2 ${
                i + 1 === pageNumber ? "bg-gray-400 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))} */}
          <button
            // onClick={() => handlePageChange(pageNumber + 1)}
            // disabled={pageNumber === pageCount}
            className='text-gray-400 ml-2'
          >
            <BiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};


export default Shop
