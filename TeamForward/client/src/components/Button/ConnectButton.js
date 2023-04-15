import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

const ConnectButton = ({otherUserId}) => {

  const navigate = useNavigate()

  const user = useReactiveVar(userState);
  

  // create a new chatRoom model with both user IDs
      // navigate to the chat room

  const createChatRoom = () => {
    // create chat room
    axios.post(`${process.env.REACT_APP_BE_URL}/messaging/chatRoom`,{otherUserId})
    .then((res)=>{
      console.log("created chat room:",res.data)
      const chatId = res.data._id
      navigate(`/chat/${chatId}`)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <button onClick={createChatRoom} className="text-white text-sm py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg h-10  font-medium transition transform hover:-translate-y-0.5">
      Connect
    </button>
  );
};

export default ConnectButton;
