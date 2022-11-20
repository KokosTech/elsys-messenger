export interface IUser {
  id: number;
  name: string;
  // TODO: more fields, if you want
}

export type UserContextType = {
  user: IUser;
  signIn: (username: string) => boolean;
  logOut: () => void;
};
