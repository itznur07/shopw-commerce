import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import MiniPromotion from "../Components/MiniProm";
import Navigation from "../Components/Navigaion";

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
    </>
  );
};

export default Home;
