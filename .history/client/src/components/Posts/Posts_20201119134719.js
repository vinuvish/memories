import { CircularProgress } from '@material-ui/core';
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

        !posts.length ? <CircularProgress />
            );
}

export default Posts