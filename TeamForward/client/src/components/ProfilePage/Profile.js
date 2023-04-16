import { useEffect, useState } from "react";
import { userState } from "../../GlobalState";
import { useReactiveVar } from "@apollo/client";
import { Link, NavLink } from "react-router-dom";
import ConnectButton from "../Button/ConnectButton";
import ProfileImg from "./ProfileImg";
import NavMenu from "../NavMenu/NavMenu";

const Profile = ({ profileData, setProfileData }) => {
  const user = useReactiveVar(userState);
  // console.log("this is profileData", profileData);

  return (
    <div className="">
      <div className="inline-block ml-4">
        <NavMenu />
        <h1 className="font-bold inline-block">{user ? `${user.firstName} ${user.lastName}`: ""}</h1>
      </div>
      <div className="px-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="grid grid-cols-3 text-center order-last md:order-first md:mt-0">
            </div>
            <div className="relative ">
              <ProfileImg profileData={profileData} />
            </div>
            {/* BUTTONS */}
            <div className="space-x-8 flex justify-between mt-32 lg:justify-end md:mt-0 md:justify-end sm:justify-center xs:justify-center">
              {user._id === profileData._id ? (
                <Link to="/updateprofile">
                  <button className="text-white py-2 px-4 h-10 w-30 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg text-sm  transition transform hover:-translate-y-0.5">
                    Edit
                  </button>
                </Link>
              ) : (
                <ConnectButton />
              )}
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              {`${profileData.firstName} ${profileData.lastName}`}
            </h1>
            <p className="mt-5 text-gray-500 font-bold text-xl ">
              {profileData.profession}
            </p>
            <p className="text-gray-600 mt-6 font-semibold">
              {profileData.zipCode ? `Location: ${profileData.zipCode}` : null}
            </p>
          </div>
          <div className="mt-12 flex flex-col justify-center ">
            <p className="text-gray-800 text-center text-xl font-medium ">
              {profileData.bio}
            </p>
          </div>
          <div className="mt-12 flex flex-col justify-center  text-gray-500">
            <h3 className="font-bold uppercase">Interests:</h3>
            <div className="p-1 flex flex-col sm:flex-row min-w-fit text-center">
              {Object.keys(profileData.interests).map((interest) =>
                profileData.interests[interest] ? (
                  <p className="p-1 my-3 mr-2 border bg-green-800 text-white rounded-md">
                    {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </p>
                ) : null
              )}
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-center  text-gray-500">
            <h3 className="font-bold uppercase">Activities:</h3>
            <div className="p-1 flex flex-col sm:flex-row min-w-fit text-center">
              {Object.keys(profileData.activities).map((activity) =>
                profileData.activities[activity] ? (
                  <p className=" p-1 my-3 mr-2 border bg-green-800 text-white rounded-md">
                    {activity.charAt(0).toUpperCase() + activity.slice(1)}
                  </p>
                ) : null
              )}
            </div>
          </div>
        </div>
        <NavLink to="/feed" className="text-gray-800 text-sm flex justify-center underline mt-2">
          Back to feed
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
