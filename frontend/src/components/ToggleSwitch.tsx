import React, { useState } from "react";
import "./Settings.module.css";

const ToggleSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      aria-checked={enabled}
      role="switch"
      className="w-[28px] h-[19px]"
    >
      {enabled ? (
        <svg
          width="28"
          height="19"
          viewBox="0 0 28 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="27.9677" height="17" rx="8.5" fill="#009FA1" />
          <path
            d="M27 8.5C27 12.6421 23.6421 16 19.5 16C15.3579 16 12 12.6421 12 8.5C12 4.35786 15.3579 1 19.5 1C23.6421 1 27 4.35786 27 8.5Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          width="28"
          height="19"
          viewBox="0 0 28 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="27.9677" height="17" rx="8.5" fill="#4A4459" />
          <path
            d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleSwitch;
