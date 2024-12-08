"use client"

import { ICONS } from "@/assets";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import ProductCardListView from "@/components/Products/ProductCard/ProductCardListView";
import Image from "next/image";
import { useState } from "react";

const AllProductsBySeller = () => {
    const [viewType, setViewType] = useState("grid");
  const viewButtons = [
    {
      label : "grid",
      icon : ICONS.gridView
    },
    {
      label : "list",
      icon : ICONS.listView
    },
];
    return (
        <div>
        <div className="flex items-center justify-between w-full">
            <h1 className="text-neutral-10 font-Inter text-xl font-semibold">All Products (28)</h1>
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
            <option disabled selected>Sort by-</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Most Recent">Oldest</option>
          </select>

          <select
            name=""
            id=""
            className="bg-white border border-neutral-45 rounded-xl p-3 focus:outline-none"
          >
            <option disabled selected>Category-</option>
            <option value="Most Recent">T-shirt</option>
            <option value="Most Recent">Child Cloths</option>
          </select>
          </div>

          <div className="flex bg-white border border-neutral-45 rounded-lg">
                    {
                      viewButtons.map((btn, index) => 
                        <button key={index} onClick={() => setViewType(btn.label)} className={`${btn.label === viewType ? "bg-[#EFF2F4]" : "bg-white"} p-2 flex items-center justify-center`}>
                    <Image src={btn.icon} alt="grid-view" className="size-6"/>
                    </button>
                      )
                    }
                </div>
        </div>
        </div>
        {
              viewType === "grid" ? 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
                    <ProductCardGridView/>
            </div>
            :
            <div className="flex flex-col gap-5 mt-7">
              <ProductCardListView isMenuActive={true} />
            </div>
            }
        </div>
    );
};

export default AllProductsBySeller;