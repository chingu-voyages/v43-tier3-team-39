import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import { useEffect, useState } from "react";
import log from "../helpers/logging";
import axios from "axios";

const Feed = () => {
  const user = useReactiveVar(userState);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/teamForward/googleUser`)
  //     .then((res) => {
  //       userState(res.data);
  //       log(user);
  //     })
  //     .catch((err) => {
  //       log(err);
  //     });
  // }, [user]);

  return (
    <div>
      <h1>Hello {user ? user.firstName : ""}</h1>
      <a href="/updateprofile">Update Profile</a>
    </div>
  );
};

export default Feed;
