import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        image: "/images/product-1.jpg",
        title: "Palm Print Jacket",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
        tag: "fashio",
        rating: 4,
        price: 100,
        discountPrice: 80,
        qty: 1,
        status: "Hot",
        sale: true,
      },
      {
        id: 2,
        image: "/images/product-2.jpg",
        title: "Brown Arm Chair",
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        tag: "room, home, office",
        rating: 5,
        price: 1000,
        discountPrice: 80,
        qty: 1,
        status: "Hot",
        sale: false,
      },
    ],
  },
});

export default productsSlice.reducer