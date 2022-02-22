import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
    // const [auth, setAuth] = useState("LOGIN");
    // const history = useHistory();

    // if (auth === "SIGNUP") {
    //     return <SignUp setAuth={setAuth}/>
    // } else {
    //     return <Login setAuth={setAuth}/>
    // }
    return (
        <Router>
            <Switch>
                <Route path={`/login`} component={Login}/>
                <Route path={`/register`} component={SignUp}/>
            </Switch>
        </Router>
    )
};

export default Auth;