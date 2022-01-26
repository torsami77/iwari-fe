import './App.css';
import Router from './Pages';
import { useSelector } from "react-redux";
// import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import Auth from "./Components/Auth";
import "react-toastify/dist/ReactToastify.css";


const  App = () => {
  const { token } = useSelector((state) => state.user.data);

  return (
    <>
      <ToastContainer 
        autoClose={2500}
        position='top-right'
        closeButton={false}
      />
        { token ? <Router /> : <Auth/>}
    </>
  ); 
}

export default App;
