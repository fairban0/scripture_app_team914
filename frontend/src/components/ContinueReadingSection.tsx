import React from "react";
import ScriptureItem from "./ScriptureItem";
import "./global.css"; // Ensure global styles are imported

const ContinueReadingSection: React.FC = () => {
  return (
    <section className="continueReading">
      <h2 className="continueReadingTitle">Continue Reading</h2>
      <div className="continueReadingContainer">
        <ScriptureItem
          title="1 Nephi 4"
          book="Book of Mormon"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/298b0b7295fa4fc4887259ca05b2d93184d2c7e5?placeholderIfAbsent=true"
          path="/scripture"
        />
        <ScriptureItem
          title="Mosiah 4"
          book="Book of Mormon"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/298b0b7295fa4fc4887259ca05b2d93184d2c7e5?placeholderIfAbsent=true"
          path="/scripture1"
        />
      </div>
    </section>
  );
};

export default ContinueReadingSection;
