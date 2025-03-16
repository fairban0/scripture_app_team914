import React from "react";
import styles from "./InputDesign.module.css";

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return <h2 className={styles.div9}>Welcome, {name}</h2>;
};

export default WelcomeMessage;
