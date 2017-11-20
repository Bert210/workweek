import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'

import {storeCreator} from './store'

import WeekView from './WeekView'
import DayView from './DayView'
import './App.css';

const history = createHistory()

const store = storeCreator({}, history)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div className="SideBar">
              <WeekView />
            </div>
            <Switch>
              <Route path="/day/:id" component={DayView} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
