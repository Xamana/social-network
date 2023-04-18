import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div >
            <div className={classes.userPost}>
                <img height="58" width='54' src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg" alt="ava" />
                <div>{props.message}</div>
            </div>
            <div>{props.likesCount} likes</div>
        </div>
    );
}

export default Post;
