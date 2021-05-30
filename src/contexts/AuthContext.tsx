import React, { useContext, useEffect, useState } from "react";
import { auth } from "../util/firebase";

const AuthContext = React.createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState({});

  const login = async (providerName: any) => {
    let provider;

    switch (providerName) {
      case "github":
        provider = new auth.GithubAuthProvider();
        break;
      case "google":
        provider = new auth.GoogleAuthProvider();
        break;
      default:
        provider = new auth.GoogleAuthProvider();
    }

    const authRes = await auth().signInWithPopup(provider);

    if (authRes.additionalUserInfo?.isNewUser) {
      // make signup request
    }
  };

  const logout = async () => {
    await auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (returnedUser) => {
      if (returnedUser) {
        // fetch user from api and set user
      }

      return setUser({});
    });
    return unsubscribe;
  }, []);

  const value = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
