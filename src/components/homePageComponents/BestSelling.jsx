import { useEffect, useState } from "react";
import BestCarousel from "./BestSellingCarousel";
import BestSellingCarousel from "./BestSellingCarousel";
import { getBestSellers } from "../../api/homeFunctions";

export default function BestSelling() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getBestSellers();
                setProducts(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="w-full bg-white px-4 py-8 md:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                <div className="flex flex-col justify-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff668b]">
                        Best Selling
                    </p>

                    <h2 className="mb-4 max-w-[240px] text-2xl font-bold leading-tight">
                        <span className="text-[#ff668b]">Check Out</span> What Everyone’s <span className="text-[#ff668b]">Buying</span> Right Now
                    </h2>

                    <p className="mb-6 max-w-[260px] text-sm leading-6 text-gray-500">
                        Not sure what to choose? Start with our best sellers, these are the
                        gifts our customers keep coming back for.
                    </p>

                    <button className="inline-flex w-fit items-center gap-2 rounded-full bg-[#a61d24] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                        Explore gifts
                        <span aria-hidden="true">→</span>
                    </button>
                </div>

                <div className="min-w-0">
                    {loading ? (
                        <div className="py-10 text-sm text-gray-500 flex items-center justify-center">
                            Loading...
                        </div>
                    ) : error ? (
                        <div className="py-10 text-sm text-red-500">{error}</div>
                    ) : (
                        <BestSellingCarousel products={products} />
                    )}
                </div>
            </div>
        </section>
    );
}