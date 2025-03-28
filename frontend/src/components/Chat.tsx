"use client";
import * as React from "react";
import { UserProfile } from "./UserProfile";
import { ChatMessages } from "./ChatMessages";
import { KeyboardLayout } from "./KeyboardLayout";

function Chat() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <UserProfile />
      <ChatMessages />
      <KeyboardLayout />
    </main>
  );
}

export default Chat;
