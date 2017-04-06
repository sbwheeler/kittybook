'use strict';

// NOTE ABOUT IMPORTING AND EXPORTING:
// you can default export one thing per file. when importing that default thing in other files, you DO NOT need to import it with curly braces. all other non-default exports will need to be imported using curly braces

import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import store from './store';
import AllKittiesContainer from './AllKittiesContainer';
import { getAllKittiesFromServer } from './action-creators';

// when we hit the kitties route, we will run this function and dispatch our thunk to the store
const onAllKittiesEnter = () => {
  store.dispatch(getAllKittiesFromServer());
}

// we need our provider to provide our subroutes/components with access to our redux store
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
