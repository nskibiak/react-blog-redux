import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history';
import { createBrowserHistory } from 'history';
import { reducer as formReducer } from 'redux-form';

import './application.scss';

import postsReducer from './reducers/posts_reducer';
import PostsIndex from './containers/posts_index';
import PostsShow from './containers/posts_show';
import PostsNew from './containers/posts_new';

const history = createBrowserHistory();

const reducers = combineReducers({
  posts: postsReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {}, middlewares)}>
      <Router history={history}>
        <div className="thin-container">
          <Switch>
            <Route path="/" exact component={PostsIndex} />
            <Route path="/posts/new" exact component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.container')
);

// ROUTE ORDER MATTERS: NEW PAGE MUST BE BEFORE SHOW PAGE!!
