export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#FF668B]">
          Gallery
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
            Check Out
          </span>{" "}
          our Wonderful Gallery
        </h2>
      </div>

      {/* Mosaic Grid */}
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[650px]">
        {/* Large left image spanning 2 rows */}
        <div className="col-start-1 row-start-1 row-span-2 overflow-hidden  ">
          <img
            src="src/assets/LeftPromoImage.png"
            alt="Gallery image 1"
            className="h-full w-full object-cover   "
          />
        </div>
        {/* Top middle */}
        <div className="col-start-2 row-start-1 overflow-hidden  ">
          <img
            src="src/assets/redGif.png"
            alt="Gallery image 3"
            className="h-full w-full object-cover   "
          />
        </div>
        {/* Top end */}
        <div className="col-start-3 row-start-1 overflow-hidden  ">
          <img
            src="src/assets/weddingRing2.png"
            alt="Gallery image 2"
            className="h-full w-full object-cover   "
          />
        </div>
        {/* Bottom left */}
        <div className="col-start-1 row-start-3 overflow-hidden  ">
          <img
            src="src/assets/Slider1.png"
            alt="Gallery image 5"
            className="h-full w-full object-cover   "
          />
        </div>
        {/* bottom middle */}
        <div className="col-start-2 row-start-2 row-span-2 overflow-hidden  ">
          <img
            src="src/assets/weddingRingGreen.png"
            alt="Gallery image 6"
            className="h-full w-full object-cover   "
          />
        </div>
        {/* Bottom end */}
        <div className="col-start-3 row-start-2 row-span-2 overflow-hidden  ">
          <img
            src="src/assets/WeddingRing3.png"
            alt="Gallery image 4"
            className="h-full w-full object-cover   "
          />
        </div>
      </div>
    </section>
  );
}
