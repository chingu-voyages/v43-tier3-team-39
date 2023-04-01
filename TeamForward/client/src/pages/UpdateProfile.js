import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import log from "../helpers/logging";
import Jumbotron from "../components/UpdateProfilePage/Jumbotron";
import ProfileForm from "../components/UpdateProfilePage/ProfileForm";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const user = useReactiveVar(userState);

  const [formInfo, setFormInfo] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    bio: user.bio,
    profession: user.profession,
    zipCode: user.zipCode,
    radius: user.radius,
    interests: {
      Networking: user.interests.networking,
      Mentorship: user.interests.mentorship,
      Chingu: user.interests.chingu,
    },
    activities: {
      VirtualCoffee: user.activities.virtualCoffee,
      Hiking: user.activities.hiking,
      Running: user.activities.running,
    },
  });

  const [profileImg, setProfileImg] = useState(
    user.cloudinaryProfileImgUrl ? user.cloudinaryProfileImgUrl : null
  );

  const handleFormInfoChange = (key, value) => {
    setFormInfo({ ...formInfo, [key]: value });
  };

  const handleInterests = (key, value) => {
    setFormInfo({
      ...formInfo,
      interests: {
        ...formInfo.interests,
        [key]: value,
      },
    });
  };

  const handleActivities = (key, value) => {
    setFormInfo({
      ...formInfo,
      activities: {
        ...formInfo.activities,
        [key]: value,
      },
    });
  };

  function updateProfile(form) {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      bio: form.bio,
      profession: form.profession,
      zipCode: form.zipCode,
      radius: form.radius,
      interests: {
        networking: form.interests.Networking,
        mentorship: form.interests.Mentorship,
        chingu: form.interests.Chingu,
      },
      activities: {
        virtualCoffee: form.activities.VirtualCoffee,
        hiking: form.activities.Hiking,
        running: form.activities.Running,
      },
    };

    if (profileImg.includes("base64")) {
      payload.photo = profileImg;
    }

    axios
      .put(`${process.env.REACT_APP_BE_URL}/teamForward/${user._id}`, payload)
      .then((res) => {
        log(res.data);
        userState(res.data);
      })
      .catch((err) => {
        log(err);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formInfo);
      navigate("/feed");
    } catch (error) {
      log(error);
    }
  };

  return (
    <div>
      <Jumbotron />
      <ProfileForm
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        handleFormInfoChange={handleFormInfoChange}
        handleInterests={handleInterests}
        handleActivities={handleActivities}
        handleSubmit={handleSubmit}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
      />
    </div>
  );
};

export default UpdateProfile;
