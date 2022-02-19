import React from "react";
import * as APIFirebase from "../back-end/functions"; 
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { setSessionCookie } from "../session";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  
  const [formParams, setFormParams] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onHandleChange = (e, field) => {
    switch (field) {
      case "email":
        setFormParams({ ...formParams, email: e.target.value });
        break;
      case "password":
        setFormParams({ ...formParams, password: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await APIFirebase.signIn(formParams.email, formParams.password);
    if (!response) {
        console.log("Login Failed! Check Credentials!");
    } else {
        console.log("Login Successful");
        setSessionCookie(response.uid);
        navigate("/search");
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Log In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => onHandleChange(e, "email")}
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => onHandleChange(e, "password")}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
        </form>
        <Typography>
          {" "}
          Don't have an account yet?
          <Link to="/SignUp"> Sign Up</Link>
        </Typography>
        
      </Paper>
    </Grid>
  );
}
