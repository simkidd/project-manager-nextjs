import React from "react";
import TasksHeader from "./TasksHeader";
import TasksSubHeader from "./TasksSubHeader";
import TasksList from "./TasksList";

const AllTasks = () => {
  return (
    <div className="w-full min-h-dvh flex">
      <div className="w-full p-10 flex flex-col gap-3">
        <TasksHeader />
        <TasksSubHeader />
        <TasksList />
      </div>

      {/* <StatsRightSidebar /> */}
    </div>
  );
};

export default AllTasks;
