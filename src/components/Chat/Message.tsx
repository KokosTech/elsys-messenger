import { FC } from "react";
import i18n from "../../constants/i18n";
import { useUserContext } from "../../contexts/userContext";
import { MessageProps } from "../../types/IChat";
import { UserContextType } from "../../types/IUser";

const ChatMessage: FC<MessageProps> = ({ message }) => {
  const { user } = useUserContext() as UserContextType;

  const { text, sender, type, createdAt } = message;
  const messageClass =
    type === "normal"
      ? sender.id === user.id
        ? "justify-end text-right"
        : "justify-start text-left"
      : "justify-center text-center";

  if (type !== "normal") {
    return (
      <div className={`flex flex-row ${messageClass} text-sm`}>
        <p className="p-3 rounded-lg border bg-zinc-500/20 text-zinc-200 border-zinc-400/20 ">
          {`${sender.name} has ${
            type === "join" ? `${i18n.joined}` : `${i18n.left}`
          } the chat`}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex ${messageClass}`}>
      <div className="flex flex-col space-y-1 max-w-[75%]">
        <div className="flex flex-col space-y-2 max-w-full">
          <p className="text-xs text-zinc-400">{sender.name}</p>
          <p className="inline-block p-3 rounded-lg border bg-zinc-500/20 text-zinc-200 border-zinc-400/20 break-words max-w-full">
            {text}
          </p>
          <p className="text-xs text-zinc-400">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
