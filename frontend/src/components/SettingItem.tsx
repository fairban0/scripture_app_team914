import React, { ReactNode } from "react";
import ArrowIcon from "./icons/ArrowIcon";

interface SettingItemProps {
  label: string;
  description?: string;
  hasBorder?: boolean;
  showArrow?: boolean;
  children?: ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  label,
  description,
  hasBorder = false,
  showArrow = false,
  children,
}) => {
  return (
    <div
      className={`flex flex-col p-3 ${
        hasBorder ? "border border-zinc-600" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xs text-black">{label}</p>
        <div>{showArrow ? <ArrowIcon /> : children}</div>
      </div>
      {description && <p className="text-xs text-zinc-600">{description}</p>}
    </div>
  );
};

export default SettingItem;
