import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
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
      </section>
    </>
  );
};

export default Home;
