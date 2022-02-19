import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import * as APIFirebase from "../back-end/functions";
import { setSessionCookie } from "../session";

export default function SignUpPage() {
  const [formParams, setFormParams] = React.useState({
    name: "",
    title: "",
    description: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e, field) => {
    switch (field) {
      case "email":
        setFormParams({ ...formParams, email: e.target.value });
        break;
      case "password":
        setFormParams({ ...formParams, password: e.target.value });
        break;
      case "name":
        setFormParams({ ...formParams, name: e.target.value });
        break;
      case "title":
        setFormParams({ ...formParams, title: e.target.value });
        break;
      case "description":
        setFormParams({ ...formParams, description: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await APIFirebase.signUp(
      formParams.email,
      formParams.password,
      formParams.name,
      formParams.title,
      formParams.description
    );
    if (!request) {
      console.log("Signup Failed!");
    } else {
      console.log("Signup Successful!");
      setSessionCookie(request)
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
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => onHandleChange(e, "email")}
            label="Email"
            placeholder="Enter Email"
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
          <TextField
            onChange={(e) => onHandleChange(e, "name")}
            label="Name"
            placeholder="Enter name"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => onHandleChange(e, "title")}
            label="Title"
            placeholder="Enter title"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => onHandleChange(e, "description")}
            label="Description"
            placeholder="Enter description"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
