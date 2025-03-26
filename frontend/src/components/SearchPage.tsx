"use client";

import React from "react";
import NavigationHeader from "./NavigationHeader";
import SearchBar from "./SearchBar";
import RecentSearchItem from "./RecentSearchItem";
import BottomNavigation from "./BottomNavigation";

import styles from "./InputDesign.module.css";


const SearchPage: React.FC = () => {
  const recentSearches = ["Laban", "1 Nephi", "Gold Plates"];
  

  return (
    <main className={`${styles.div} min-h-screen flex flex-col`}>
      <div className={`${styles.div2} flex-grow overflow-auto`}>
        
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

export default SearchPage;
