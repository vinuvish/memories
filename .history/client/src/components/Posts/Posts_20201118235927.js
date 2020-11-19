import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/post'

import useStyles from './styles'

const Posts = () => {
    const post = useSelector((state) => state.Posts);
    const classes = useStyles();
    return (
        <>
            <h1 > Posts</h1 >
            <Post></Post>
        </>
    );
}

export default Posts