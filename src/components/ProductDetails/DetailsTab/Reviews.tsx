import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const Reviews = () => {
  const review = [
    {
      reviewerName: "Alice Johnson",
      reviewerImage: IMAGES.logo,
      reviewDate: "2024-08-01",
      review: "Great product! Highly recommend it.",
    },
    {
      reviewerName: "Bob Smith",
      reviewerImage: IMAGES.logo,
      reviewDate: "2024-07-28",
      review: "Not what I expected. The quality could be better.",
    },
    {
      reviewerName: "Charlie Brown",
      reviewerImage: IMAGES.logo,
      reviewDate: "2024-07-15",
      review: "Excellent service and fast delivery.",
    },
  ];
  return (
    <div>
      <div className="bg-white border border-neutral-45 rounded-lg p-4">
        <h1 className="text-xl font-bold text-neutral-55">Reviews</h1>

        <hr className="border border-neutral-20/10 mt-3" />

        <div className="flex flex-col md:flex-row gap-10 mt-6">
          {/* Left average rating */}
          <div className="bg-white p-3 rounded-lg shadow flex flex-col gap-4 items-center justify-center w-full md:w-[200px]">
            <h1 className="text-3xl font-bold text-neutral-10 font-Sora">
              5.00
            </h1>
            <div className="flex items-center gap-[5px]">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={ICONS.star}
                  alt={`star-${index}`}
                  className={`w-4`}
                />
              ))}
            </div>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        {review.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-45 rounded-lg p-4 flex flex-col gap-3 mt-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src={review.reviewerImage} alt="" className="size-20" />
                <p>
                  <p className="font-semibold text-neutral-60 text-[15px]">
                    {review.reviewerName}
                  </p>
                  <p className="font-normal text-neutral-60 text-[11px]">
                    {review.reviewDate}
                  </p>
                </p>
              </div>

              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={ICONS.star}
                    alt=""
                    className="size-4"
                  />
                ))}
              </div>
            </div>
            <p className="text-body-text font-normal text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              molestias, tempore sequi assumenda reprehenderit placeat
              necessitatibus asperiores. Obcaecati soluta provident deserunt
              odit quis similique unde non expedita placeat distinctio,
              voluptatem totam minus quasi omnis pariatur in consequuntur, vitae
              molestias quisquam!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
