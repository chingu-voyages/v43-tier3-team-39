import React from 'react'
import Profile from '../components/ProfilePage/Profile'
import { useEffect, useState } from "react";
import axios from "axios";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import { useLocation } from 'react-router-dom';

const UserProfile = () => {

  const {state} = useLocation();

  return (
    <div>
      <Profile 
      profileData={state}/>
    </div>
  )
}

export default UserProfile
