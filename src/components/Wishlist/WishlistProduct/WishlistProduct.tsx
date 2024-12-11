import { IMAGES } from "@/assets";
import FeaturedProductCard from "@/components/Home/FeaturedProduct/FeaturedProductCard";
import React from "react";

const WishlistProduct = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-7 mt-[50px]">
      {products.map((product, index) => (
        <FeaturedProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default WishlistProduct;
