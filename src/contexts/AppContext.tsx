"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type AppType = {
  openSideBarProps: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openModalProps: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const initialState: AppType = {
  openSideBarProps: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  openModalProps: {
    openModal: false,
    setOpenModal: () => {},
  },
};

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext<AppType>(initialState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
