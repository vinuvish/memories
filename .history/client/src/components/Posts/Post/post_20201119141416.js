import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} >

            <CardMedia className={classes.media} image={post.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant="h6" >{post.creator}]</Typography>
                <Typography variant="body2" >{post.creator}]</Typography>

            </div>
        </Card>
    );
}

export default Post