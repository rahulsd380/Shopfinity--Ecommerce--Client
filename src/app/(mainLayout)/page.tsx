import FeaturedProduct from "@/components/Home/FeaturedProduct/FeaturedProduct";
// import Hero from "@/components/Home/Hero/Hero";
import OfferBanner from "@/components/Home/OfferBanner/OfferBanner";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import Container from "@/components/shared/Container/Container";
import AppDownloadBanner from "@/components/Home/AppDownloadBanner/AppDownloadBanner";
import Categories from "@/components/Home/Categories/Categories";
import HeroSlider from "@/components/Home/HeroSlider/HeroSlider";


export default function Home() {
  return (
    <div>
      <HeroSlider/>
      {/* <Hero/> */}
      <Container>
      <WhatWeOffer/>
        <Categories/>
      <FeaturedProduct/>
      <OfferBanner/>
      </Container>
      <AppDownloadBanner/>
    </div>
  );
}
