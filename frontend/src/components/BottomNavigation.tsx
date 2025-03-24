import { Link, useLocation } from "react-router-dom";
import React from "react";
import { HomeIcon, BookIcon, SearchIcon, MessageCircleIcon } from "./icons";

const BottomNavigation: React.FC = () => {
  const navItems = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Scriptures", icon: <BookIcon />, path: "/scripture" },
    { name: "Search", icon: <SearchIcon isNav={true} />, path: "/search" },
    { name: "Chats", icon: <MessageCircleIcon />, path: "/chats" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-500 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2.5 max-w-md mx-auto">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.name} path={item.path} />
          ))}
        </div>

        <div className="flex gap-10 justify-center items-center px-1.5 py-2.5">
          {navItems.map((item, index) => (
            <div key={index} className="text-sm text-center text-white w-[70px]">
              {item.name}
            </div>
          ))}
        </div>

        <div className="flex gap-20 justify-center items-center px-9 py-5">
          {navItems.map((item, index) => (
            <button
              key={index}
              aria-label={item.name}
              className="focus:outline-none"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, path }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path} className="flex-1">
      <button
        className={`w-full flex flex-col items-center justify-center py-2 ${
          isActive ? "text-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </button>
    </Link>
  );
};

export default BottomNavigation;
