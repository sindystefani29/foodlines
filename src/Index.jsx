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

export default class App extends Component{
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
            <Home />
        )
    }
}

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;