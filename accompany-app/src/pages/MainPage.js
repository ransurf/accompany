import React from 'react'
import { useEffect } from 'react';
import AdviceCard from '../components/AdviceCard'
import './MainPage.css'
import * as APIFirebase from "../back-end/functions";

function MainPage() {
  const [advice, setAdvice] = React.useState([]); 

  useEffect(async() => {
    console.log("MainPage useEffect")
    setAdvice(await APIFirebase.getAllQuotes());
    console.log("advice =", advice);
  }, []);

  const adviceCards = advice.map((quote) => {
     return <AdviceCard quote={quote} />
  });
  return (
    <div className="flex-container">
      {adviceCards}
    </div>
  )
}

export default MainPage