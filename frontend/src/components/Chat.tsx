"use client";
import * as React from "react";
import styles from "./Chat.module.css";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { KeyboardSection } from "./KeyboardSection";

export default function Chat() {
  return (
    <main className={styles.chat}>
      <ChatHeader />
      <MessageList />
      <KeyboardSection />
    </main>
  );
}
