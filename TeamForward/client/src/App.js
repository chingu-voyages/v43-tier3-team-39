import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import axios from 'axios';
import { useReactiveVar } from "@apollo/client";
import { userState } from "./GlobalState";
import { useEffect, useState } from "react";
import log from "./helpers/logging";

const ProtectedRoute = ({children}) => {
  const user = useReactiveVar(userState);
  const [apiComplete, setApiComplete] = useState (user? true: false);

  log(user);

  useEffect(() => {
    if(!user){
      axios.get('http://localhost:8000/teamForward/loggedInUser')
        .then((res) => {
          userState(res.data);
          setApiComplete(true);
        })
        .catch((err) => {
          log(err);
          setApiComplete(true);
        });
    };
  }, [user]);

  if(!apiComplete){
    return null;
  };

  if(!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

function App() {
const user = useReactiveVar(userState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
