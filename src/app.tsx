import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";
import { LoginPage } from "./components/LoginPage";
import { useAuthContext } from "./contexts/AuthContext";

export const App = () => {
  const { user } = useAuthContext();
  console.log(user, "this was from hjfhjhf safms");

  return user.id ? (
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoginPage />
  );
};
