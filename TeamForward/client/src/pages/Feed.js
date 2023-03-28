import { userState } from "../GlobalState";
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import log from "../helpers/logging";
import axios from "axios";

const Feed = () => {
  const user = userState();

  return (
    <div>
      <h1>Hello {user ? user.firstName : ""}</h1>
      <Link to="/updateprofile">Update Profile</Link>
    </div>
  );
};

export default Feed;
