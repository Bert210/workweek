import React from 'react'
import './MainArea.css'
import {
  Route,
  Switch
} from 'react-router-dom'
const MainArea = () => {
  return (
    <div className="main-area">
      <Switch>
        <Route exact path="/" render={props => {
          return (<div>Select a day</div>)
        }} />
        <Route  path="/days/:id" render={(props) => {
          return(<div>{props.match.params.id}</div>)
        }} />
      </Switch>
    </div>
  )
}

export default MainArea