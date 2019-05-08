import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './styles/css/custom.css';
// import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}


//  ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);