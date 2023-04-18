import React from 'react';
import classes from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = (props) => { 
    return (
        <div className={classes.header}>
            <div className="logo">logo</div>
            <div className={classes.userProfile}>
                {props.isAuth 
                ? <div> {props.login} - <button onClick={() => props.logout()}>Logout</button></div>  
                : <NavLink to="/login">Login</NavLink>}
            </div>

        </div>
    );
}

export default Header;
