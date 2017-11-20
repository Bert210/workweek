import React, { Component } from 'react';
import ReactRouter, {BrowserRouter as Router, Route} from 'react-router-dom'

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'

import SideBar from './Components//SideBar'
import MainArea from './Components//MainArea'



import './App.css'

const history = createHistory()

const store = storeCreator({}, history)

class App extends Component {
  render() {
    return (
      <Router>
        <ConnectedRouter history={history}>
        <div className="App">
          <Route exact path="/" component={WeekView} />

            </Switch>
          </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
