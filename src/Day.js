import React, {Component} from 'react'

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                      "Thursday", "Friday", "Saturday"]

export default class Day extends Component {
  getName = () => {
    return DAYS_OF_WEEK[this.props.id]
  }
  render() {
    return (
      <div className="day-container">
        <div className="day-name">{this.props.name}</div>
        <div className="day-active">active:{this.props.active ? "true" : "false"}</div>
      </div>
    )
  }
}
