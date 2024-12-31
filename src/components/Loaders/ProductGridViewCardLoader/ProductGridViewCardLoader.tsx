import React from 'react';

const ProductGridViewCardLoader = () => {
    return (
        <div className="animate-pulse bg-neutral-55/20 border border-neutral-45 rounded-lg relative p-5">
            <div className="bg-neutral-45/30 w-full h-[230px] rounded-md"></div>
            <hr className="border border-neutral-45 my-5" />
            <div className="space-y-3">
                {/* Title */}
                <div className="bg-neutral-45/30 h-6 w-3/4 rounded-md"></div>

                {/* Ratings */}
                <div className="flex items-center gap-2">
                    <div className="bg-neutral-45/30 h-4 w-1/6 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-4 w-1/6 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-4 w-1/6 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-4 w-1/6 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-4 w-1/6 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-4 w-10 rounded-md"></div>
                </div>

                {/* Price */}
                <div className="flex gap-2">
                    <div className="bg-neutral-45/30 h-6 w-1/3 rounded-md"></div>
                    <div className="bg-neutral-45/30 h-5 w-1/4 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductGridViewCardLoader;