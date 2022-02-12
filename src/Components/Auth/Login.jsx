import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { StyledAuth } from "./SignUp";
import useInput from "../../hooks/input";
import { login } from "../../Redux/User";
import { useHistory } from "react-router-dom";

const Login = ({ setAuth }) => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const email = useInput("");
    const password = useInput("");
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (!email.value.trim() || !password.value.trim()) {
        return toast.error("Please fill in all the fields");
      }
  
      const payload = {
        email: email.value,
        password: password.value,
      };
  
      const clearForm = () => {
        email.setValue("");
        password.setValue("");
      };
  
      dispatch(login({ payload, clearForm }));
    };
  
    return (
      <StyledAuth>
        <p>Welcome Back</p>
        <h2>Login to your account</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            value={email.value}
            onChange={email.onChange}
          />
          <input
            type="password"
            placeholder="password"
            value={password.value}
            onChange={password.onChange}
          />
          <div className="action input-group">
            <button>Login</button>
            <p className="p">
              Dont have an account!
              <span className="pointer" onClick={() => history.push("/register")}>
                {" "}Sign Up
              </span>
            </p>
          </div>
        </form>
      </StyledAuth>
    );
  };
  
  export default Login;
  