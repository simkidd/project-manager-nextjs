"use client";
import { useAppContext } from "@/contexts/AppContext";
import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const {
    openSideBarProps: { openSideBar, setOpenSideBar },
  } = useAppContext();

  return (
    <>
      {openSideBar && (
        <div
          className="w-full h-screen z-50 bg-slate-800 fixed opacity-50"
          onClick={() => setOpenSideBar(false)}
        ></div>
      )}

      <div
        className={`${
          openSideBar
            ? "w-[240px] fixed shadow-xl"
            : "w-[97px] max-[940px]:hidden"
        } h-dvh py-8 bg-white flex flex-col items-center justify-between z-[90] transition-all `}
      >
        <Logo />
        <Menu />
        <Profile />
      </div>
    </>
  );
};

export default Sidebar;

const Profile = () => {
  const {
    openSideBarProps: { openSideBar, setOpenSideBar },
  } = useAppContext();

  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-orange-600 rounded-md"></div>
      {openSideBar && (
        <ul>
          <li className="font-bold text-sm">John Doe</li>
          <li className="text-slate-400 text-[11px]">johndoe@example.com</li>
        </ul>
      )}
    </div>
  );
};

const Menu = () => {
  const {
    openSideBarProps: { openSideBar },
  } = useAppContext();
  const pathname = usePathname();

  const isActive = (href: string) => href === pathname;

  return (
    <div className="flex flex-col gap-6">
      <Link href="/" className="flex items-center gap-2">
        <BorderAll
          sx={{ fontSize: "27px" }}
          className={`text-slate-300 ${isActive("/") && "!text-orange-600"}`}
        />
        {openSideBar && <span className="text-slate-400">Projects</span>}
      </Link>

      <Link href="/tasks" className="flex items-center gap-2">
        <Splitscreen
          sx={{ fontSize: "27px" }}
          className={`text-slate-300 ${
            isActive("/tasks") && "!text-orange-600"
          }`}
        />
        {openSideBar && <span className="text-slate-400">Tasks</span>}
      </Link>

      <div className="flex items-center gap-2">
        <Logout
          sx={{ fontSize: "27px" }}
          className="text-slate-300 cursor-pointer"
        />
        {openSideBar && <span className="text-slate-400">Log Out</span>}
      </div>
    </div>
  );
};

const Logo = () => {
  const {
    openSideBarProps: { openSideBar },
  } = useAppContext();

  return (
    <div className="flex items-center gap-2 justify-center">
      <TaskAlt
        className="text-orange-600 font-bold"
        sx={{ fontSize: "41px" }}
      />

      {openSideBar && (
        <div className="text-xl flex items-center gap-1">
          <span className="font-bold">Project</span>
          <span className="text-slate-600">Master</span>
        </div>
      )}
    </div>
  );
};
