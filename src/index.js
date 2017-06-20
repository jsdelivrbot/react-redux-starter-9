import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources'

let store = createStore(reducers);

import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App>
        <Route path="/resources" component={requireAuth(Resources)} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
