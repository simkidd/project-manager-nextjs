import { Apps, Close } from "@mui/icons-material";
import React from "react";
import AllIcons from "./AllIcons";
import { useAppContext } from "@/contexts/AppContext";

const IconModal = () => {
  const {
    openIconModalProps: { openIconModal },
  } = useAppContext();

  return (
    <div
      className={`${
        openIconModal ? "block" : "hidden"
      } absolute p-3 h-[530px] w-full bg-white shadow-md left-1/2 top-28 rounded-lg -translate-x-1/2 -translate-y-1/2 z-[60]`}
    >
      <Header />
      <span className="mx-8 text-xs mt-12 text-slate-400">
        Please select the icons to use:
      </span>
      <IconsArea />
    </div>
  );
};

export default IconModal;

const Header = () => {
  const {
    openIconModalProps: { setOpenIconModal },
  } = useAppContext();

  return (
    <div className="flex justify-between items-center pt-7 px-7 mb-8">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-orange-200 rounded-lg flex items-center justify-center">
          <Apps
            sx={{ fontSize: "21px" }}
            className="text-orange-400 text-[17px]"
          />
        </div>

        <span className="font-semibold text-lg">All Icons</span>
      </div>

      <Close
        className="text-slate-400 text-[18px] cursor-pointer"
        onClick={() => setOpenIconModal(false)}
      />
    </div>
  );
};

const IconsArea = () => {
  return (
    <div className="w-full flex flex-col items-center mt-3">
      <div className="border border-slate-100 w-[92%] h-[330px] overflow-auto rounded-md bg-slate-100">
        <AllIcons />
      </div>
    </div>
  );
};
