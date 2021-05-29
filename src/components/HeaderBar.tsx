import React, {useContext} from "react";
import { UserContext } from "../app";

export const HeaderBar = () => {
  const user = useContext(UserContext);

  return (
    <header className="flex border-b border-solid border-bottom border-item w-full p-4">
      <img alt="logo" className="mx-2"/>
      <div className="flex bg-item rounded-xl gap-4 p-4 flex-grow">
        icon
        <span className="font-bold text-sm text-gray">Search for lessons, instructors, and more...</span>
      </div>
      <div className="ml-64">
        {user
          ? <img alt="avatar" src={user.avatar} className="rounded-full"/>
          : <button>sign in</button>
        }
      </div>
    </header>
  );
};
