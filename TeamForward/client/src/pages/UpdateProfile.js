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

  const INTERESTS = ["Networking", "Mentorship", "Chingu"];
  const ACTIVITIES = ["Virtual Coffee", "Hiking", "Running"];

  const [formInterests, setFormInterests] = useState();

  const [formActivities, setFormActivities] = useState();

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

  const handleFormInfoChange = (key, value) => {
    setFormInfo({ ...formInfo, [key]: value });
  };

  const handleInterestsChange = (e, key, value) => {
    e.preventDefault();
    console.log(key, value);
    setFormInterests(formInterests?.set(key, value));
  };

  const combineElements = (map) => {
    let arr = [];
    map.forEach((value, key) => {
      if (value === true) {
        arr.push(key);
      }
    });
    return arr;
  };

  function updateProfile(id, form, interests) {
    axios
      .put(`${process.env.REACT_APP_BE_URL}/teamForward/${id}`, {
        firstName: form.firstName,
        lastName: form.lastName,
        bio: form.bio,
        profession: form.profession,
        zipCode: form.zipCode,
        radius: form.radius,
        interests: interests,
        activities: form.activities,
      })
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
      const interests = combineElements(formInterests);
      await updateProfile(user._id, formInfo, interests);
      userState(formInfo);
      navigate("/feed");
    } catch (error) {
      log(error);
    }
  };

  const mapElements = (arr, elements) => {
    const map = new Map();
    if (!arr.length) {
      for (let i of elements) {
        map.set(i, false);
      }
    }

    for (let i of elements) {
      if (arr.includes(i)) {
        map.set(i, true);
      } else {
        map.set(i, false);
      }
    }
    return map;
  };

  useEffect(() => {
    setFormInterests(mapElements(user.interests, INTERESTS));
    setFormActivities(mapElements(user.activities, ACTIVITIES));
  }, []);

  return (
    <div>
      <Jumbotron />
      <ProfileForm
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        formInterests={formInterests}
        formActivities={formActivities}
        handleInterestsChange={handleInterestsChange}
        handleFormInfoChange={handleFormInfoChange}
        handleSubmit={handleSubmit}
        INTERESTS={INTERESTS}
        ACTIVITIES={ACTIVITIES}
      />
    </div>
  );
};

export default UpdateProfile;
