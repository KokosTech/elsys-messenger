import { forwardRef } from "react";

import ChatMessage from "../../components/Chat/Message";
import { MessagesProps } from "../../types/IChat";

const ChatHistory = forwardRef<HTMLDivElement, MessagesProps>(
  ({ messages }, ref) => {
    return (
      <div className="space-y-3 w-full h-full p-5 overflow-scroll overscroll-contain scroll-smooth scrollbar-hide">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div ref={ref}></div>
      </div>
    );
  }
);

export default ChatHistory;
