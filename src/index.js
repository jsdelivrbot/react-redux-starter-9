import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources'
import UserList from './components/user_list'
import Async from './middlewares/async'

let createStoreWithMiddleware = applyMiddleware(Async)(createStore);

import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={createBrowserHistory()}>
      <App>
        <Route path="/users" component={requireAuth(UserList)} />
        <Route path="/resources" component={requireAuth(Resources)} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
