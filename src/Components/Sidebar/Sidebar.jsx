import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HomeIcon } from '../Icons/Home';
// import {Home} from "@styled-icons/boxicons-regular/Home";
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <div className="wrapper">
            <NavLink 
                exact
                to="/"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    {/* <HomeIcon/> */}
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink 
                exact
                to="/live"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <span>Live</span>
                </div>
            </NavLink>
            <NavLink 
                exact
                to="/live"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <span>Category</span>
                </div>
            </NavLink>
            <NavLink 
                exact
                to="/live"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <span>New/Popular</span>
                </div>
            </NavLink>
            <NavLink 
                exact
                to="/live"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <span>My List</span>
                </div>
            </NavLink>
            <hr />
            <div className="friends-list">
                <h3>friends</h3>
                <div className="display">
                    Empty Space
                </div>
                <div className="friends">
                    <div className="list">
                        <div className="l-img">
                            <img src="" alt="" />
                        </div>
                        <div className="l-description">
                            <h2>Judie Winkie</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;