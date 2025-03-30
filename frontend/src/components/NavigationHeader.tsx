import React from "react";
import { BackIcon, MenuIcon } from "./icons";
import "./global.css";

function NavigationHeader() {
  return (
    <nav className="navigation-header">
      <button aria-label="Go back" className="focus:outline-none">
        <BackIcon />
      </button>
      <button aria-label="Open menu" className="focus:outline-none">
        <MenuIcon />
      </button>
    </nav>
  );
}

export default NavigationHeader;
