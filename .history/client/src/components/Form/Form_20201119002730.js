import React from 'react';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';


function Form() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}></Paper>
    );
}

export default Form