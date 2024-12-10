import OfferBannerCard from './OfferBannerCard';
import { IMAGES } from '@/assets';

const OfferBanner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-16">
        <OfferBannerCard
          badgeText="Limited Time Offer"
          title="20% Off on Fresh Produce"
          description="Get fresh groceries delivered to your door."
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.offerBanner1}
          imageAlt="Person holding groceries"
          overlayColor="#FFF5E1D9" 
          overlayOpacity="0.5"
          backgroundImage="/path-to-background.jpg"
        />
        <OfferBannerCard
          badgeText="Limited Time Offer"
          title="Organic Food"
          description="Save up to 60% off on your first order"
          buttonText="Order Now"
          buttonUrl="/shop"
          imageSrc={IMAGES.offerBanner2}
          imageAlt="Person holding groceries"
          overlayColor="#D2EFE1D9"
          overlayOpacity="0.5"
          backgroundImage="/path-to-background.jpg"
        />
      </div>
    );
};

export default OfferBanner;