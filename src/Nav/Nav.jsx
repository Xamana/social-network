import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import FriendsWidget from './FriendsWidget/FriendsWidget.jsx';

const Nav = ({arr}) => {

    let isActive = ({isActive}) => isActive ? classes.activeLink : classes.nonActivelink;

    return (
        <>
            <div className={classes.nav}>
                <NavLink to='/' className={isActive}><div className={classes.linkText}>Home</div></NavLink>
                <NavLink to='/dialogs' className={isActive}><div className={classes.linkText}>Dialogs</div></NavLink>
                <NavLink to='/12' className={isActive}><div className={classes.linkText}>Friends</div></NavLink>
                <NavLink to='/profile' className={isActive}><div className={classes.linkText}>Posts</div></NavLink>
                <NavLink to='/users' className={isActive}><div className={classes.linkText}>Users</div></NavLink>
                {/* <FriendsWidget arr={arr}/> */}
            </div>
            
        </>
    );
}

export default Nav;
