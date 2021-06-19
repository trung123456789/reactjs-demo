import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import LoginContainer from '../containers/auth/LoginContainer';
import MainContainers from '../containers/MainContainers';
import history from "./history";

const Root = ({ store }) =>
    (<Provider store={store}>
        <Router history={history}>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/top" component={MainContainers} />
        </Router>
    </Provider>);


export default Root;
