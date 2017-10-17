import React, { Component } from 'react';
// import Router from ReactRouter.BrowserRouter
// import Route from ReactRouter.Route

import TitleBar from './Components/TitleBar'
import SideBar from './Components//SideBar'
import MainArea from './Components//MainArea'



import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <div className="work-area">
            <SideBar />
            <MainArea />

        </div>
      </div>
    );
  }
}

export default App;
