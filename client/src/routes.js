import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

import HomePage from './components/pages/home-page';
import OwnerPage from './components/pages/ownerPage';

const routes = (

    <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/notfound" component={NotFoundPage} />
    <Route path="/hallo" component={OwnerPage} />
    </Route>


);

export default routes;
