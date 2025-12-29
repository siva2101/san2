import ProjectsClient from "./ProjectsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Browse our diverse portfolio of residential, commercial, and interior design projects. Discover how Sanskriti Architects brings innovative architectural concepts to life.",
};

export default function OurProjects() {
  return <ProjectsClient />;
}
