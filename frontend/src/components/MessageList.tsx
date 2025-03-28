import React from "react";
import styles from "./Chat.module.css";
import { Message } from "./Message";

export const MessageList = () => {
  return (
    <section className={styles.div2}>
      <Message
        text="Hello, Claire! It's nice to meet you!"
        type="received"
        className={styles.helloClaireItsnicetomeetyou}
      />
      <Message
        text="Hey, Andrea! Thanks for reaching out to me :)"
        type="sent"
        className={styles.heyAndreaThanksforreachingouttome}
      />
    </section>
  );
};
