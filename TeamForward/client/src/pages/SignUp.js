import React from "react";

const SignUp = () => {
  const google = () => {
    window.open(
      // "https://team-forward-back-end.onrender.com/auth/google",
      process.env.REACT_APP_WINDOWKEY,
      "_self"
    );
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <header className="m-5 bg-white">Team Forward</header>
      <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
        <div className="bg-white shadow-none flex flex-col justify-center items-center rounded p-6 w-80">
          <h1 className="text-3xl font-bold leading-normal mb-3">Sign Up</h1>
          <button
            className="bg-white p-1 w-full border border-black"
            onClick={google}
          >
            Sign up with Google
          </button>
          <button className="bg-white p-1 my-3 w-full border border-black">
            Sign up with Email
          </button>
          <p>Already have an account?</p>
          <a href="/signin" className="p-1 underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
