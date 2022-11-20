import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IUser, UserContextType } from "../types/IUser";
import getId from "../utils/getId";

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

// For auth check and user info / data

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({} as IUser);
  const navigate = useNavigate();

  const signIn = (username: string) => {
    if (!username) return false;
    if (username.length < 3 || username.length > 18) return false;

    const id = getId();
    setUser({
      id: id,
      name: username,
    });

    localStorage.setItem(
      "user",
      JSON.stringify({
        id,
        username,
      })
    );

    // TODO:
    // Send "JOIN MESSAGE"
    // And whatever other logic you want to do on sign in

    return true;
  };

  const onClose = () => {
    // TODO:
    // Send "LEFT MESSAGE"
    // And whatever other logic you want to do on window close
  };

  const logOut = () => {
    setUser({} as IUser);
    localStorage.removeItem("user");
    navigate("/signin");

    // TODO:
    // Send "LEFT MESSAGE"
    // And whatever other logic you want to do on log out
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user) {
      setUser(user);
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (user.id) {
      console.log("User logged in");
      navigate("/");
    }
  }, [user]);

  const auth = useMemo(
    () => ({
      user,
      signIn,
      onClose,
      logOut,
    }),
    [user]
  );

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
export default UserProvider;
