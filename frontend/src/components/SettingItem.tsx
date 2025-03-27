import React, { ReactNode } from "react";
import ArrowIcon from "./icons/ArrowIcon";


interface SettingItemProps {
  label: string;
  description?: string;
  hasBorder?: boolean;
  showArrow?: boolean;
  children?: ReactNode;
  onClick?: () => void;  // <-- Add this line

}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  description,
  hasBorder = false,
  showArrow = false,
  children,
  onClick,  // <-- Receive onClick prop
}) => {
  return (
    <button
    onClick={onClick}  // <-- Add onClick event
    className={`flex flex-col p-3 text-left w-full ${
      hasBorder ? "border border-zinc-600" : ""
    }`}
  >
    <div className="flex justify-between items-center">
      <p className="text-xs text-black">{label}</p>
      <div>{showArrow ? <ArrowIcon /> : children}</div>
    </div>
    {description && <p className="text-xs text-zinc-600">{description}</p>}
  </button>
  );
};

export default SettingItem;
