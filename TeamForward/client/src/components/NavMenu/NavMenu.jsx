import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client';
import { userState } from "../../GlobalState";

const NavMenu = () => {
    const user = useReactiveVar(userState);
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState();
    const dropDown = () => {
        setOpen(!open)
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BE_URL}/messaging/user/message/unreadCount`)
        .then((res)=>{
            setUnreadCount(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    const logout = () => {
        axios.post(`${process.env.REACT_APP_BE_URL}/teamForward/logout`)
            .then((res)=>{
                userState(undefined);
                navigate('/');
            }) .catch ((err) => {
                console.log(err);
            });
    };

    const displayNotifications = (unreadCount) => {
        if(unreadCount > 0){
            return <div style={{marginTop:"-20px"}} className="absolute z-50 w-5 h-5 bg-amber-300 container mx-auto rounded-full ">
                <p className="text-sm text-slate-950 font-bold text-center">{unreadCount}</p>
            </div>
        }
        return null;
    }

    return (
    <div className="p-2 inline-block h-2/3">
        <button onClick={dropDown}>
            <img src={user.cloudinaryProfileImgUrl} alt="coverImage" className="object-cover w-20 h-20 rounded-full" />
        </button> 
        {displayNotifications(unreadCount)}
        {
            open ? (
                <div className="absolute w-25 border p-1 rounded-lg shadow-lg block bg-white mt-1 z-40">
                    <ul className="bg-white">
                        <li className="block">
                        <NavLink to="/myProfile" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full ">My Profile</NavLink>
                        </li>
                        <li className="block">
                        <NavLink to="/updateprofile" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full">Edit Profile</NavLink>
                        </li>
                        <li className="block">
                        <NavLink to="/feed" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full">Dashboard</NavLink>
                        </li>
                        <li className="block">
                        <NavLink to="/messages" className="text-lg text-start font-semibold border p-1 rounded-lg shadow-lg block w-full" >Messages</NavLink>
                        </li>
                        <li className="block">
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