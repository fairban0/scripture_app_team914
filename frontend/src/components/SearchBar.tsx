"use client";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { SearchIcon } from "./icons";
import "./global.css";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/scripture");
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      {/* Search Input Container */}
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search App"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search application"
        />
      </div>

      {/* Search Button Container */}
      <div className="search-button-container">
        <button
          type="submit"
          aria-label="Submit search"
          className="search-button"
        >
          <div className="icon-container">
            <div className="icon-wrapper">
              <SearchIcon className="icon" />
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
