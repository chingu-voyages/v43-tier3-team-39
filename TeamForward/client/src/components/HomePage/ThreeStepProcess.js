import React from 'react'
import StepsDetail from "../../components/HomePage/StepsDetail";

const ThreeStepProcess = () => {
    return (
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-40 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Connect with colleagues and stay fit together
            </h2>
            <p className="text-xl mb-24">
              Discover your shared interests, connect, and organize meet ups.
            </p>
    
            <div className="grid lg:gap-x-12 lg:grid-cols-3 ">
              <StepsDetail
            
                title="Choose your activity"
                description="Choose the activity you are interested in."
                // Bicycle Icon
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
                // Messaging Icon
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
                // Loacation Icon
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

export default ThreeStepProcess
