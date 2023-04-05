import React, { useState } from "react";
import SignUpWEmail from "../components/SignUpAndSignInPopUps/SignUpWEmail";
import { userState } from "../GlobalState";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BasicButtonStyling from "../components/Button/BasicButtonStyling";

const SignUp = () => {
  const [emailSignUpForm, setEmailSignUpForm] = useState(false);
  const navigate = useNavigate();
  const user = userState();

  const google = async () => {
    await window.open(process.env.REACT_APP_WINDOWKEY, "_self");
    <Navigate to="/feed" />;
  };

  return (
    <div className="bg-white flex flex-col h-screen">
      <header className="m-5 bg-white">Team Forward</header>      
      <div className="h-screen bg-white relative flex flex-col space-y-4 justify-center items-center">
        <div className="bg-white shadow-none flex flex-col justify-center items-center rounded p-6 w-80">
          <div className="place-self-start">
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              // value={value}
              className="items-start my-0 btext-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
            > Home
            </button>
          </div>
          <h1 className="text-3xl font-bold leading-normal mt-2 mb-3">Sign Up</h1>
          <SignUpWEmail />
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