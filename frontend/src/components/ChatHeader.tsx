import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Chat.module.css";

export const ChatHeader = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This goes back to the previous page
  };

  const handleMenuClick = () => {
    navigate("/settings"); // Navigate to a menu page or another route you want
  };

  return (
    <section>
      <div className={styles.div}>
        <nav className={styles.icons}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/723e127d8b450268965d98b3ab4798c763676977?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Back"
            className={styles.img3}
            onClick={handleBackClick} // Adds the back button functionality
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a282eb1ee316183d4158467f49b9faada1840846?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Menu"
            className={styles.img4}
            onClick={handleMenuClick} // Adds the menu button functionality
          />
        </nav>
      </div>
      <div className={styles.div}>
        <div className={styles.headerContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be8c7974e0b55521945b2a622ab628a14b24159?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Profile"
            className={styles.img5}
          />
          <h1 className={styles.andreaJohnson}>Andrea Johnson</h1>
        </div>
      </div>
    </section>
  );
};
