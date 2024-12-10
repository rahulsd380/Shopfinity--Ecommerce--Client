/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
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
    <div className="flex flex-col w-[250px] justify-center  p-0.5 rounded-[3px] border border-[rgba(173,173,173,0.25)] bg-white">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-4 p-3">
        <p className="text-[var(--Grey,#ADADAD)] font-quicksand text-[12px] font-normal leading-normal">
          {category}
        </p>
        <h3 className="text-[var(--Black,#253D4E)] font-quicksand text-[16px] font-semibold leading-normal">
          {name}
        </h3>
        <div className="flex items-center mt-2">
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
          <p className="text-sm text-gray-500 ml-2">({reviews})</p>
        </div>
        <p className="text-[var(--Grey,#ADADAD)] font-quicksand text-[12px] font-normal leading-normal">
          By{" "}
          <span className="text-[#3BB77E] font-quicksand text-[12px] font-normal leading-normal">
            {author}
          </span>
        </p>
        <div className="flex justify-between ">
        <div className="flex items-center mt-4">
          <p className="text-green-600 text-xl font-bold">${price}</p>
          <p className="text-gray-500 text-sm line-through ml-2">
            ${originalPrice}
          </p>
        </div>
        <button
          className="px-3 w-fit bg-green-100 text-green-600 font-medium  rounded-sm flex items-center justify-center hover:bg-green-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.894 4.447M7 13h10l3-8H6.112M7 13L5.447 7H21m-9 8v7m0-7H9m3 0h3"
            />
          </svg>
          Add
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default FeaturedProductCard;
