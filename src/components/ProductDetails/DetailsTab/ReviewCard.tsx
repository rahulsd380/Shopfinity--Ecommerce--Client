import { ICONS } from "@/assets";
import Image from "next/image";
import { TReview } from "@/types/review.types";
import formatDate from "@/utils/formatDate";

type TReviewCard = {
  review: TReview;
};
const ReviewCard: React.FC<TReviewCard> = ({ review }) => {
  return (
    <div className="flex gap-3 w-full font-Inter border-b border-neutral-30/20 pb-4">
      <div className="size-12 rounded-full flex items-center justify-center bg-neutral-55 border border-neutral-45">
        <Image src={ICONS.userGray} alt="" className="size-7" />
      </div>
      <div>
        <p className="font-semibold text-neutral-10 font-Inter">
          {review?.userName} -{" "}
          <span className="text-xs text-neutral-60 font-normal">
            {formatDate(review?.reviewDate as string)}
          </span>
        </p>
        <div className="flex items-center gap-1">
          {Array.from({ length: review?.rating }).map((_, index) => (
            <Image
              key={index}
              src={ICONS.star}
              alt={`star-${index + 1}`}
              className="size-3"
            />
          ))}
        </div>
        <p className="mt-4 text-neutral-30 text-sm font-normal">
          {review?.reviewText}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
