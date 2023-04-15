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

  return (
    <section className="bg-white">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Update Profile
        </h2>
        <div className="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <p>
          Let's start your profile, connect to people you know, and engage with
          them through shared interests.
        </p>
        </div>
        <UploadProfileImg
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={formInfo.firstName}
                onChange={(e) =>
                  handleFormInfoChange("firstName", e.target.value)
                }
                placeholder=""
                required=""
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bio:
              </label>
              <textarea
                name="bio"
                id="bio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Profession:
              </label>
              <input
                id="profession"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Zip Code:
              </label>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                          ? "bg-green-700 text-white inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-green-600 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                          : "text-green-700 inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                        ? "bg-green-700 text-white inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-green-600 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                        : "text-green-700 inline-flex items-center hover:text-white border border-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-green-700 dark:text-green-700 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                      }
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-green-700 border border-green-600 hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Submit
            </button>
            <button className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <Link to="/feed">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
