import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2>Log With</h2>
      <div className="flex flex-col  gap-2">
        <button className="btn border-blue-400 text-blue-400">
          {" "}
          <FaGoogle /> Log in with Google
        </button>
        <button className="btn ">
          {" "}
          <FaGithub /> Log in with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
