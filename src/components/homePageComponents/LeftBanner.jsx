import LeftPromoImage from "@/assets/LeftPromoImage.png";

export function LeftBanner({
  image = LeftPromoImage,
  badge = "Starting from 10.99 EGP",
  title = "Special Gifts For The People You Love",
  buttonText = "Shop Now",
}) {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[24px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-rose-600">
          {badge}
        </span>

        <h3 className="max-w-[240px] text-[22px] font-semibold leading-[1.1] text-white">
          {title}
        </h3>

        <button className="cursor-pointer flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-rose-700 transition hover:bg-white/90">
          {buttonText}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}