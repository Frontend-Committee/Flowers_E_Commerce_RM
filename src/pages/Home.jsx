import React from "react";
import BestSelling from "../components/homePageComponents/BestSelling";
import PromotionCardsSection from "../components/homePageComponents/PromotionCardsSection";
import PromotionHeroSection from "../components/homePageComponents/PromotionHeroSection";
import MostPopular from "../components/homePageComponents/MostPopular";

export default function Home() {
  return (
    <>
      <PromotionHeroSection />
      <PromotionCardsSection />
      <BestSelling />
      <MostPopular />
    </>
  );
}
