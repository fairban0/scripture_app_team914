import React from "react";
import styles from "./ConversationList.module.css";
import { ConversationItem } from "./ConversationItem";
import { useNavigate } from "react-router-dom";

const conversations = [
  {
    id: 1,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0bd35a8172b30777efb89b21f12ac021685a6dae?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "RS leaders",
    message: "Hi Claire! Do you want to do a study...",
    date: "2d",
    hasNotification: true,
  },
  {
    id: 2,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7846df736ef07f0469ebf9841b5eba3f57ada26f?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Andrea Johnson",
    message: "Hello, how is the reading going for A...",
    date: "Tues",
    hasNotification: true,
  },
  {
    id: 3,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc78e811e850f1d19bf77d555d11c71ca86da433?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Best friends",
    message: "When are you guys free to meet up?",
    date: "Sun",
  },
  {
    id: 4,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b94f92c65b6ba2fe3a09533b2a60335d6bc03af9?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Helaman",
    message: "What did you guys think about Capt...",
    date: "2/18",
  },
  {
    id: 5,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/61f31e48efeeca0f88d7acd91834826d4f360b77?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Tom Miller",
    message: "Thanks for sharing!",
    date: "1/31",
  },
  {
    id: 6,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da815478f37d7f26636af1ad502a94ead96bc20e?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Emma Jones",
    message: "Hi! It is great to connect with you!",
    date: "1/12",
  },
  {
    id: 7,
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb5a533486a2e91f1914fb8665f3a160865f8bb8?placeholderIfAbsent=true&apiKey=3258114e603f4c4b93159cc5a3da17fc",
    name: "Michelle Lee",
    message: "I finished reading Alma 5",
    date: "1/3",
  },
];

export const ConversationList: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleConversationClick = () => {
    // Navigate to the chat page on click
    navigate("/chat");
  };

  return (
    <section className={styles.conversationList}>
      {/* Assuming conversations is a list of all the conversations */}
      {conversations.map((conversation, index) => (
        <div
          key={index}
          className={styles.conversationItem}
          onClick={handleConversationClick} // Trigger navigation on click
        >
          <ConversationItem {...conversation} />
        </div>
      ))}
    </section>
  );
};
