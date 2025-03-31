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
    <article className="recent-search-item">
      {/* Left side: Clock icon + search text */}
      <div className="flex items-center flex-1">
        <div className="recent-search-icon">
          <ClockIcon />
        </div>
        <p className="recent-search-text">{searchText}</p>
      </div>

      {/* Right side: Delete button with XCircle icon */}
      <button
        onClick={onDelete}
        aria-label={`Remove ${searchText} from recent searches`}
        className="recent-search-delete"
      >
        <div>
          <XCircleIcon />
        </div>
      </button>
    </article>
  );
};

export default RecentSearchItem;
