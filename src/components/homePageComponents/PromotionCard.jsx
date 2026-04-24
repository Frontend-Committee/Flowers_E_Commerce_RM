import React from "react";

export function PromotionCard({ image, badge, title, href = "#" }) {
    return (
        <a
            href={href}
            className="group relative flex min-h-[220px] flex-1 overflow-hidden rounded-2xl"
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 flex h-full w-full flex-col justify-end p-4 sm:p-5">
                <span className="mb-3 w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-rose-600 shadow">
                    {badge}
                </span>

                <h3 className="max-w-[95%] text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {title}
                </h3>
            </div>
        </a>
    );
}
