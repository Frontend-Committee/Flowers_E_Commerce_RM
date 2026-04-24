import PCard1 from "@/assets/PCard1.png";
import PCard2 from "@/assets/PCard2.png";
import PCard3 from "@/assets/PCard3.png";
import { PromotionCard } from "./PromotionCard";

export default function PromotionCardsSection() {
  const cards = [
    {
      image: PCard1,
      badge: "Wedding",
      title: "Celebrate Her Forever with a Gift She’ll Always Remember",
      href: "#",
    },
    {
      image: PCard2,
      badge: "Engagement",
      title: "Honor the Beginning of a Beautiful Journey Together",
      href: "#",
    },
    {
      image: PCard3,
      badge: "Anniversary",
      title: "Mark Every Year of Love with a Meaningful Surprise",
      href: "#",
    },
  ];

  return (
    <section className="w-full xl:px-22 py-8 px-8 lg:px-12">
      <div className="flex flex-col gap-4 md:flex-row">
        {cards.map((card, index) => (
          <PromotionCard
            key={index}
            image={card.image}
            badge={card.badge}
            title={card.title}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
}