"use client";

import React from "react";
import ClockIcon from "./icons/ClockIcon";
import DeleteIcon from "./icons/DeleteIcon";

interface SearchHistoryItemProps {
  text: string;
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({ text }) => {
  const handleDelete = () => {
    // Handle delete functionality here
    console.log(`Deleting search history item: ${text}`);
  };

  return (
    <article className="flex justify-between items-center w-full">
      <div className="flex gap-1.5 items-center">
        <ClockIcon />
        <div className="flex-1 pl-4">
          <p className="py-3 text-lg border-[0.333px] border-neutral-600 border-opacity-30 text-zinc-900">
            {text}
          </p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        aria-label={`Delete ${text} from search history`}
      >
        <DeleteIcon />
      </button>
    </article>
  );
};

export default SearchHistoryItem;
