import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// This function generates the static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>Sorry, the project you're looking for doesn't exist.</p>
          <Link href="/projects">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
