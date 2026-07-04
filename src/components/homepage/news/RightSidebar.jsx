"use client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  const handleGoogleSingIn =async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("google data",data);
  };

  const handleGithubSingIn =async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
  console.log("github data",data);
  };
  return (
    <div>
      <h2>Log With</h2>
      <div className="flex flex-col  gap-2">
        <button className="btn border-blue-400 text-blue-400" onClick={handleGoogleSingIn}>
          {" "}
          <FaGoogle /> Log in with Google
        </button>
        <button className="btn " onClick={handleGithubSingIn}>
          {" "}
          <FaGithub /> Log in with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
