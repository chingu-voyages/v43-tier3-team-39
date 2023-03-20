import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import { useEffect, useState } from "react";

const Feed = () => {
  // const user = useReactiveVar(userState);

  const [user1, setUser1] = useState({});

  //
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const userJson = searchParams.get("user");
    if (userJson) {
      const user = JSON.parse(userJson);
      setUser1(user);
      console.log(user);
    }
  }, []);

  return <h1>Hello {user1.firstName}</h1>;
};

export default Feed;
