import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'

import { storeCreator } from './store'
import WeekView from './Components/WeekView'
import DayView from './Components/DayView'
import WelcomeView from './Components/WelcomeView' 

import './App.css'

const history = createHistory({basenname:'workweek'})

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
              <Route exact path="/" component={WelcomeView}/>
              <Route path="/day/:id" component={DayView} />
            </Switch>
					</div> 
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
