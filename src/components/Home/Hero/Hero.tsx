import { IMAGES } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:flex justify-between bg-primary-20">
      <div className="order-1 md:order-2  flex justify-end items-start">
        <Image src={IMAGES.heroImg} alt="hero" />
      </div>
      <div className="flex flex-col justify-center gap-4 items-start md:p-20 p-10">
        <p className="text-neutral-10 font-quicksand text-[30px] md:text-[55px] font-bold leading-none tracking-[-0.55px]">
          Don’t miss our daily amazing deals.
        </p>
        <p className="text-neutral-30 font-quicksand text-[20px] text-start font-medium leading-none tracking-[-0.2px]">
        Save up to 60% off on your first order
        </p>
       
        <div className="flex items-center  ">
      <div className="relative flex-grow">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2  focus:outline-none  focus:ring-green-400focus:ring-2"
        />
        <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500 text-sm">
          
        </span>
      </div>
      <button className="bg-primary-10 hover:bg-primary-20 text-white font-medium py-2 px-4 ">
        Subscribe
      </button>
    </div>
      </div>
      
    </div>
  );
};

export default Hero;
