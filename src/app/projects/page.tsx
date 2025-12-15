"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/app/components/ProjectCard";


export default function OurProjects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Explore our portfolio of architectural designs and innovations</p>
      </div>

      <div className="projects-gallery">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
