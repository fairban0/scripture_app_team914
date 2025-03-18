import React from "react";

const StatusBar: React.FC = () => {
  return (
    <header className="flex pt-5 w-full bg-white h-[53px]">
      <div className="flex justify-between items-center px-4 w-full">
        <time className="gap-2.5 text-lg leading-6 text-black font-[590]">
          9:41
        </time>
        <div className="flex justify-center items-center h-2.5 w-[124px]" />
        <div>
          <svg
            width="135"
            height="14"
            viewBox="0 0 135 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center gap-[7px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.115 2.03302C43.115 1.39997 42.6375 0.886791 42.0484 0.886791H40.9817C40.3926 0.886791 39.915 1.39997 39.915 2.03302V11.967C39.915 12.6 40.3926 13.1132 40.9817 13.1132H42.0484C42.6375 13.1132 43.115 12.6 43.115 11.967V2.03302ZM35.6809 3.33207H36.7476C37.3367 3.33207 37.8143 3.85757 37.8143 4.50581V11.9395C37.8143 12.5877 37.3367 13.1132 36.7476 13.1132H35.6809C35.0918 13.1132 34.6143 12.5877 34.6143 11.9395V4.50581C34.6143 3.85757 35.0918 3.33207 35.6809 3.33207ZM31.3492 5.98112H30.2825C29.6934 5.98112 29.2158 6.51331 29.2158 7.1698V11.9245C29.2158 12.581 29.6934 13.1132 30.2825 13.1132H31.3492C31.9383 13.1132 32.4158 12.581 32.4158 11.9245V7.1698C32.4158 6.51331 31.9383 5.98112 31.3492 5.98112ZM26.0484 8.42641H24.9817C24.3926 8.42641 23.915 8.951 23.915 9.59811V11.9415C23.915 12.5886 24.3926 13.1132 24.9817 13.1132H26.0484C26.6375 13.1132 27.115 12.5886 27.115 11.9415V9.59811C27.115 8.951 26.6375 8.42641 26.0484 8.42641Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.6865 3.30213C61.1736 3.30223 63.5657 4.22432 65.3682 5.8778C65.5039 6.00545 65.7209 6.00384 65.8545 5.87419L67.152 4.61072C67.2197 4.54496 67.2575 4.45588 67.2569 4.3632C67.2563 4.27052 67.2175 4.18187 67.149 4.11688C62.418 -0.257833 54.9543 -0.257833 50.2233 4.11688C50.1548 4.18183 50.1159 4.27044 50.1152 4.36313C50.1146 4.45581 50.1523 4.54491 50.2199 4.61072L51.5178 5.87419C51.6514 6.00404 51.8685 6.00565 52.0042 5.8778C53.8069 4.22421 56.1992 3.30212 58.6865 3.30213ZM58.6832 7.5224C60.0405 7.52232 61.3494 8.03406 62.3555 8.95819C62.4916 9.08934 62.7059 9.0865 62.8386 8.95178L64.1259 7.63247C64.1937 7.56327 64.2313 7.46939 64.2303 7.37184C64.2293 7.27429 64.1898 7.18121 64.1207 7.11342C61.0568 4.22257 56.3121 4.22257 53.2483 7.11342C53.1791 7.18121 53.1396 7.27434 53.1387 7.37192C53.1378 7.4695 53.1755 7.56337 53.2435 7.63247L54.5304 8.95178C54.663 9.0865 54.8774 9.08934 55.0135 8.95819C56.0189 8.03467 57.3268 7.52297 58.6832 7.5224ZM61.2076 10.316C61.2095 10.4213 61.1725 10.5229 61.1052 10.5967L58.9285 13.0514C58.8647 13.1236 58.7777 13.1642 58.6869 13.1642C58.5962 13.1642 58.5092 13.1236 58.4454 13.0514L56.2683 10.5967C56.2011 10.5228 56.1641 10.4212 56.1661 10.3159C56.1681 10.2105 56.2089 10.1108 56.2789 10.0401C57.669 8.72625 59.7049 8.72625 61.095 10.0401C61.1649 10.1108 61.2057 10.2106 61.2076 10.316Z"
              fill="black"
            />
            <rect
              opacity="0.35"
              x="74.7568"
              y="1"
              width="24"
              height="12"
              rx="3.8"
              stroke="black"
            />
            <path
              opacity="0.4"
              d="M100.257 5.28113V9.3566C101.062 9.01143 101.585 8.20847 101.585 7.31886C101.585 6.42926 101.062 5.6263 100.257 5.28113Z"
              fill="black"
            />
            <rect
              x="76.2568"
              y="2.5"
              width="21"
              height="9"
              rx="2.5"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
