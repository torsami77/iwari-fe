import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { StyledAuth } from "./SignUp";
import useInput from "../../hooks/input";
import { login } from "../../Redux/User";

const Login = ({ setAuth }) => {
    const dispatch = useDispatch();

    const username = useInput("");
    const password = useInput("");

    // handler
    const handleLogin = (e) => {
        e.preventDefault();
    
        if (!username.value.trim() || !password.value.trim()) {
            return toast.error("Please fill in all the fields");
        }
    
        const payload = {
            username: username.value,
            password: password.value,
        };
    
        const clearForm = () => {
            username.setValue("");
            password.setValue("");
        };
    
        dispatch(login({ payload, clearForm }));
    };
    return (
        <StyledAuth>
            <h2>Login to your account</h2>
            <form onSubmit={handleLogin}>
                <input
                type="username"
                placeholder="username"
                value={username.value}
                onChange={username.onChange}
                />
                <input
                type="password"
                placeholder="password"
                value={password.value}
                onChange={password.onChange}
                />
                <div className="action input-group">
                    <span className="pointer" onClick={() => setAuth("SIGNUP")}>
                        Signup instead
                    </span>
                    <button>Login</button>
                </div>
            </form>
        </StyledAuth>
    );
};

export default Login;