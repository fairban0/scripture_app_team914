"use client";

import React from "react";
import StatusBar from "./StatusBar";
import NavigationHeader from "./NavigationHeader";
import SearchInput from "./SearchInput";
import SearchHistoryItem from "./SearchHistoryItem";
import BottomNavigation from "./BottomNavigation";

const SearchHistoryScreen: React.FC = () => {
  const searchHistoryItems = [
    { text: "Laban" },
    { text: "1 Nephi" },
    { text: "Gold Plates" },
  ];

  return (
    <main className="flex flex-col w-full bg-white min-h-screen">
      <StatusBar />
      <NavigationHeader />
      <section className="px-5 mt-5">
        <SearchInput />
      </section>
      <section className="flex flex-col gap-8 px-6 mt-10">
        {searchHistoryItems.map((item, index) => (
          <SearchHistoryItem key={index} text={item.text} />
        ))}
      </section>
      <div className="mt-auto">
        <BottomNavigation />
      </div>
    </main>
  );
};

export default SearchHistoryScreen;
