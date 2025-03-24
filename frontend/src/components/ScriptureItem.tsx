import React from "react";
import "./global.css"; // Ensure global styles are applied

interface ScriptureItemProps {
  title: string;
  book: string;
  imageUrl: string;
}

const ScriptureItem: React.FC<ScriptureItemProps> = ({
  title,
  book,
  imageUrl,
}) => {
  return (
    <article className="scriptureItem">
      {/* Image Column */}
      <div className="scriptureImageContainer">
        <img src={imageUrl} alt={`${title} cover`} className="scriptureImage" />
      </div>

      {/* Text Column */}
      <div className="scriptureTextContainer">
        <h3 className="scriptureTitle">{title}</h3>
        <p className="scriptureBook">{book}</p>
      </div>

      {/* Button Column */}
      <button className="readButton">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#4A90E2" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
          }}
        />
      </button>
    </article>
  );
};

export default ScriptureItem;
