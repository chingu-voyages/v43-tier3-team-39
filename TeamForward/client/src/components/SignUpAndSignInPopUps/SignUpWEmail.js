import React, { useMemo, useState } from "react";
import axios from "axios";
import { userState } from "../../GlobalState";
import log from "../../helpers/logging";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useReactiveVar } from "@apollo/client";

const SignUpWEmail = () => {
  const [error, setError] = useState({});
  const user = useReactiveVar(userState);
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const passwordMatches = confirmedPassword === newUser.password;

  const navigate = useNavigate();

  const emailValid = useMemo(() => {
    const isValid = /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(newUser.email);
    const isEmpty = newUser.email.length === 0;

    return {
      isValid,
      isEmpty,
    };
  }, [newUser.email]);

  log("newUser.password", newUser.password);
  log("confirmedPassword", confirmedPassword);

  const newUserSubmitHandler = (e) => {
    e.preventDefault();
    if (!emailValid.isValid || emailValid.isEmpty) {
      setError({ email: true });
      return;
    }
    // if(passwordMatches){
    axios
      .post(`${process.env.REACT_APP_BE_URL}/teamForward/newUsers`, newUser)
      .then((res) => {
        userState(res.data);
        navigate(`/feed`);
      })
      .catch((err) => {
        setError(err.response.data.errors);
      });
    return;
  };

  log("newUser", newUser);
  log("error", error);

  const onChangeHandler = (e) => {
    const newUserFullInfo = { ...newUser };
    newUserFullInfo[e.target.name] = e.target.value;
    setNewUser(newUserFullInfo);
  };

  return (
    <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
      <form onSubmit={newUserSubmitHandler}>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <Input
            title="First Name:"
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={(e) => onChangeHandler(e)}
            id="InputFirstName"
            placeholder="Enter your First Name"
          />
          <div>
            {error.firstName ? <div>{error.firstName.message}</div> : null}
          </div>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <Input
            title="Last Name:"
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={(e) => onChangeHandler(e)}
            id="InputLastName"
            placeholder="Enter Your Last Name"
          />
          <div>
            {error.lastName ? <div>{error.lastName.message}</div> : null}
          </div>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <Input
            title="Email:"
            type="text"
            name="email"
            value={newUser.email}
            onChange={(e) => onChangeHandler(e)}
            id="InputEmail"
            placeholder="Enter Email"
          />
          <div>
            {!!error.email || (!emailValid.isValid && !emailValid.isEmpty) ? (
              <div>{"You must enter a valid and unique email."}</div>
            ) : null}
          </div>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <Input
            title="Password:"
            type="password"
            name="password"
            value={newUser.password}
            onChange={(e) => onChangeHandler(e)}
            id="InputPassword2"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <Input
            title="Confirm Password:"
            type="password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            id="InputConfirmedPassword"
            placeholder="Confirm Your Password"
          />
        </div>
        <div>
          {!passwordMatches ? <div>{"Your passwords do not match"}</div> : null}
        </div>
        <div className="mb-2 flex items-center justify-between" />
        <button
          type="submit"
          className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Sign Up
        </button>
        <div className="mb-6 flex items-center justify-between" />
      </form>
    </div>
  );
};

export default SignUpWEmail;
