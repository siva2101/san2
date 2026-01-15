"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Placeholder images from placehold.co
// Desktop: 1920x1080 (16:9)
// Mobile: 800x1200 (2:3)
const bannerSlides = [
    {
        id: 1,
        desktop: "/images/home-banner/01-desktop.jpg",
        mobile: "/images/home-banner/01-mobile.jpg",
        alt: "Modern minimalist creative office space",
        title: "Our Creative Studio",
        description: "Where creativity meets functional design",
    },
    {
        id: 2,
        desktop: "/images/home-banner/02-desktop.jpg",
        mobile: "/images/home-banner/02-mobile.jpg",
        alt: "Luxury interior design living room",
        title: "Elegant Living Space",
        description: "Blending luxury with everyday comfort",
    },
    {
        id: 3,
        desktop: "/images/home-banner/03-desktop.jpg",
        mobile: "/images/home-banner/03-mobile.jpg",
        alt: "Urban city planning concept",
        title: "Masterful Architecture",
        description: "Innovative exteriors with lasting appeal",
    },
];

export default function HomeBanner() {
    return (
        <section className="relative w-full h-[600px] md:h-[calc(100vh-80px)] bg-sansGray overflow-hidden shadow-2xl">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={false}
                className="main-swiper w-full h-full"
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <div className="absolute inset-0 w-full h-full">
                            {/* Art Direction: Different images for mobile vs desktop */}
                            <picture>
                                {/* Desktop Image (min-width: 768px) */}
                                <source
                                    media="(min-width: 768px)"
                                    srcSet={slide.desktop}
                                />
                                {/* Mobile Image (default) */}
                                {/* 
                    Performance Optimization:
                    - Index 0: Eager load for LCP (Largest Contentful Paint)
                    - Index > 0: Lazy load to save bandwidth and improve initial load
                */}
                                <img
                                    src={slide.mobile}
                                    alt={slide.alt}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding={index === 0 ? "sync" : "async"}
                                    className="w-full h-full object-cover"
                                />
                            </picture>

                            {/* Overlay Gradient for text readability */}
                            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                            <div className="max-w-4xl space-y-4">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl text-white/80 font-light drop-shadow-md max-w-2xl mx-auto">
                                    {slide.description}
                                </p>
                                <div className="pt-6">
                                    <a
                                        href="/projects"
                                        className="inline-block px-8 py-3 bg-sansRed hover:bg-sansRed text-white font-medium rounded transition-colors duration-300"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
