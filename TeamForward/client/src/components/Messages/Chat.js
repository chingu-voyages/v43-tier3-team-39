import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {io} from 'socket.io-client'
import { useParams } from 'react-router-dom';
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";


const Chat = () => {

  const user = useReactiveVar(userState);

  const {chatId} = useParams()

  const [message,setMessage] = useState()

  const [messageList,setMessageList] = useState([])
  const [otherUser,setOtherUser] = useState([])
 
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/messaging/chatRoom/${chatId}/allMessages`)
    .then((res)=>{
      console.log("grabbed messages from db:",res.data)
      setMessageList(res.data)
      setOtherUser(res.data[0].otherUser)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

   const submitMessage = () => {
  //   io.emit("clientMessage",{
  //     // where do we get all of this data from?
  //     chatRoomId: chatId,
  //     from: user._id,
  //     to: otherUser._id,
  //     message,
  //     unread:false
  //   })

  }

  return (
<div className="w-full max-w-sm mx-auto">
{/* <div>
      <input type="text"  />
      {
        messageList.map((message)=>(
          <div></div>
        ))
      }
    </div> */}
      <div className="flex flex-col h-screen #a1a1aa">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex flex-col h-full overflow-x-auto">
            <div className="flex flex-col p-4">
              <div className="flex flex-row-reverse justify-start items-center mb-2">
                <div className="flex flex-col items-end">
                  <div className="relative px-4 py-2 max-w-xs rounded-lg">
                  <p>Name 1:</p>
                    <div className="text-med leading-tight mb-2">
                    
                      <p>Hey! Great to connect with you!</p>
                    </div>
                    <div className="text-xs text-gray-500">3 mins ago</div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
              </div>
              <div className="flex flex-row justify-start items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <div className="flex flex-col items-start">
                  <div className="relative px-4 py-2 max-w-xs rounded-lg">
                    <div className="text-med leading-tight mb-2">
                      Likewise! What time works best for the bike ride?
                    </div>
                    <div className="text-xs text-gray-500">2 mins ago</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse justify-start items-center mb-2">
                <div className="flex flex-col items-end">
                  <div className="relative px-4 py-2 max-w-xs rounded-lg">
                    <div className="text-sm leading-tight mb-2">
                      How does Tuesday sound to you?
                    </div>
                    <div className="text-xs text-gray-500">1 min ago</div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex p-4 border-t bg-white">
          <div className="relative flex-grow">
            <input
              type="text"
              onSubmit={submitMessage} 
              onChange={(e)=>setMessage(e.target.value)}
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Type your message..."
            />
          </div>
          <div className="flex-shrink-0 ml-4">
            <button
              type="button"
              className="inline-flex items-center justify-center w-12 h-12 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
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
