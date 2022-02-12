import React from 'react';
import {Link} from "react-router-dom";
import Search from '../Gadgets/Search';
import "./Navbar.css";
import { useHistory } from 'react-router-dom';


const Navbar = () => {
    const history = useHistory();
    return (
        <div className="nav">
            <div className="logo flex-row">
                <div className="toggler"></div>
                <span>
                    <Link to="/" className="txt-logo" style={{ color: "white"}}>Logo</Link>
                </span>
            </div>

            <Search />

            <Link to="/register" className="link-btn" onClick={() => history.push("/login")}>
                Sign Up
            </Link>
        </div>
    )
}

export default Navbar;