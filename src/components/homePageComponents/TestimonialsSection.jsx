import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jake Miller",
    rating: 3,
    date: "January 12, 2025",
    text: "I've been ordering from this flower shop for years and they never disappoint. The quality and service are exceptional!",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Tyler Brooks",
    rating: 3,
    date: "January 12, 2025",
    text: "Customer service is top-notch and the flowers last longer than any others I've bought. Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Max Turner",
    rating: 3,
    date: "January 12, 2025",
    text: "The team truly cares about every order. I always feel confident when I buy flowers from here. The checkout process was sup...",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className=" py-14">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#FF668B]">
          Testimonials
        </p>
        <h2 className="text-2xl font-bold text-[#741C21] p-0">
          <span
            className="relative underline decoration-[#E65073] decoration-2 underline-offset-4 
                         before:content-[''] 
               before:absolute 
               before:left-0 
               before:top-6 
               before:-translate-y-1/2 
               before:h-3 
               before:w-70 
               before:rounded-full
               before:bg-[#FFE0E7]
               before:-z-10"
          >
            Real Words
          </span>{" "}
          from Happy Customers
        </h2>
      </div>
      <div className="bg-[#FBEAEA] mx-0 p-30">
        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl bg-white px-6 pb-6 pt-14 drop-shadow-xl"
            >
              {/* Avatar */}
              <div className="absolute -top-17 left-1/2 -translate-x-1/2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-25 w-25 rounded-full border-2 border-white object-cover"
                />
              </div>

              <p className="mb-2 text-center text-sm font-semibold text-gray-900">
                {t.name}
              </p>
              <div className="mb-3 flex justify-center">
                <StarRating rating={t.rating} />
              </div>
              <p className="mb-4 text-center text-sm leading-relaxed text-gray-600">
                {t.text}
              </p>
              <p className="text-center text-xs text-gray-400">{t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
