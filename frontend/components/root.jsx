import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if(store.getState().session.currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/signup" onEnter= {_redirectIfLoggedIn} component={ SessionFormContainer }/>
          <Route path="/login" onEnter= {_redirectIfLoggedIn} component={ SessionFormContainer }/>
        </Route>
      </Router>
    </Provider>
  );


};

export  default Root;
