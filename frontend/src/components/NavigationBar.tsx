import React from "react";
import styles from "./NavigationBar.module.css";

export const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navItems}>
        <button className={styles.navButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfea5031f93f8e8bb20125cdd6a917c710a3c28c?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Home"
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Home</span>
        </button>
        <button className={styles.navButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d558f21852bd07bdddb67244d65b95163907b1d2?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Scriptures"
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Scriptures</span>
        </button>
        <button className={styles.navButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9124cb5346d88dfbb6641d918003b7a2a567d617?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Search"
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Search</span>
        </button>
        <button className={styles.navButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da051067a1b909f5630b0c8d431eee330e08c1d5?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Chats"
            className={styles.navIcon}
          />
          <span className={styles.navLabel}>Chats</span>
        </button>
      </div>
    </nav>
  );
};
