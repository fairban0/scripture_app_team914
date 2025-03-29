import "./global.css"; // Import global styles
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => setIsModalOpen(true);
  const handleLogoutConfirm = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleLogoutCancel = () => setIsModalOpen(false);
  const goToSettings = () => navigate("/settings");

  return (
    <section className="flex flex-col items-center w-full p-4">
      {/* Profile Image (Keeping the original settings) */}
      <div className="flex items-center">
        <img
          src="/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="User profile"
          className="profileImage"
        />
      </div>

      {/* Buttons (Optimized for Mobile) */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleLogoutClick}
          className="p-2"
          aria-label="Sign Out"
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 42H10C8.9 42 7.9 41.6 7.2 40.8C6.4 40.1 6 39.1 6 38V10C6 8.9 6.4 7.9 7.2 7.2C7.9 6.4 8.9 6 10 6H18M32 34L42 24M42 24L32 14M42 24H18"
              stroke="#5D8AA8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>

        <button onClick={goToSettings} className="p-2" aria-label="Settings">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75 19H33.25M4.75 9.5H33.25M4.75 28.5H33.25"
              stroke="#5D8AA8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      {/* Custom Modal for Logout Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Are you sure you want to sign out?
            </h2>
            <div className="flex flex-col gap-3">
              <button
                className="bg-red-500 text-white py-2 rounded-lg text-lg"
                onClick={handleLogoutConfirm}
              >
                Yes, Sign Out
              </button>
              <button
                className="bg-gray-500 text-white py-2 rounded-lg text-lg"
                onClick={handleLogoutCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileSection;
