import React, {Component} from 'react'

import {connect} from 'react-redux'

import ToggleButton from '../Components/ToggleButton'

class Day extends Component {
  componentDidMount() {
    let filteredTime = this.props.times.filter(
      time => {
        return time.dayRef === this.props.id
    }) 
    
    let totalHour = filteredTime.reduce((total, current) => {
      return total + current.totalTime.hour
    }, 0)

    let totalMinute = filteredTime.reduce((total, current) => {
      return total + current.totalTime.minute
    }, 0)
    

  }

  render() {
    return (
      <div className="day-container">
        <div className="day-name">{this.props.name}</div>
        <div className="day-total"></div>
        <div className="day-active">active:<ToggleButton /></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    times: state.times
  }
}

export default connect(mapStateToProps, null)(Day)
