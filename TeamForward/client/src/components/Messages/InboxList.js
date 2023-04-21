import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";

const InboxList = (props) => {

  const {chatRoom, otherUser} = props;
  const user = useReactiveVar(userState);
  const navigate = useNavigate();

    // TODO: Retrieve each users data to display (firstName, lastName, mostRecentMessage,timestamps)
    
    // axios.get('/api/users/profile/' + userId)
    // .then(response => {
    //   const userData = response.data;
    //   // handle the retrieved profile data here
    // })
    // .catch(error => {
    //   console.error('Error fetching user profile:', error);
    // });

    const selectChatRoom = () => {
      return navigate(`/chat/${chatRoom._id}`);
    };


  return (
    <button onClick={selectChatRoom} className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
        <div className="flex items-center">
          <img
            className='object-cover w-10 h-10 rounded-full mr-3'
            src={otherUser.cloudinaryProfileImgUrl}
            width="32"
            height="32"
            alt={otherUser.firstName}
          />
          <div>
            <h4 className="text-med font-semibold text-gray-900">{otherUser.firstName} {otherUser.lastName}</h4>
          </div>
        </div>
    </button>
  );
};
export default InboxList;
