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
      {/* Left Icon */}
      <ClockIcon className="recent-search-icon" />

      {/* Search Text */}
      <span className="recent-search-text">{searchText}</span>

      {/* Right Icon (Delete) */}
      <button
        onClick={onDelete}
        aria-label={`Remove ${searchText} from recent searches`}
        className="recent-search-delete"
      >
        <XCircleIcon />
      </button>
    </article>
  );
};

export default RecentSearchItem;
