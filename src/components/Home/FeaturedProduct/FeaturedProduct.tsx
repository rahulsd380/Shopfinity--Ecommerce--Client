"use client";

import React, { useRef } from "react";
import FeaturedProductCard from "./FeaturedProductCard";
import { ICONS } from "@/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import { TProduct } from "@/types/product.types";

const FeaturedProduct = () => {
  const { data } = useGetAllProductsQuery({page:1, limit:20});

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between">
        <h1 className="text-neutral-10 text-2xl md:text-[32px] font-semibold font-Sora">
          Our Featured Products
        </h1>
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex items-center gap-5">
            <button className="font-Inter font-medium">All</button>
            <button className="font-Inter font-medium">Vegetables</button>
            <button className="font-Inter font-medium">Fruits</button>
            <button className="font-Inter font-medium">Coffee & Teas</button>
            <button className="font-Inter font-medium">Meat</button>
          </div>

          <Link href={"/products"} className="font-Inter font-medium text-neutral-10 px-3 py-2 bg-primary-20 flex items-center gap-2 rounded-3xl">
              See All
              <Image src={ICONS.rightArrow} className="size-6" alt="Previous" />
          </Link>

          <div className="flex items-center gap-5">
            <button
              ref={prevRef}
              className="size-[46px] rounded-full bg-neutral-65 hover:bg-neutral-45 transition duration-300 flex items-center justify-center"
            >
              <Image src={ICONS.leftArrow} className="size-6" alt="Previous" />
            </button>
            <button
              ref={nextRef}
              className="size-[46px] rounded-full bg-neutral-65 hover:bg-neutral-45 transition duration-300 flex items-center justify-center"
            >
              <Image src={ICONS.rightArrow} className="size-6" alt="Next" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Swiper
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          spaceBetween={28}
          modules={[ Navigation]}
          className="rounded-xl border border-[rgba(173,173,173,0.25)] mt-10"
        >
          {data?.data?.products?.slice(0,15)?.map((product:TProduct, index:number) => (
            <SwiperSlide key={index}>
              <FeaturedProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProduct;