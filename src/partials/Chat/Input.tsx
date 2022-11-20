import { useEffect } from "react";
import { FC, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useUserContext } from "../../contexts/userContext";
import { IMessage } from "../../types/IChat";
import { UserContextType } from "../../types/IUser";
import getId from "../../utils/getId";

interface InputProps {
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

const ChatInput: FC<InputProps> = ({ setMessages }) => {
  const { user } = useUserContext() as UserContextType;

  const [message, setMessage] = useState({
    id: 0,
    text: "",
    sender: user,
    type: "normal",
    createdAt: "",
  } as IMessage);
  const [error, setError] = useState(false);

  // created at -> HH:MM:SS

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (message.text === "") {
      setError(true);
      return;
    } else setError(false);

    setMessage({
      ...message,
      id: getId(),
      createdAt: new Date().toLocaleTimeString(),
    });
  };

  useEffect(() => {
    if (message.id !== 0) {
      setMessages((messages) => [...messages, message] as IMessage[]);
      setMessage({ ...message, text: "", id: 0, createdAt: "" } as IMessage);
    }
  }, [message]);

  return (
    <form
      className="ChatInput flex flex-row justify-space-a w-full h-16 pt-5 space-x-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="w-full flex items-center justify-center space-x-4">
        <input
          className="appearance-none block w-full border grow
                            bg-zinc-500/20 text-zinc-200 border-zinc-200/20 
                            hover:bg-zinc-400/20 hover:border-zinc-100/20
                            focus:bg-zinc-300/20 focus:border-zinc-100/20 
                            rounded-lg py-3 px-4 leading-tight focus:outline-none"
          id="message"
          type="text"
          placeholder="Type a message..."
          value={message.text}
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <div className="flex flex-wrap grow-0">
          <div className="w-full">
            <button
              className="w-[46px] h-[46px] border aspect-square flex items-center justify-center 
                                bg-zinc-500/20 text-zinc-400 border-zinc-200/20 
                                hover:bg-zinc-400/20 hover:text-zinc-200 hover:border-zinc-100/20
                                focus:bg-zinc-300/20 focus:text-zinc-200 focus:border-zinc-100/20 
                                font-blakc rounded-full"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
