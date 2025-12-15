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
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link href="/projects" className="inline-block text-green-600 no-underline mb-8 font-medium hover:text-green-700 transition-colors">
        ← Back to Projects
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl my-0 mb-2 text-zinc-800">{project.title}</h1>
        <p className="text-green-600 text-base font-semibold uppercase m-0">{project.category}</p>
      </div>

      {/* Main Image Gallery with Swiper */}
      <div className="mb-12 bg-white rounded-lg overflow-hidden shadow-md">
        {/* Main Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="main-swiper"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-gray-100">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        {project.images.length > 1 && (
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
        )}
      </div>

      {/* Project Details */}
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div>
          <h2 className="mt-0 text-zinc-800 text-3xl">Project Details</h2>
          <p>{project.details}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8 py-8 border-t border-b border-gray-200">
            <div>
              <h4 className="my-0 mb-2 text-green-600 text-xs uppercase font-semibold">Location</h4>
              <p className="m-0 text-zinc-800 text-lg">{project.location}</p>
            </div>
            <div>
              <h4 className="my-0 mb-2 text-green-600 text-xs uppercase font-semibold">Year</h4>
              <p className="m-0 text-zinc-800 text-lg">{project.year}</p>
            </div>
            <div>
              <h4 className="my-0 mb-2 text-green-600 text-xs uppercase font-semibold">Architect</h4>
              <p className="m-0 text-zinc-800 text-lg">{project.architect}</p>
            </div>
            <div>
              <h4 className="my-0 mb-2 text-green-600 text-xs uppercase font-semibold">Area</h4>
              <p className="m-0 text-zinc-800 text-lg">{project.area}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-zinc-800 mb-4">About This Project</h3>
            <p className="text-zinc-600 leading-relaxed text-base">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
