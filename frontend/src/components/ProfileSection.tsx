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
    <section className="profile-section">
      {/* Profile Image */}
      <div className="profile-image-container">
        <img
          src="/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="User profile"
          className="profile-image"
        />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button
          onClick={handleLogoutClick}
          className="action-button"
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

        <button
          onClick={goToSettings}
          className="action-button"
          aria-label="Settings"
        >
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
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-header">Are you sure you want to sign out?</h2>
            <div className="modal-buttons">
              <button
                className="modal-btn confirm"
                onClick={handleLogoutConfirm}
              >
                Yes, Sign Out
              </button>
              <button className="modal-btn cancel" onClick={handleLogoutCancel}>
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
