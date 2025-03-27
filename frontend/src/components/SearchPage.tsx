"use client";

import React from "react";
import styles from "./DirectMessaging.module.css";

// Components
import NavigationHeader from "./NavigationHeader";
import SearchBar from "./SearchBar";

import RecentSearchItem from "./RecentSearchItem";


// Uncomment when needed
// import { StatusBar } from "./StatusBar";
// import { Header } from "./Header";

const SearchPage: React.FC = () => {
  const recentSearches = ["Laban", "1 Nephi", "Gold Plates"];

  return (
    <main className={styles.directMessaging}>
      {/* <StatusBar /> */}
      <section className={styles.content}>
        {/* <Header /> */}
        <NavigationHeader />
        <SearchBar />

        <section className="flex flex-col gap-8 px-6 mt-10">
          {recentSearches.map((search, index) => (
            <RecentSearchItem key={index} searchText={search} />
          ))}
        </section>
      </section>

      <div className="mt-auto">
        
        
      </div>
    </main>
  );
};

export default SearchPage;

