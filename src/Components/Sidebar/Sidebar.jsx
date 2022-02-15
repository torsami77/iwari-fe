import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { HomeIcon, LibIcon, SubIcon, TrendingIcon, WatchIcon } from '../Icons/Home';
import { FriendsCard } from '../Cards/Cards';
// import {Home} from "@styled-icons/boxicons-regular/Home";
// import "./Sidebar.scss"
import {SideWrapper} from "./style";

const Sidebar = () => {
    const dispatch = useDispatch();

    
    return (
        <SideWrapper>
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
        </SideWrapper>
    )
}

export default Sidebar;