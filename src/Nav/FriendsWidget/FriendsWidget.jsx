import React from 'react';
import classes from './FriendsWidget.module.css'



const FriendsWidget = ({ arr }) => {

    const arrFriends = [];
    const randomId = (max) => Math.floor(Math.random() * max);
    
    const randomFriends = () => {
        const id = randomId(arr.length-1);
        if (arrFriends.length !== 3 && !arrFriends.includes(id)){
            arrFriends.push(arr[id].name);
            randomFriends();
        }
    }
    randomFriends();
    
    return (
      <div className={classes.randomFriends}>
            {arrFriends.map((friendName) => { 
                return (
                    <div className={classes.friendItem}>
                        <img height="58" width='54' src="https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg" alt="ava" />
                        <div>{friendName}</div>
                    </div>)
            })}
            
        </div>
    );
}

export default FriendsWidget;
