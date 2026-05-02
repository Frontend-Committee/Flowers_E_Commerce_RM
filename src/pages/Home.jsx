import React from "react";
import BestSelling from "../components/homePageComponents/BestSelling";
import PromotionCardsSection from "../components/homePageComponents/PromotionCardsSection";
import PromotionHeroSection from "../components/homePageComponents/PromotionHeroSection";
import GallerySection from "../components/homePageComponents/GallerySection";

import MostPopular from "../components/homePageComponents/MostPopular";
import About from "../components/homePageComponents/About";
import TestimonialsSection from "../components/homePageComponents/TestimonialsSection";
import TrustedSection from "../components/homePageComponents/TrustedSection";

export default function Home() {
  return (
    <>
      <PromotionHeroSection />
      <PromotionCardsSection />
      <BestSelling />
      <MostPopular />
      <About />
      <GallerySection />
      <TestimonialsSection />
      <TrustedSection />
    </>
  );
}
