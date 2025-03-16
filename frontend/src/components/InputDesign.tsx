"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import "./global.css"; // Import global CSS for smooth scrolling
import ProfileSection from "./ProfileSection";
import WelcomeMessage from "./WelcomeMessage";
import ContinueReadingSection from "./ContinueReadingSection";
import VerseOfTheDay from "./VerseOfTheDay";
import BottomNavigation from "./BottomNavigation";

const InputDesign: React.FC = () => {
  const verseText =
    "Therefore, let us go up; let us be strong like unto Moses; for he truly spake unto the waters of the Red Sea and they divided hither and thither, and our fathers came through, out of the captivity, on dry ground, and the armies of Pharaoh did follow and were drowned in the waters of the Red Sea.";

  return (
    <main className={styles.div}>
      <div className={styles.div2}>
        <ProfileSection />
        <WelcomeMessage name="Claire" />
        <ContinueReadingSection />
        <VerseOfTheDay
          verseText={verseText}
          reference="1 Nephi 4:2"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f71a01ba4aa28235b13219ffd64c0fe1caf2d569?placeholderIfAbsent=true"
        />
      </div>
      <BottomNavigation />
    </main>
  );
};

export default InputDesign;
