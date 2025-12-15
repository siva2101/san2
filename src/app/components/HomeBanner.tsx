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
        desktop: "https://placehold.co/1920x1080/222/fff?text=Modern+Architecture",
        mobile: "https://placehold.co/800x1200/222/fff?text=Modern+Architecture+Mobile",
        alt: "Modern minimalist creative office space",
        title: "Eco-Friendly Design",
        description: "Sustainable architecture for a better tomorrow",
    },
    {
        id: 2,
        desktop: "https://placehold.co/1920x1080/333/fff?text=Urban+Design",
        mobile: "https://placehold.co/800x1200/333/fff?text=Urban+Design+Mobile",
        alt: "Urban city planning concept",
        title: "Urban Spaces",
        description: "Integrating nature with metropolitan living",
    },
    {
        id: 3,
        desktop: "https://placehold.co/1920x1080/444/fff?text=Interior+Elegance",
        mobile: "https://placehold.co/800x1200/444/fff?text=Interior+Elegance+Mobile",
        alt: "Luxury interior design living room",
        title: "Luxury Interiors",
        description: "Crafting spaces that breathe elegance",
    },
];

export default function HomeBanner() {
    return (
        <section className="relative w-full h-[600px] md:h-[calc(100vh-80px)] bg-zinc-900">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                className="w-full h-full [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-pagination-bullet-active]:bg-green-500 [&_.swiper-pagination-bullet]:bg-white"
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
                                <p className="text-lg md:text-2xl text-gray-200 font-light drop-shadow-md max-w-2xl mx-auto">
                                    {slide.description}
                                </p>
                                <div className="pt-6">
                                    <a
                                        href="/projects"
                                        className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors duration-300"
                                    >
                                        View Projects
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
