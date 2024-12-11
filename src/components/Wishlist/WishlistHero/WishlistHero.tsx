import { IMAGES } from "@/assets";
import Image from "next/image";


const WishlistHero = () => {
    return (
        <div className="relative flex flex-col-reverse lg:flex-row justify-between bg-primary-20 py-10 mt-8">
      {/* Background Image */}
      <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      <div className="flex flex-col justify-center gap-4 items-start px-3 md:px-5 pl-0 lg:pl-12 lg:px-0 z-10">
        <h1 className="text-neutral-15 font-Sora text-[40px] md:text-[50px] 2xl:text-[60px] font-semibold leading-normal md:leading-[80px] px-3 md:px-5 lg:px-0">
          Your Wishlist Products (10)
        </h1>
        <p className="text-neutral-60 font-Inter text-xl font-medium px-3 md:px-5 lg:px-0">
        Your curated collection of desired items, ready for you to explore.
            </p>
      </div>
    </div>
    );
};

export default WishlistHero;