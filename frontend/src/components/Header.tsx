import React from "react";
import BackIcon from "./icons/BackIcon";
import MenuIcon from "./icons/MenuIcon";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This goes back to the previous page
  };

  const handleMenuClick = () => {
    navigate("/settings"); // Navigate to a menu page or another route you want
  };
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex gap-6 items-center">
        <button aria-label="Go back" onClick={handleBackClick}>
          <BackIcon />
        </button>
        <h1 className="text-2xl text-black">{title}</h1>
      </div>
      <button aria-label="Menu" onClick={handleMenuClick}>
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Header;
