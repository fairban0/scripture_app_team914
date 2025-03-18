import React from "react";
import { BackIcon, MenuIcon } from "./icons";

const NavigationHeader: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-7 mt-5">
      <button aria-label="Go back" className="focus:outline-none">
        <BackIcon />
      </button>
      <button aria-label="Open menu" className="focus:outline-none">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default NavigationHeader;
