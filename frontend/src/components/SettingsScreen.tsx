"use client";

import React from "react";
import Header from "./Header";
import SettingsSection from "./SettingsSection";
import SettingItem from "./SettingItem";
import BottomNavigation from "./BottomNavigation";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-full bg-white min-h-screen">
      <section className="flex flex-col gap-8 px-6 mt-5">
        <Header title="Settings" />

        <div className="flex flex-col gap-5">
          {/* Account Section */}
          <SettingsSection title="ACCOUNT">
            <div className="flex items-center p-5 rounded-xl bg-zinc-200">
              <img
                src="profile_pic.jpg"
                alt="Profile"
                className="w-[50px] h-[50px] rounded-[50px]"
              />
              <div className="flex flex-col ml-3">
                <h3 className="text-sm text-black">Claire Smith</h3>
                <p className="text-xs text-zinc-600">csmith99</p>
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
              <ToggleSwitch enabled={true}/>
              <SettingItem label="Downloaded Media" hasBorder showArrow />
              <SettingItem
                label="Audio Settings"
                hasBorder
                showArrow
                onClick={() => navigate("/audio-settings")}
                />            
              </div>
          </SettingsSection>

          {/* Additional Info Section */}
          <SettingsSection title="ADDITIONAL INFO">
            <div className="flex flex-col rounded-xl bg-zinc-200">
              <SettingItem label="Downloaded Media" hasBorder showArrow />
              <SettingItem label="Audio Settings" showArrow   onClick={() => navigate("/audio-settings")} />
            </div>
          </SettingsSection>
        </div>
      </section>

      <BottomNavigation />
    </main>
  );
};

export default SettingsScreen;
