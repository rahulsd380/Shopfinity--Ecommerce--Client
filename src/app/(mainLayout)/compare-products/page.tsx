"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import CompareProductCard from "@/components/CompareProducts/CompareProductCard/CompareProductCard";
import Banner from "@/components/reusable/Banner/Banner";
import Container from "@/components/shared/Container/Container";
import { useEffect, useState } from "react";

const CompareProducts = () => {

  const [compareList, setCompareList] = useState<any[]>([]);
  console.log(compareList)
  
    useEffect(() => {
      const savedProducts = JSON.parse(localStorage.getItem("compareProducts") || "[]");
      setCompareList(savedProducts);
    }, []);
  
    const handleRemoveFromCompareList = (_id: string) => {
      const updatedProducts = compareList?.filter((product) => product?._id !== _id);
      setCompareList(updatedProducts);
      localStorage.setItem("compareProducts", JSON.stringify(updatedProducts));
    };

  return (
    <Container>
      <Banner
        bgColor="bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]"
        title={` Compare, Choose, Decide, Win!`}
        description="Easily Compare Features, Prices, and Reviews to Make the Best Choice"
      />

      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {compareList?.map((product) => (
          <CompareProductCard key={product?._id} product={product} handleRemoveFromCompareList={handleRemoveFromCompareList} />
        ))}
      </div>
    </Container>
  );
};

export default CompareProducts;
