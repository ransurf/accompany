import React, { useEffect } from "react";
import {
  TextField,
  Container,
  Button,
  ButtonGroup,
  Typography,
  Box,
  FormLabel,
  FormControl,
  textFieldClasses,
} from "@mui/material";
// import { makeStyles } from '@mui/styles';
import QuotesCards from "../components/QuotesCards";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import TagIcon from "@mui/icons-material/Tag";
import SettingsIcon from "@mui/icons-material/Settings";

import QuotesLayout from "../components/QuotesLayout";
import "./QuotesPage.css";
import { ClassNames } from "@emotion/react";
import * as Quote from "../back-end/functions";
import * as APIFirebase from '../back-end/functions'
import Cookies from 'js-cookie'

// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom:20,
//         display: 'block'
//     }
// })


export default function QuotesPage() {
  // const classes = useStyles()
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  useEffect(async () => {
    const userID = Cookies.get('session')
    setUser(await APIFirebase.getUserProfile(userID))
    console.log("user =", user)
  }, []);

  var quote = {};
  const [quotesNew, setQuotesNew] = useState([]);
  let cardsNew = {};
  // Handling Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      // Set this to as a property for Card

      console.log(title, details);

      //attempt to make a global stuff -mm
      await Quote.addQuoteToCollection(details, title);
    }
    console.log(cardsNew.title);
  };
/*
  //GETTING THE QUOTES DATA
  const [test, setTest] = useState({});
  const [fetchQuotesError, setfetchQuotesError] = useState(false);
  useEffect(() => {
    Quote.getAllQuotes().then((data) => {
      console.log(data);
      if (data.error) {
        setfetchQuotesError(true);
      } else {
        //console.log(Object.keys(data));
        setTest(data);
        console.log(test);
      }
    });
  }, []);

  console.log(test);

  if (test) {
    return (
      <div>
        {test.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    );
  } else if (!quotes && !fetchQuotesError) {
    return <span>Fetching...</span>;
  } else {
    return <span>Error</span>;
  }
*/
  return (
    <div className="Container" >
      <div className="row"></div>
      <div class="title">
      <Typography
          variant="h2"
          color="white"
          align="center"
          gutterBottom
          display="block"
        >
          Your quotes, {user ? user.name : "user"}
        </Typography>
        {/* <QuotesLayout/> */}
      
      </div>
      <hr className="new5"/>
      <div class="layout-wrapper">
        <div className="box-wrapper" id="nav-2">
          <div className="box">
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                border: 1,
                borderRadius: 16

              }}
            >
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Search"
                variant="standard"
                type="search"
              />
            </Box>
          </div>
          {/* <div className="box">
            <Button type="submit">
              <FavoriteIcon /> Favorite{" "}
            </Button>

          </div>
          <div className="box">
            <Button type="submit">
              <TagIcon /> Tags{" "}
            </Button>
          </div>
          <div className="box">

            <Button type="submit">
              <SettingsIcon /> Settings{" "}
            </Button>
          </div> */}
          <div className="box">
            <br />
            {/* Create new Quote */}
            {/* <FormControl className={classes.field}> */}
            <FormLabel 
            >Create a New Quote</FormLabel>
            <form className="form__dark" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
              
                onChange={(e) => setTitle(e.target.value)}
                label="Quote Title"
                variant="outlined"
                fullWidth
                required
                error={titleError}
              />

              <TextField
                onChange={(e) => setDetails(e.target.value)}
                label="Quote"
                variant="outlined"
                multiline
                maxRows={5}
                minRows={3}
                fullWidth
                required
                error={detailsError}
              />
              <Button type="submit"
              style={{
                color: "white"
              }}
              >Submit</Button>
            </form>
          </div>
        </div>
        <div className="box-large">
        <QuotesLayout />
        </div>
      </div>
    </div>
  );
}
