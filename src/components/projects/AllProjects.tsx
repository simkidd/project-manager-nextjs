import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsSubHeader from "./ProjectsSubHeader";
import AllProjectsSection from "./AllProjectsSection";
import StatsRightSidebar from "./StatsRightSidebar";

const AllProjects = () => {
  return (
    <div className="w-full h-dvh flex">
      <div className="w-[78%] max-lg:w-full max-sm:p-8 p-10 flex flex-col gap-3">
        <ProjectsHeader />
        <ProjectsSubHeader />
        <AllProjectsSection />
      </div>

      <StatsRightSidebar />
    </div>
  );
};

export default AllProjects;
