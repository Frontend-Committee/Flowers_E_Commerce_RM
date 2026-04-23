import { LeftBanner } from "./LeftBanner";
import { PromotionCarousel } from "./PromotionCarousel";

export default function PromotionHeroSection() {
  return (
    <section className="w-full pt-13">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3">
            <LeftBanner />
          </div>

          <div className="col-span-12 md:col-span-9">
            <PromotionCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}