import { useEffect, useRef, useState } from "react";
import ChatHistory from "../partials/Chat/History";
import ChatInput from "../partials/Chat/Input";
import { IMessage } from "../types/IChat";

const Chat = () => {
  const [messages, setMessages] = useState([] as IMessage[]);
  //const [typing, setTyping] = useState(false); // TODO: Add typing indicator

  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const getMessages = async () => {
    /* const response = await fetch("http://localhost:3000/messages");
    const data = await response.json();
    setMessages(data); */
    // TODO: Get messages logic
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [messages]);

  return (
    <div className="w-full h-full p-5 flex items-center justify-center">
      <div
        className="flex flex-col justify-space-a lg:w-2/5 md:w4/6 s w-full h-full p-5 rounded-xl
     bg-zinc-800/30 border border-zinc-500/30 backdrop-blur-3xl
     text-white"
      >
        <ChatHistory ref={chatHistoryRef} messages={messages} />
        <ChatInput setMessages={setMessages} />
      </div>
    </div>
  );
};

export default Chat;
