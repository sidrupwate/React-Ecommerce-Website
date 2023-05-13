import * as React from 'react';
// import { Component } from 'react';
import Auth from './Auth';
// import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import Footer from './Footer';
// import { Caros
import Carousel from './Carousel';
import NavBar from './NavBar';
import MediaCard from './DealsPage';
import QuantityEdit from './ShoppingCart';
import { Route, Routes } from 'react-router';



function Layout() {
    const isAuth = parseInt(localStorage.getItem('isAuth'));
    console.log({ isAuth })
    const [isAuthenticated, updateAuthenticated] = React.useState(isAuth);


    // conditional rendering
    if (!isAuthenticated) {
        return (
            <>
                <Auth updateAuth={updateAuthenticated} />
            </>
        );
    }

    return (
        <>
            {/* <NavBar /> */}
            {/* <Carousel /> */}
            <NavBar />
            <Routes>
                <Route path="/homepage" element={<MediaCard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/logout" element={<Auth />} />
                <Route path="/cart" element={<QuantityEdit />} />
            </Routes>

        </>
    );
}

export default Layout;