import { KeyboardArrowDown, Splitscreen } from "@mui/icons-material";
import React from "react";

const TasksSubHeader = () => {
  return (
    <div className="mt-20 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-[41px] -mt-1 flex justify-center items-center h-[44px] rounded-md bg-orange-100">
          <Splitscreen className="text-orange-600" sx={{ fontSize: "21px" }} />
        </div>

        <ul className="flex flex-col gap-[7px]">
          <li className="text-[17px] font-semibold flex gap-2 items-center">
            <div className="text-slate-700 flex gap-2 items-center">
              <span className="text-lg">All Projects</span>
              <span className="text-sm bg-slate-700 text-white px-2 py-[2px] rounded-md">
                6
              </span>
            </div>
            <KeyboardArrowDown className="text-slate-600 text-lg" />
          </li>

          <div className="flex gap-1 items-center">
            <li className="text-[12px] h-[4px] w-[280px] bg-slate-200 rounded-md overflow-hidden">
              <div className="w-1/2 h-full bg-orange-600 rounded-r-xl"></div>
            </li>
            <p className="text-[12px] text-slate-400 ml-3">20% Completed</p>
          </div>
        </ul>
      </div>

      <SortByButton />
    </div>
  );
};

export default TasksSubHeader;

const SortByButton = () => {
  return (
    <div className="flex text-[15px] font-semibold gap-3">
      <span className="text-slate-300">Sort By</span>
      <div className="flex items-center cursor-pointer">
        <span className="text-slate-800">Recent Task</span>
        <KeyboardArrowDown sx={{ fontSize: "19px" }} />
      </div>
    </div>
  );
};
