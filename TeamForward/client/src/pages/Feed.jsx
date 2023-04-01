import { userState } from "../GlobalState";
import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";
import log from "../helpers/logging";
import axios from "axios";
import NavMenu from "../components/NavMenu/NavMenu";
import BasicButtonStyling from "../components/Button";

const Feed = () => {
  const user = userState();
  const test = [1,2,3,4]
  const [open,setOpen] = useState(true)
  const [interestArr,setInterestArr] = useState(['Networking','Mentoring','Chingu','Local-US-Seattle'])
  const activityArr = []
  const [userList,setUserList] = useState([])

  // grab all users from db based on filters
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/teamForward`)
    .then((res)=>{
      setUserList(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="">
      
      <div className="inline-block ml-4">
        <NavMenu />
        <h1 className="font-bold inline-block">Hello {user ? user.firstName : ""}</h1>
      </div>
      <div className="flex justify-center mx-auto">
          {interestArr.map((interest) => {
            
            return <><BasicButtonStyling
            text={interest}
            className={"text-blue-600 m-2 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"}
            // className={
            //   checkInterests(item)
            //     ? "bg-blue-600 text-white inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
            //     : "text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
            // }
            
          /></>
          })}
      </div>
        {/* user list */}
      <div className="flex justify-center flex-wrap w-8/12 mx-auto m-2 mt-4">

        {
          userList.map((user)=>{
            return <div class="flex w-60 m-2">
            <div
              class="max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  alt="" />
              </a>
              <div className="m-3">
                <h5
                  className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {user.firstName}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                 {user.bio} 
                </p>
                <div className="flex">
                  <button
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
  );
};

export default Feed;
