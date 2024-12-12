import { IMAGES } from "@/assets";
import Image from "next/image";

const CartProductCard = ({
  decrementQuantity,
  incrementQuantity,
  quantity,
}) => {
  return (
    <div className="font-Inter flex flex-col md:flex-row justify-between border-b border-neutral-40/80 pb-3">
      <div className="flex gap-5">
        <div className="size-20 rounded-md border border-neutral-40/60 flex items-center justify-center">
          <Image src={IMAGES.product} alt="" className="size-[60px]" />
        </div>

        <div>
          <h1 className="font-Inter text-lg font-semibold leading-5 text-neutral-15">
            Iphone 13 Pro max
          </h1>

          <p className="text-neutral-20 font-semibold mt-3">
            Category : <span className="font-normal">Phone</span>, Brand :{" "}
            <span className="font-normal">Iphone</span>, Stock :{" "}
            <span className="font-normal">100 Items</span>
          </p>

          <p className="text-neutral-20 font-semibold mt-1">
            Seller : <span className="font-normal">Rahul SD</span>
          </p>

          <div className="flex items-center gap-2 mt-3">
            <button className="px-3 py-[10px] border border-neutral-40/60 rounded-md text-warning-10">
              Remove
            </button>
            <button className="px-3 py-[10px] border border-neutral-40/60 rounded-md text-secondary-10">
              Save for later
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center gap-7 mt-5 md:mt-0">
        <h1 className="font-Inter text-lg font-bold leading-5 text-neutral-15 text-end">
          $999
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={decrementQuantity}
            className="px-3 py-1 border border-neutral-300 text-neutral-700 rounded"
          >
            -
          </button>
          <span className="text-neutral-800">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="px-3 py-1 border border-neutral-300 text-neutral-700 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
