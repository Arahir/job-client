import React from 'react';
import ReactDOM from 'react-dom';
import {JobsContainer} from './components/Jobs';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
import App from './components/App';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    jobs: {
      list: ['front', 'back', 'r&d']
    }
  }
});

const routes = <Route component={App}>
  <Route path="/" component={JobsContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);