import { useNavigate } from "react-router-dom";
import { BackIcon, MenuIcon } from "./icons";

function NavigationHeader() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-7 mt-5">
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
