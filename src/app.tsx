import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { User } from "./entities/User";
import { HeaderBar } from "./components/HeaderBar";
import { LoginPage } from "./components/LoginPage";
import { useAuthContext } from "./contexts/AuthContext";
import { HomePage } from "./components/HomePage";
import { SignUp } from "./components/SignUp";
import { ProposalPage } from "./components/ProposalPage";

export const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-full h-full">
      {user?.id ? (
        <BrowserRouter>
          <HeaderBar />
          <Switch>
            <Route path="/p">
              <ProposalPage />
            </Route>

            <Route path="/">
              <HomePage />
            </Route>

            
            
          </Switch>
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};
