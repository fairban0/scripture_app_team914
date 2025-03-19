import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Home from "./components/InputDesign";
import ScriptureReader from "./components/ScriptureReader";
import Login from "./components/Login";
import SettingsScreen from "./components/SettingsScreen";

function App() {
  return (
    <Router>
      {/* Main App Wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Main Page Content */}
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scripture" element={<ScriptureReader />} />
            <Route path="/search" element={<Login />} />
            <Route path="/chats" element={<SettingsScreen />} />
          </Routes>
        </div>

        {/* Bottom Navigation - Always Visible */}
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
