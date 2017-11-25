import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateTime} from '../actions/time.js'

import TimeInput from '../Components/TimeInput'

class TimeView extends React.Component {
  constructor(props){
    super(props)
     
    let inTimeAMPM = this.props.inTime.hour >= 12 ? true : false;
    let outTimeAMPM = this.props.outTime.hour >= 12 ? true : false; 


    this.state = {
      inTime:{
        minute: this.props.inTime.minute,
        pm: inTimeAMPM
      },
      outTime: {
        minute: this.props.outTime.minute,
        pm: outTimeAMPM
      },
      totalTime: {
        minute: this.props.totalTime.minute
      }
    }

  }

  handleChange = (value, id) => {
    let {inTime, outTime} = this.state
      /*
    switch(id){
      case("inTimeHour"):
        let inTimeAMPM = value.target.valueAsNumber >= 12 ? true : false; 
        inTime = {
          ...this.state.inTime,
          hour: value.target.valueAsNumber,
          pm: inTimeAMPM
        }
        break;
      case("inTimeMinute"):
         inTime = {
          ...this.state.inTime,
          minute: value.target.valueAsNumber
        }
        break;
      case("inTimeAMPM"):
        inTime = {
          ...this.state.inTime,
          pm: value.target.value
        }
        console.log(value.target.checked)
        break;
      case("outTimeHour"):
        let outTimeAMPM = value.target.valueAsNumber >= 12 ? true : false; 
        outTime = {
          ...outTime,
          hour: value.target.valueAsNumber,
          pm: outTimeAMPM
        }

        break;
      case("outTimeMinute"):
        outTime = {
          ...outTime,
          minute: value.target.valueAsNumber
        }
        break;
      case("outTimeAMPM"):
        outTime = {
          ...outTime,
          pm: value.target.checked
        }
        break;
      default:
        return;
    }
    let totalTime = {
      hour: outTime.hour - inTime.hour,
      minute: outTime.minute - inTime.minute
    }
    
    this.setState({inTime, outTime, totalTime})
    //this.props.updateTime(this.props.id)
  */
  }

  render() {
    return(
      <div>
        <form>
          <TimeInput {...this.state.inTime} />
          <br/>
          
          <TimeInput {...this.state.outTime} />
          <br/>
          <span>Total: {this.state.totalTime.hour}:{this.state.totalTime.minute}</span>
        </form>

        <button onClick={
          () => { this.props.removeTime(this.props.id) } 
          }>&times;</button> 
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateTime}, dispatch)
}


export default connect(null, mapDispatchToProps)(TimeView)
