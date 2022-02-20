import React from 'react'
import './Home.css';
import { auth } from "../back-end/firestore/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import AdviceCard from "../components/AdviceCard";
import "./MainPage.css";
import * as APIFirebase from "../back-end/functions";

function Home() {
    const [user] = useAuthState(auth);
    const [advice, setAdvice] = React.useState([]);
    const [quoteIndex, setQuoteIndex] = React.useState(0);
    useEffect(async () => {
        console.log("MainPage useEffect");
        setAdvice(await APIFirebase.getAllQuotes());
        console.log("advice =", advice);
      }, []);
    
      const deleteQuote = () => {
    
      };
    
      const nextQuote = () => {
        console.log("nextQuote");
        setQuoteIndex((quoteIndex + 1) % advice.length);
      };
      
      const favoriteQuote = () => {
        console.log("favoriteQuote");
      };
    
      const adviceCards = advice.map((quote) => {
          console.log("creatin advice cards");
        return (
          <AdviceCard
            quote={quote}
            deleteQuote={deleteQuote}
            nextQuote={nextQuote}
            favoriteQuote={favoriteQuote}
          />
        );
      });
    return (
        <div id="main-container">
            {/* <aside id="sidebar">
                <div id="sidebar-logo">accompany</div>
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
                {adviceCards}
            </div> */}
        </div>
    );
}

export default Home