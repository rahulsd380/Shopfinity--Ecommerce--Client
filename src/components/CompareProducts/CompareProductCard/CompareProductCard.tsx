/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";

type TReview = {
  userId: string;
  reviewId: string;
};

type TCompareProduct = {
  product: {
    _id:string;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    images: string[] | any[];
    ratings?: number;
    reviews?: TReview[];
    sellerName: string;
    createdAt: Date;
  };
};
const CompareProductCard: React.FC<TCompareProduct> = ({ product }) => {
  return (
    <div className="shadow-md rounded-md">
      <div className="flex items-center justify-between w-full p-4">
        <h2 className="text-[1.4rem] font-semibold">{product.name}</h2>
        <Link
          href={`/products/${product._id}`}
          className="size-8 rounded-full bg-neutral-65 hover:bg-neutral-45 border border-neutral-45 transition duration-300 flex items-center justify-center"
          style={{ transitionDelay: "0.1s" }}
        >
          <Image src={ICONS.eye} className="size-4" alt="View" />
        </Link>
      </div>
      <Image src={product.images[0]} alt="product" className="w-full" />

      <div className="p-4">
        <p className="text-[1rem] text-gray-700">{product.description}</p>

        <div className="mt-5 flex items-center justify-between w-full">
          <h3 className="text-[1.4rem] font-semibold flex items-center gap-[4px]">
            ${product.price}
            <del className="text-[1rem] text-red-500 font-[300]">$18.90</del>
          </h3>

          <button className="py-2 px-6 bg-primary-10 text-white rounded-md">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareProductCard;
