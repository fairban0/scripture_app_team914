import React from "react";
import styles from "./Chat.module.css";
import { AutocorrectionBar } from "./AutocorrectionBar";
import { KeyboardLayout } from "./KeyboardLayout";

export const KeyboardSection = () => {
  return (
    <section className={styles.keyboardIPhone}>
      <div className={styles.background} />
      <AutocorrectionBar />
      <div className={styles.spacer} />
      <KeyboardLayout />
      <div className={styles.emojiandMic}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06247590192e0e90d2d3eccc7fe1894926e6d97a?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
          alt="Emoji"
          className={styles.img6}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/decd3007ce04f43ddc870d05ff1b92f2e0018397?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
          alt="Microphone"
          className={styles.img7}
        />
      </div>
      <div className={styles.homeIndicator}>
        <div className={styles.homeIndicator2} />
      </div>
    </section>
  );
};
