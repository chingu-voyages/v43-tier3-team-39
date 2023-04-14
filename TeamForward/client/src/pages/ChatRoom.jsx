import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ChatRoom = () => {

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/messaging/chatRoom/:chatRoomId/allMessages`)
  },[])

  return (
    <div>

    </div>
  )
}

export default ChatRoom