import React, { useState } from "react";
import SignUpWEmail from "../components/SignUpAndSignInPopUps/SignUpWEmail";
import { userState } from "../GlobalState";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [emailSignUpForm, setEmailSignUpForm] = useState(false);

  const google = async () => {
    await window.open(process.env.REACT_APP_WINDOWKEY, "_self");
    <Navigate to="/feed" />;
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <header className="m-5 bg-white">Team Forward</header>
      <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
        <div className="bg-white shadow-none flex flex-col justify-center items-center rounded p-6 w-80">
          <h1 className="text-3xl font-bold leading-normal mb-3">Sign Up</h1>
          <button
            className="bg-white p-1 my-3 w-full border border-black"
            onClick={() => setEmailSignUpForm(true)}
          >
            Sign up with Email
          </button>
          {emailSignUpForm ? <SignUpWEmail /> : null}
          <button
            className="bg-white p-1 w-full border border-black"
            onClick={google}
          >
            Sign up with Google
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