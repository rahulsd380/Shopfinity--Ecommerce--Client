"use client";
import { useState } from "react";
import Description from "./Description";
import Specification from "./Specification";
import Reviews from "./Reviews";

const DetailsTab = () => {
  const [detailsTab, setDetailsTab] = useState<
    "Description" | "Specification" | "Reviews"
  >("Description");
  const tabButtons = ["Description", "Specification", "Reviews"];
  return (
    <div className="mt-20">
      {/* Tab buttons */}
      <div className="flex items-center gap-5 border-b border-neutral-40 pb-4">
        {tabButtons.map((button: string, index) => (
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

      {detailsTab === "Description" ? (
        <Description />
      ) : detailsTab === "Specification" ? (
        <Specification />
      ) : (
        <Reviews />
      )}
    </div>
  );
};

export default DetailsTab;
