"use client";
import React from "react";
import styles from "./DirectMessaging.module.css";
//import { StatusBar } from "./StatusBar";
//import { Header } from "./Header";
import { SearchBar } from "./SearchBarMessage";
import { ConversationList } from "./ConversationList";
import { NavigationBar } from "./NavigationBar";
import NavigationHeader from "./NavigationHeader";

const DirectMessaging: React.FC = () => {
  return (
    <main className={styles.directMessaging}>
      {/*} <StatusBar />*/}
      <section className={styles.content}>
        {/*  <Header /> */}
        <NavigationHeader />
        <SearchBar />
        <ConversationList />
        <button className={styles.floatingButton}>
          <div className={styles.iconButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d39a1a70a36737b9425b145cd408844e273628d?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc"
              alt="New message"
              className={styles.buttonIcon}
            />
          </div>
        </button>
      </section>
      <NavigationBar />
    </main>
  );
};

export default DirectMessaging;
