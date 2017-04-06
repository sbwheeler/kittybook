'use strict';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import store from './store';
import AllKittiesContainer from './AllKittiesContainer';
import { getAllKittiesFromServer } from './action-creators';

// Provider

const onAllKittiesEnter = () => {
  store.dispatch(getAllKittiesFromServer());
}

ReactDOM.render(
    <div className="container flexbox-container">
      <div className="jumbotron">
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/'>
            <Route path='kitties' component={AllKittiesContainer} onEnter={onAllKittiesEnter} />
            <IndexRoute component={AllKittiesContainer} />
          </Route>
        </Router>
      </Provider>

      </div>
    </div>
  ,
  document.getElementById('app')
);
