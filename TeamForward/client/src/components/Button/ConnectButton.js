import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

const ConnectButton = ({otherUserId}) => {

  const navigate = useNavigate()

  const user = useReactiveVar(userState);

  const createChatRoom = () => {
    // creates new chatRoom or returns existing
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
    <button onClick={createChatRoom} className="text-white py-2 px-4 uppercase rounded bg-green-900 hover:bg-green-900 shadow hover:shadow-lg h-10  font-medium transition transform hover:-translate-y-0.5">
      Connect
    </button>
  );
};

export default ConnectButton;
