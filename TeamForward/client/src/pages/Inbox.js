import InboxList from "../components/Messages/InboxList";
import ProfileImg from "../components/ProfilePage/ProfileImg";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";


const Inbox = () => {
    const user = useReactiveVar(userState);
    console.log("Inbox user",user)
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
      <div className="h-full">
        {/* <!-- Card --> */}
        <div className="relative max-w-screen-sm mx-auto bg-white shadow-lg rounded-lg">
          {/* <!-- Card header --> */}
          <header className="pt-6 pb-4 px-5 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              {/* <!-- Image + name --> */}
              <div className="flex items-center">
                <a className="inline-flex items-start mr-3" href="#0">
                
                  <img
                    className="rounded-full"
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
                    <h2 class="text-xl leading-snug font-bold">
                      {`${user.firstName} ${user.lastName}`}
                    </h2>
                  </a>
                </div>
              </div>
              {/* Possibly notification here */}
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
              <InboxList />
              <InboxList />
              <InboxList />
              <InboxList />
              <InboxList />
              <InboxList />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Inbox;
