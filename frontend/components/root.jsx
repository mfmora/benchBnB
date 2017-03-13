import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
      <Route path="/signup" />
      <Route path="/login" />
    </Router>
  </Provider>
);

export  default Root;
