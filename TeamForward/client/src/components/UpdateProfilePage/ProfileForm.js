import { Link } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";
import UploadProfileImg from "./UploadProfileImg";

export default function ProfileForm({
  formInfo,
  handleFormInfoChange,
  handleInterests,
  handleActivities,
  handleSubmit,
  profileImg,
  setProfileImg,
}) {
  const user = useReactiveVar(userState);

  const formUnfinishedNotification = (formInfo, profileImg) => {
    if(!formInfo.firstName || !formInfo.lastName || ! formInfo.bio || !formInfo.profession || !formInfo.zipCode || !formInfo.radius || !profileImg){
      return false;
    }
    return true;    
  };

  return (
    <section className="">
      <div className="max-w-2xl py-8 px-4 mx-auto">
        {formUnfinishedNotification(formInfo, profileImg) ? null : <div style={{ marginTop: '-25px'}} className="rounded-lg bg-primary-100 p-2 text-center text-neutral-700 shadow-lg mb-2">
          <p>
            Let's finish your profile, connect to people you know, and engage with
            them through shared interests.
          </p>
        </div>}
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Update Profile
        </h2>
        <UploadProfileImg
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formInfo.firstName}
                onChange={(e) =>
                  handleFormInfoChange("firstName", e.target.value)
                }
                placeholder=""
                required=""
              />
            </div>

            <div className="w-full mb-2">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formInfo.lastName}
                onChange={(e) =>
                  handleFormInfoChange("lastName", e.target.value)
                }
                placeholder=""
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="bio"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Bio:
              </label>
              <textarea
                name="bio"
                id="bio"
                className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formInfo.bio}
                onChange={(e) => handleFormInfoChange("bio", e.target.value)}
                rows="4"
                placeholder=""
                required=""
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="profession"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Profession:
              </label>
              <input
                id="profession"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-500 focus:ring-primary-500 focus:border-primary-500"
                placeholder=""
                value={formInfo.profession}
                onChange={(e) =>
                  handleFormInfoChange("profession", e.target.value)
                }
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="zipCode"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Zip Code:
              </label>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                className="bg-gray-100 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formInfo.zipCode}
                onChange={(e) =>
                  handleFormInfoChange("zipCode", e.target.value)
                }
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="radius"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Radius:    {formInfo.radius} miles
              </label>
              <input
                type="range"
                className="transparent h-1.5 w-full cursor-pointer accent-green-700 appearance-none rounded-lg border-transparent bg-neutral-200"
                id="radius"
                min="0"
                max="5"
                step="0.5"
                value={formInfo.radius}
                onChange={(e) => handleFormInfoChange("radius", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="interests"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Interests:
              </label>
              <div className="flex items-center space-x-4">
                {Object.keys(formInfo.interests).map((key) => {
                  let value = formInfo.interests[key];
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        handleInterests(key, !value);
                      }}
                      value={value}
                      className={
                        value
                          ? "bg-green-900 text-white inline-flex items-center hover:text-white hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                          : "text-green-900 inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                      }
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="activities"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Activities:
              </label>
              <div className="flex items-center space-x-4">
                {Object.keys(formInfo.activities).map((key) => {
                  let value = formInfo.activities[key];
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        handleActivities(key, !value);
                      }}
                      value={value}
                      className={
                        value
                        ? "bg-green-900 text-white inline-flex items-center hover:text-white hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                          : "text-green-900 inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center"
                      }
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6 ">
            <button
              type="submit"
              className="mt-4 bg-green-900 text-white inline-flex items-center border border-slate-900 uppercase hover:text-white hover:bg-green-700 focus:outline-none font-medium rounded-lg text-base px-6 py-2 text-center"
            >
              Submit
            </button>
            <button className="mt-4 text-red-600 inline-flex items-center hover:text-white border border-red-600 uppercase hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-6 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <Link to="/feed">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
