"use client";

import React from "react";
import StatusBar from "./StatusBar";
import NavigationHeader from "./NavigationHeader";
import SearchBar from "./SearchBar";
import RecentSearchItem from "./RecentSearchItem";
import BottomNavigation from "./BottomNavigation";

const InputDesign: React.FC = () => {
  const recentSearches = ["Laban", "1 Nephi", "Gold Plates"];

  return (
    <main className="flex flex-col w-full bg-white min-h-screen">
      <StatusBar />
      <NavigationHeader />
      <SearchBar />

      <section className="flex flex-col gap-8 px-6 mt-10">
        {recentSearches.map((search, index) => (
          <RecentSearchItem key={index} searchText={search} />
        ))}
      </section>

      <div className="mt-auto">
        <BottomNavigation />
      </div>
    </main>
  );
};

export default InputDesign;
