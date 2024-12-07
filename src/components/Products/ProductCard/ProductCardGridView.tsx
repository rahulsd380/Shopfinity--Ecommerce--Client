import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const ProductCardGridView = () => {
  return (
    <div className=" bg-white border border-neutral-45 rounded-lg">
      <div className="p-3">
        <Image
          src={IMAGES.product}
          alt="product-img"
          className="w-full h-[230px] "
        />
      </div>
      <hr className="border border-neutral-45" />
      <div className="p-5">
        {/* Price and heart icon */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            {/* Price */}
            <div className="flex items-center gap-2">
              <h1 className="text-neutral-15 font-Inter text-lg font-semibold">
                $99.99
              </h1>
              <h2 className="text-neutral-40 font-Inter line-through">
                $1128.00
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <Image src={ICONS.star} alt="star-icon" className="size-4" />
              <p className="text-secondary-10">5.0</p>
            </div>
          </div>

          <button className="border border-neutral-45 p-2 flex items-center justify-center rounded-md hover:bg-neutral-45/30 transition duration-300">
            <Image src={ICONS.heart} alt="star-icon" className="size-5" />
          </button>
        </div>

        <p className="text-neutral-25 font-Inter mt-3">
          Iphone 11 Pro Max
        </p>
      </div>
    </div>
  );
};

export default ProductCardGridView;
