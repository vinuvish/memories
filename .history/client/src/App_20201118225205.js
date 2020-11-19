import React from 'react';
import { Container, AppBae, Typography, Grow, Grid, AppBar } from '@material-ui/core'

import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center"> Memories </Typography>
                <img src={memories} alt="memories" height="60">

                </img>
            </AppBar>
        </Container>
}

export default App;