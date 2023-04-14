import { userState } from "../GlobalState";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import log from "../helpers/logging";
import axios from "axios";
import NavMenu from "../components/NavMenu/NavMenu";
import BasicButtonStyling from "../components/Button";

const interests = ["chingu", "networking", "mentorship"];
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
      return <div className="flex justify-center my-2"> 
          <div className="block max-w-sm rounded-lg bg-slate-200 shadow-lg text-center">
            Please update your user info to include a zipcode and radius to tailor your feed to locals in your area. 
            <div className="p-1 underline">
              <Link  to="/updateprofile"> Edit User Info Here</Link>
            </div>
          </div>
        </div>
    }
    return null;
  }

  return (
    <div className="">
      
      <div className="inline-block ml-4">
        <NavMenu />
        <h1 className="font-bold inline-block">Hello {user ? user.firstName : ""}</h1>
      </div>
      {userInfoNeeded()}
      <div className="flex justify-center mx-auto">
          {interests.map((interest) => {
            const className = interestArr.includes(interest)
              ? "bg-blue-600 text-white inline-flex items-center border border-blue-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
              : "text-blue-600 inline-flex items-center border border-blue-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"

            return <BasicButtonStyling
              text={interest}
              className={className}
              onClick={()=>{
                const newInterests = [...interestArr];
                
                if (newInterests.includes(interest)) {
                  // removeEntry
                  newInterests.splice(newInterests.indexOf(interest), 1);
                } else {
                  newInterests.push(interest);
                }
                
                setInterestArr(newInterests);
              }}
            />
          })}
      </div>
      <div className="flex justify-center my-1 ">
          {activities.map((activity) => {
            const className = activityArr.includes(activity)
              ? "bg-blue-600 text-white inline-flex items-center border border-blue-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
              : "text-blue-600 inline-flex items-center border border-blue-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"

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
        {/* user list */}
        {/* user list + activities div */}
        <div >
          <div className="flex-col justify-center inline-flex w-36">
            {/* {
              activities.map((act)=>{
                return <button
                className="text-blue-600 m-2 inline-flex hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900">{act}</button>
            })
            } */}
            
          </div>
      <div className="flex justify-center flex-wrap w-8/12 mx-auto m-2 mt-4">
            
        {
          userList.map((userProfileData)=>{
            return <div class="flex w-60 h-72 m-2">
            <div
              class="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img
                  class="rounded-t-lg h-40 object-cover w-screen"    
                  src={userProfileData.cloudinaryProfileImgUrl ? userProfileData.cloudinaryProfileImgUrl : "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"}
                  alt="" />
              </a>
              <div className="m-3">
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {userProfileData.firstName}
                </h5>
                <p class="mb-4 text-base h-5 overflow-hidden text-neutral-600 dark:text-neutral-200">
                  {userProfileData.bio} 
                </p>
                <div className="flex">
                  <button
                    onClick={() => { navigate(`/userProfile/${userProfileData._id}`, { state: userProfileData }) }}
                    type="button"
                    class="inline-block rounded bg-primary mx-auto px-1 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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