import React, { useState } from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
    const [auth, setAuth] = useState("LOGIN");

    if (auth === "SIGNUP") {
        return <SignUp setAuth={setAuth}/>
    } else {
        return <Login setAuth={setAuth}/>
    }
};

export default Auth;