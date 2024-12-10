import Image, { StaticImageData } from 'next/image';

interface ReusableBannerProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  overlayColor?: string | null; // Allow string or null
  overlayOpacity?: string; // Optional opacity as a string
  backgroundImage?: string | StaticImageData; // Background image path
}

const OfferBannerCard: React.FC<ReusableBannerProps> = ({
  badgeText = "Free delivery",
  title = "Free delivery over $50",
  description = "Shop $50 product and get free delivery anywhere.",
  buttonText = "Shop Now",
  buttonUrl = "/shop",
  imageSrc = "/default-image.png",
  imageAlt = "Banner Image",
  overlayColor = null,
  overlayOpacity = "0.2",
}) => {

  return (
    <div
      className="relative w-full h-[400px] shadow flex  md:flex-row items-center">
      {/* Conditional Overlay */}
      {overlayColor && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            zIndex: 1, // Ensure it layers above background
          }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1  p-6 md:p-10">
        <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-2 py-1 rounded-sm inline-block mb-2">
          {badgeText}
        </span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className=" text-neutral-30 mb-4">{description}</p>
        <a
          href={buttonUrl}
          className="inline-block bg-primary-10 text-white font-semibold px-4 py-2 rounded-sm hover:bg-green-600 transition"
        >
          {buttonText}
        </a>
      </div>
      {/* Image */}
      <div className="relative z-10 w-1/2 h-full">
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
