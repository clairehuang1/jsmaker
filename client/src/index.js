import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { Route, Router, hashHistory } from 'react-router';

import routes from './routes.js';

ReactDOM.render(
<Router routes={routes} history={hashHistory} />,
  document.getElementById('wrapper'));
