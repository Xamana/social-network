import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import UserProfile from './UserProfile/UserProfile';


const Posts = (props) => {
    return (
        <div>
            <div className={classes.mainBanner}>
                <img src="https://img.freepik.com/free-vector/stylish-yellow-red-black-friday-sale-memphis-style-banner_1017-34704.jpg?w=1380&t=st=1670356283~exp=1670356883~hmac=81963b5faeec82f449eedd1eb22aed9ff32105ae66314910c17b41206abf7792" alt="Banner" />
            </div>
            <div>
                <UserProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Posts;
