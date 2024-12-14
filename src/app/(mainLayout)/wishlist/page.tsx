"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";
import WishlistProduct from "@/components/Wishlist/WishlistProduct/WishlistProduct";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setProducts(savedProducts);
  }, []);

  const handleRemoveFromWishlist = (_id: string) => {
    const updatedProducts = products.filter((product) => product._id !== _id);
    setProducts(updatedProducts);
    localStorage.setItem("wishlist", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <Container>
        <Banner
          bgColor="bg-gradient-to-r from-green-100 to-green-300"
          title={`Your Wishlist Products (${products?.length})`}
          description="Your curated collection of desired items, ready for you to explore."
        />
        <WishlistProduct 
          products={products} 
          handleRemoveFromWishlist={handleRemoveFromWishlist} 
        />
      </Container>
    </div>
  );
};

export default Wishlist;
