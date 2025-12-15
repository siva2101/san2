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
      <div className="group relative w-full h-[400px] overflow-hidden rounded-xl cursor-pointer">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay which becomes darker on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        </div>

        {/* Content Slide-up Animation */}
        <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
            {project.category}
          </p>
          <h3 className="text-white text-2xl font-bold mb-2 leading-tight">
            {project.title}
          </h3>
          <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-[max-height] duration-500 ease-in-out">
            <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              {project.shortDescription}
            </p>
            <span className="text-white text-sm font-semibold border-b border-green-500 pb-1">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
