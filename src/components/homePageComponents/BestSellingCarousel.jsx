import { ShoppingCart, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function RatingStars({ rating }) {
  console.log("RatingStars received rating:", rating);
  const safeRating = Math.round(rating || 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={14}
          className={
            index < safeRating
              ? "fill-yellow-400 text-yellow-400"
              : "text-yellow-400"
          }
        />
      ))}
    </div>
  );
}

export default function BestSellingCarousel({ products = [] }) {
  if (!products.length) {
    return <div className="py-10 text-sm text-gray-500">No products found.</div>;
  }

  return (
    <div className="w-full max-w-full ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          {products.map((product) => (
            <CarouselItem
              key={product.id || product._id}
              className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="w-full max-w-full overflow-hidden rounded-2xl">
                <div className="group w-full">
                  <div className="relative overflow-hidden rounded-2xl bg-[#e8ddd3]">
                    <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
                      {product.discount > 0 && (
                        <span className="rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-600">
                          {product.discount}% OFF
                        </span>
                      )}

                      {product.quantity === 0 && (
                        <span className="rounded-full bg-[#e53935] px-2 py-1 text-[10px] font-semibold text-white">
                          OUT OF STOCK
                        </span>
                      )}
                    </div>

                    <div className="w-full overflow-hidden">
                      <img
                        src={product.imgCover}
                        alt={product.title}
                        className="h-56 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-64 md:h-72"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <div className="pl-1 flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-semibold text-[#741c21]">
                          {product.title}
                        </h3>

                        <div className="pl-1 mt-1 flex items-center gap-2">
                          <RatingStars rating={product.rateAvg} />
                          <span className="text-xs text-gray-500">
                            ({product.rateAvg})
                          </span>
                        </div>

                        <div className="pl-1 mt-2 flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-semibold text-[#7a1d24]">
                            {product.priceAfterDiscount ?? product.price} EGP
                          </span>

                          {product.priceAfterDiscount &&
                            product.priceAfterDiscount < product.price && (
                              <span className="text-gray-400 line-through">
                                {product.price} EGP
                              </span>
                            )}
                        </div>
                      </div>

                      <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a61d24] text-white transition hover:opacity-90">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="size-10 left-2 top-1/2 border-none bg-[#a61d24] text-white hover:bg-[#8f171d] hover:text-white md:-left-4" />
        <CarouselNext className="size-10 right-2 top-1/2 border-none bg-[#a61d24] text-white hover:bg-[#8f171d] hover:text-white md:-right-4" />
      </Carousel>
    </div>
  );
}