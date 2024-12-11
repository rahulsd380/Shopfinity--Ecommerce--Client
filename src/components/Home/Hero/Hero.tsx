import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row justify-between bg-primary-20 pb-10 mt-8">
      {/* Background Image */}
      <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* Hero Content */}
      <div className="order-1 md:order-2 flex justify-end items-start z-10 w-full h-full">
        <Image src={IMAGES.heroImg} alt="Hero" className="" />
      </div>
      <div className="flex flex-col justify-center gap-4 items-start px-3 md:px-5 pl-0 lg:pl-12 lg:px-0 z-10">
        <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[50px] 2xl:text-[60px] font-semibold leading-normal md:leading-[80px] px-3 md:px-5 lg:px-0">
          Don’t miss our daily amazing deals.
        </h1>
        <p className="text-neutral-60 font-Inter text-xl font-medium mt-7 px-3 md:px-5 lg:px-0">
              Save up to 60% off on your first order
            </p>

        {/* Email Input and Subscribe Button */}
        <div className="flex items-center w-full mt-10 max-w-[550px] px-3 md:px-5 lg:px-0">
          <div className="relative flex-grow">
          <Image src={ICONS.send} alt="send-icon" className="size-5 absolute left-3 top-5 bottom-0" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-4 pl-12 rounded-l focus:outline-none focus:ring-primary-10 transition duration-300 focus:ring-2 border border-white"
            />
          </div>
          <button className="bg-primary-10 hover:bg-primary-10/70 transition duration-300 border border-primary-10 text-white font-medium p-4 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
