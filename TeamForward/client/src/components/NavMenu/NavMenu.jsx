import React, {useState} from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import { userState } from "../../GlobalState";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavMenu = () => {

    const navigate = useNavigate()

    const user = useReactiveVar(userState);
    const navigate = useNavigate();
    const [open,setOpen] = useState(false)

    const dropDown = () => {
        setOpen(!open)
    }

    const logout = () => {
        axios.post(`${process.env.REACT_APP_BE_URL}/teamForward/logout`)
            .then((res)=>{
                userState(undefined);
                navigate('/');
            }) .catch ((err) => {
                console.log(err);
            });
    };

    return (
    <div className="p-2 inline-block h-2/3">
        <button onClick={dropDown}>
            <img src={user.cloudinaryProfileImgUrl} alt="" className="h-20 w-20 rounded-full shadow-lg inline-block" />
            </button> 
        {
            open ? (
                <div className="absolute w-25 border p-1 rounded-lg shadow-lg block bg-white mt-1 z-40">
                    <ul className="bg-white">
                        <li className="block">
                        <NavLink to="/myProfile" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full ">My Profile</NavLink>
                        </li>
                        <li className="">
                        <NavLink to="/updateprofile" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full">Edit Profile</NavLink>
                        </li>
                        <li className="block">
                        <NavLink to="/feed" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full">Dashboard</NavLink>
                        </li>
                        {/* TODO: Link messages when finished with message feature */}
                        <li className="">
                        <button className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full">Messages</button>
                        </li>
                        <li className="">
                        <NavLink onClick={logout} className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full" >Logout</NavLink>
                        </li>
                    </ul>
                </div>
            ): null
        }
    </div>
    )
}

export default NavMenu