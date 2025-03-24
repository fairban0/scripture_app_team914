import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AudioSettings: React.FC = () => {
  const navigate = useNavigate();

  // State for audio settings
  const [volume, setVolume] = useState(50);
  const [soundEffects, setSoundEffects] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(true);

  return (
    <main className="flex flex-col p-6 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Audio Settings</h1>

      <div className="flex flex-col gap-6">
        {/* Volume Control */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Volume</label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
          <span className="text-sm text-gray-800 mt-1">Volume: {volume}%</span>
        </div>

        {/* Sound Effects Toggle */}
        <div className="flex justify-between items-center">
          <label className="text-sm text-gray-600">Sound Effects</label>
          <input
            type="checkbox"
            checked={soundEffects}
            onChange={() => setSoundEffects(!soundEffects)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Background Music Toggle */}
        <div className="flex justify-between items-center">
          <label className="text-sm text-gray-600">Background Music</label>
          <input
            type="checkbox"
            checked={backgroundMusic}
            onChange={() => setBackgroundMusic(!backgroundMusic)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => navigate(-1)}
        >
          Save Settings
        </button>
        <button
          className="bg-gray-300 text-black p-2 rounded"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default AudioSettings;
