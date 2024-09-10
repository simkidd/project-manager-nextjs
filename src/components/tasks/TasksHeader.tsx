"use client";

import { useAppContext } from "@/contexts/AppContext";
import { Add, Menu, Search, Splitscreen } from "@mui/icons-material";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import AddTaskForm from "./AddTaskForm";

const TasksHeader = () => {
  const {
    openSideBarProps: { openSideBar, setOpenSideBar },
  } = useAppContext();

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <Menu
          className="text-slate-400 h-9 cursor-pointer hidden max-[940px]:block"
          onClick={() => setOpenSideBar(!openSideBar)}
        />
        <SearchBar />
      </div>
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
  const {
    openModalProps: { openModal, setOpenModal },
  } = useAppContext();

  return (
    <>
      <div className="flex gap-3 items-center">
        <Button
          icon={<Add className="mt-[2px]" sx={{ fontSize: "22px" }} />}
          onClick={() => setOpenModal(true)}
        >
          New Task
        </Button>
      </div>

      <Modal
        isopen={openModal}
        title={
          <div className="flex items-center gap-2">
            <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
              <Splitscreen
                className="text-orange-600"
                sx={{ fontSize: "22px" }}
              />
            </div>
            <span className="font-semibold text-lg">New Task</span>
          </div>
        }
        onClose={() => setOpenModal(false)}
        bodyClass="px-4"
        footer={
          <>
            <Button
              variant="default"
              className="px-4"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </Button>
            <Button className="px-4" type="submit">
              Add Task
            </Button>
          </>
        }
      >
        <AddTaskForm />
      </Modal>
    </>
  );
};
