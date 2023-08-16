import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-700 relative flex items-center justify-center">
        Login user with
      </h1>
      <div className="flex-2 flex flex-col items-center justify-center">
        <button
          className="w-56 h-10 border border-gray-300 shadow-md rounded-md font-semibold text-gray-700 bg-white mt-3 flex items-center justify-center cursor-pointer"
          onClick={googleAuth}
        >
          <img
            className="w-6 h-6 object-cover"
            src="./images/google.png"
            alt="google icon"
          />
          <span className="ml-2">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
