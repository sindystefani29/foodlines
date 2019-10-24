import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Cuisines from "./pages/Cuisines.jsx"
import Collections from "./pages/Collections.jsx"

// Import F7 Bundle
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

import {App} from 'framework7-react';

export default class MyApp extends Component{
    render(){
        return(
            /**
            <Router basename="/">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/collections">Collections</Link>
                    </li>
                    <li>
                        <Link to="/cuisines">Cuisines</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/collections">
                        <Collections />
                    </Route>
                    <Route path="/cuisines">
                        <Cuisines />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router> */
            <App>
                <Home />
            </App>
        )
    }
}

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<MyApp />, wrapper) : false;