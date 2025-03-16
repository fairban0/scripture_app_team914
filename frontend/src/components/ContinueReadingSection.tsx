import React from "react";
import styles from "./InputDesign.module.css";
import ScriptureItem from "./ScriptureItem";

const ContinueReadingSection: React.FC = () => {
  return (
    <section className={styles.div10}>
      <h2 className={styles.div11}>Continue Reading</h2>
      <div className={styles.div12}>
        <ScriptureItem
          title="1 Nephi 4"
          book="Book of Mormon"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/298b0b7295fa4fc4887259ca05b2d93184d2c7e5?placeholderIfAbsent=true"
        />
        <ScriptureItem
          title="Mosiah 4"
          book="Book of Mormon"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/298b0b7295fa4fc4887259ca05b2d93184d2c7e5?placeholderIfAbsent=true"
        />
      </div>
    </section>
  );
};

export default ContinueReadingSection;
