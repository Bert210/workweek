import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

// import createHistory from 'history/createBrowserHistory'
import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter } from 'react-router-redux'

import { storeCreator } from './store'
import WeekView from './components/WeekView'
import DayView from './components/DayView'
import WelcomeView from './components/WelcomeView'
import TitleBarContainer from './containers/TitleBarContainer';

import './App.css'

const history = createHistory({basenname:'/workweek'})

const store = storeCreator({}, history)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="App">
              <TitleBarContainer />
              <div className="appContainer">
                <div className="SideBar">
                  <WeekView />
                </div>
                <Switch>
                  <Route exact path="/" component={WelcomeView}/>
                  <Route path="/day/:id" component={DayView} />
                </Switch>
            </div>
					</div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
