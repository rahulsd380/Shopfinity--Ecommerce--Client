import FeaturedProduct from "@/components/Home/FeaturedProduct/FeaturedProduct";
import Hero from "@/components/Home/Hero/Hero";
import OfferBanner from "@/components/Home/OfferBanner/OfferBanner";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import Container from "@/components/shared/Container/Container";
import AppDownloadBanner from "@/components/Home/AppDownloadBanner/AppDownloadBanner";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Container>
      <WhatWeOffer/>
      <OfferBanner/>
      </Container>
      <FeaturedProduct/>
      <AppDownloadBanner/>
    </div>
  );
}
