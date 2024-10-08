"use client";
import { useAppContext } from "@/contexts/AppContext";
import { Add, BorderAll, Menu, Search } from "@mui/icons-material";
import React from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import AddProjectForm from "./AddProjectForm";

const ProjectsHeader = () => {
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

      <div className="border-b-2 w-[67%] border-slate-200">
        <input
          placeholder="Search a project..."
          className="p-2 bg-transparent text-sm outline-none"
        />
      </div>
    </div>
  );
};

const AddProjectButton = () => {
  const {
    openModalProps: { openModal, setOpenModal },
    selectedIconProps: { setSelectedIcon },
  } = useAppContext();

  return (
    <>
      <div className="flex gap-3 items-center">
        <Button
          icon={<Add className="mt-[2px]" sx={{ fontSize: "22px" }} />}
          onClick={() => setOpenModal(true)}
        >
          New Project
        </Button>
      </div>

      <Modal
        isopen={openModal}
        title={
          <div className="flex items-center gap-2">
            <div className="p-[7px] bg-orange-200 rounded-lg flex items-center justify-center">
              <BorderAll
                className="text-orange-600"
                sx={{ fontSize: "22px" }}
              />
            </div>
            <span className="font-semibold text-lg">Add Project</span>
          </div>
        }
        onClose={() => {
          setOpenModal(false);
          setSelectedIcon(null);
        }}
        bodyClass="px-4 relative"
        footer={
          <>
            <Button
              variant="default"
              className="px-4"
              type="button"
              onClick={() => {
                setOpenModal(false);
                setSelectedIcon(null);
              }}
            >
              Cancel
            </Button>
            <Button className="px-4" type="submit">
              Add Project
            </Button>
          </>
        }
      >
        <AddProjectForm />
      </Modal>
    </>
  );
};
