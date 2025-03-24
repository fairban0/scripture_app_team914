import React from "react";
import "./global.css"; // Import global styles

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return <h2 className="welcomeMessage">Welcome, {name}</h2>;
};

export default WelcomeMessage;
