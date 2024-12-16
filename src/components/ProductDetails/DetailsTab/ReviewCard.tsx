import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex gap-3 w-full font-Inter border-b border-neutral-30/30 pb-4">
      <div className="size-12 rounded-full flex items-center justify-center bg-primary-10 w-[19%]">
        <Image src={ICONS.profile} alt="" className="size-7" />
      </div>
      <div>
        <p className="font-semibold text-neutral-10 font-Inter">
          Rahul Sutradhar -{" "}
          <span className="text-xs text-neutral-60 font-normal">
            16th Dec- 2024
          </span>
        </p>
        <Image src={ICONS.star} alt="" className="size-3" />
        <p className="mt-4 text-neutral-30 text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla
          incidunt ex, sunt, aliquid officia, odit optio veniam amet adipisci
          reiciendis repellendus. Ducimus aliquid eveniet voluptas deserunt
          repellat cum beatae rerum repudiandae voluptate! Autem suscipit,
          sapiente porro reiciendis nesciunt facere atque facilis. Eveniet
          laborum commodi facilis sequi architecto perspiciatis facere.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
