import React from "react";
import BestSelling from "../components/homePageComponents/BestSelling";
import PromotionCardsSection from "../components/homePageComponents/PromotionCardsSection";
import PromotionHeroSection from "../components/homePageComponents/PromotionHeroSection";
import GallerySection from "../components/homePageComponents/GallerySection";

export default function Home() {
  return (
    <>
      <PromotionHeroSection />
      <PromotionCardsSection />
      <BestSelling />
      <GallerySection />
    </>
  );
}
