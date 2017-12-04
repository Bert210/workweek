import React, {Component} from 'react'

import {connect} from 'react-redux'

import {totalSelector} from '../selector/totalTime'

import ToggleButton from '../Components/ToggleButton'
import {getMilitaryTimeFromMinutes} from '../TimeUtil'    

class Day extends Component {
  constructor(props){
    super(props)

    this.state = {}
  }
  componentDidMount() {
    let totalMinutes = this.props.times.reduce( (total, current) => {
      if (current.dayRef === this.props.id){
        return total + current.totalTime.minute
      }else{ return 0; }
    }, 0)

    this.setState({
      ...getMilitaryTimeFromMinutes(totalMinutes)
    })
  }
  
  render() {
    return (
      <div className="day-container">
        <div className="day-name">{this.props.name}</div>
        <div className="day-total">{this.props.totalTime[this.props.id].hour}:{this.props.totalTime[this.props.id].minute}</div>
        <div className="day-active"><ToggleButton /></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    times: state.times,
    totalTime: totalSelector(state)
  }
}

export default connect(mapStateToProps, null)(Day)
