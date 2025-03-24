import React from "react";
import "./global.css"; // Import global styles

const ProfileSection: React.FC = () => {
  return (
    <section className="profileSection">
      {/* Profile Image (Far Left) */}
      <div className="flex items-center">
        <img
          src="/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
          alt="User profile"
          className="profileImage"
        />
      </div>

      {/* Buttons (Far Right) */}
      <div className="profileButtons">
        <button className="profileButton" aria-label="Go back">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H18M32 34L42 24M42 24L32 14M42 24H18" stroke="#5D8AA8" stroke-opacity="0.7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            }}
          />
        </button>

        <button className="profileButton" aria-label="Menu">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 19H33.25M4.75 9.5H33.25M4.75 28.5H33.25" stroke="#5D8AA8" stroke-opacity="0.7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            }}
          />
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
