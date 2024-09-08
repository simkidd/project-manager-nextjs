import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjectsSection = () => {
  return (
    <ul className="h-[78%] overflow-y-auto flex gap-4 flex-wrap mt-6 max-sm:grid max-sm:grid-cols-1">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ul>
  );
};

export default AllProjectsSection;
