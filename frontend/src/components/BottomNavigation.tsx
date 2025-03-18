import React from "react";
import { HomeIcon, BookIcon, SearchIcon, MessageCircleIcon } from "./icons";

const BottomNavigation: React.FC = () => {
  const navItems = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Scriptures", icon: <BookIcon /> },
    { name: "Search", icon: <SearchIcon isNav={true} /> },
    { name: "Chats", icon: <MessageCircleIcon /> },
  ];

  return (
    <nav className="w-full bg-slate-500">
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
    </nav>
  );
};

export default BottomNavigation;
