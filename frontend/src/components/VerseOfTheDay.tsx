import React from "react";
import "./global.css"; // Use global styles

interface VerseOfTheDayProps {
  verseText: string;
  reference: string;
  imageUrl?: string;
}

const VerseOfTheDay: React.FC<VerseOfTheDayProps> = ({
  verseText = "Therefore, let us go up; let us be strong like unto Moses...",
  reference = "1 Nephi 4:2",
  imageUrl = "/images/moses_parting_red_sea_barrett.png",
}) => {
  return (
    <section className="verseContainer">
      <h2 className="verseTitle">Verse of the Day</h2>

      <div className="verseCard">
        <img
          src={imageUrl}
          alt="Scripture illustration"
          className="verseImage"
        />

        <div className="verseTextContainer">
          <p className="verseText">{verseText}</p>
          <p className="verseReference">{reference}</p>
        </div>
      </div>

      <button className="shareButton">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"><path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z" stroke="#4A90E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          }}
        />
      </button>
    </section>
  );
};

export default VerseOfTheDay;
