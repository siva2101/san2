"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";


export default function OurProjects() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl my-0 mb-4 text-zinc-800">Our Projects</h1>
        <p className="text-lg text-zinc-600 m-0">Explore our portfolio of architectural designs and innovations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
