import { Add, Menu, Search } from "@mui/icons-material";
import React from "react";

const TasksHeader = () => {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddProjectButton />
    </div>
  );
};

export default TasksHeader;

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
          placeholder="Search a task..."
          className="p-2 bg-transparent text-sm outline-none"
        />
      </div>
    </div>
  );
};

const AddProjectButton = () => {
  return (
    <div className="flex gap-3 items-center">
      <button className="bg-orange-600 text-white px-2 pr-3 text-sm rounded-md flex gap-1 items-center p-2 max-sm:pr-2">
        <Add className="mt-[2px]" sx={{ fontSize: "22px" }} />
        <span className="max-sm:hidden">New Task</span>
      </button>

      <Menu className="text-slate-400 h-9 cursor-pointer hidden max-[940px]:block" />
    </div>
  );
};
