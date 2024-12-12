import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const Banner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row justify-between bg-primary-20 py-10 mt-8 rounded-xl">
      {/* Background Image */}
      <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="flex flex-col gap-4 items-start z-10 px-5 md:px-10">
        <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[50px] 2xl:text-[60px] font-semibold leading-normal md:leading-[80px]">
          {title}
        </h1>
        <p className="text-neutral-60 font-Inter text-xl font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
