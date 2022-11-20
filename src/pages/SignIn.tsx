import { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import i18n from "../constants/i18n";
import { useUserContext } from "../contexts/userContext";
import { UserContextType } from "../types/IUser";

const SingIn = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const { signIn } = useUserContext() as UserContextType;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!signIn(username)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    console.log("error", error);
    document.title = i18n.SIGN_IN;
  }, []);

  return (
    <div className="w-full h-full p-5 flex items-center justify-center">
      <div className="min-h-fit px-5 py-10 space-y-5 bg-zinc-800/30 border border-zinc-500/30 backdrop-blur-3xl rounded-lg flex flex-col items-center justify-center">
        <form className="w-full max-w-sm">
          <div className="sm:w-96 flex flex-wrap space-y-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-zinc-200/40 text-xs font-bold mb-2"
                htmlFor="username"
              >
                {i18n.username}
              </label>
              <div className="w-full flex items-center justify-center space-x-4">
                <input
                  className="appearance-none block w-full border grow
                            bg-zinc-500/20 text-zinc-200 border-zinc-200/20 
                            hover:bg-zinc-400/20 hover:border-zinc-100/20
                            focus:bg-zinc-300/20 focus:border-zinc-100/20 
                            rounded py-3 px-4 leading-tight focus:outline-none"
                  id="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={i18n.usernamePlaceholder}
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
            </div>
            {error && (
              <div className="text-red-500 text-xs italic px-3">
                {i18n.usernameError}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
