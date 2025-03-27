import React from "react";

export const BackIcon: React.FC = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[38px] h-[38px]"
  >
    <path
      d="M12.3895 20.5833L21.2562 29.45L18.9999 31.6667L6.33325 19L18.9999 6.33334L21.2562 8.55L12.3895 17.4167H31.6666V20.5833H12.3895Z"
      fill="#5D8AA8"
      fillOpacity="0.7"
    />
  </svg>
);

export const MenuIcon: React.FC = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[38px] h-[38px]"
  >
    <path
      d="M4.75 19H33.25M4.75 9.5H33.25M4.75 28.5H33.25"
      stroke="#5D8AA8"
      strokeOpacity="0.7"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface SearchIconProps {
  isNav?: boolean;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ isNav = false }) => (
  <svg
    width="24"
    height={isNav ? "24" : "25"}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[24px] h-[24px]"
  >
    {isNav ? (
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M19.6 21.5L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.14583 15.8708 4.8875 14.6125C3.62917 13.3542 3 11.8167 3 10C3 8.18333 3.62917 6.64583 4.8875 5.3875C6.14583 4.12917 7.68333 3.5 9.5 3.5C11.3167 3.5 12.8542 4.12917 14.1125 5.3875C15.3708 6.64583 16 8.18333 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L21 20.1L19.6 21.5ZM9.5 14.5C10.75 14.5 11.8125 14.0625 12.6875 13.1875C13.5625 12.3125 14 11.25 14 10C14 8.75 13.5625 7.6875 12.6875 6.8125C11.8125 5.9375 10.75 5.5 9.5 5.5C8.25 5.5 7.1875 5.9375 6.3125 6.8125C5.4375 7.6875 5 8.75 5 10C5 11.25 5.4375 12.3125 6.3125 13.1875C7.1875 14.0625 8.25 14.5 9.5 14.5Z"
        fill="#49454F"
      />
    )}
  </svg>
);

export const ClockIcon: React.FC = () => (
  <svg
    width="37"
    height="35"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[36px] h-[35px]"
  >
    <path
      d="M18.105 8.75V17.5L24.14 20.4167M33.1925 17.5C33.1925 25.5542 26.4376 32.0833 18.105 32.0833C9.77247 32.0833 3.01758 25.5542 3.01758 17.5C3.01758 9.44585 9.77247 2.91667 18.105 2.91667C26.4376 2.91667 33.1925 9.44585 33.1925 17.5Z"
      stroke="#1E1E1E"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const XCircleIcon: React.FC = () => (
  <svg
    width="37"
    height="35"
    viewBox="0 0 37 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[36px] h-[35px]"
  >
    <path
      d="M23.4213 13.125L14.3688 21.875M14.3688 13.125L23.4213 21.875M33.9825 17.5C33.9825 25.5542 27.2277 32.0833 18.8951 32.0833C10.5625 32.0833 3.80762 25.5542 3.80762 17.5C3.80762 9.44585 10.5625 2.91667 18.8951 2.91667C27.2277 2.91667 33.9825 9.44585 33.9825 17.5Z"
      stroke="#1E1E1E"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[24px] h-[24px]"
  >
    <path
      d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BookIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[24px] h-[24px]"
  >
    <path
      d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MessageCircleIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[24px] h-[24px]"
  >
    <path
      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
