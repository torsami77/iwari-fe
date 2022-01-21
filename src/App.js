import './App.css';
import Router from './Pages';
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router />  
  ); 
}

export default App;
