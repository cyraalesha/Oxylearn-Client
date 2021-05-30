import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";
import { LoginPage } from "./components/LoginPage";
import { useAuthContext } from "./contexts/AuthContext";
import { HomePage } from "./components/HomePage";

export const App = () => {
  const { user } = useAuthContext();

  return user.id ? (
    <BrowserRouter>
      <HeaderBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoginPage />
  );
};
