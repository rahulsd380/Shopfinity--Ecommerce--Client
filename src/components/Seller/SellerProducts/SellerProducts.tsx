"use client";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import { TProduct } from "@/types/product.types";
import { useState } from "react";

const SellerProducts = ({products}:{products : TProduct[]}) => {
  const [sellerTab, setSellerTab] = useState("Seller Products");
  const tabButtons = [
    "Seller Products",
    "Feedbacks",
    "Privacy Policy",
    "Extra Info",
  ];
  return (
    <div className="bg-white border border-neutral-45 rounded-xl p-5 mt-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between border-b pb-4">
        <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hidden w-full">
          {tabButtons.map((btn, index) => (
            <button
              onClick={() => setSellerTab(btn)}
              key={index}
              className={`${
                sellerTab === btn ? "text-primary-10" : "text-neutral-10"
              } px-4 py-2 font-Inter`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Fresh Butter"
              className="border border-neutral-45 py-3 pl-4 pr-[115px] outline-none w-full rounded-xl"
            />

            <button className="bg-primary-10 hover:bg-primary-10/80 transition duration-300 text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer group">
              Search
            </button>
          </div>

          <div className="flex items-center gap-3">
          <select
            name=""
            id=""
            className="bg-white border border-neutral-45 rounded-xl p-3 focus:outline-none"
          >
            <option disabled>Sort by-</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Most Recent">Oldest</option>
          </select>

          <select
            name=""
            id=""
            className="bg-white border border-neutral-45 rounded-xl p-3 focus:outline-none"
          >
            <option disabled>Sort by-</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Most Recent">Oldest</option>
          </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
          {
            products?.length > 0 ?
          products?.map((product:TProduct) => (
            <ProductCardGridView key={product._id} product={product} />
          ))
          :
          <p>No products available!</p>
          }
        </div>
    </div>
  );
};

export default SellerProducts;
