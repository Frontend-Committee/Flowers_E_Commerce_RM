import { useState, useEffect } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { getMostPopularByOccasion } from "../../api/homeFunctions";

const tabs = ["Wedding", "Anniversary", "Birthday", "Engagement"];

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

function BadgePill({ badge }) {
  if (!badge) return null;
  const styles = {
    NEW: "bg-[#741c21] text-white",
    HOT: "bg-orange-500 text-white",
    "OUT OF STOCK": "bg-gray-500 text-white",
  };
  return (
    <span
      className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles[badge] || "bg-gray-400 text-white"}`}
    >
      {badge}
    </span>
  );
}

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl">
      <div className="relative group w-full">
        <div className="relative overflow-hidden rounded-2xl bg-[#e8ddd3] ">
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
              src={
                product.imgCover ===
                "https://flower.elevateegy.com/uploads/default-product.png"
                  ? "src/assets/defaultFlower.png"
                  : //   `https://source.unsplash.com/featured/?flowers`
                    //   `https://loremflickr.com/640/480/flower,bouquet?lock=${product._id}`
                    //   `https://loremflickr.com/640/480/flower,bouquet?lock=${product._id}`
                    product.imgCover
              }
              alt={product.title}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-64 md:h-72"
            />
          </div>
          <div className="absolute inset-0 bg-[#e07a8a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
            <button
              // onClick={() => setWishlisted((p) => !p)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md "
            >
              <Heart
                size={20}
                className="text-[#741c21] transition hover:text-[#E65073]"
              />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
              <Eye
                size={20}
                className="text-[#741c21]  hover:text-[#E65073] transition-colors"
              />
            </button>
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
  );
}

export default function MostPopular() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("Anniversary");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMostPopularByOccasion(activeTab);

        const filledProducts = Array.from({ length: 12 }, (_, i) => {
          return data[i % data.length];
        });
        console.log(
          "Fetched products for occasion:",
          activeTab,
          filledProducts,
        );
        setProducts(filledProducts);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  console.log("Most Popular Products:", products);

  return (
    <section className="w-full bg-white px-4 py-8 md:px-8 lg:px-12">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2
          className="relative z-0 text-2xl font-bold text-[#741C21] p-0
               before:content-[''] 
               before:absolute 
               before:left-0 
               before:top-6 
               before:-translate-y-1/2 
               before:h-3 
               before:w-30 
               before:rounded-full
               before:bg-[#FFE0E7]
               before:-z-10"
        >
          Most Popular
        </h2>
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition ${
                activeTab === tab
                  ? "font-semibold text-[#741c21] transition-duration-500"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div>
        {loading ? (
          <div className="py-10 text-sm text-gray-500 flex items-center justify-center">
            Loading...
          </div>
        ) : (
          // the key here is to make everything smoother
          <div
            key={activeTab}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {products.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
