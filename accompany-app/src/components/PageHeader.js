import {React} from 'react';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import './PageHeader.css';

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
                    <div className="links">
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/login">Login</Link>
                    </div>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/home" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default PageHeader
