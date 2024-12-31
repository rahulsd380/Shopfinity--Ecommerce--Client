const ShopCardLoader = () => {
    return (
      <div className="bg-gradient-to-r from-slate-50/70 to-green-50/70 border border-primary-10/30 rounded-2xl p-6 animate-pulse">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-16 rounded-full border border-primary-10 bg-white flex items-center justify-center">
              <div className="bg-[#FEEFEA] p-1 flex items-center justify-center rounded-full size-[55px]">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="w-32 h-6 bg-gray-300 rounded-md mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
  
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="w-12 h-6 bg-gray-300 rounded-md mb-1 mx-auto"></div>
              <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
            </div>
            <div className="text-center">
              <div className="w-12 h-6 bg-gray-300 rounded-md mb-1 mx-auto"></div>
              <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>
  
        <div className="w-full h-4 bg-gray-300 rounded-md mt-4"></div>
  
        <div className="flex items-center gap-4 mt-7">
          <div className="w-full md:w-32 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-full md:w-32 h-10 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    );
  };
  
  export default ShopCardLoader;
  