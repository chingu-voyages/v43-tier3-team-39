import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import log from "../helpers/logging";
import Jumbotron from "../components/UpdateProfilePage/Jumbotron";
import ProfileForm from "../components/UpdateProfilePage/ProfileForm";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const user = useReactiveVar(userState);
  console.log(user);

  const [formInfo, setFormInfo] = useState({
    id: user ? user._id : "",
    firstName: user ? user.firstName : "",
    lastName: user ? user.lastName : "",
    bio: user ? user.bio : "",
    profession: user ? user.profession : "",
    zipCode: user ? user.zipCode : "",
    radius: user ? user.radius : "",
    interests: user ? user.interests : "",
    activities: user ? user.activities : "",
  });

  const [profileImg, setProfileImg] = useState(
    user.cloudinaryImgUrl ? user.cloudinaryImgUrl : null
  );

  useEffect(()=>{
    console.log('profileImg', profileImg)
  },[profileImg])

  const handleOnChange = (key, value) => {
    setFormInfo({ ...formInfo, [key]: value });
  };

  function updateProfile(id, form) {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      bio: form.bio,
      profession: form.profession,
      zipCode: form.zipCode,
      radius: form.radius,
      interests: form.interests,
      activities: form.activities,
    };

    if (profileImg.includes("base64")) {
      payload.photo = profileImg;
    }

    axios
      .put(`${process.env.REACT_APP_BE_URL}/teamForward/${id}`, payload)
      .then((res) => {
        userState(res.data);
      })
      .catch((err) => {
        log(err);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user._id, formInfo);
      userState(formInfo);
      navigate("/feed");
    } catch (error) {
      log(error);
    }
  };

  const checkInterests = (item) => {
    if (user.interests) {
      return user.interests.includes(item);
    } else {
      return false;
    }
  };

  const checkActivities = (item) => {
    if (user.activities) {
      return user.activities.includes(item);
    } else {
      return false;
    }
  };

  return (
    <div>
      <Jumbotron />
      <ProfileForm
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        checkInterests={checkInterests}
        checkActivities={checkActivities}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
      />
    </div>
  );
};

export default UpdateProfile;
