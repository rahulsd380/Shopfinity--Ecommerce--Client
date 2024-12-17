"use client";
import { ICONS, IMAGES } from "@/assets";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/reusable/Banner/Banner";
import RippleEffect from "@/components/reusable/RippleEffect/RippleEffect";
import Container from "@/components/shared/Container/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const RecentlyViewedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const savedProducts = JSON.parse(
      localStorage.getItem("recentViews") || "[]"
    );
    setProducts(savedProducts);
  }, []);
  return (
    <Container>
      <Banner
        bgColor="bg-gradient-to-r from-green-100 to-green-300"
        title={"Products you viewed recently."}
        description="Your curated collection of desired items, ready for you to explore."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-16">
        {products?.map((product: any, index: number) => (
          <div
            key={index}
            className="relative flex flex-col justify-center px-3 py-4 border-r border-[rgba(173,173,173,0.25)] bg-white group"
          >
            <div className="px-2 py-1 bg-warning-10 text-white font-semibold font-Sora absolute top-3 left-0 rounded-r-2xl rounded-l-md text-xs">
              10%
            </div>

            <Image
              src={product?.image ? product?.image : IMAGES.product}
              width={100}
              height={100}
              alt={product?.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-neutral-40 font-Inter text-xs">
                {product?.category}
              </p>
              <h3 className="text-neutral-10 font-Sora font-semibold leading-normal mt-[7px]">
                {product?.name}
              </h3>

              <div className="flex items-center mt-3">
                {/* Render Stars */}
                <div className="flex items-center text-yellow-400 h-fit">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < product?.ratings ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.124 6.563a1 1 0 00.95.69h6.905c.969 0 1.371 1.24.588 1.81l-5.592 4.062a1 1 0 00-.364 1.118l2.124 6.563c.3.921-.755 1.688-1.538 1.118l-5.592-4.062a1 1 0 00-1.176 0l-5.592 4.062c-.783.57-1.838-.197-1.538-1.118l2.124-6.563a1 1 0 00-.364-1.118L2.39 11.99c-.783-.57-.381-1.81.588-1.81h6.905a1 1 0 00.95-.69l2.124-6.563z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-neutral-10 ml-2">
                  ({product?.ratings})
                </p>
              </div>
              <p className="text-neutral-40 font-Inter text-[12px]">
                Brand{" "}
                <span className="text-primary-10 font-Inter text-[12px]">
                  {product?.brand}
                </span>
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <p className="text-primary-10 font-Inter text-xl font-bold">
                    ${product?.price}
                  </p>
                  <p className="text-neutral-40 text-sm line-through ml-2">
                    ${product?.price + 10}
                  </p>
                </div>
                <RippleEffect>
                  <Link
                    href={`/${product?._id}`}
                    className="px-3 py-2 rounded w-fit bg-green-100 text-green-600 font-medium flex items-center justify-center gap-2 hover:bg-green-200 transition"
                  >
                    <Image src={ICONS.eye} alt="" className="size-4" />
                    View
                  </Link>
                </RippleEffect>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RecentlyViewedProducts;
