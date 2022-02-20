import React from 'react'
import "./LandingPage.css"
import { useNavigate, Link } from "react-router-dom";
import {Button} from "@mui/material";

function LandingPage() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("clicked")
    navigate("/login");
  }
  return (
    <div className="flex-container">
        <h1>You don't have to go through things alone.</h1>
        <p>Accompany is a social app that allows users to share wellness advice and have group therapy sessions.</p>
        <Button
         style={{
          backgroundColor: "#2F374F",
          fontSize: "1.5rem",
        }}
        variant="contained"
        onClick={() => {handleSubmit()}}>
          Start Now
        </Button>
    </div>
  )
}

export default LandingPage