import React from "react";
import { ClockIcon, XCircleIcon } from "./icons";

interface RecentSearchItemProps {
  searchText: string;
  onDelete?: () => void;
}

const RecentSearchItem: React.FC<RecentSearchItemProps> = ({
  searchText,
  onDelete = () => {},
}) => {
  return (
    <article className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm">
      {/* Left side: Clock icon + search text */}
      <div className="flex items-center gap-3 flex-1">
        <div className="w-5 h-5 text-gray-500 flex items-center">
          <ClockIcon />
        </div>
        <p className="text-lg text-gray-900 flex-1 truncate">{searchText}</p>
      </div>

      {/* Right side: Delete button with XCircle icon */}
      <button
        onClick={onDelete}
        aria-label={`Remove ${searchText} from recent searches`}
        className="p-2 rounded-full hover:bg-gray-200 transition"
      >
        <div className="w-6 h-6 text-gray-500 hover:text-red-500 flex items-center">
          <XCircleIcon />
        </div>
      </button>
    </article>
  );
};

export default RecentSearchItem;
