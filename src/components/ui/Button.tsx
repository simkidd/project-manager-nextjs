import { Circle } from "@mui/icons-material";
import React, { MouseEvent } from "react";

export interface ButtonProps {
  loading?: boolean;
  icon?: React.ReactNode | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "solid" | "plain" | "default";
  type?: "button" | "reset" | "submit";
  className?: string;
}

type ButtonColor = {
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  textColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  loading = false,
  icon,
  onClick,
  disabled,
  children,
  variant = "solid",
  className,
  ...rest
}) => {
  const solidColor = () => {
    const btn = {
      bgColor: "bg-orange-600",
      textColor: "text-white",
      hoverColor: "hover:bg-orange-700",
      activeColor: "active:bg-orange-800",
    };
    return getBtnColor(btn);
  };

  const plainColor = () => {
    const btn = {
      bgColor: "bg-transparent",
      textColor: "text-orange-600",
      hoverColor: "hover:bg-orange-100",
      activeColor: "active:bg-orange-200",
    };
    return getBtnColor(btn);
  };

  const defaultColor = () => {
    const btn = {
      bgColor: "bg-slate-200",
      textColor: "text-slate-700",
      hoverColor: "hover:bg-slate-300",
      activeColor: "active:bg-slate-400",
    };
    return getBtnColor(btn);
  };

  const getBtnColor = ({
    bgColor,
    textColor,
    activeColor,
    hoverColor,
  }: ButtonColor) => {
    return `${bgColor} ${textColor} ${hoverColor} ${activeColor}`;
  };

  const btnColor = () => {
    switch (variant) {
      case "solid":
        return solidColor();
      case "plain":
        return plainColor();
      case "default":
        return defaultColor();
      default:
        return defaultColor();
    }
  };

  const classes = `${btnColor()} px-2 text-sm rounded-md flex gap-1 items-center p-2 transition-all ${className}`;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const renderChildren = () => {
    if (loading && children) {
      return (
        <>
          <Circle className="mr-1" />
          {children}
        </>
      );
    }

    if (icon && !children && loading) {
      return <Circle />;
    }

    if (icon && !children && !loading) {
      return <>{icon}</>;
    }

    if (icon && children && !loading) {
      return (
        <>
          {icon}
          <span className="max-sm:hidden pr-2">{children}</span>
        </>
      );
    }

    return <>{children}</>;
  };

  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {renderChildren()}
    </button>
  );
};

export default Button;
