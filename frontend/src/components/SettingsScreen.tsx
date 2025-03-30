"use client";

import React from "react";
import Header from "./Header";
import SettingsSection from "./SettingsSection";
import SettingItem from "./SettingItem";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import BackIcon from "./icons/BackIcon";

const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This goes back to the previous page
  };

  return (
    <main className="flex flex-col w-full bg-white min-h-screen">
      <section className="flex flex-col gap-8 px-6 mt-5">
        {/* Custom Header for Settings */}
        <nav className="flex justify-between items-center w-full">
          <div className="flex gap-6 items-center">
            <button aria-label="Go back" onClick={handleBackClick}>
              <BackIcon />
            </button>
            <h1 className="text-2xl text-black">Settings</h1>
          </div>
        </nav>

        <div className="flex flex-col gap-5">
          {/* Account Section */}
          <SettingsSection title="ACCOUNT">
            <div className="flex items-center p-5 rounded-xl bg-zinc-200">
              <img
                src="../public/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                alt="Profile"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "60%",
                  objectFit: "cover",
                }}
              />
              <div className="flex flex-col ml-3">
                <h3 className="text-sm text-black">Claire Smith</h3>
              </div>
              <button
                className="ml-auto bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => navigate("/edit-profile")}
              >
                Edit Profile
              </button>
            </div>
          </SettingsSection>

          {/* Advanced Section */}
          <SettingsSection title="ADVANCED">
            <div className="flex flex-col rounded-xl bg-zinc-200">
              <SettingItem label="Notifications" hasBorder />
              <ToggleSwitch  />
              <br />
              <SettingItem label="Audio Settings" hasBorder showArrow onClick={() => navigate("/audio-settings")}/>
                   
              <br />
              <SettingItem label="Enable Offline Browsing" hasBorder/>
              <ToggleSwitch />
              <br />
              <SettingItem label="Privacy Policy" hasBorder showArrow onClick={() => navigate("/privacy-policy")}/>

            </div>
            <div className="flex flex-col gap-5 pb-25"> {/* Theres a second one because it makes sure nothing gets hidden under the nav bar */}
              <SettingItem
                label="Audio Settings"
                hasBorder
                showArrow
                onClick={() => navigate("/audio-settings")}
                />            
            </div>
            
          </SettingsSection>
        </div>
      </section>
    </main>
  );
};

export default SettingsScreen;
