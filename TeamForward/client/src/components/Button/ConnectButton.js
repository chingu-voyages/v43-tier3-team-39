import React from "react";
import { useNavigate } from "react-router-dom";

const ConnectButton = ({user}) => {

  const navigate = useNavigate()
  
  return (
    <button onClick={(e)=>navigate(`/chat/${user}`)} className="text-white text-sm py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg h-10  font-medium transition transform hover:-translate-y-0.5">
      Connect
    </button>
  );
};

export default ConnectButton;
