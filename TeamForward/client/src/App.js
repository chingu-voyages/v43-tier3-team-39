import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import UpdateProfile from "./pages/UpdateProfile";
import axios from "axios";
import { useReactiveVar } from "@apollo/client";
import { userState } from "./GlobalState";
import log from "./helpers/logging";

axios.defaults.withCredentials = true;

const ProtectedRoute = ({ children }) => {
  const user = useReactiveVar(userState);
  const [apiComplete, setApiComplete] = useState(user ? true : false);

  log(user);

  useEffect(() => {
    if (!user) {
      axios
        .get(`${process.env.REACT_APP_BE_URL}/signin/success`)
        // .get("http://localhost:8000/teamForward/loggedInUser")
        .then((res) => {
          userState(res.data.user);
          setApiComplete(true);
        })
        .catch((err) => {
          log(err);
          setApiComplete(true);
        });
    }
  }, [user]);

  if (!apiComplete) {
    return null;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

function App() {
  const user = useReactiveVar(userState);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          element={user ? <Navigate to="/feed" /> : <SignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />

        <Route
          path="/updateprofile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
