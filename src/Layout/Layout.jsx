import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer'
import HeaderContaier from '../Header/HeaderContaier';

const Layout = ({}) => {
    return (
        <>
            <HeaderContaier/>
            <Nav />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
