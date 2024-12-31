import React from 'react';

const ProductListViewCardLoader = () => {
    return (
        <div className="bg-neutral-55/20 border border-neutral-45 rounded-lg flex items-center gap-4 font-Inter p-5 relative animate-pulse">

    {/* Image Loader */}
    <div className="p-3">
      <div className="w-[280px] h-[180px] bg-neutral-45/30 rounded-md"></div>
    </div>

    {/* Content Loader */}
    <div className="relative w-full">
      {/* Title Placeholder */}
      <div className="h-6 w-3/4 bg-neutral-45/30 rounded-md"></div>

      {/* Price Placeholder */}
      <div className="flex items-center gap-2 mt-4">
        <div className="h-8 w-1/4 bg-neutral-45/30 rounded-md"></div>
        <div className="h-6 w-1/6 bg-neutral-45/30 rounded-md"></div>
      </div>

      {/* Rating Placeholder */}
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-4 h-4 bg-neutral-45/30 rounded-full"></div>
          ))}
          <div className="w-10 h-4 bg-neutral-45/30 rounded-md"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neutral-45/30 rounded-full"></div>
          <div className="w-16 h-4 bg-neutral-45/30 rounded-md"></div>
          <div className="w-2 h-2 bg-neutral-45/30 rounded-full"></div>
          <div className="w-24 h-4 bg-neutral-45/30 rounded-md"></div>
        </div>
      </div>

      {/* Description Placeholder */}
      <div className="mt-3">
        <div className="h-4 w-3/4 bg-neutral-45/30 rounded-md"></div>
        <div className="h-4 w-2/4 bg-neutral-45/30 rounded-md mt-2"></div>
      </div>

      {/* View Details Placeholder */}
      <div className="mt-3 h-5 w-32 bg-neutral-45/30 rounded-md"></div>

      {/* Wishlist and Cart Buttons */}
      <div className="flex items-center gap-2 absolute top-2 right-2">
        <div className="w-8 h-8 bg-neutral-45/30 rounded-full"></div>
        <div className="w-8 h-8 bg-neutral-45/30 rounded-full"></div>
      </div>
    </div>
  </div>
    );
};

export default ProductListViewCardLoader;