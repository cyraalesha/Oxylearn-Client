import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";
import { LoginPage } from "./components/LoginPage";
import { AuthProvider, useAuthContext } from "./contexts/AuthContext";

export const App = () => {
  const { user } = useAuthContext();

  return (
    <AuthProvider>
      <BrowserRouter>
        {user ? (
          <>
            <HeaderBar />
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </>
        ) : (
          <LoginPage />
        )}
      </BrowserRouter>
    </AuthProvider>
  );
};
