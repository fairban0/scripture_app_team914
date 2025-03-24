import React from "react";
import styles from "./InputDesign.module.css";
import { useNavigate } from "react-router-dom"; // Import React Router

interface ScriptureItemProps {
  title: string;
  book: string;
  imageUrl: string;
  path?: string; // Allow passing a navigation path
}

const ScriptureItem: React.FC<ScriptureItemProps> = ({
  title,
  book,
  imageUrl,
  path = "/scripture", // Default path if not provided
}) => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <article className={styles.div13}>
      <img
        src={imageUrl}
        alt={`${title} cover`}
        className="w-[41px] h-[41px] rounded-[10px]"
      />
      <div className={styles.div14}>
        <h3 className={styles.div15}>{title}</h3>
        <p className={styles.div16}>{book}</p>
      </div>
      {/* Make the button clickable and navigate to the path */}
      <button onClick={() => navigate(path)} className={styles.arrowButton}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px]"
        >
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            stroke="#4A90E2"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
};

export default ScriptureItem;
