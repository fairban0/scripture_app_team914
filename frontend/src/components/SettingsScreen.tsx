"use client";

import React from "react";
import StatusBar from "./StatusBar";
import Header from "./Header";
import SettingsSection from "./SettingsSection";
import SettingItem from "./SettingItem";
import BottomNavigation from "./BottomNavigation";
import ToggleSwitch from "./ToggleSwitch";

const SettingsScreen: React.FC = () => {
  return (
    <main className="flex flex-col w-full bg-white min-h-screen">
      <StatusBar />

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
                <p className="text-xs text-zinc-600">
                  Last Sync: 13 seconds ago
                </p>
              </div>
            </div>
          </SettingsSection>

          {/* Display Section */}
          <SettingsSection title="DISPLAY">
            <SettingItem label="List Mode">
              <ToggleSwitch enabled={true} />
            </SettingItem>
          </SettingsSection>

          {/* Advanced Section */}
          <SettingsSection title="ADVANCED">
            <div className="flex flex-col rounded-xl bg-zinc-200">
              <SettingItem label="Notifications" hasBorder showArrow />
              <SettingItem label="Downloaded Media" hasBorder showArrow />
              <SettingItem label="Audio Settings" hasBorder showArrow />

              <SettingItem label="Enable Offline Search" hasBorder>
                <ToggleSwitch enabled={true} />
              </SettingItem>

              <SettingItem label="Show Archived Content" hasBorder>
                <ToggleSwitch enabled={false} />
              </SettingItem>

              <SettingItem
                label="Limit Cellular Data Use"
                description="For content updates and media"
              >
                <ToggleSwitch enabled={false} />
              </SettingItem>
            </div>
          </SettingsSection>

          {/* Additional Info Section */}
          <SettingsSection title="ADDITIONAL INFO">
            <div className="flex flex-col rounded-xl bg-zinc-200">
              <SettingItem label="Notifications" hasBorder showArrow />
              <SettingItem label="Downloaded Media" hasBorder showArrow />
              <SettingItem label="Audio Settings" showArrow />
            </div>
          </SettingsSection>
        </div>
      </section>
    </main>
  );
};

export default SettingsScreen;
