import React from 'react'
import heroImg from "../../assets/home/hero.jpeg"
import { Link } from "react-router-dom";
import Button from "../../components/Button/BasicButtonStyling";



const Hero = () => {
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
                      className="inline-block px-6 py-2.5 mr-2 bg-transparent text-green-900 font-bold text-xs leading-tight uppercase rounded hover:text-green-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    />
                  </Link>
                  <Link to="/SignUp">
                    <Button
                      text="Sign Up"
                      // className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      className="inline-block px-6 py-2.5 text-white bg-green-900 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-950 active:shadow-lg transition duration-150 ease-in-out"
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
                      <span className="text-green-900 text-base font-medium md:text-xl xl:text-3xl ml-3">
                        Find your wellness buddy at work and exercise together.
                      </span>
                    </h1>
                    <div className='flex justify-center'>
                    <Link to="/SignUp">
                      <Button
                        text="Get Started"
                        className="inline-block px-7 py-3 mr-2 bg-green-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-950 active:shadow-lg transition duration-150 ease-in-out "
                      />
                    </Link>
                    </div>
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img src={heroImg} className="w-full rounded-lg shadow-lg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Hero
