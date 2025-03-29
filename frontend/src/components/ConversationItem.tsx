import React from "react";
import styles from "./ConversationItem.module.css";

interface ConversationItemProps {
  avatar: string;
  name: string;
  message: string;
  date: string;
  hasNotification?: boolean;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  avatar,
  name,
  message,
  date,
  hasNotification,
}) => {
  return (
    <article className={styles.conversation}>
      <div className={styles.content}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <div className={styles.messageContent}>
          <h2 className={styles.name}>
            {name}
            {hasNotification && (
              <div className={styles.notification} aria-label="New message" />
            )}
          </h2>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
      <time className={styles.date}>{date}</time>
    </article>
  );
};
