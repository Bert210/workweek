import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers'

import WeekView from './WeekView'
import DayView from './DayView'
import './App.css';

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route exact path="/" component={WeekView} />
            <Route path="/day/:id" component={DayView} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
