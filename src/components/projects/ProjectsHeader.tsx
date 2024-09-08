import { Add, Search } from "@mui/icons-material";
import React from "react";

const ProjectsHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

export default ProjectsHeader;

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="border-b-2 border-orange-600 h-[39px] w-11 flex justify-center items-center">
        <Search
          className="text-slate-400 outline-none"
          sx={{ fontSize: "26px" }}
        />
      </div>

      <div className="border-b-2 border-slate-200">
        <input
          placeholder="Search a project..."
          className="p-2 bg-transparent text-sm outline-none"
        />
      </div>
    </div>
  );
};

const AddProjectButton = () => {
  return (
    <button className="bg-orange-600 text-white px-2 pr-3 text-sm rounded-md flex gap-1 items-center">
      <Add className="mt-[2px]" sx={{ fontSize: "22px" }} />
      <span>New Project</span>
    </button>
  );
};
