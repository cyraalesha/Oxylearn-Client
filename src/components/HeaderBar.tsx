import React from "react";
import Dropdown from "../icons/dropdown.svg";
import logo from "url:../icons/logo.png?height=48";
import { useAuthContext } from "../contexts/AuthContext";

export const HeaderBar = () => {
  const { user } = useAuthContext();

  return (
    <header className="flex border-b border-solid border-bottom border-item w-full p-4 items-stretch">
      <img alt="OxyLearn" className="mr-4" src={logo} />
      <div className="flex bg-item rounded-xl gap-4 p-4 flex-grow">
        <i className="fas fa-search" />
        <span className="font-bold text-sm text-gray">
          Search for lessons, instructors, and more...
        </span>
      </div>
      <div className="ml-64">
        <div className="flex gap-3 items-center">
          <img
            alt="avatar"
            src={user.avatar}
            width={48}
            height={48}
            className="bg-item rounded-full"
          />
          <Dropdown />
        </div>
      </div>
    </header>
  );
};
