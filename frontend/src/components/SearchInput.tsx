import React from "react";
import SearchIcon from "./icons/SearchIcon";

const SearchInput: React.FC = () => {
  return (
    <div className="flex gap-1 items-center px-3 w-full bg-white rounded-3xl border border-black h-[41px]">
      <input
        type="text"
        placeholder="Search App"
        className="flex-1 gap-2.5 text-base tracking-wide leading-6 text-zinc-700 bg-transparent outline-none"
      />
      <div className="flex justify-end items-center">
        <button
          className="flex justify-center items-center w-12 h-12"
          aria-label="Search"
        >
          <div className="flex justify-center items-center rounded-[100px]">
            <div className="flex justify-center items-center p-2">
              <SearchIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
