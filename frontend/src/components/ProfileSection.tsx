import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputDesign.module.css";

const ProfileSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle logout button click
  const handleLogoutClick = () => {
    setIsModalOpen(true); // Show custom modal for confirmation
  };

  // Function to confirm logout
  const handleLogoutConfirm = () => {
    // Perform logout actions
    localStorage.clear(); // Clear any stored user info (if needed)
    navigate("/login"); // Redirect to Login page
  };

  // Function to cancel logout
  const handleLogoutCancel = () => {
    setIsModalOpen(false); // Close modal without logging out
  };

  // Function to navigate to settings
  const goToSettings = () => {
    navigate("/settings"); // Redirect to Settings page
  };

  return (
    <section className={styles.div7}>
      <img
        src="/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
        alt="User profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div className={styles.div8}>
        {/* Logout button */}
        <button onClick={handleLogoutClick}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px]"><path d="M18 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H18M32 34L42 24M42 24L32 14M42 24H18" stroke="#5D8AA8" stroke-opacity="0.7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            }}
          />
        </button>

        {/* Hamburger button - Navigates to Settings */}
        <button onClick={goToSettings}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[38px] h-[38px]"><path d="M4.75 19H33.25M4.75 9.5H33.25M4.75 28.5H33.25" stroke="#5D8AA8" stroke-opacity="0.7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            }}
          />
        </button>
      </div>

      {/* Custom Modal for Logout Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-3">
              Are you sure you want to sign out?
            </h2>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleLogoutConfirm}
              >
                Yes, Sign Out
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
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
