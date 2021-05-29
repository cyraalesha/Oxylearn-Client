import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";

export const UserContext = React.createContext<User | null>(null);

export const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <HeaderBar/>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
