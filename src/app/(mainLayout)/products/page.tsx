"use client";
import { ICONS } from "@/assets";
import Filters from "@/components/Products/Filter/Filter";
import ProductCardGridView from "@/components/Products/ProductCard/ProductCardGridView";
import ProductCardListView from "@/components/Products/ProductCard/ProductCardListView";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import { useState } from "react";
// import Link from "next/link";

const Products = () => {
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
    <Container>
      <div className="mt-10 flex gap-4 ">
        <div className="w-[20%]">
          <Filters />
        </div>

        <div className="w-[80%]">
          <div className="bg-neutral-55/20 border border-neutral-45 p-5 rounded-lg flex items-center justify-between">
            <p className="font-Inter text-neutral-15">
              12,911 items in{" "}
              <span className="font-semibold">Mobile accessory</span>
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {/* Checkbox Input */}
                <input
                  type="checkbox"
                  id={`verified`}
                  className="w-4 h-4 text-primary-10 border-gray-300 rounded focus:outline-none focus:ring-2"
                />
                {/* Label */}
                <label
                  htmlFor={`verified`}
                  className="font-Inter text-neutral-15"
                >
                  Verified only
                </label>
              </div>

              <div className="relative flex-grow">
                <Image
                  src={ICONS.search}
                  alt="send-icon"
                  className="size-4 absolute right-3 top-3 bottom-0"
                />
                <input
                  type="text"
                  placeholder="Search for your product..."
                  className="w-full px-4 py-2 pr-12 rounded focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-1 bg-neutral-65"
                />
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

          {viewType === "grid" ? (
            <div className="grid grid-cols-3 gap-5 mt-5">
              <ProductCardGridView />
            </div>
          ) : (
            <div className="flex flex-col gap-5 mt-5">
              <ProductCardListView />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Products;
