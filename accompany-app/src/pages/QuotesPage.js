import React from 'react'
import { TextField, Container, Button, ButtonGroup, Typography, Box, makeStyles } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import TagIcon from '@mui/icons-material/Tag';
import SettingsIcon from '@mui/icons-material/Settings';

import QuotesLayout from '../components/QuotesLayout'
import './QuotesPage.css'
import { ClassNames } from '@emotion/react';


function QuotesPage() {
    

    return (
        <Container>
            <Typography variant="h2" color="primary" align="center" gutterBottom display="block">
                Your Quotes, namea
            </Typography>
            {/* <QuotesLayout/> */}

            <Typography display="block"> Discover Collection of your Quotes </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', border: 1, borderRadius: 16 }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Search" variant="standard" type="search" />
            </Box>

            <ButtonGroup color="secondary" onClick={() => console.log('clicked')}>
                <Button type="submit" ><FavoriteIcon /> Favorite </Button>
                <Button type="submit" ><TagIcon /> Tags </Button>
                <Button type="submit" ><SettingsIcon /> Settings </Button>
            </ButtonGroup>
           
            <br />
            {/* Create new Quote */}
            <form noValidate autoComplete="off">
                <TextField
                
                    label="Quote Title"
                    variant="outlined"
                    fullWidth
                    required />
    
                <TextField
                    label="Quote"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    minRows={2}
                    fullWidth
                    required />
            </form>


            <QuotesLayout />


        </Container>
    )
}

export default QuotesPage