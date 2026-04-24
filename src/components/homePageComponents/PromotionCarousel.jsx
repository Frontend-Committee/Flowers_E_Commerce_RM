import * as React from "react";

import Slider1 from "@/assets/Slider1.png";
import Slider2 from "@/assets/Slider1.png";
import Slider3 from "@/assets/Slider1.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function PromotionCarousel() {


    const slides = [
        {
            image: Slider1,
            title: "Say It with Flowers",
            description: "Elegant gifts for every special moment.",
            buttonText: "I'm buying!",
        },
        {
            image: Slider2,
            title: "Make Every Gift Memorable",
            description: "Thoughtful surprises crafted with love.",
            buttonText: "Shop now",
        },
        {
            image: Slider3,
            title: "Celebrate Love Beautifully",
            description: "Flowers, chocolates, and more in one place.",
            buttonText: "Explore",
        },
    ];

    return (
        <Carousel
            className="w-full"

            opts={{ loop: true }}
        >
            <CarouselContent>
                {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-[420px] overflow-hidden rounded-[24px]">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <div className="absolute bottom-0 left-0 z-10 flex h-full w-full flex-col justify-end p-6 sm:p-5">
                                <div className="max-w-[420px]">
                                    <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
                                        {slide.title}
                                    </h2>

                                    <p className="mt-2 text-sm text-white/90 sm:text-xl">
                                        {slide.description}
                                    </p>

                                    <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-medium text-rose-700 transition hover:bg-white/90">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-md">
                <CarouselPrevious className=" static translate-y-0 h-8 w-8 border-0 bg-transparent p-0 text-gray-700 shadow-none hover:text-[#961e24]" />
                <CarouselNext className="static translate-y-0 h-8 w-8 border-0 bg-transparent p-0 text-gray-700 shadow-none hover:text-[#961e24]" />
            </div>
        </Carousel>
    );
}