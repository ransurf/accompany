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

// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom:20,
//         display: 'block'
//     }
// })

export default function QuotesPage() {
  // const classes = useStyles()
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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

  // GETTING THE QUOTES DATA
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

  //console.log(test);

  // if (test) {
  //   return (
  //     <div>
  //       {test.map((i) => (
  //         <span key={i}>{i}</span>
  //       ))}
  //     </div>
  //   );
  // } else if (!quotes && !fetchQuotesError) {
  //   return <span>Fetching...</span>;
  // } else {
  //   return <span>Error</span>;
  // }

  return (
    <Container>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="Container"
      >
        <div
          style={{ flex: "0 0 auto" }}
          className="NavigationDrawer"
          id="nav-2"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              border: 1,
              borderRadius: 16,
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

          <ButtonGroup color="secondary" onClick={() => console.log("clicked")}>
            <Button type="submit">
              <FavoriteIcon /> Favorite{" "}
            </Button>
            <Button type="submit">
              <TagIcon /> Tags{" "}
            </Button>
            <Button type="submit">
              <SettingsIcon /> Settings{" "}
            </Button>
          </ButtonGroup>

          <br />
          <FormLabel className="redbull">Create a New Quote</FormLabel>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div style={{ flex: "0 0 25px" }} className="AppBar">
          <Typography
            variant="h2"
            color="primary"
            align="center"
            gutterBottom
            display="block"
          >
            Your Quotes, name
          </Typography>

          <Typography display="block">
            {" "}
            Discover Collection of your Quotes{" "}
          </Typography>

          <QuotesLayout props={test} />
        </div>
      </div>
    </Container>
  );
}
