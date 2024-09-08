"use client";
import { BorderAll, Logout, Splitscreen, TaskAlt } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[97px] h-dvh py-8 bg-white flex flex-col items-center justify-between max-[940px]:hidden">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );
};

export default Sidebar;

const Profile = () => {
  return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
};

const Menu = () => {
  const pathname = usePathname();

  const isActive = (href: string) => href === pathname;

  return (
    <div className="flex flex-col gap-6 items-center">
      <Link href="/">
        <BorderAll
          sx={{ fontSize: "27px" }}
          className={`text-slate-300 ${isActive("/") && "!text-orange-600"}`}
        />
      </Link>

      <Link href="/tasks">
        <Splitscreen
          sx={{ fontSize: "27px" }}
          className={`text-slate-300 ${
            isActive("/tasks") && "!text-orange-600"
          }`}
        />
      </Link>

      <Logout
        sx={{ fontSize: "27px" }}
        className="text-slate-300 cursor-pointer"
      />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <TaskAlt
        className="text-orange-600 font-bold"
        sx={{ fontSize: "41px" }}
      />
    </div>
  );
};
