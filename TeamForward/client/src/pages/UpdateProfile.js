const UpdateProfile = () => {
  return (
    <div>
      <Jumbotron />
      <UserInfo />
    </div>
  );
};

function Jumbotron() {
  return (
    <div>
      <div className="rounded-lg bg-neutral-100 p-6 text-neutral-700 shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
        <h2 className="mb-5 text-3xl font-semibold">Welcome, user!</h2>
        <p>
          Let's start your profile, connect to people you know, and engage with
          them through shared interests.
        </p>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create/Update Profile
        </h2>
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div class="w-full">
              <label
                for="firstName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value=""
                placeholder=""
                required=""
              />
            </div>

            <div class="w-full">
              <label
                for="lastName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value=""
                placeholder=""
                required=""
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="bio"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bio:
              </label>
              <textarea
                name="bio"
                id="bio"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value=""
                rows="4"
                placeholder=""
                required=""
              ></textarea>
            </div>
            <div class="sm:col-span-2">
              <label
                for="profession"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Profession:
              </label>
              <input
                id="profession"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=""
              />
            </div>
            <div class="w-full">
              <label
                for="zipCode"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Zip Code:
              </label>
              <input
                type="number"
                name="zipCode"
                id="zipCode"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value=""
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                for="radius"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Radius (in miles):
              </label>
              <input
                type="range"
                class="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                id="radius"
                min="0"
                max="5"
                step="0.5"
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="interests"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Interests:
              </label>
              <div class="flex items-center space-x-4">
                <button
                  type="button"
                  class="text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                >
                  Networking
                </button>
                <button
                  type="button"
                  class="text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                >
                  Mentorship
                </button>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="activities"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Activities:
              </label>
              <div class="flex items-center space-x-4">
                <button
                  type="button"
                  class="text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                >
                  Virtual Coffee
                </button>
                <button
                  type="button"
                  class="text-blue-600 inline-flex items-center hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
                >
                  Hiking
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              type="submit"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UpdateProfile;
