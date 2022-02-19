import {React} from 'react';
import { auth } from "../back-end/firestore/firebase.js";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import "./PageHeader.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "../back-end/functions.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ChatroomApp from "../pages/Chatroom";

function PageHeader() {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Router>
        <div className="header">
          <div className="links">
            <Link className="link" to="/home">
              Home
            </Link>

            {user ? (
              <>
                <Link className="link" to="/chatroom">
                  ChatRoom
                </Link>
                <button className="logOut" onClick={signOut}>
                  LogOut
                </button>
              </>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/home" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/chatroom" element={<ChatroomApp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default PageHeader
