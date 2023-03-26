import Button from "../components/Button";
import StepsDetail from "../components/HomePage/StepsDetail";
import heroImg from "../assets/home/hero.jpeg";

import { Link } from "react-router-dom";

import { useReactiveVar } from "@apollo/client";
import { userState } from "../GlobalState";
import FullStar from "../components/FullStar";

const Home = () => {
  // const user = useReactiveVar(userState);

  return (
    <div>
      <Hero />
      <ThreeStepProcess />
      <Testimonials />
      <NewsletterForm />
    </div>
  );
};

function Hero() {
  return (
    <div className="">
      <section className="mb-36 ">
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div
            div
            className="px-6 w-full flex flex-wrap items-center justify-between"
          >
            <div className="flex items-center">
              <h1 className="font-bold">TEAM FORWARD</h1>
            </div>
            <div className="flex items-center lg:ml-auto">
              <Link to="/Signin">
                <Button
                  text="Login"
                  className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                />
              </Link>
              <Link to="/SignUp">
                <Button
                  text="Sign Up"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </nav>

        <div className="px-6 py-12 mt-20 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Time for wellness <br />
                  <span className="text-blue-600 text-base font-medium md:text-xl xl:text-3xl">
                    Find your wellness buddy at work and exercise together.
                  </span>
                </h1>
                <Link to="/SignUp">
                  <Button
                    text="Get Started"
                    className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    href="#!"
                  />
                </Link>

                <a
                  className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Learn more
                </a>
              </div>
              <div className="mb-12 lg:mb-0">
                <img src={heroImg} class="w-full rounded-lg shadow-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ThreeStepProcess() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-40 text-gray-800 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Connect with colleagues and stay fit together
        </h2>
        <p className="text-xl mb-24">
          Discover your shared interests, connect, and organize meet ups.
        </p>

        <div className="grid lg:gap-x-12 lg:grid-cols-3 ">
          <StepsDetail
            title="Choose your activity"
            description="Choose the activity you are interested in."
            icon={
              <>
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="5" cy="18" r="3" /> <circle cx="19" cy="18" r="3" />{" "}
                <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />{" "}
                <circle cx="17" cy="5" r="1" />
              </>
            }
          />
          <StepsDetail
            title="Find your match"
            description="Connect with your colleagues who share the same interests."
            icon={
              <>
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />{" "}
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                <path
                  fill="currentColor"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                ></path>
              </>
            }
          />
          <StepsDetail
            title="Get together"
            description="Set the date, meet up, and connect through activities."
            icon={
              <>
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="18" y1="6" x2="18" y2="6.01" />{" "}
                <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />{" "}
                <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />{" "}
                <line x1="9" y1="4" x2="9" y2="17" />{" "}
                <line x1="15" y1="15" x2="15" y2="20" />
                <path
                  fill="currentColor"
                  d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                />
              </>
            }
          />
        </div>
      </section>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
          HEAR FROM OUR MEMBERS
        </h2>

        <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div className="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                    className="w-full"
                    alt="a man with glasses"
                  />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">John Doe</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Senior Developer
                </h6>
                <ul className="flex justify-center mb-6">
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star-half-alt"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 536 512"
                    >
                      <path
                        fill="currentColor"
                        d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                      ></path>
                    </svg>
                  </li>
                </ul>
                <p>
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div class="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                    class="w-full"
                    alt="lady with brown hair"
                  />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Halley Frank</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Product Owner
                </h6>
                <ul className="flex justify-center mb-6">
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium accusamus voluptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div className="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
                    className="w-full"
                    alt="young-lady-looking-away"
                  />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-2">Lisa Trey</h5>
                <h6 className="font-medium text-blue-600 mb-4">
                  Lead Designer
                </h6>
                <ul className="flex justify-center mb-6">
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <FullStar />
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                </ul>
                <p>
                  Enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi quis
                  nostrum minima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 px-3">
            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="w-5 h-5 text-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Subscribe to the newsletter
            </h2>

            <p className="text-gray-500 mb-12">
              Be the first to know when the full version is released! Sign up
              below to receive updates and exclusive access.
            </p>

            <div className="md:flex flex-row">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <Button
                text="Subscribe"
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
