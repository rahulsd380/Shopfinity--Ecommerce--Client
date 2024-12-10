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
    <div className="p-10">
      <div className="flex justify-between">
        <p className="text-black font-quicksand text-[32px] font-semibold leading-normal">
          Featured Products
        </p>
        <div className="hidden lg:flex flex-col  pt-3 px-10">
          <nav className="flex gap-4 justify-end">
            <span>All</span>
            <span>Fruits</span>
            <span>Vegetables </span>
            <span>Beverages </span>
          </nav>
        </div>
      </div>

      <div className="p-6 flex gap-3 overflow-auto ">
        {products.map((product, index) => (
          <FeaturedProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
