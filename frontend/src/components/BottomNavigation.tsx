"use client";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";
import ScripturesIcon from "./icons/ScripturesIcon";
import SearchIcon from "./icons/SearchIcon";
import ChatsIcon from "./icons/ChatsIcon";
import "./global.css"; // Import global CSS
const BottomNavigation: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <NavItem icon={<HomeIcon />} label="Home" path="/" />
        <NavItem
          icon={<ScripturesIcon />}
          label="Scriptures"
          path="/scripture"
        />
        <NavItem icon={<SearchIcon />} label="Search" path="/search" />
        <NavItem icon={<ChatsIcon />} label="Chats" path="/chats" />
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
    <Link to={path} className="navItem">
      <button className={`navButton ${isActive ? "active" : ""}`}>
        <div className="iconContainer">{icon}</div>
        <span className="label">{label}</span>
      </button>
    </Link>
  );
};
export default BottomNavigation;






