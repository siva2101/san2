"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full pb-12">
      {/* Header Section - Constrained */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-8">
        <Link href="/projects" className="inline-block text-sansRed no-underline mb-8 font-medium hover:text-sansRed transition-colors">
          ← Back to Projects
        </Link>

        <div>
          <h1 className="text-4xl md:text-5xl my-0 mb-2 text-sansGray">{project.title}</h1>
          <p className="text-sansRed text-base font-semibold uppercase m-0">{project.category}</p>
        </div>
      </div>

      {/* Main Image Gallery - Full Bleed */}
      <div className="w-full h-[50vh] md:h-[75vh] mb-8 bg-sansGray/5">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="main-swiper w-full h-full [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-pagination-bullet-active]:bg-sansRed [&_.swiper-pagination-bullet]:bg-white"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails - Constrained */}
      {project.images.length > 1 && (
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            className="thumbnail-swiper"
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="thumbnail">
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={75}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Project Details - Constrained */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg p-0 md:p-8">
          <div>
            <h2 className="mt-0 text-sansGray text-3xl">Project Details</h2>
            <p>{project.details}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8 py-8 border-t border-b border-sansGray/20">
              <div>
                <h4 className="my-0 mb-2 text-sansRed text-xs uppercase font-semibold">Location</h4>
                <p className="m-0 text-sansGray text-lg">{project.location}</p>
              </div>
              <div>
                <h4 className="my-0 mb-2 text-sansRed text-xs uppercase font-semibold">Year</h4>
                <p className="m-0 text-sansGray text-lg">{project.year}</p>
              </div>
              <div>
                <h4 className="my-0 mb-2 text-sansRed text-xs uppercase font-semibold">Architect</h4>
                <p className="m-0 text-sansGray text-lg">{project.architect}</p>
              </div>
              <div>
                <h4 className="my-0 mb-2 text-sansRed text-xs uppercase font-semibold">Area</h4>
                <p className="m-0 text-sansGray text-lg">{project.area}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sansGray mb-4">About This Project</h3>
              <p className="text-sansGray/60 leading-relaxed text-base">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
