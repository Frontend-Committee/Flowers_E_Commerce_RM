import { Check, ArrowRight } from "lucide-react";

const features = [
  "Competitive Prices & Easy Shopping",
  "Premium Quality & Elegant Packaging",
  "Perfect for Every Occasion",
  "Fast & Reliable Delivery",
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row items-stretch gap-12 ">
        {/* Left — Image collage */}
        <div className="flex gap-6 lg:w-[33%] h-[20rem] shrink-0">
          {/* Col 1: tall image fills full height */}
          <div
            className="relative inline-block z-10
            before:content-[''] 
            before:absolute 
            before:w-[100%] before:h-[100%] before:bottom-3
            before:-left-5
            before:border-4
            before:rotate-5
            before:w-[100%]
            before:origin-center before:border-[#A6252A] before:-z-10  before:rounded-tl-[40px] before:rounded-bl-[85px] before:rounded-r-[85px] w-[60%] object-cover rounded-tl-[40px] rounded-bl-[85px] rounded-r-[85px]"
          >
            <img
              src="src/assets/purpleGift.png"
              // className="w-[100%] h-[100%] object-cover rounded-tl-[30px] rounded-bl-[75px] rounded-r-[75px]"
              className=" h-[100%] w-[100%] object-cover rounded-tl-[30px] rounded-bl-[75px] rounded-r-[75px]"
              alt="Gift collage"
            />
          </div>

          {/* Col 2: flex column so both images share the height equally, min-h-0 prevents overflow */}
          <div className="flex flex-col gap-3 w-[40%]">
            {/* <div> */}

            <img
              src="src/assets/orangeGift.png"
              className="aspect-square flex-1 w-full object-cover rounded-full min-h-0"
              alt="Gift collage"
            />
            {/* </div> */}
            {/* <div> */}
            <img
              src="src/assets/blueGift.png"
              className="flex-1 w-full object-cover rounded-l-[55px] rounded-r-[100px]"
              alt="Gift collage"
            />
            {/* </div> */}
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#FF668B]">
            About
          </p>
          <h2 className="text-[#741C21] mb-4 text-3xl font-bold leading-snug">
            Delivering the <span className="text-[#FF668B]">Finest</span> Gift
            Boxes for Your <span className="text-[#FF668B]">Special </span>
            Moments
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-500">
            Make every moment memorable with our premium gift boxes. Carefully
            curated and beautifully packaged, each box is filled with handpicked
            items designed to impress. Whether it's for a birthday, wedding, or
            a simple "thank you," our gift boxes are crafted to leave a lasting
            impression — because thoughtful gifting starts here.
          </p>

          <button className="mb-7 flex items-center gap-2 rounded-full bg-[#741c21] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5a1519]">
            Discover
            <ArrowRight size={15} />
          </button>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check size={15} className="shrink-0 text-[#741c21]" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
