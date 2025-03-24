"use client";

import React, { useState } from "react";
import { SearchIcon } from "./icons";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex px-5 mt-5 w-full">
      <div className="flex gap-1 items-center px-1 w-full bg-white rounded-3xl border border-black h-[41px]">
        <input
          type="text"
          placeholder="Search App"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 gap-2.5 text-base tracking-wide leading-6 text-zinc-700 bg-transparent border-none focus:outline-none px-2"
          aria-label="Search application"
        />
        <button
          type="submit"
          aria-label="Submit search"
          className="flex justify-center items-center w-12 h-12 focus:outline-none"
        >
          <div className="flex justify-center items-center rounded-[100px]">
            <div className="flex justify-center items-center p-2">
              <SearchIcon />
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
