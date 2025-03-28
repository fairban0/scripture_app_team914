import React from "react";
import styles from "./Chat.module.css";

export const KeyboardLayout = () => {
  return (
    <div className={styles.keyboardLayouts}>
      <div className={styles.row1}>
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
          (letter, index) => (
            <div key={letter} className={styles.key}>
              <div className={styles[`key${index + 2}`]}>{letter}</div>
            </div>
          )
        )}
      </div>
      <div className={styles.row2}>
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((letter, index) => (
          <div key={letter} className={styles.key}>
            <div className={styles[`key${index + 12}`]}>{letter}</div>
          </div>
        ))}
      </div>
      <div className={styles.div3}>
        <div className={styles.shiftKey}>
          <div className={styles.key21}>􀆝</div>
        </div>
        <div className={styles.row3}>
          {["z", "x", "c", "v", "b", "n", "m"].map((letter, index) => (
            <div key={letter} className={styles.key}>
              <div className={styles[`key${index + 22}`]}>{letter}</div>
            </div>
          ))}
        </div>
        <div className={styles.deleteKey}>
          <div className={styles.key29}>􀆛</div>
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles.keyboardSwitch}>
          <div className={styles.key30}>ABC</div>
        </div>
        <div className={styles.space}>
          <div className={styles.key31}>space</div>
        </div>
        <div className={styles.return}>
          <div className={styles.key32}>return</div>
        </div>
      </div>
    </div>
  );
};
