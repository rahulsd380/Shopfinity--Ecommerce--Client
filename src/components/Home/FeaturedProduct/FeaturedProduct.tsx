import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import { IMAGES } from "@/assets";

const FeaturedProduct = () => {
  const products = [
    {
      imageUrl: IMAGES.product,
      category: "Vegetables",
      name: "Redish 500g",
      rating: 3,
      reviews: 3,
      author: "Mr.food",
      price: "2",
      originalPrice: "3.99",
    },
    {
      imageUrl: IMAGES.product,
      category: "Vegetables",
      name: "Tomato 1kg",
      rating: 4,
      reviews: 4,
      author: "VeggieShop",
      price: "4",
      originalPrice: "5.99",
    },
  ];


  return (
    <div className="mt-[100px]">
      <div className="flex items-center justify-between">
      <h1 className="text-neutral-10 text-[32px] font-semibold font-Sora mt-4">Our Featured Products</h1>
      <div className="flex items-center gap-5">
        <button className="font-Inter font-medium">All</button>
        <button className="font-Inter font-medium">Vegetables</button>
        <button className="font-Inter font-medium">Fruits</button>
        <button className="font-Inter font-medium">Coffe & teas</button>
        <button className="font-Inter font-medium">Meat</button>
      </div>
      </div>

      <div className="flex gap-3 overflow-auto mt-10">
        {products.map((product, index) => (
          <FeaturedProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
