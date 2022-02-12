import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HomeIcon, LibIcon, SubIcon, TrendingIcon, WatchIcon } from '../Icons/Home';
import { FriendsCard } from '../Cards/Cards';
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
                    <HomeIcon/>
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
                    <TrendingIcon/>
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
                    <SubIcon/>
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
                    <LibIcon/>
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
                    <WatchIcon/>
                    <span>My List</span>
                </div>
            </NavLink>
            <div className="line">
                <hr />
            </div>
            <div className="friends-list">
                <h3>friends</h3>
                <div className="display">
                    {/* Empty Space */}
                </div>
                <div className="friends">
                    <FriendsCard/>
                    <FriendsCard/>
                    <FriendsCard/>
                    <FriendsCard/>
                    <FriendsCard/>
                    <FriendsCard/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;