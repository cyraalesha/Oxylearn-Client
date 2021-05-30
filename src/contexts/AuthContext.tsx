import React, { useContext, useEffect, useState } from "react";
import { auth } from "../util/firebase";
import { User } from "../entities/User";
import axios from "axios";

interface AuthContextSchema {
  user: User;
  login: any;
  logout: any;
}

const AuthContext = React.createContext<AuthContextSchema>({
  user: null as any,
  login: null,
  logout: null,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User>({} as any);

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

      (async () => {
        const res = (
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/create`, {
            user: {
              id: authRes.user?.uid,
              avatar: authRes.user?.photoURL,
              isEducator: false,
              name: authRes.user?.displayName,
              email: authRes.user?.email || "",
            } as User,
          })
        ).data;
        console.log(res);
      })();
    }
  };

  const logout = async () => {
    await auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (returnedUser) => {
      if (returnedUser) {
        // fetch user from api and set user

        (async () => {
          const res = (
            await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/user/fetch/${returnedUser.uid}`
            )
          ).data;

          setUser(res.data);
        })();
      }

      return setUser({} as any);
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
