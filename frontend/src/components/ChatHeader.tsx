import React from "react";
import styles from "./Chat.module.css";

export const ChatHeader = () => {
  return (
    <section>
      <div className={styles.div}>
        <nav className={styles.icons}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/723e127d8b450268965d98b3ab4798c763676977?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Back"
            className={styles.img3}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a282eb1ee316183d4158467f49b9faada1840846?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
            alt="Menu"
            className={styles.img4}
          />
        </nav>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be8c7974e0b55521945b2a622ab628a14b24159?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
          alt="Profile"
          className={styles.img5}
        />
      </div>
      <h1 className={styles.andreaJohnson}>Andrea Johnson</h1>
    </section>
  );
};
