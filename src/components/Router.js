import {Route, Router as ReactRouter, Switch} from 'react-router';
import React from 'react';
import MineralList from './game/MineralList.js';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const Router = (props) => {
    return (
        <ReactRouter history={history}>
            <Switch>
                <Route exact path="/" component={MineralList}/>
                {/*<Route exact path="/avatar" component={null}/>*/}
            </Switch>
        </ReactRouter>
    )

}

export default Router