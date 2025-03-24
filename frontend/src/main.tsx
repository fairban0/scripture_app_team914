import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ScriptureReader from "./components/ScriptureReader.tsx";
import Login from "./components/Login.tsx";
import SettingsScreen from "./components/SettingsScreen.tsx";
import EditProfile from "./components/EditProfile.tsx";
import AudioSettings from "./components/AudioSettings.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scripture" element={<ScriptureReader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/audio-settings" element={<AudioSettings />} />

      </Routes>
    </Router>
  </StrictMode>
);
