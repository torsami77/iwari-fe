import React from 'react';
import './App.css';
import Router from './Pages';
// import { useSelector } from "react-redux";
import GlobalStyle from './Styles/Global/Default';
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Auth from "./Components/Auth";
import {lightTheme} from "./Styles/Themes/theme"
import "react-toastify/dist/ReactToastify.css";


const  App = () => {
  // const { token } = useSelector((state) => console.log(state.User.data));

  return (
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
      <ToastContainer 
        autoClose={25000}
        position='top-right'
        closeButton={false}
      />
        <Router />
        <Auth />
    </ThemeProvider>
  ); 
}

export default App;
