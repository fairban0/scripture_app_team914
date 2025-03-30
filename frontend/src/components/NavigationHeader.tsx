import { useNavigate } from "react-router-dom";
import { BackIcon, MenuIcon } from "./icons";
import "./global.css";

function NavigationHeader() {
  const navigate = useNavigate();

  return (
    <nav className="navigation-header">
      <button
        aria-label="Go back"
        className="focus:outline-none"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        <BackIcon />
      </button>
      <button
        aria-label="Open settings"
        className="focus:outline-none"
        onClick={() => navigate("/settings")} // Navigate to the settings page
      >
        <MenuIcon />
      </button>
    </nav>
  );
}

export default NavigationHeader;
