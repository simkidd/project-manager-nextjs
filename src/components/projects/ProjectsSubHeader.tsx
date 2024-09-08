import { KeyboardArrowDown } from "@mui/icons-material";
import React from "react";

const ProjectsSubHeader = () => {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <h3 className="text-[26px] max-sm:text-[23px] font-bold">My Projects</h3>

      <SortByButton />
    </div>
  );
};

export default ProjectsSubHeader;

const SortByButton = () => {
  return (
    <div className="flex text-[15px] max-sm:text-[14px] font-semibold gap-3 max-sm:gap-1">
      <span className="text-slate-300">Sort By</span>
      <div className="flex items-center cursor-pointer">
        <span className="text-slate-800">Recent Project</span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};
