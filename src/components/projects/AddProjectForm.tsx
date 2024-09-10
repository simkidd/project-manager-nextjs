import React from "react";
import Button from "../ui/Button";
import { LibraryBooks } from "@mui/icons-material";

const AddProjectForm = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter Project Name..."
            className="p-[10px] text-[13px] w-full rounded-md border outline-none"
          />
        </div>

        {/* icon */}
        <Button>
          <LibraryBooks />
        </Button>
      </div>
      <span className="text-[11px] mt-2 text-red-500">Error</span>
    </form>
  );
};

export default AddProjectForm;
