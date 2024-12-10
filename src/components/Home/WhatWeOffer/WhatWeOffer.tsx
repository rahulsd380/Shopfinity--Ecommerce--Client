import { IMAGES } from "@/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";

type TCardData = {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
};

const WhatWeOffer = () => {
  const cardData: TCardData[] = [
    {
      imageSrc: IMAGES.bestPrice,
      title: "Best Prices & Deals",
      description: "Don’t miss our daily amazing deals and prices",
    },
    {
      imageSrc: IMAGES.refundable,
      title: "Refundable ",
      description: "If your items have damage we agree to refund it",
    },
    {
      imageSrc: IMAGES.freeDelivery,
      title: "Free delivery",
      description: "Do purchase over $50 and get free delivery anywhere",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-5xl mx-auto gap-20 md:gap-10">
        {cardData.map((card, index) => (
          <div key={index} className="flex gap-3">
            <div className=" ">
              <Image
                src={card.imageSrc}
                alt={card.title}
                className="h-12 w-14"
              />
            </div>
            <div className="">
              <h1 className="text-base font-bold">{card.title}</h1>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
