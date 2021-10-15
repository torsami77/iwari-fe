import React from 'react';
import {Link} from "react-router-dom";
import Search from '../Gadgets/Search';
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo flex-row">
                <div className="toggler"></div>
                <span>
                    <Link to="/" className="txt-logo" style={{ color: "white"}}>Logo</Link>
                </span>
            </div>

            <Search />

            <Link to="" className="link-btn">
                Sign Up
            </Link>
        </div>
    )
}

export default Navbar;