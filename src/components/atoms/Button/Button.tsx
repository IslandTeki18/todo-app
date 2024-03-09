import * as React from "react";

type ButtonProps = {
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  isPill?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isFullWidth?: boolean;
  children?: React.ReactNode;
  isLink?: boolean;
};

export const Button = (props: ButtonProps) => {
  function renderButtonSize(size: string) {
    switch (size) {
      case "xsmall":
        return "px-1.5 py-1 text-xs";
      case "small":
        return "px-2 py-1 text-sm";
      case "medium":
        return "px-3 py-1 text-base";
      case "large":
        return "px-4 py-2 text-lg";
      case "xlarge":
        return "px-5 py-3 text-xl";
      default:
        return "px-2 py-1 text-sm";
    }
  }
  function renderButtonColor(color: string) {
    switch (color) {
      case "primary":
        return "bg-indigo-600 hover:bg-indigo-500 focus-visible:ring-indigo-600 text-white";
      case "secondary":
        return "bg-gray-600 hover:bg-gray-500 focus-visible:ring-gray-600 text-white";
      case "success":
        return "bg-green-600 hover:bg-green-500 focus-visible:ring-green-600 text-white";
      case "danger":
        return "bg-red-600 hover:bg-red-500 focus-visible:ring-red-600 text-white";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-500 focus-visible:ring-yellow-600 text-white";
      case "info":
        return "bg-blue-600 hover:bg-blue-500 focus-visible:ring-blue-600 text-white";
      case "light":
        return "bg-gray-100 hover:bg-gray-200 focus-visible:ring-gray-100 text-gray-800";
      case "dark":
        return "bg-gray-800 hover:bg-gray-700 focus-visible:ring-gray-800 text-white";
      default:
        return "bg-indigo-600 hover:bg-indigo-500 focus-visible:ring-indigo-600";
    }
  }
  function renderButtonPill(isPill: boolean) {
    if (isPill) {
      return "rounded-full";
    } else {
      return "rounded";
    }
  }
  return (
    <>
      <button
        type={props.buttonType || "button"}
        onClick={props.onClick}
        disabled={props.isDisabled || false}
        className={`
        ${renderButtonPill(props.isPill || false)} 
        ${
          props.isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : renderButtonColor(props.color || "primary")
        } 
        ${renderButtonSize(props.size || "medium")} 
        ${
          props.isFullWidth ? "w-full" : "w-auto"
        } font-semibold shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 flex items-center justify-center gap-1
        `}
      >
        {props.iconLeft && <span className="mr-2">{props.iconLeft}</span>}
        {props.children}
        {props.iconRight && <span className="ml-2">{props.iconRight}</span>}
      </button>
    </>
  );
};