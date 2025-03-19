import { Link, useLocation } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import ScripturesIcon from "./icons/ScripturesIcon";
import SearchIcon from "./icons/SearchIcon";
import ChatsIcon from "./icons/ChatsIcon";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-500 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2.5 max-w-md mx-auto">
          <NavItem icon={<HomeIcon />} label="Home" path="/" />
          <NavItem
            icon={<ScripturesIcon />}
            label="Scriptures"
            path="/scripture"
          />
          <NavItem icon={<SearchIcon />} label="Search" path="/search" />
          <NavItem icon={<ChatsIcon />} label="Chats" path="/chats" />
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
