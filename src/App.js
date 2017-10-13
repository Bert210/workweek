import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Router from ReactRouter.BrowserRouter
// import Route from ReactRouter.Route

import WeekView from './WeekView'
import DayView from './DayView'
import Nav from './Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={WeekView} />
          <Route path="/day/:id" component={DayView} />
        </div>
      </Router>
    );
  }
}

export default App;
