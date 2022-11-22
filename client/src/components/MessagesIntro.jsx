import React, { useEffect, useState } from "react";
import WriteAnimation from "./WriteAnimation";
import Message from "./Message";

function MessagesIntro() {
  const messagesToMap = [
    { text: "Sure, when?", delayTime: 2000 },
    { text: "at what time?", delayTime: 4000 },
    { text: "where?", delayTime: 6000 },
  ];

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const timeoutIds = [];

    messagesToMap.forEach((message, i) => {
      const timeoutId = setTimeout(() => {
        setMessages((prev) => [...prev, message.text]);
      }, message.delayTime);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="flex flex-col pr-1 h-0 md:h-96 md:my-auto  md:pl-6 lg:pl-20">
      <div className="text-2xl lg:text-3xl bg-easyPurple w-max max-w-custom px-6 py-4 rounded-3xl mb-5 ml-auto">
        Wanna go to my party?
      </div>
      {messages.map((message) => (
        <Message messageText={message} />
      ))}
      <WriteAnimation />
    </div>
  );
}

export default MessagesIntro;
