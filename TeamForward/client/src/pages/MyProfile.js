import { useState } from "react";
import Profile from "../components/ProfilePage/Profile";
import { userState } from "../GlobalState";
import log from "../helpers/logging";
import ConnectButton from "../components/Button/ConnectButton";
import { useReactiveVar } from "@apollo/client";


// axios .get 
// route would be process.env.REACT_APP__URL / teamForward/ :id

const MyProfile = ({}) => {
  // const user = userState()
  const user = useReactiveVar(userState);
  console.log("this is userState", user);

  const [profileData, setProfileData] = useState({
    // id: user ? user._id : "",
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    bio: user ? user.bio : "",
    profession: user ? user.profession : "",
    zipCode: user ? user.zipCode : "",
    radius: user ? user.radius : "",
    cloudinaryProfileImgUrl: user ? user.cloudinaryProfileImgUrl : "",
    // interests: user ? user.interests : "",
    // activities: user ? user.activities : "",
  });

  return (
    <Profile 
    profileData={profileData}
    setProfileData={setProfileData}
    />
  );
};

export default MyProfile;
