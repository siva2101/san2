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
    <div className="project-detail-container">
      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="project-category">{project.category}</p>
      </div>

      {/* Main Image Gallery with Swiper */}
      <div className="gallery-section">
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
              <div className="main-image">
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
      <div className="project-details">
        <div className="details-content">
          <h2>Project Details</h2>
          <p>{project.details}</p>

          <div className="details-grid">
            <div className="detail-item">
              <h4>Location</h4>
              <p>{project.location}</p>
            </div>
            <div className="detail-item">
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
            <div className="detail-item">
              <h4>Architect</h4>
              <p>{project.architect}</p>
            </div>
            <div className="detail-item">
              <h4>Area</h4>
              <p>{project.area}</p>
            </div>
          </div>

          <div className="description-section">
            <h3>About This Project</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
