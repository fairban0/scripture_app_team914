import React from "react";
import styles from "./Chat.module.css";
import { Message } from "./Message";

export const MessageList = () => {
  return (
    <section className={styles.div2}>
      <Message
        text="Hey Claire! I noticed your comment about your recent experiences with the Book of Mormon, specifically the Laban story. It was so inspiring to read! :)"
        type="received"
        className={styles.helloClaireItsnicetomeetyou}
      />
      <Message
        text="Hey Andrea! Thanks!! I really felt inspired :) I am a new member of the Church and reading the Book of Mormon has really given me peace. I'm glad I can share the joy it brings me."
        type="sent"
        className={styles.heyAndreaThanksforreachingouttome}
      />
      <Message
        text="That's incredible! What Book of Mormon story has been your favorite so far?"
        type="received"
        className={styles.helloClaireItsnicetomeetyou}
      />
    </section>
  );
};
