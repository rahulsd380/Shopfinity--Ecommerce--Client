import Image from "next/image";
import { useEffect, useState } from "react";

const Images = ({ images }:{images:string[]}) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [currentSlider, images]);

  if (!images || images.length === 0) {
    return <div>Loading images...</div>;
  }

  return (
    <div className="w-full xl:w-[35%] h-fit">
      {/* Main image */}
      <div className="border border-neutral-10/20 rounded-xl p-2 w-full">
        <Image
          src={images[currentSlider]}
          alt={`Product Image ${currentSlider}`}
          className="object-cover w-[400px] h-[400px]"
          width={500}
          height={500}
          
        />
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-3 mt-3">
        {images?.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlider(index)}
            className={`border rounded-xl p-2 size-[80px] cursor-pointer ${currentSlider === index ? "border-primary-10" : "border-neutral-10/20"}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              className="object-cover"
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
