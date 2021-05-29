import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";
import { LoginPage } from "./components/LoginPage";

export const UserContext = React.createContext<User>(null as any);

export const App = () => {
  const [user, setUser] = useState<User | null>({ name: "a", avatar: "https://cdn.discordapp.com/icons/841905593442369557/0fb763bb660fdb2b8b60e887687930de.png?size=256" } as any);

  return (
    <BrowserRouter>
      {
        user
          ? <UserContext.Provider value={user}>
              <HeaderBar/>
              <Switch>
                <Route path="/">

                </Route>
              </Switch>
            </UserContext.Provider>
          : <LoginPage setUser={setUser}/>
      }
    </BrowserRouter>
  );
}
