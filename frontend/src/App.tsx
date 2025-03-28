import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Home from "./components/InputDesign";
import ScriptureReader from "./components/ScriptureReader";
import Login from "./components/Login";
import SettingsScreen from "./components/SettingsScreen";
import DirectMessaging from "./components/DirectMessaging";
import MosiahPage from "./components/MosiahPage";
import SearchPage from "./components/SearchPage";
import Chat from "./components/Chat";

function Layout() {
  const location = useLocation();
  const hideNavOn = ["/login"]; // paths where nav should be hidden
  const shouldHideNav = hideNavOn.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Page Content */}
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scripture" element={<ScriptureReader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<DirectMessaging />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/scripture1" element={<MosiahPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>

      {/* Bottom Navigation (conditionally visible) */}
      {!shouldHideNav && <BottomNavigation />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;


