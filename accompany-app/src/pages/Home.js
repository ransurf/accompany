import React from 'react'
import './Home.css';
import { auth } from "../back-end/firestore/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    const [user] = useAuthState(auth);
    return (
        <div id="main-container">
            <aside id="sidebar">
                <div id="sidebar-logo">accompany</div>

                <hr></hr>

                <div id="sidebar-items">
                    <ul>
                        <li class="sidebar-items__home">home</li>
                        <li class="sidebar-items__threads">threads</li>
                        <li class="sidebar-items__insights">insights</li>
                        <li class="sidebar-items__habits">habits</li>
                        <li class="sidebar-items__quotes">quotes</li>
                    </ul>
                </div>
               
            </aside>

            <div id="content">

            </div>
        </div>
    );
}

export default Home