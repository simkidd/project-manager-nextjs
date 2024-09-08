import React from "react";

const TasksList = () => {
  return (
    <div className="ml-12 mt-11 flex flex-col gap-4">
      <Tabs />
      <div className="flex flex-col gap-4">
        {/* <SingleTask /> */}
      </div>
    </div>
  );
};

export default TasksList;

const Tabs = () => {
  return (
    <div className="flex items-center gap-6 ml-3 mt-8 mb-5">
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>On Going Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md">7</span>
      </div>
      <div className="flex gap-2 text-orange-400 font-semibold">
        <span>Completed Tasks</span>
        <span className="bg-slate-200 px-2 rounded-md">8</span>
      </div>
    </div>
  );
};
