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
      <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full">
        <div className="w-full h-64 overflow-hidden bg-gray-100">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="my-0 mb-2 text-zinc-800 text-xl group-hover:text-green-700 transition-colors">{project.title}</h3>
          <p className="text-green-600 text-xs font-semibold uppercase my-0 mb-3">{project.category}</p>
          <p className="">{project.id}</p>
          <p className="text-zinc-600 text-sm my-0 mb-4 flex-1">{project.shortDescription}</p>
          <button className="bg-green-600 text-white border-0 py-3 px-4 rounded cursor-pointer font-semibold hover:bg-green-700 transition-colors self-start">View Details →</button>
        </div>
      </div>
    </Link>
  );
}
