import React from "react";
import BackIcon from "./icons/BackIcon";
import MenuIcon from "./icons/MenuIcon";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex gap-6 items-center">
        <button aria-label="Go back">
          <BackIcon />
        </button>
        <h1 className="text-2xl text-black">{title}</h1>
      </div>
      <button aria-label="Menu">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Header;
