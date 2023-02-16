import React from "react";
import { useSelector } from "react-redux";

const SpcialOffer = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return <div>SpcialOffer</div>;
};

export default SpcialOffer;
