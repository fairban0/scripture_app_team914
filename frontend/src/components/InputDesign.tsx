"use client";

import React from "react";
import NavigationHeader from "./NavigationHeader";
import SearchBar from "./SearchBar";
import RecentSearchItem from "./RecentSearchItem";
import BottomNavigation from "./BottomNavigation";
import ContinueReadingSection from "./ContinueReadingSection";
import ProfileSection from "./ProfileSection";
import WelcomeMessage from "./WelcomeMessage";
import styles from "./InputDesign.module.css";
import VerseOfTheDay from "./VerseOfTheDay"

const InputDesign: React.FC = () => {
const recentSearches = ["Laban", "1 Nephi", "Gold Plates"];
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

        <NavigationHeader />
        <SearchBar />

        <section className="flex flex-col gap-8 px-6 mt-10">
          {recentSearches.map((search, index) => (
            <RecentSearchItem key={index} searchText={search} />
          ))}
        </section>
      </div>

      <div className="mt-auto">
        <BottomNavigation />
      </div>
    </main>
  );
};

export default InputDesign;





