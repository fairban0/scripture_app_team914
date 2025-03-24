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
    <article className="flex gap-1.5 items-center w-full">
      <ClockIcon />
      <div className="flex-1 pl-4">
        <p className="py-3 text-lg border-[0.333px] border-neutral-600 border-opacity-30 text-zinc-900">
          {searchText}
        </p>
      </div>
      <button
        onClick={onDelete}
        aria-label={`Remove ${searchText} from recent searches`}
        className="focus:outline-none"
      >
        <XCircleIcon />
      </button>
    </article>
  );
};

export default RecentSearchItem;
