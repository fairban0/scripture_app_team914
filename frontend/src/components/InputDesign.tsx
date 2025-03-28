"use client";

import React from "react";
import BottomNavigation from "./BottomNavigation";
import ContinueReadingSection from "./ContinueReadingSection";
import ProfileSection from "./ProfileSection";
import WelcomeMessage from "./WelcomeMessage";
import styles from "./InputDesign.module.css";
import VerseOfTheDay from "./VerseOfTheDay"

const InputDesign: React.FC = () => {
const verseText = "Be strong like unto Moses...";


  return (
    <main className={`${styles.div} min-h-screen flex flex-col`}>
      <div className={`${styles.div2} flex-grow overflow-auto`}>
        <ProfileSection />
        <WelcomeMessage name="Claire" />
        <ContinueReadingSection />
        <VerseOfTheDay
          verseText={verseText}
          reference="1 Nephi 4:2"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/f71a01ba4aa28235b13219ffd64c0fe1caf2d569?placeholderIfAbsent=true"
        />

    
      </div>

      <div className="mt-auto">
        <BottomNavigation />
      </div>
    </main>
  );
};

export default InputDesign;





