import React from 'react'
import { TextField, Container, Button, ButtonGroup, Typography, Box } from '@mui/material'
import { } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import FavoriteIcon from '@mui/icons-material/Favorite';
import TagIcon from '@mui/icons-material/Tag';
import SettingsIcon from '@mui/icons-material/Settings';


import QuotesLayout from '../components/QuotesLayout'
import './QuotesPage.css'


function QuotesPage() {


    return (
        <Container>

            <Typography variant="h2" color="primary" align="center" gutterBottom display="block">
                Your Quotes, name
            </Typography>
            {/* <QuotesLayout/> */}
            <Typography display="block"> Discover Collection of your Quotes </Typography>

            {/* <ButtonGroup color="secondary" onClick={() => console.log('clicked')}>
                <Button type="submit" ><SearchIcon /> Search </Button>

            </ButtonGroup> */}

            <Box sx={{ display: 'flex', alignItems: 'flex-end' , border:1,borderRadius: 16}}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Search" variant="standard" type="search" />
            </Box>


            <QuotesLayout />


        </Container>
    )
}

export default QuotesPage