import { IUser } from "./IUser";

export interface IMessage {
  id: number;
  text: string;
  sender: IUser;
  type: "normal" | "join" | "leave";
  createdAt: string;
}

export interface MessagesProps {
  messages: IMessage[];
}

export interface MessageProps {
  message: IMessage;
}

export interface IChat {
  id: string;
  name: string;
  messages: IMessage[];
  users: IUser[];
}
