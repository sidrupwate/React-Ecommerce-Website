import React, { useState, useEffect } from "react";
import "../styles/Styles.css";
import axios from 'axios';
import { Button } from '@mui/material';
import NavBar from "./NavBar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
// import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
// import { ShoppingCart } from "@mui/icons-material";

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = React.useState('');


    useEffect(() => {
        setLoading(true)
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products?limit=20"
        }).then(res => {
            console.log(res.data);
            setData(res.data)
        }).catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
            <div className="navBar">
                <div>
                    <img className="logo" src="https://techinfini.in/wp-content/uploads/2014/10/ecommerce-white-icon.png" />
                </div>

                <div>
                    <input className="searchBar" placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="searchBtn">Search</button>
                </div>
                <div>
                    <ul className="menuList">
                        <li>
                            <a className="menuItem" href="#">Home</a>
                        </li>
                        <li>
                            <a className="menuItem" href="#">Products</a>
                        </li>
                        <li>
                            <a className="menuItem" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
                <div className="iconList">
                    <SettingsIcon className="icons" />
                    <AccountCircleIcon className="icons" />
                    <ShoppingCartIcon className="icons" />
                </div>
            </div>



            <div className="products-container">
                {loading && <div style={{ textAlign: "center" }}><h1>Loading..</h1>
                </div>}
                {data.filter((product) => {
                    return search.toLocaleLowerCase() === '' ? product : product.title.toLocaleLowerCase().includes(search)
                }).map((product) => (

                    <div key={product.id} className="card">
                        <div><img src={product.image} alt="#" /></div>
                        <div className="card-description">
                            <h6>{product.title}</h6>
                            <h6>{`Price: ${product.price}`}</h6>
                            <h6>{`Category: ${product.category}`}</h6>
                            <div id="btn">
                                <Button variant='filled' style={{ backgroundColor: "orange", color: "white" }} >BUY NOW</Button>
                                <Button variant='outlined' style={{ color: "orange", borderColor: "orange" }} >ADD TO CART</Button>
                            </div>
                            <div></div>
                            
                        </div>
                    </div>

                ))}
            </div>
        </>
    )


};

export default Products;