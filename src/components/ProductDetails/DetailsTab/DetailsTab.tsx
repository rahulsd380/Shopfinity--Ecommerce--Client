"use client";
import { useState } from "react";
import Description from "./Description";
import Specification from "./Specification";
import Reviews from "./Reviews";

const DetailsTab = ({product}) => {
  const [detailsTab, setDetailsTab] = useState<"Description" | "Specification" | "Reviews">("Description");

  // Tab buttons
  const tabButtons: Array<"Description" | "Specification" | "Reviews"> = [
    "Description",
    "Specification",
    "Reviews",
  ];

  return (
    <div className="w-full lg:w-[70%] p-4">
      {/* Tab buttons */}
      <div className="flex items-center gap-5 border-b border-neutral-40 pb-4 overflow-x-auto">
        {tabButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setDetailsTab(button)}
            className={`${
              detailsTab === button
                ? "text-primary-10 font-bold"
                : "text-neutral-30/80 font-medium"
            } text-xl font-Sora`}
          >
            {button}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {detailsTab === "Description" ? (
          <Description description={product?.description}/>
        ) : detailsTab === "Specification" ? (
          <Specification />
        ) : (
          <Reviews />
        )}
      </div>
    </div>
  );
};

export default DetailsTab;
