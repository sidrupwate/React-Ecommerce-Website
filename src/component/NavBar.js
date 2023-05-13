import React, { Component, useState } from "react";
import "../styles/Styles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {

        return (
            <>
                <div className="navBar">
                    <div>
                        <img className="logo" src="https://techinfini.in/wp-content/uploads/2014/10/ecommerce-white-icon.png" />
                    </div>

                    <div>
                        <input className="searchBar" placeholder="Search"
                        ></input>
                    </div>
                    <div>
                        <button className="searchBtn">Search</button>
                    </div>
                    <div>
                        <ul className="menuList">
                            <Link to="/homepage"> <li>
                                <a className="menuItem" href="#">Home</a>
                            </li></Link>
                            <Link to="/products">  <li>
                                <a className="menuItem" href="#">Products</a>
                            </li></Link>
                            <Link to="/logout">
                                <li>
                                    <a className="menuItem" href="#">Log Out</a>
                                </li></Link>
                        </ul>
                    </div>
                    <div className="iconList">
                        <SettingsIcon className="icons" />
                        <AccountCircleIcon className="icons" />
                        <Link to="/cart"><ShoppingCartIcon className="icons" /></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default NavBar;