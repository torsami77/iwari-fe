import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// DEFAULT ROUTES
import Home from './Home';
import "../Styles/Global/Styles.css";
import GlobalStyles from '../Styles/Global/Default';
import Watch from './Watch';
import Live from './Live';
import Category from './Category';
import MyList from './MyList';
import NewVideos from './NewVideos';

const Index = () => {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                {/* DEFAULT ROUTES */}
                <Route path="/" component={Home} exact />
                <Route path={`/watch/:id`} component={Watch} exact/>
                <Route path={`/live`} component={Live} exact/>
                <Route path={`/categories`} component={Category} exact/>
                <Route path={`/my-list`} component={MyList}/>
                <Route path={`/new-videos`} component={NewVideos}/>
            </Switch>
        </Router>
    )
}

export default Index;