import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        image: "/images/product-1.jpg",
        title: "Palm Print Jacket",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
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
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 5,
        price: 1000,
        discountPrice: 980,
        qty: 1,
        status: "Hot",
        sale: false,
      },
      {
        id: 3,
        image: "/images/product-3.jpg",
        title: "Beats Solo HD Drenched",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 3,
        price: 300,
        discountPrice: 270,
        qty: 1,
        status: "Hot",
        sale: false,
      },
      {
        id: 4,
        image: "/images/product-4.jpg",
        title: "Soft Hat",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 2,
        price: 30,
        discountPrice: 25,
        qty: 1,
        status: "cool",
        sale: false,
      },
      {
        id: 5,
        image: "/images/product-5.jpg",
        title: "GM Camaro SS Original",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 4,
        price: 430,
        discountPrice: 325,
        qty: 1,
        status: "hot",
        sale: false,
      },
      {
        id: 6,
        image: "/images/product-6.jpg",
        title: "Drone Pro",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 5,
        price: 1330,
        discountPrice: 1290,
        qty: 1,
        status: "hot",
        sale: false,
      },
      {
        id: 7,
        image: "/images/product-8.jpg",
        title: "Voice Assisten",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 4,
        price: 2430,
        discountPrice: 2300,
        qty: 1,
        status: "hot",
        sale: false,
      },
      {
        id: 8,
        image: "/images/product-9.jpg",
        title: "Laydis Bag",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 4,
        price: 2430,
        discountPrice: 2300,
        qty: 1,
        status: "hot",
        sale: false,
      },
      {
        id: 9,
        image: "/images/product-10.jpg",
        title: "CC Tv Camera",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 3,
        price: 1230,
        discountPrice: 1100,
        qty: 1,
        status: "hot",
        sale: false,
      },
      {
        id: 10,
        image: "/images/product-14.jpg",
        title: "Colorful Watch",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper",
        rating: 5,
        price: 120,
        discountPrice: 100,
        qty: 1,
        status: "cool",
        sale: true,
      },
    ],
    cart: [],
    wish: [],
    filterProduct: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    addToWish: (state, action) => {
      const existingItem = state.wish.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.wish.push(action.payload);
      }
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.qty -= 1;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  addToWish,
} = productsSlice.actions;
export default productsSlice.reducer;
