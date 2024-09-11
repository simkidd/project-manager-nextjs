"use client";

import { allIconsArray } from "@/components/shared/AllIcons";
import { AppType, IconData } from "@/interfaces/app.interface";
import React, { createContext, useContext, useEffect, useState } from "react";

const initialState: AppType = {
  openSideBarProps: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  openModalProps: {
    openModal: false,
    setOpenModal: () => {},
  },
  openIconModalProps: {
    openIconModal: false,
    setOpenIconModal: () => {},
  },
  allIconsDataProps: {
    allIconsData: allIconsArray,
    setAllIconsData: () => {},
  },
  selectedIconProps: {
    selectedIcon: null,
    setSelectedIcon: () => {},
  },
};

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext<AppType>(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openIconModal, setOpenIconModal] = React.useState(false);
  const [allIconsData, setAllIconsData] =
    React.useState<IconData[]>(allIconsArray);
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);

  console.log("icon selection>>>", selectedIcon);
  // update the window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 940);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // close the sidebar on mobile view is false
  useEffect(() => {
    if (!isMobileView) {
      setOpenSideBar(false);
    }
  }, [isMobileView]);

  return (
    <AppContext.Provider
      value={{
        openSideBarProps: { openSideBar, setOpenSideBar },
        openModalProps: { openModal, setOpenModal },
        openIconModalProps: { openIconModal, setOpenIconModal },
        allIconsDataProps: { allIconsData, setAllIconsData },
        selectedIconProps: { selectedIcon, setSelectedIcon },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
