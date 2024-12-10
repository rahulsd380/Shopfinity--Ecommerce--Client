import React from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Container from "@/components/shared/Container/Container";

const AppDownloadBanner = () => {
  return (
    <div className="relative flex p-10 justify-between items-center bg-primary-20 mt-[100px]">
      {/* Background Image */}
      <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* Content Section */}
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center ">
          <div className="flex flex-col justify-center items-start z-10">
            <h1 className="text-neutral-15 font-Sora text-[28px] md:text-[55px] lg:text-[35px] xl:text-[55px] font-semibold">
              Shop Faster With Shopfinity App
            </h1>
            <p className="text-neutral-60 font-Inter text-xl font-medium mt-7">
              Save up to 60% off on your first order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Image
                src={IMAGES.appStore}
                alt="App Store"
                className="w-full h-14 cursor-pointer"
              />
              <Image
                src={IMAGES.playStore}
                alt="Play Store"
                className="w-full h-14 cursor-pointer"
              />
            </div>
          </div>

          {/* App Banner Image */}
          <Image
            src={IMAGES.appBannerImg}
            alt="Hero Banner"
            className="w-full max-w-[700px] max-h-[600px] z-10"
          />
        </div>
      </Container>
    </div>
  );
};

export default AppDownloadBanner;
