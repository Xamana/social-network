import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import UserProfile from './UserProfile/UserProfile';


const Posts = (props) => {
    return (
        <div>
            <div>
                <UserProfile profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             isOwner={props.isOwner}
                             savePhoto={props.savePhoto}
                             setNewUserData={props.setNewUserData}

                />
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Posts;
