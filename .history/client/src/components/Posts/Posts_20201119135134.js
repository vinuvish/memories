import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/post'

import useStyles from './styles'

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log('posts');

    console.log(posts);
    return (

        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing="3">
                {posts.map((post) => (
                    <Grid></Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts