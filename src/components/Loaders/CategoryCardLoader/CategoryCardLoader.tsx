
const CategoryCardLoader = () => {

  return (
    <div
    className="p-4 rounded flex flex-col items-center animate-pulse w-[170px] h-[180px]"
    style={{ backgroundColor: "#F3F4F6" }} // Replace with your preferred background
  >
    {/* Image Skeleton */}
    <div className="bg-neutral-200 rounded-full size-[100px]"></div>
    
    {/* Text Skeleton */}
    <div className="w-3/4 h-4 bg-neutral-200 rounded mt-4"></div>
    <div className="w-1/2 h-3 bg-neutral-300 rounded mt-2"></div>
  </div>
  );
};

export default CategoryCardLoader;
