"use client";

import React from "react";
import HomeIcon from "./icons/HomeIcon";
import ScripturesIcon from "./icons/ScripturesIcon";
import SearchIcon from "./icons/SearchIcon";
import ChatsIcon from "./icons/ChatsIcon";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 px-1 w-full bg-slate-500">
      <div className="flex gap-10 justify-center items-center py-2.5">
        <NavItem icon={<HomeIcon />} label="Home" />
        <NavItem icon={<ScripturesIcon />} label="Scriptures" />
        <NavItem icon={<SearchIcon />} label="Search" />
        <NavItem icon={<ChatsIcon />} label="Chats" />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <button className="flex flex-col gap-1.5 items-center">
      {icon}
      <span className="text-sm text-white">{label}</span>
    </button>
  );
};

export default BottomNavigation;
