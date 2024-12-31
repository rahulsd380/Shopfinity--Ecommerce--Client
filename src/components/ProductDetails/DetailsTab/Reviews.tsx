"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import StarRatings from 'react-star-ratings';
import { ICONS } from "@/assets";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import AddReviewForm from "./AddReviewForm";
import { TReview } from "@/types/review.types";

const Reviews = ({
  productId,
  reviews,
  isProductBought,
  ratings,
}: {
  productId: string;
  reviews: any;
  isProductBought: boolean;
  ratings : number;
}) => {
  const buttonStyles =
    "flex items-center justify-center gap-2 px-4 py-2 border border-neutral-45 rounded-md font-Inter font-medium text-neutral-10 focus:outline-none hover:bg-neutral-45/40 transition duration-300";
  return (
    <div>
      <div className="bg-white border border-neutral-45 rounded-lg p-4">
        <h1 className="text-xl font-bold text-primary-10">
          Here's What Our Customers Are Saying!
        </h1>

        <hr className="border border-neutral-20/10 mt-3" />

        <div className="flex flex-col md:flex-row gap-10 mt-6">
          {/* Left average rating */}
          <div className="bg-white p-3 rounded-lg shadow flex flex-col gap-4 items-center justify-center w-full md:w-[200px]">
            <h1 className="text-3xl font-bold text-neutral-10 font-Sora">
              {ratings}
            </h1>
            {/* <div className="flex items-center gap-[5px]">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={ICONS.star}
                  alt={`star-${index}`}
                  className={`w-4`}
                />
              ))}
            </div> */}
             <StarRatings
              rating={ratings}
              starRatedColor="#FF8A00"
              numberOfStars={5}
              name="rating"
              starDimension="19px"
              starSpacing="2px"
            />
            <p className="text-neutral-20 font-semibold">Product Rating</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            {/* Review Status Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={ICONS.star} alt="" className="size-4" />
                <p className="text-neutral-20 font-semibold">5</p>
              </div>

              {/* Progress */}
              <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                <div className="bg-primary-10 rounded-[100px] w-[100%] h-2"></div>
              </div>
              <p className="text-neutral-20 text-sm">89</p>
            </div>

            {/* Review Status Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={ICONS.star} alt="" className="size-4" />
                <p className="text-neutral-20 font-semibold">4</p>
              </div>

              {/* Progress */}
              <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                <div className="bg-[#FFB4AA] rounded-[100px] w-[80%] h-2"></div>
              </div>
              <p className="text-neutral-20 text-sm">60</p>
            </div>

            {/* Review Status Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={ICONS.star} alt="" className="size-4" />
                <p className="text-neutral-20 font-semibold">3</p>
              </div>

              {/* Progress */}
              <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                <div className="bg-[#FFD700] rounded-[100px] w-[60%] h-2"></div>
              </div>
              <p className="text-neutral-20 text-sm">38</p>
            </div>

            {/* Review Status Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={ICONS.star} alt="" className="size-4" />
                <p className="text-neutral-20 font-semibold">2</p>
              </div>

              {/* Progress */}
              <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                <div className="bg-[#8d28e0] rounded-[100px] w-[30%] h-2"></div>
              </div>
              <p className="text-neutral-20 text-sm">10</p>
            </div>

            {/* Review Status Rating */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={ICONS.star} alt="" className="size-4" />
                <p className="text-neutral-20 font-semibold">1</p>
              </div>

              {/* Progress */}
              <div className="bg-[#c6c6c9] rounded-[100px] w-full h-2">
                <div className="bg-warning-10 rounded-[100px] w-[5%] h-2"></div>
              </div>
              <p className="text-neutral-20 text-sm">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-5 border-b border-neutral-40 py-6">
        <div className="flex items-center gap-3">
          <button className={buttonStyles}>
            <Image src={ICONS.filter} alt="" className="size-5" />
            Filter
          </button>
          <button className={buttonStyles}>
            <Image src={ICONS.recent} alt="" className="size-5" />
            Most Recent
          </button>
        </div>

        <button className={buttonStyles}>
          <Image src={ICONS.write} alt="" className="size-5" />
          Write A Review
        </button>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        {
          reviews?.length < 1 ?
          <p>Not rated yet</p>
          :
        reviews?.map((review: TReview, index: number) => (
          <ReviewCard key={index} review={review} />
        ))
        }
      </div>

      {isProductBought && <AddReviewForm productId={productId} />}
    </div>
  );
};

export default Reviews;
