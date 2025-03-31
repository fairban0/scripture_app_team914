"use client";

import React from "react";
import styles from "./DirectMessaging.module.css";

// Components
import NavigationHeader from "./NavigationHeader";
import SearchBar from "./SearchBar";
import RecentSearchItem from "./RecentSearchItem";

const SearchPage: React.FC = () => {
  const recentSearches = ["Laban", "1 Nephi", "Gold Plates"];

  return (
    <main
      className={`${styles.directMessaging} flex flex-col min-h-screen bg-white`}
    >
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Search Bar */}
      <section className="px-4 pt-4">
        <SearchBar />
      </section>

      {/* Recent Searches Section */}
      <section className="px-4 mt-6">
        <h2 className="Recent-Searches">Recent Searches</h2>
        <div className="flex flex-col gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
          {recentSearches.length > 0 ? (
            recentSearches.map((search, index) => (
              <RecentSearchItem key={index} searchText={search} />
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">
              No recent searches yet
            </p>
          )}
        </div>
      </section>

      {/* Spacing to keep content from being too tight */}
      <div className="flex-grow" />
    </main>
  );
};

export default SearchPage;
