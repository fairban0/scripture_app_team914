import React from "react";
import Header from "./Header";
import SettingsSection from "./SettingsSection";
import SettingItem from "./SettingItem";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import BackIcon from "./icons/BackIcon";
import styles from "./Settings.module.css";

const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This goes back to the previous page
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {/* Custom Header for Settings */}
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <button
              aria-label="Go back"
              onClick={handleBackClick}
              className={styles.buttonBack}
            >
              <BackIcon className={styles.buttonBackIcon} />
            </button>
            <h1 className={styles.header}>Settings</h1>
          </div>
        </nav>

        <div className={styles.settingsContainer}>
          {/* Account Section */}
          <SettingsSection title="ACCOUNT">
            <div className={styles.accountSection}>
              <img
                src="../public/images/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                alt="Profile"
                className={styles.profileImage}
              />
              <div className={styles.profileInfo}>
                <div className={styles.profileName}>
                  <h3>Claire Smith</h3>
                </div>
                <button
                  className={styles.editProfileButton}
                  onClick={() => navigate("/edit-profile")}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </SettingsSection>

          {/* Advanced Section */}
          <SettingsSection title="ADVANCED">
            <div className={styles.settingWithToggle}>
              <SettingItem label="Notifications" hasBorder />
              <div className={styles.toggleWrapper}>
                <ToggleSwitch />
              </div>
            </div>
            <div className={styles.settingsItemButton}>
              <SettingItem
                label="Audio Settings"
                hasBorder
                showArrow
                onClick={() => navigate("/audio-settings")}
              />
            </div>
            <div className={styles.settingWithToggle}>
              <SettingItem label="Enable Offline Browsing" hasBorder />
              <div className={styles.toggleWrapper}>
                <ToggleSwitch />
              </div>
            </div>
            <div className={styles.settingsItemButton}>
              <div className="bottom">
                <SettingItem
                  label="Privacy Policy"
                  hasBorder
                  showArrow
                  onClick={() => navigate("/privacy-policy")}
                />
              </div>
            </div>
          </SettingsSection>
        </div>
      </section>
    </main>
  );
};

export default SettingsScreen;
