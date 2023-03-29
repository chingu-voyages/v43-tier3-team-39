import React, { useEffect, useState } from "react";
import axios from "axios";
import log from "../helpers/logging";
import { userState } from "../GlobalState";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState();
  const user = userState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/teamForward/${id}`)
      .then((res) => {
        log(res.data)
        setUserInfo(res.data);
      })
      .catch((err) => {
        log(err);
      });
  });

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          </div>
          {/* PROFILE PICTURE */}
          <div className="relative ">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
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
            </div>
          </div>
          {/* BUTTONS */}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
          </div>
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">John Doe
            {/* {user.firstName} */}
          </h1>
          <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

          <p className="mt-8 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p className="mt-2 text-gray-500">University of Computer Science</p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-gray-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <h3>Interests</h3>
          <h3>Activities</h3>
        </div>
      </div>
      <Link to="/feed" >Back to feed</Link>
    </div>
  );
};

export default UserProfile;
