import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ScripturePage from "./ScriptureReader.tsx";
import ScriptureReader from "./ScriptureReader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/scripture" element={<ScriptureReader />} />
      </Routes>
    </Router>
  </StrictMode>
);
