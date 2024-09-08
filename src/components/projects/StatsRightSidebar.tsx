import { Splitscreen } from "@mui/icons-material";
import React from "react";

const StatsRightSidebar = () => {
  return (
    <div className="w-[22%] flex justify-end items-center">
      <div className="h-[92%] w-[94%] bg-white rounded-l-3xl p-3 flex flex-col">
        <Header />
        <div className="flex flex-col gap-11 items-center justify-center mt-6">
          <CircularChart />
          <ProgressCompletedLabels />
        </div>

        <ProjectsList />
      </div>
    </div>
  );
};

export default StatsRightSidebar;

const Header = () => {
  return (
    <h2 className="text-[22px] font-bold text-center mt-7">
      Projects Completed
    </h2>
  );
};

const CircularChart = () => {
  return (
    <div className="flex justify-center">
      <div className="w-40 h-40 bg-slate-100 mt-5 rounded-full flex items-center justify-center">
        <div className="w-[86%] flex justify-center items-center h-[86%] bg-white rounded-full">
          <span className="text-xl font-semibold text-orange-600">90%</span>
        </div>
      </div>
    </div>
  );
};

const ProgressCompletedLabels = () => {
  return (
    <div className="flex justify-center flex-col gap-1 items-center">
      <p className="font-bold text-[17px]">3 Completed</p>
      <p className="text-slate-400 text-[13px]">20 Tasks done</p>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <ul className="flex flex-col gap-3 mt-16 mx-4 overflow-auto">
      <SingleProject />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <SingleProject />
      <hr className="w-[80%] mx-auto text-slate-100 opacity-50" />
      <SingleProject />
    </ul>
  );
};

const SingleProject = () => {
  return (
    <li className="p-3 flex gap-2 items-center">
      <div className="w-8 h-8 bg-orange-600 rounded-md justify-center items-center flex text-white">
        <Splitscreen sx={{ fontSize: "19px" }} />
      </div>

      <ul>
        <li className="text-sm font-semibold">Project 1</li>
        <li className="text-[12px] text-slate-400">3 Tasks</li>
      </ul>
    </li>
  );
};
