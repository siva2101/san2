"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="project-detail-container">
      <Link href="/projects" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <p className="project-category">{project.category}</p>
      </div>

      {/* Main Image Gallery */}
      <div className="gallery-section">
        <div className="main-image">
          <Image
            src={project.images[selectedImageIndex]}
            alt={`${project.title} - Image ${selectedImageIndex + 1}`}
            width={800}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
            priority
          />
        </div>

        {project.images.length > 1 && (
          <div className="gallery-controls">
            <button onClick={prevImage} className="nav-button prev">
              ← Previous
            </button>
            <span className="image-counter">
              {selectedImageIndex + 1} / {project.images.length}
            </span>
            <button onClick={nextImage} className="nav-button next">
              Next →
            </button>
          </div>
        )}

        {/* Thumbnail Strip */}
        {project.images.length > 1 && (
          <div className="thumbnail-strip">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  index === selectedImageIndex ? "active" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={75}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            ))}
          </div>
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
