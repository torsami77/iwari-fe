import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from '../Gadgets/Search';
import "./Navbar.css";
import styled from 'styled-components';
import { NotificationIcon, UploadIcon, HamburgerIcon } from '../Icons/Home';
import Avatar from '../../Styles/Default/Avatar';
import image from "../../assets/img.jpg"
import { openSidebar, closeSidebar } from "../../Redux/Navbar/Sidebar";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #210B2C;
  z-index: 99;
  padding: 0.7rem 1.5rem;

  input {
    width: 500px;
  }

  .toggle-navhandler {
    display: none;
  }

  .logo span {
    position: relative;
    top: 1px;
  }

  ul {
    list-style: none;
    display: flex;
    position: relative;
    top: 2px;
  }

  li svg {
    margin-right: 1.7rem;
    position: relative;
    top: 3px;
  }

  img {
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1093px) {
    .toggle-navhandler {
      display: block;
    }
  }

  @media screen and (max-width: 1000px) {
    input {
      width: 400px;
    }
  }

  @media screen and (max-width: 850px) {
    input {
      width: 280px;
    }
  }

  @media screen and (max-width: 500px) {
    .toggle-navhandler {
      display: none;
    }

    li svg {
      width: 30px;
      height: 30px;
      margin-right: 1.7rem;
      position: relative;
      top: 0px;
    }
  }
`;

const Navbar = () => {
    const dispatch = useDispatch();

    const { sidebar: open } = useSelector((state) => state.Sidebar);

    const handleToggleSidebar = () => {
      console.log("Clicked", open);
      open ? dispatch(closeSidebar()) : dispatch(openSidebar());
    };
    return (
        <Wrapper>
            <div className="logo flex-row">
                <HamburgerIcon
                  className="toggle-navhandler"
                  onClick={handleToggleSidebar}
                />
                <span>
                    <Link to="/" className="txt-logo" style={{ color: "white"}}>Logo</Link>
                </span>
            </div>

            <Search />

            <ul>
                <li>
                    <UploadIcon />
                </li>
                <li>
                    <NotificationIcon />
                </li>
                <li>
                    <Avatar className='pointer' src={image} alt='blank' />
                </li>
            </ul>
        </Wrapper>
    )
}

export default Navbar;