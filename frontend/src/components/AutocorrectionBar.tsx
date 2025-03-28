import React from "react";
import styles from "./Chat.module.css";

export const AutocorrectionBar = () => {
  return (
    <div className={styles.accessoryBar}>
      <div className={styles.autocorrection}>
        <div className={styles.autocompleteSuggestion}>"The"</div>
        <div className={styles.separatorClear}>
          <div className={styles.separator} />
        </div>
        <div className={styles.autocompleteSuggestion2}>the</div>
        <div className={styles.separator2}>
          <div className={styles.separator} />
        </div>
        <div className={styles.autocompleteSuggestion3}>to</div>
      </div>
    </div>
  );
};
