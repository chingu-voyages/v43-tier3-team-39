import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {io} from 'socket.io-client'
import { useParams } from 'react-router-dom';
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";
import dateformat from 'dateformat'


const Chat = ({socket}) => {

  const user = useReactiveVar(userState);

  const {chatId} = useParams()

  const [message,setMessage] = useState('')

  const [messageList,setMessageList] = useState([])
  const [otherUser,setOtherUser] = useState({})
 
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/messaging/chatRoom/${chatId}/allMessages`)
    .then((res)=>{
      console.log("grabbed messages from db:",res)
      setMessageList(res.data[0].messages)
      setOtherUser(res.data[0].otherUser)
      console.log('other user:',otherUser._id)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    
    console.log('other user:',otherUser._id)
    
    socket.on("message",(data)=>{
      const newFrom = otherUser._id == data.from ? otherUser.firstName : data.from
      // console.log("received message from server!",data)
      console.log("other user id:", otherUser._id)
      const updatedMessage = {...data, from: newFrom };
      console.log("updated message:",updatedMessage)
      setMessageList([...messageList,updatedMessage])
    })
    // return () => socket.disconnect(true);
  },[socket])

  useEffect(()=>{
    // on component load user joins private room based on chatRoomId
    socket.emit('join',chatId)
  },[])
  

    const submitMessage = (e) => {
    e.preventDefault()
    if(!message) {
      console.log("no message")
      return
    }
    // emits message to server which is sent to shared private room
    socket.emit("clientMessage",{
      // chatRoomId: chatId,
      // from: user._id,
      to: otherUser._id,
      message,
      unread:false
    })
    setMessage("")
  }
  return (
<div className="w-full max-w-sm mx-auto">
      <div>
          {
            messageList.map((message)=>{
              // conditionally renders message on either side depending on user
              let messageSide = user._id === message.from ? "flex flex-row justify-start items-end mb-2" :"flex flex-row justify-end mb-2";
              // conditionally renders avatar for each user
              let image = user._id === message.from ? user.cloudinaryProfileImgUrl : otherUser.cloudinaryProfileImgUrl;
              return <div key={message._id} className={messageSide}>
                    <img className="w-8 h-8 rounded-full align-middle" src={image} alt={user.firstName} />
                    <div className="flex flex-col items-start">
                      <div className="relative px-4 py-2 max-w-xs rounded-lg">
                        <div className="text-med leading-tight mb-2">
                        {message.message}
                        </div>
                        <div className="text-xs text-gray-500">{dateformat(message.createdAt, "dddd, h:MM TT") }</div>
                      </div>
                    </div>
                  </div>
            })
          }
      </div>
      <div className="flex flex-col h-screen #a1a1aa">
      
        <div className="flex-shrink-0 flex p-4 border-t bg-white">
          <div className="relative flex-grow">
            <form onSubmit={submitMessage} >
              <input
                type="text"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Type your message..."
              />
            </form>
          </div>
          
          <div className="flex-shrink-0 ml-4">
            <button
              type="button"
              className="inline-flex items-center justify-center w-12 h-12 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >button
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                
                <path d="M21.92 19.54l-6.09-6.09A8 8 0 1 0 10 14h2a6 6 0 1 1 4.24-10.24l6.09 6.09a2 2 0 0 1 0 2.83l-1.41 1.41a2 2 0 0 1-2.83 0zM12 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
              </svg>
            </button>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Chat
