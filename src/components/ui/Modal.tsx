import { CloseOutlined } from "@mui/icons-material";
import React, { MouseEvent, ReactNode } from "react";

export interface ModalProps {
  footer?: string | ReactNode;
  children: React.ReactNode;
  title: string | React.ReactNode;
  closable?: boolean;
  onClose?: (e: MouseEvent<HTMLSpanElement>) => void;
  footerClass?: string;
  bodyClass?: string;
  isopen: boolean;
  overlay?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  footer,
  footerClass,
  bodyClass,
  closable = true,
  isopen,
  onClose,
  overlay = true,
}) => {
  return (
    <>
      {isopen && overlay && (
        <div className="w-full h-screen z-[90] bg-slate-800 absolute top-0 left-0 opacity-30"></div>
      )}

      <div
        className={`${
          isopen ? "block" : "hidden"
        } w-[40%] max-sm:w-[82%] max-[600px]:w-[93%] max-[900px]:w-[65%] z-[100] p-3 left-1/2 top-[47%] -translate-y-1/2 -translate-x-1/2 absolute flex flex-col gap-3 border border-slate-50 bg-white rounded-lg shadow-md`}
      >
        <Header title={title} onClose={onClose} closable={closable} />
        <div className={`${bodyClass} py-7`}>{children}</div>

        {footer && (
          <div
            className={`w-full p-3 flex items-center justify-end gap-3 ${footerClass}`}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;

const Header: React.FC<{
  title: string | ReactNode;
  onClose?: (e: MouseEvent<HTMLSpanElement>) => void;
  closable: boolean;
}> = ({ title, onClose, closable }) => {
  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <div className="flex justify-between items-start py-1 px-2">
      <div className="flex items-center gap-2">
        {typeof title === "string" ? (
          <span className="font-semibold text-lg">{title}</span>
        ) : (
          title
        )}
      </div>

      {closable && (
        <span className="text-slate-300 cursor-pointer" onClick={handleClose}>
          <CloseOutlined sx={{ fontSize: "18px" }} />
        </span>
      )}
    </div>
  );
};
