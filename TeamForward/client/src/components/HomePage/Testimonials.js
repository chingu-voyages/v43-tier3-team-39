import React from 'react'
import FullStar from "../../components/FullStar";

const Testimonials = () => {
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
                    As a junior PO networking and finding mentors can be a challenging task. However, Team forward has made it a lot easier for me to connect and engage with the community. With the app's features, I'm able to create a support system and connect with like-minded individuals who share the same interests and hobbies. I've also been able to find new jogging buddies, which has been a great way to stay active while building strong relationships with my colleagues. The app has helped me stay active, find new friends create a safe space where I can learn and thrive, while also allowing me to expand my network and stay connected with the industry. Overall, this app has been a game-changer in my career as a new PO.
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="mb-6 lg:mb-0">
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                        className="w-full"
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
                    Team Forward has truly transformed my onboarding experience when joining a new company, especially during the pandemic where connecting with coworkers has been challenging due to remote work. With this app, I can now easily connect with my colleagues, join clubs, and create a support system. I've found like-minded buddies who share similar interests, such as jogging in the morning, and I'm now able to jog with my teammate who happens to be my neighbor. This has been a great opportunity for us to bond and discuss both work and personal life. Thanks to your app, I no longer feel like an outsider at work..
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
                    Team Forward completely transformed my experience of visiting a new city in Canada. I was initially nervous about making new friends in an unfamiliar city, but the app changed all of that. With its help, I was able to connect with a teammate who lived in the same neighborhood as me and shared similar interests and hobbies. We decided to meet up for ice cream and quickly realized we had so much more in common. Not only did this app help me to make new friends in a new city, but it also allowed me to build a strong friendship with my teammate. Overall, this social application made my trip to Canada much more enjoyable and helped me form lasting connections with new people. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Testimonials
