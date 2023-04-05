import React, { useState } from "react";
import axios from "axios";
import { userState } from "../../GlobalState";
import log from "../../helpers/logging";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useReactiveVar } from "@apollo/client";

const SignInWEmail = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const user = useReactiveVar(userState);

  console.log("password", userPassword);
  console.log("email", userEmail);

  const onLoginHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BE_URL}/teamForward/login`, {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        userState(res.data.user);
        navigate(`/feed`);
      })
      .catch((err) => {
        setError("Your Email or Password is incorrect.");
      });
  };

    return (
        <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
            <form onSubmit={onLoginHandler}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        title="Email:"
                        type="text"
                        name="email"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        id="InputEmail"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        title="Password:"
                        type="password"
                        name="password"
                        onChange={(e)=>setUserPassword(e.target.value)}
                        id="exampleInputPassword2"
                        placeholder="Enter Your Password"
                    />
                </div>
                <div className="mb-2 flex items-center justify-between" />
                    <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Sign In
                    </button>
                <div className="mb-6 flex items-center justify-between"/>
                <div>{ error ? <span>{error}</span>:null}</div>
            </form>
        </div>
  );
};

export default SignInWEmail;
