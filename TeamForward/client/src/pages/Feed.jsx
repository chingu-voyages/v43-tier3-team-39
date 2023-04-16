import { userState } from "../GlobalState";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import log from "../helpers/logging";
import axios from "axios";
import NavMenu from "../components/NavMenu/NavMenu";
import BasicButtonStyling from "../components/Button";
import blankProfileImg from "../../src/assets/home/blank-profile.png"

const interests = ["Chingu", "Networking", "Mentorship"];
const activities = ["VirtualCoffee", "Hiking", "Running"];

//TODO add message to for new user to update profile(zipcode & radius to find those in their area)

const Feed = () => {
  const navigate = useNavigate();
  const user = useReactiveVar(userState);
  const [open,setOpen] = useState(true)
  const [interestArr,setInterestArr] = useState([]);
  const [activityArr, setActivityArr] = useState([]);
  const [userList,setUserList] = useState([]);

  // grab all users from db based on filters
  useEffect(()=>{
    log(interestArr);
    const baseUrl = `${process.env.REACT_APP_BE_URL}/teamForward?`;
    const interestQuery = interestArr.length > 0
      ? `&interests=${interestArr.join(',')}`
      : '';
    const activityQuery = activityArr.length > 0
      ? `&activities=${activityArr.join(',')}`
      : '';
    let url =`${baseUrl}${interestQuery}${activityQuery}`;
    axios.get(url)
    .then((res)=>{
      setUserList(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[interestArr, activityArr, user?.zipCode]);

  const userInfoNeeded = () => {
    if( !user.zipCode || !user.radius ){
      return <div className="mx-auto my-4"> 
          <div className="block max-w-sm rounded-lg bg-slate-200 shadow-lg text-center text-sm px-3 py-3">
            Please update your user info to include a zipcode and radius to tailor your feed to locals in your area. 
            <div className="p-1 underline">
              <Link to="/updateprofile"> Edit Here</Link>
            </div>
          </div>
        </div>
    }
    return null;
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <div className='md:absolute'>
          <NavMenu />
          <h1 className="font-bold inline-block">{user ? `${user.firstName} ${user.lastName}`: ""}</h1>
        </div>
        <div className="mx-auto">
          <div> {userInfoNeeded()} </div>
          <div className="flex justify-center grid grid-rows-5 w-30 ">
            <h3 className=" flex justify-center mt-2 font-bold uppercase border-b-2 border-green-900 ">Filters</h3>
            <h3 className="mt-1 font-bold justify-start mt-3 mb-3">Interests:</h3>
            <div className="flex justify-center mt-0">
                {interests.map((interest) => {
                  const className = interestArr.includes(interest)
                    ? "bg-green-900 text-white inline-flex items-center border border-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-3"
                    : "text-green-900 inline-flex items-center border border-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-3"

                  return <BasicButtonStyling
                    text={interest}
                    className={className}
                    onClick={()=>{
                      const newInterests = [...interestArr];
                      
                      if (newInterests.includes(interest)) {
                        newInterests.splice(newInterests.indexOf(interest), 1);
                      } else {
                        newInterests.push(interest);
                      }
                      
                      setInterestArr(newInterests);
                    }}
                  />
                })}
          </div>
          <h3 className="mt-1 font-bold mt-3 mb-3">Activities:</h3>
          <div className="flex justify-start  ">
              {activities.map((activity) => {
                const className = activityArr.includes(activity)
                  ? "bg-green-900 text-white inline-flex items-center border border-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-3 "
                  : "text-green-900 inline-flex items-center border border-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center mr-3 "

                return <BasicButtonStyling
                  text={activity}
                  className={className}
                  onClick={()=>{
                    const newActivity = [...activityArr];
                    
                    if (newActivity.includes(activity)) {
                      // removeEntry
                      newActivity.splice(newActivity.indexOf(activity), 1);
                    } else {
                      newActivity.push(activity);
                    }
                    
                    setActivityArr(newActivity);
                  }}
                />
              })}
          </div>
          </div>
        </div>

      </div>
        <div >
          <div className="flex-col justify-center inline-flex w-36">
          </div>
      <div className="flex justify-center flex-wrap w-11/12 mx-auto m-2 mt-4">
        {
          userList.map((userProfileData)=>{
            return <div className="flex w-60 h-72 m-2">
            <div
              className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img
                  className="rounded-t-lg h-40 object-cover w-screen"    
                  src={userProfileData.cloudinaryProfileImgUrl ? userProfileData.cloudinaryProfileImgUrl : blankProfileImg}
                  alt="" />
              </a>
              <div className="m-3">
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center">
                  {/* {userProfileData.firstName} */}
                  {`${userProfileData.firstName} ${userProfileData.lastName}`}
                </h5>
                <p className="mb-4 text-base h-5 overflow-hidden text-neutral-600 dark:text-neutral-200 text-center">
                  {userProfileData.profession} 
                </p>
                <div className="flex">
                  <button
                    onClick={() => { navigate(`/userProfile/${userProfileData._id}`, { state: userProfileData }) }}
                    type="button"
                    className="inline-block rounded bg-green-900 mx-auto px-1 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-green-900 hover:shadow-[0_8px_9px_-4px_rgba(52,211,153,0.3),0_4px_18px_0_rgba(52,211,153,0.2)] focus:bg-green-900 focus:shadow-[0_8px_9px_-4px_rgba(52,211,153,0.3),0_4px_18px_0_rgba(52,211,153,0.2)] focus:outline-none focus:ring-0 active:bg-green-1000 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          })
        } 
      </div>
      </div>
    </div>
  );
};

export default Feed;