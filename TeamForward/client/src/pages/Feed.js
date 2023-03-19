import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";

const Feed = () => {
  const user = useReactiveVar(userState);

  return <div>Feed</div>;
};

export default Feed;
