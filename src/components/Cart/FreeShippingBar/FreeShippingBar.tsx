import React from "react";

const FreeShippingBar = () => {
  return (
    <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-8">
      <p className="text-neutral-30 text-sm">
        Add <span className="text-red-500 font-bold">$288.23</span> to cart and
        get free shipping!
      </p>
      <div className="h-2 bg-neutral-40 rounded-full mt-2">
        <div
          className="h-full bg-red-500 rounded-full"
          style={{ width: "20%" }}
        ></div>
      </div>
    </div>
  );
};

export default FreeShippingBar;
