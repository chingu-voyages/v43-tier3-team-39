import React from "react";

const SignIn = () => {
  const google = () => {
    window.open("https://team-forward-back-end.onrender.com/auth/google", "_self");
  };
  return (
    <div className="bg-white flex flex-col h-screen">
      <header className="m-5 bg-white">Team Forward</header>
      <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
        <div className="bg-white shadow-none flex flex-col justify-center items-center rounded p-6 w-80">
          <h1 className="text-3xl font-bold leading-normal mb-3">Sign In</h1>
          <button
            className="bg-white p-1 w-full border border-black"
            onClick={google}
          >
            Sign in with Google
          </button>
          <button className="bg-white p-1 my-3 w-full border border-black">
            Sign in with Email
          </button>
          <a href="/signup" className="p-1 underline">
            Create New User
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
