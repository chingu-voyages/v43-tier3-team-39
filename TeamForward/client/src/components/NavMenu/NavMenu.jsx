import React, {useState} from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import { userState } from "../../GlobalState";

const NavMenu = () => {

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
                        <NavLink onClick={logout} className="text-lg font-semibold border p-1 rounded-lg shadow-lg block" >Logout</NavLink>
                        </li>
                    </ul>
                </div>
            ): null
        }
    </div>
    )
}

export default NavMenu