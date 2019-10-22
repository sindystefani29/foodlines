import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DetailCollections from "./DetailCollections.jsx"

export default function Collections(){
    let match = useRouteMatch();
    return(
        <Router basename="/">
            <ul>
                <li>
                    <Link to={`${match.url}/1`}>Collections 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>Collections 2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/3`}>Collections 3</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:collectionsId`}>
                    <DetailCollections />
                </Route>
            </Switch>
        </Router>
    )
}