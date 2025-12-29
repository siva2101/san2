import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription || project.description.substring(0, 160),
    openGraph: {
      title: `${project.title} | Sanskriti Architects`,
      description: project.shortDescription,
      images: [project.thumbnail],
    },
  };
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
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12 px-4">
          <h1 className="text-sansGray">Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>
          <a href="/projects" className="inline-block text-sansRed no-underline mt-4 font-medium">
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
