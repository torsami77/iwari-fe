import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { HomeIcon, LibIcon, SubIcon, TrendingIcon, WatchIcon } from '../Icons/Home';
import { FriendsCard } from '../Cards/Cards';
// import {Home} from "@styled-icons/boxicons-regular/Home";
import "./Sidebar.scss"
import { closeSidebar } from "../../Redux/Navbar/Sidebar";
import styled, {css} from "styled-components";

export const SideWrapper = styled.div`
  position: fixed;
  top: 55px;
  left: 0;
  height: 100vh;
  width: 240px;
  background: white;
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 0.8rem 0;
    font-size: 14px;
    padding-left: 2.8rem;
    margin-bottom: 0.4rem;
    color: #535353;
  }

  .icon:not(.hover-disable):hover {
    background: #FF4D54;
    cursor: pointer;
    color: #FFF;
  }

  .icon:not(.hover-disable):hover svg {
    fill: #FFF;
  }

  .active div {
    background: #FFF;
    cursor: pointer;
    color: #FF4D54;
  }

  svg {
    fill: #535353;
  }

  .active svg {
    fill: #FF4D54;
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }

  .line {
    padding: 1.5rem 0;
  }

  .line hr {
    width: 83%;
    float: right;
  }

  .friends-list {
    padding-left: 2.8rem;
  }

  .friends-list h3 {
    color: #F43052;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
  }

  .friends-list .display {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin: .7rem 0;
    height: 50px;
    border-radius: 5px;
    padding: .5rem 0;
    background: #FEF4F7;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }

  .friends-list .friends .list {
    display: flex;
    align-items: center;
    height: 25px;
    margin: .9rem 0;
    // justify-content: space-between;
  }

  .l-img {
    width: 14%;
    height: 100%;
    margin-right: 15px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  .l-img img {
    object-fit: cover;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    -ms-border-radius: inherit;
    -o-border-radius: inherit;
  }

  .l-description {
    line-height: 15px;
  }

  .l-description h2 {
    font-size: 12px;
    color: #210B2C;
  }

  .l-description p {
    font-size: 10px;
    color: #B6B6B6;
  }

  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;

const Sidebar = () => {
    const dispatch = useDispatch();

    const { sidebar: open } = useSelector((state) => state.Sidebar);

    const handleCloseSidebar = () => {
        dispatch(closeSidebar());
    };
    return (
        <SideWrapper open={open}>
            <NavLink 
                onClick={handleCloseSidebar}
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
                onClick={handleCloseSidebar}
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
                onClick={handleCloseSidebar}
                exact
                to="/categories"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <SubIcon/>
                    <span>Category</span>
                </div>
            </NavLink>
            <NavLink 
                onClick={handleCloseSidebar}
                exact
                to="/new-videos"
                activeClassName="active"
            >
                <div className="icon">
                    {/* Icon */}
                    <LibIcon/>
                    <span>New/Popular</span>
                </div>
            </NavLink>
            <NavLink 
                onClick={handleCloseSidebar}
                exact
                to="/my-list"
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