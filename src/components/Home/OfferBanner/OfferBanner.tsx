import OfferBannerCard from './OfferBannerCard';
import { IMAGES } from '@/assets';

const OfferBanner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-[100px]">
        <OfferBannerCard
          badgeText="Limited Time Offer"
          title="Free delivery over $50 "
          description="Get fresh groceries delivered to your door."
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.offerBanner1}
          imageAlt="Person holding groceries"
          bgColor="#fff7e6" 
        />
        <OfferBannerCard
          badgeText="Limited Time Offer"
          title="Organic Food Of Your Choice"
          description="Save up to 60% off on your first order"
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.offerBanner2}
          imageAlt="Person holding groceries"
          bgColor="#d2f0d4"
        />
      </div>
    );
};

export default OfferBanner;