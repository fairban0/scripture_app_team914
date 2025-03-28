import React from "react";

interface MessageProps {
  text: string;
  type: "sent" | "received";
  className: string;
}

export const Message: React.FC<MessageProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
