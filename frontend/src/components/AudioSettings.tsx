import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css"; // Import the styles

const AudioSettings: React.FC = () => {
  const navigate = useNavigate();

  // State for audio settings
  const [volume, setVolume] = useState(50);
  const [soundEffects, setSoundEffects] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(true);

  return (
    <main className="flex flex-col p-6 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Audio Settings</h1>

      <div className={styles.box}>
        {/* Volume Control */}
        <div className={styles.settingBox}>
          <label className="text-sm text-gray-600 mb-1">Volume</label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className={styles.inputRange}
          />
          <span className="text-sm text-gray-800 mt-1">Volume: {volume}%</span>
        </div>

        {/* Sound Effects Toggle */}
        <div className={styles.settingBox}>
          <label className="text-sm text-gray-600">Sound Effects</label>
          <input
            type="checkbox"
            checked={soundEffects}
            onChange={() => setSoundEffects(!soundEffects)}
            className={styles.toggleSwitch}
          />
        </div>

        {/* Background Music Toggle */}
        <div className={styles.settingBox}>
          <label className="text-sm text-gray-600">Background Music</label>
          <input
            type="checkbox"
            checked={backgroundMusic}
            onChange={() => setBackgroundMusic(!backgroundMusic)}
            className={styles.toggleSwitch}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-2">
          <button className={styles.saveButton} onClick={() => navigate(-1)}>
            Save Settings
          </button>
          <button className={styles.cancelButton} onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default AudioSettings;
