"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="project-card">
        <div className="project-card-image">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={400}
            height={300}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="project-card-content">
          <h3>{project.title}</h3>
          <p className="category">{project.category}</p>
          <p className="">{project.id}</p>
          <p className="description">{project.shortDescription}</p>
          <button className="view-details">View Details →</button>
        </div>
      </div>
    </Link>
  );
}
