/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  imageUrl: any;
  category: string;
  name: string;
  rating: number; // Rating out of 5
  reviews: number; // Number of reviews
  author: string;
  price: string; // Current price
  originalPrice: string; // Original price
}

const FeaturedProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  category,
  name,
  rating,
  reviews,
  author,
  price,
  originalPrice,
}) => {
  return (
    <div className="relative flex flex-col justify-center px-3 py-4 border-r border-[rgba(173,173,173,0.25)] bg-white group">
      <div className="px-2 py-1 bg-warning-10 text-white font-semibold font-Sora absolute top-3 left-0 rounded-r-2xl rounded-l-md text-xs">
        10%
      </div>

      {/* Sliding buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 transform translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
        <Link
          href={`/products/${1}`}
          className="size-8 rounded-full bg-neutral-65 hover:bg-neutral-45 border border-neutral-45 transition duration-300 flex items-center justify-center"
          style={{ transitionDelay: "0.1s" }}
        >
          <Image src={ICONS.eye} className="size-4" alt="View" />
        </Link>
        <Link
          href={"/"}
          className="size-8 rounded-full bg-neutral-65 hover:bg-neutral-45 border border-neutral-45 transition duration-500 flex items-center justify-center"
          style={{ transitionDelay: "0.5s" }}
        >
          <Image src={ICONS.compare} className="size-4" alt="Compare" />
        </Link>
      </div>
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4">
        <p className="text-neutral-40 font-Inter text-xs">{category}</p>
        <h3 className="text-neutral-10 font-Sora font-semibold leading-normal mt-[7px]">
          {name}
        </h3>

        <div className="flex items-center mt-3">
          {/* Render Stars */}
          <div className="flex items-center text-yellow-400 h-fit">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < rating ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.124 6.563a1 1 0 00.95.69h6.905c.969 0 1.371 1.24.588 1.81l-5.592 4.062a1 1 0 00-.364 1.118l2.124 6.563c.3.921-.755 1.688-1.538 1.118l-5.592-4.062a1 1 0 00-1.176 0l-5.592 4.062c-.783.57-1.838-.197-1.538-1.118l2.124-6.563a1 1 0 00-.364-1.118L2.39 11.99c-.783-.57-.381-1.81.588-1.81h6.905a1 1 0 00.95-.69l2.124-6.563z"
                />
              </svg>
            ))}
          </div>
          <p className="text-sm text-neutral-10 ml-2">({reviews})</p>
        </div>
        <p className="text-neutral-40 font-Inter text-[12px]">
          By{" "}
          <span className="text-primary-10 font-Inter text-[12px]">
            {author}
          </span>
        </p>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <p className="text-primary-10 font-Inter text-xl font-bold">
              ${price}
            </p>
            <p className="text-neutral-40 text-sm line-through ml-2">
              ${originalPrice}
            </p>
          </div>
          <button className="px-3 py-2 rounded w-fit bg-green-100 text-green-600 font-medium flex items-center justify-center gap-2 hover:bg-green-200 transition">
            <Image src={ICONS.cart} alt="" className="size-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
