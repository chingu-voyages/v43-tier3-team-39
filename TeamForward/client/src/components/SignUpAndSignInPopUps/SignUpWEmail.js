import React, {useMemo, useState} from 'react';
import axios from 'axios';
import {userState} from '../../GlobalState';
import log from '../../helpers/logging';
import {useNavigate} from 'react-router-dom';
import Input from '../Input';
import { useReactiveVar } from '@apollo/client';

const SignUpWEmail = () => {
    const [error, setError] = useState({});
    const user = useReactiveVar(userState);
    const [confirmedPassword, setConfirmedPassword] = useState();
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:""
    });
    const passwordMatches = confirmedPassword === newUser.password;

    const navigate = useNavigate();

    const emailValid = useMemo(()=>{
        const isValid = /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(newUser.email);
        const isEmpty = newUser.email.length === 0;

        return {
            isValid,
            isEmpty
        }
    }, [newUser.email]);


    log("newUser.password", newUser.password);
    log("confirmedPassword", confirmedPassword);

    const newUserSubmitHandler = (e) => {
        e.preventDefault();
        if(!emailValid.isValid || emailValid.isEmpty){
            setError({email:true});
            log("newError");
            return;
        }
        // if(passwordMatches){

        axios.post("http://localhost:8000/teamForward/newUsers", newUser)
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
        const newUserFullInfo = {...newUser};
        newUserFullInfo[e.target.name] = e.target.value;
        setNewUser(newUserFullInfo);
    };

    return (
        <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
            <form onSubmit={newUserSubmitHandler}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        type="text"
                        name="firstName"
                        value = {newUser.firstName}
                        onChange={(e)=>onChangeHandler(e)}
                        id="InputFirstName"
                        placeholder="Enter your first name."
                    />
                    <label
                        htmlFhtmlFor="exampleInputEmail2"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                        First Name
                    </label>
                    <div>
                        {
                            error.firstName?
                            <div>{error.firstName.message}</div>
                            :null
                        }
                    </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        type="text"
                        name="lastName"
                        value = {newUser.lastName}
                        onChange={(e)=>onChangeHandler(e)}
                        id="InputLastName"
                        placeholder="Enter your last name."
                    />
                    <label
                        htmlFor="exampleInputEmail2"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                        Last Name
                    </label>
                    <div>
                        {
                            error.lastName?
                            <div>{error.lastName.message}</div>
                            :null
                        }
                    </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        type="text"
                        name="email"
                        value = {newUser.email}
                        onChange={(e)=>onChangeHandler(e)}
                        id="InputEmail"
                        placeholder="Enter Email"
                    />
                    <label
                        htmlFor="exampleInputEmail2"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                        Email address
                    </label>
                    <div>
                        {
                            !!error.email || (!emailValid.isValid && !emailValid.isEmpty)?
                            <div>{"You must enter a valid and unique email."}</div>
                            :null
                        }
                    </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={(e)=>onChangeHandler(e)}
                        id="InputPassword"
                        placeholder="Password"
                    />
                    <label
                        htmlFor="InputPassword"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                        Password</label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <Input
                        type="password"
                        name="confirmedPassword"
                        value={confirmedPassword}
                        onChange={(e)=>setConfirmedPassword(e.target.value)}
                        id="InputPassword2"
                        placeholder="Confirm Password"
                    />
                    <label
                        htmlFor="InputPassword2"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">
                        Confirm Password</label>
                </div>
                <div>
                    { 
                        !passwordMatches?
                        <div>{"Your passwords do not match"}</div> 
                        :null
                    }
                </div>
                <div className="mb-6 flex items-center justify-between" />
                    <button
                        type="submit"
                        className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-colhtmlFor="light">
                        Sign Up
                    </button>
                <div className="mb-6 flex items-center justify-between"/>
            </form>
        </div>
    );
};

export default SignUpWEmail;