import * as React from 'react';
import {useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GradeIcon from '@mui/icons-material/Grade';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function AdviceCard(props) {
  const theme = useTheme();

  useEffect(() => {
    console.log("AdviceCard useEffect");
    console.log("props =", props);
  }, []);
  const deleteQuote = () => {
    console.log("deleteQuote")
  }
  const nextQuote = () => {
    console.log("nextQuote")
    props.nextQuote()
  }
  const favoriteQuote = () => {
    console.log("favoriteQuote")
  }
  return (
    <Card sx={{ display: 'flex', width: 500}}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Yes
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="delete" onClick={() => {deleteQuote()}}>
            {theme.direction === 'rtl' ? <GradeIcon /> : <DeleteForeverIcon />}
          </IconButton>
          <IconButton aria-label="next" onClick={() => {nextQuote()}}>
            <NavigateNextIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="favorite">
            {theme.direction === 'rtl' ? <DeleteForeverIcon /> : <GradeIcon />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
