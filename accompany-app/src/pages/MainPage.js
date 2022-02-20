import React from "react";
import { useEffect } from "react";
import AdviceCard from "../components/AdviceCard";
import "./MainPage.css";
import * as APIFirebase from "../back-end/functions";

function MainPage() {
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
    return (
      <AdviceCard
        quote={quote}
        deleteQuote={deleteQuote}
        nextQuote={nextQuote}
        favoriteQuote={favoriteQuote}
      />
    );
  });

 

  return <div className="flex-container">{adviceCards}</div>;
}

export default MainPage;
