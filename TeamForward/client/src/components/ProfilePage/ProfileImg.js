import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

const ProfileImg = ({profileData, setProfileData}) => {
  const user = useReactiveVar(userState);
  return (
    <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center  text-indigo-500">
      {profileData.cloudinaryProfileImgUrl ? (
        <img
          className="rounded-full"
          src={profileData.cloudinaryProfileImgUrl}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default ProfileImg;
