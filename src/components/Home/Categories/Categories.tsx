/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { ICONS } from "@/assets";
import Image from "next/image";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { TCategory } from "@/app/(dashboardLayout)/dashboard/admin/manage-categories/page";

const Categories = () => {
  const {data} = useGetAllCategoriesQuery({});

  const colors = ["#FEEFEA", "#FFF3FF", "#F2FCE4", "#FEEFEA", "#ECFFEC", "#FFFCEB", "#DEF9EC"];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      import("swiper").then(({ Swiper }) => {
        Swiper.use([Navigation]);
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mt-[100px]">
        <h1 className="text-neutral-10 text-2xl md:text-[32px] font-semibold font-Sora mt-4">Our Top Categories</h1>
        <div className="flex items-center gap-5">
          <button
          ref={prevRef}
            className="size-[46px] rounded-full bg-neutral-65 hover:bg-primary-10 transition duration-300 flex items-center justify-center"
          >
            <Image src={ICONS.leftArrow} className="size-6" alt="Previous" />
          </button>
          <button
          ref={nextRef}
            className="size-[46px] rounded-full bg-neutral-65 hover:bg-primary-10 transition duration-300 flex items-center justify-center"
          >
            <Image src={ICONS.rightArrow} className="size-6" alt="Next" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
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
        spaceBetween={20}
        modules={[ Navigation]}
        className="carousel mt-10"
      >
        {data?.data?.categories.map((category:TCategory, index:number) => (
          <SwiperSlide key={index}>
            <CategoryCard
              category={category}
              bgColor={colors[index % colors.length]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
