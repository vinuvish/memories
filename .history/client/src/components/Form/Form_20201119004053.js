import React, { useState } from 'react';
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';



function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const classes = useStyles();
    const handleSubmit = () => { };
    return (
        <Paper className={classes.paper}>

            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Creating a memory
            </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="creator" variant="outlined" label="Message" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

            </form>
        </Paper>
    );
}

export default Form