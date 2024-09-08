import { Circle, MoreVert, Splitscreen } from "@mui/icons-material";
import React from "react";

const ProjectCard = () => {
  return (
    <li className="w-[300px] flex flex-col gap-8 rounded-lg p-7 bg-white">
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </li>
  );
};

export default ProjectCard;

const ProjectCardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="bg-orange-600 flex justify-center items-center w-[38px] h-[38px] rounded-md">
          <Splitscreen sx={{ fontSize: "19px" }} className="text-white" />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-[19px]">Project Title</span>
          <span className="text-slate-400 text-[13px]">2 days ago</span>
        </div>
      </div>

      <div>
        <MoreVert className="text-slate-400 text-[19px] cursor-pointer" />
      </div>
    </div>
  );
};

const ProjectCardBody = () => {
  return (
    <ul className="text-slate-400 text-[13px] flex flex-col gap-2 ml-3">
      <li className="flex gap-2 items-center">
        <Circle className="text-[8px]" />
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
      </li>
      <li className="flex gap-2 items-center">
        <Circle className="text-[8px]" />
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
      </li>
    </ul>
  );
};

const ProjectCardFooter = () => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="text-[12px] gap-3 flex items-center w-full">
        <div className="w-full h-[7px] rounded-xl bg-slate-100 overflow-hidden">
          <div className="w-1/2 bg-orange-600 h-full rounded-r-xl"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[13px] text-slate-400">On Progress</p>
        <div className="flex gap-1 text-[13px]">
          <span>10%</span>
        </div>
      </div>
    </div>
  );
};
