import {React, Component} from 'react';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage';
import './PageHeader.css';
import SignUpPage from '../pages/SignUpPage';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  

function PageHeader() {
    return (
        <div className="container">
            <Router >
                <div className="header">
                    <img className="logo"src={logo} alt="Logo" />
                    <div className="links">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/search">Search</Link>
                        <Link className="link" to="/login">Login</Link>
                        <Link className="link" to="/Upload">Upload</Link>
                        <Link className="link" to="/Profile">Profile</Link>
                    </div>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/SignUp" element={<SignUpPage/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default PageHeader
