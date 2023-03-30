import { Link } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { userState } from "../../GlobalState";
import BasicButtonStyling from "../Button/BasicButtonStyling";

export default function ProfileForm({
  formInfo,
  handleOnChange,
  handleSubmit,
  checkInterests,
  checkActivities,
}) {
  const user = useReactiveVar(userState);
  const INTERESTS = ["Networking", "Mentorship"];
  const ACTIVITIES = ["Virtual Coffee", "Hiking"];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create/Update Profile
        </h2>
        <form action="#" onSubmit={handleSubmit}>
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
                onChange={(e) => handleOnChange("firstName", e.target.value)}
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
                onChange={(e) => handleOnChange("lastName", e.target.value)}
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
                onChange={(e) => handleOnChange("bio", e.target.value)}
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
                onChange={(e) => handleOnChange("profession", e.target.value)}
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
                onChange={(e) => handleOnChange("zipCode", e.target.value)}
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="radius"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Radius (in miles):
              </label>
              <input
                type="range"
                className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                id="radius"
                min="0"
                max="5"
                step="0.5"
                value={formInfo.radius}
                onChange={(e) => handleOnChange("radius", e.target.value)}
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
                {INTERESTS.map((item, key) => {
                  return (
                    <BasicButtonStyling
                      text={item}
                      className={
                        checkInterests(item)
                          ? "bg-blue-600 text-white inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                          : "text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                      }
                    />
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
                {ACTIVITIES.map((item, key) => {
                  return (
                    <BasicButtonStyling
                      text={item}
                      className={
                        checkActivities(item)
                          ? "bg-blue-600 text-white inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                          : "text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
            <button className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
              <Link to="/feed">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}