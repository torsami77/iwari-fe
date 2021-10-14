import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    )
}

export default Index;