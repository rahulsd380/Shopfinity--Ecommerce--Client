import { IMAGES } from "@/assets";
import Image, { StaticImageData } from "next/image";

interface ReusableBannerProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  bgColor : string;
}

const OfferBannerCard: React.FC<ReusableBannerProps> = ({
  badgeText = "Free delivery",
  title = "Free delivery over $50",
  description = "Shop $50 product and get free delivery anywhere.",
  buttonText = "Shop Now",
  buttonUrl = "/shop",
  imageSrc = "/default-image.png",
  imageAlt = "Banner Image",
  bgColor,
}) => {
  return (
    <div className={`relative w-full h-[600px] lg:h-[400px] shadow flex flex-col-reverse lg:flex-row items-center`} style={{ backgroundColor: bgColor }}>
       <Image
        src={IMAGES.bgVector}
        alt="Background Vector"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex-1 ml-10 py-5 lg:py-0">
        <span className="bg-secondary-15 text-yellow-800 text-sm font-semibold px-2 py-1 rounded-sm inline-block mb-2">
          {badgeText}
        </span>
        <h2 className="text-neutral-10 text-[28px] font-semibold font-Sora mt-4">{title}</h2>
        <p className="text-neutral-60 font-Inter text-lg font-medium mt-4">
             {description}
            </p>
        <a
          href={buttonUrl}
          className="inline-block bg-primary-10 text-white font-semibold px-4 py-2 rounded-sm hover:bg-green-600 transition mt-10"
        >
          {buttonText}
        </a>
      </div>
      {/* Image */}
      <div className="relative z-10 w-full md:w-1/2 h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>
    </div>
  );
};

export default OfferBannerCard;
