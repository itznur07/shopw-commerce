import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import ChooseHint from "../Components/ChooseHint";
import Electronices from "../Components/Electornic";
import MiniPromotion from "../Components/MiniProm";
import Navigation from "../Components/Navigaion";
import ProductHint from "../Components/ProductHint";
import SomeProduct from "../Components/SomeProduct";
import ProductSort from "../Components/SortProduct";
import SpcialOffer from "../Components/SpcialOffer";
const Home = () => {
  return (
    <>
      <header>
        <Navigation />
        <Banner />
      </header>
      <section>
        <Categories />
        <MiniPromotion />
      </section>
      <section className='bg-white'>
        <ChooseHint />
        <ProductHint />
        <SpcialOffer />
      </section>
      <section>
        <ProductSort />
      </section>
      <section>
        <Electronices />
        <SomeProduct />
      </section>
    </>
  );
};

export default Home;
