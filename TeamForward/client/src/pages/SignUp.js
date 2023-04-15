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
    <div className="bg-white flex flex-col h-screen ">
      <header className="m-5 bg-white font-bold text-xl">Team Forward</header>      
      <div className="h-screen bg-white relative flex flex-col space-y-4 justify-center items-center ">
        <div className="bg-white shadow-none flex flex-col justify-center items-center rounded p-6 w-80">
          <div className="place-self-start">
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              // value={value}
              className="items-start my-0 btext-blue-600 inline-flex items-center hover:text-white border border-green-900 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-green-900 dark:text-green-900 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
            > Home
            </button>
          </div>
          <h1 className="text-3xl font-bold leading-normal mt-2 mb-3">Sign Up</h1>
          <SignUpWEmail />
            <p className="mt-3">Already have an account?</p>
            <a href="/signin" className="p-1 underline">
              Sign in
            </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;