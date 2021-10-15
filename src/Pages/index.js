import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import "../Styles/Global/Styles.css";
import GlobalStyles from '../Styles/Global/Default';

const Index = () => {
    return (
        <Router>
        <GlobalStyles />
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    )
}

export default Index;