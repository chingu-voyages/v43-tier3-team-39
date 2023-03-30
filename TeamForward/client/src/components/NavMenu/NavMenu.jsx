import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {

    const [open,setOpen] = useState(false)

    const dropDown = () => {
        setOpen(!open)
    }

  return (
    <div className="p-2 inline-block h-2/3">
        <button onClick={dropDown}><div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block">
            <svg
              className="h-10 w-10 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              
            </svg>
          </div> </button> 
        {
            open ? (
                <div className="absolute bg-opacity-100">
                    <ul className="bg-opacity-100">
                        <li className="block">
                        <NavLink to="/myProfile" className="text-lg font-semibold border p-1 rounded-lg shadow-lg block ">Profile</NavLink>
                        </li>
                        <li className="block">
                        <button className="text-lg font-semibold border p-1 rounded-lg shadow-lg block">Virtual Meets</button>
                        </li>
                        <li className="">
                        <NavLink to="/updateprofile" className="text-lg font-semibold border p-1 rounded-lg shadow-lg block">Edit User Info</NavLink>
                        </li>
                        <li className="">
                        <button className="text-lg font-semibold border p-1 rounded-lg shadow-lg block">Messages</button>
                        </li>
                        <li className="">
                        <button className="text-lg font-semibold border p-1 rounded-lg shadow-lg block">Logout</button>
                        </li>
                    </ul>
                </div>
            ): null
        }
    </div>
  )
}

export default NavMenu