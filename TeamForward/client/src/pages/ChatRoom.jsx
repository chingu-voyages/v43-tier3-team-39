import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {io} from 'socket.io-client'

const ChatRoom = () => {

  const [message,setMessage] = useState()

  const [messageList,setMessageList] = useState([])
 
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/messaging/chatRoom/:chatRoomId/allMessages`)
    .then((res)=>{
      setMessageList(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  // const submitMessage = () => {
  //   io.emit("clientMessage",{
  //     // where do we get all of this data from?
  //     chatRoomId: ,
  //     from: ,
  //     to: ,
  //     message: "",
  //     unread:false
  //   })

  // }

  return (
    <div>
      <input type="text" onSubmit={submitMessage} onChange={(e)=>setMessage(e.target.value)} />
      {
        messageList.map((message)=>(
          <div></div>
        ))
      }
    </div>
  )
}

export default ChatRoom