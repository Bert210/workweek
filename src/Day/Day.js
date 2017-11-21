import React, {Component} from 'react'


export default class Day extends Component {
  render() {
    return (
      <div className="day-container">
        <div className="day-name">{this.props.name}</div>
        <div className="day-active">active:{this.props.active ? "true" : "false"}</div>
      </div>
    )
  }
}
