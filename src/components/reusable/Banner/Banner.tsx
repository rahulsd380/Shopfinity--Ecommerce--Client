import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const Banner = ({
  title,
  description,
  bgColor
}: {
  title: string;
  description: string;
  bgColor:string;
}) => {
  return (
    <div className={`relative flex flex-col-reverse lg:flex-row justify-between py-10 mt-8 rounded-xl ${bgColor}`}>
      {/* Background Image */}
      <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="flex flex-col gap-4 items-start z-10 px-5 md:px-10">
        <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[45px] font-semibold">
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
