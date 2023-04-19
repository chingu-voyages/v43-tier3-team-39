import InboxList from "../components/Messages/InboxList";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Messages/Search";
import { useNavigate } from "react-router-dom";
import NavMenu from "../components/NavMenu/NavMenu";

const Inbox = () => {
  const user = useReactiveVar(userState);
  console.log("Inbox user", user);
  const id = user._id;

  const navigate = useNavigate();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/messaging/inbox`)
      .then((res) => {
        console.log("returned chats");
        setChats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-50 ">
      <div className="ml-4">
        <NavMenu />
      </div>
      <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          {/* <!-- Card --> */}
          <div className="relative max-w-screen-sm mx-auto bg-white shadow-lg rounded-lg ">
            {/* <!-- Card header --> */}
            <header className="pt-6 pb-4 px-5 border-b border-gray-200">
              <div className="flex space-y-8 items-center mb-3 flex-col">
                {/* <!-- Image + name --> */}
                <div className="flex items-center">
                  <a className="inline-flex items-start mr-3" href="#0">
                    <img
                      className="object-cover w-20 h-20 rounded-full"
                      src={user.cloudinaryProfileImgUrl}
                      width="48"
                      height="48"
                      alt="user profile picture"
                    />
                  </a>
                  <div className="pr-1">
                    <a
                      className="inline-flex text-gray-800 hover:text-gray-900"
                      href="#0"
                    >
                      <h2 className="text-xl leading-snug font-bold">
                        {`${user.firstName} ${user.lastName}`}
                      </h2>
                    </a>
                  </div>
                </div>

                <Search />
              </div>
            </header>
            {/* <!-- Card body --> */}
            <div className="py-3 px-5">
              <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
                Chats
              </h3>
              {/* <!-- Chat list --> */}
              <div className="divide-y divide-gray-200">
                {/* <!-- User --> */}

                {chats.map((chat) => {
                  return <InboxList key={chat._id} user={chat} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Inbox;
