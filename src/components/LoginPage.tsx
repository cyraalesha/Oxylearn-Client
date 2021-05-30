import React from "react";
import { useAuthContext } from "../contexts/AuthContext";

export const LoginPage = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="w-96 bg-secondary p-6 rounded-lg">
        <h1 className="text-xl font-bold">Login To Oxylearn</h1>
        <div className="mt-6 flex flex-col gap-3">
          <SocialProvider provider="github" />
          <SocialProvider provider="google" />
          <SocialProvider provider="twitter" />
        </div>
      </div>
    </div>
  );
};

const SocialProvider = (props: any) => {
  const { login } = useAuthContext();

  let component;

  switch (props.provider) {
    case "github":
      component = (
        <button
          className="w-full p-4 grid place-items-center border border-gray-300 text-muted rounded-lg"
          onClick={() => login("github")}
        >
          <span>Continue With Github</span>
        </button>
      );
      break;
    case "google":
      component = (
        <button
          className="w-full p-4 grid place-items-center border border-gray-300 text-muted rounded-lg"
          onClick={() => login("google")}
        >
          <span>Continue With Google</span>
        </button>
      );
      break;
    case "twitter":
      component = (
        <button className="w-full p-4 grid place-items-center border border-gray-300 text-muted rounded-lg">
          <span>Continue With Twitter</span>
        </button>
      );
      break;

    default:
      component = <div></div>;
  }

  return component;
};
