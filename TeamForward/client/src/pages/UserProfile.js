import React from 'react'
import Profile from '../components/ProfilePage/Profile'
import { useEffect, useState } from "react";
import axios from "axios";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import { useLocation } from 'react-router-dom';

const UserProfile = () => {

  
  const [userData, setUserData] = useState()
  const {state} = useLocation();

  console.log("user profile data:",state)

  return (
    <div>
        this is users profile
      <Profile 
      profileData={state}/>
    </div>
  )
}

export default UserProfile
