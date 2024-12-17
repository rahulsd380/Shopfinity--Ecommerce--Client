"use client";

import { ICONS } from "@/assets";
import NoProducts from "@/components/NoProducts/NoProducts";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import ProductCardListView from "@/components/Products/ProductCard/ProductCardListView";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/product.types";
import Image from "next/image";
import { useState } from "react";

const AllProductsBySeller = () => {
  const { data } = useGetAllProductsQuery({page:1, limit:100});
  const [viewType, setViewType] = useState("grid");
  const viewButtons = [
    {
      label: "grid",
      icon: ICONS.gridView,
    },
    {
      label: "list",
      icon: ICONS.listView,
    },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <h1 className="text-neutral-10 font-Inter text-xl font-semibold">
          All Products ({data?.data?.products?.length || 0})
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Search bar */}
          <div className="flex">
            <input
              type="text"
              placeholder="Fresh Butter"
              className="border border-neutral-45 py-3 pl-4 pr-[115px] outline-none rounded-y-xl rounded-l-xl"
            />

            <button className="bg-primary-10 hover:bg-primary-10/80 transition duration-300 text-white px-5 py-3 flex items-center justify-center rounded-r-md cursor-pointer group">
              Search
            </button>
          </div>

          {/* Select dropdown */}
          <div className="flex items-center gap-3">
            <select
              name=""
              id=""
              className="bg-white border border-neutral-45 rounded-xl p-3 focus:outline-none"
            >
              <option disabled>Sort by-</option>
              <option value="all">All</option>
              <option value="duplicate">See duplicate products</option>
            </select>

            <select
              name=""
              id=""
              className="bg-white border border-neutral-45 rounded-xl p-3 focus:outline-none"
            >
              <option disabled>Category-</option>
              <option value="Most Recent">T-shirt</option>
              <option value="Most Recent">Child Cloths</option>
            </select>
          </div>

          <div className="flex bg-white border border-neutral-45 rounded-lg">
            {viewButtons.map((btn, index) => (
              <button
                key={index}
                onClick={() => setViewType(btn.label)}
                className={`${
                  btn.label === viewType ? "bg-[#EFF2F4]" : "bg-white"
                } p-2 flex items-center justify-center`}
              >
                <Image src={btn.icon} alt="grid-view" className="size-6" />
              </button>
            ))}
          </div>
        </div>
      </div>
      {data?.data?.products?.length > 0 ? (
        viewType === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
            {data?.data?.products?.map((product: TProduct) => (
              <ProductCardGridView
                key={product._id}
                product={product}
                isMenuActive={false}
                isCartIconVisible={false}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-5 mt-7">
            {data?.data?.products?.map((product: TProduct) => (
              <ProductCardListView
                key={product._id}
                product={product}
                isMenuActive={false}
              />
            ))}
          </div>
        )
      ) : (
        <NoProducts />
      )}
    </div>
  );
};

export default AllProductsBySeller;
