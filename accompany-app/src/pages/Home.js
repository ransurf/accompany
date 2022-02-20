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
            <aside id="sidebar">
                <div id="sidebar-logo"><a href="#">accompany</a></div>

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
                <div id="userpic">
                    <div id="userpic__img">
                        
                    </div>
                </div>

                <section id="content-main-container">
                    <div id="large-greeting">
                        WELCOME BACK, <em>username</em>
                    </div>

                    <div id="blocks">
                        
                        <div class="block-insight">
                            <div>
                                <div class="block-insight-header">insight of the day</div>
                            </div>
                            <div class="block-insight-content">
                                <div>Taking even 30 minute long walks every day makes you feel refreshed and helps to <br/>stay energized</div>
                                <div class="block-insights-like">
                                    <div class="button-like-count">155</div>
                                    <div class="button-like"></div>
                                </div>
                            </div>
                        </div>

                        <div class="block-habits">
                            <div>
                                <div class="block-generic-header">
                                    My Habits
                                    <div class="button-edit button-edit-block"></div>
                                </div>
                            </div>

                            <div class="block-habits__items">
                                <div class="block-habits__item">
                                    <div class="block-habits__item__icon">😴</div>
                                    <div class="block-habits__item__caption">Healthy sleep</div>
                                </div>
                                <div class="block-habits__item">
                                    <div class="block-habits__item__icon">🥝</div>
                                    <div class="block-habits__item__caption">Healthy diet</div>
                                </div>
                                <div class="block-habits__item">
                                    <div class="block-habits__item__icon">💊</div>
                                    <div class="block-habits__item__caption">Taking medications</div>
                                </div>
                            </div>
                        </div>

                        <div class="block-reminders">
                            <div>
                                <div class="block-generic-header">My Reminders</div>
                                <div class="button-edit button-edit-block button-edit-block-reminders"></div>
                            </div>

                            <div class="block-reminders__items">
                                <div class="block-reminders__item">
                                    <div class="block-reminders__item__caption">Phone Mom</div>
                                    <div class="block-reminders__item__time"><b>23 Feb</b><br/>Evening</div>
                                </div>
                                <div class="block-reminders__item">
                                    <div class="block-reminders__item__caption">Group Session</div>
                                    <div class="block-reminders__item__time"><b>28 Feb</b><br/>1:00pm</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                
            </div>
        </div>
    );
}

export default Home