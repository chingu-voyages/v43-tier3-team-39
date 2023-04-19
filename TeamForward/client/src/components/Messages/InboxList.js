import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

const InboxList = ({user}) => {

  const currentUser = useReactiveVar(userState);

  const navigate = useNavigate()

    // TODO: Retrieve each users data to display (firstName, lastName, mostRecentMessage,timestamps)
    
    // axios.get('/api/users/profile/' + userId)
    // .then(response => {
    //   const userData = response.data;
    //   // handle the retrieved profile data here
    // })
    // .catch(error => {
    //   console.error('Error fetching user profile:', error);
    // });

    const otherUserId = user.userObject._id

    const selectChatRoom = () => {
      console.log("other user id:",otherUserId)
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
    <button onClick={selectChatRoom} className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center">
        <img
          className="rounded-full items-start flex-shrink-0 mr-3"
          src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
          width="32"
          height="32"
          alt={user.userObject.firstName}
        />
        <div>
          <h4 className="text-med font-semibold text-gray-900">{user.userObject.firstName} {user.userObject.lastName}</h4>
          <div className="text-[14px]">Hello {currentUser.firstName} 👋, · 24 Mar</div>
        </div>
      </div>
    </button>
  );
};
export default InboxList;
