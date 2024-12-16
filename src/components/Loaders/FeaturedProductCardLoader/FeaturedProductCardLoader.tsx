const FeaturedProductCardLoader = () => {
    return (
      <div className="relative flex flex-col justify-center px-3 py-4 border-r border-[rgba(173,173,173,0.25)] bg-white animate-pulse w-[234px] h-[330px]">
        {/* Discount Placeholder */}
        <div className="px-2 py-1 bg-neutral-45 rounded-r-2xl rounded-l-md w-12 h-5 absolute top-6 left-3"></div>
  
        {/* Product Image */}
        <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
  
        {/* Content Placeholder */}
        <div className="mt-4 space-y-3">
          {/* Category */}
          <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
          {/* Name */}
          <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
  
          {/* Ratings */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
              ))}
            </div>
            <div className="w-8 h-4 bg-gray-300 rounded"></div>
          </div>
  
          {/* Brand */}
          <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
  
          {/* Price & Add Button */}
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedProductCardLoader;
  