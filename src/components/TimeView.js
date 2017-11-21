import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateTime} from '../actions/time.js'


  /*
const TimeView = ({id, dayRef, inTime, outTime, totalTime, removeTime}) => {  
  const handleChange = () => {{
  return(
  <div>
    <form>
      In:<input type="number" ref="inTimeHour" defaultValue={inTime.hour} />
      <input type="number" defaultValue={inTime.minute} onChange={() => {}}/><input type="checkbox" />
      <br/>
      Out: <input type="number" value={outTime.hour} onChange={() => {}}/>
      <input type="number" value={outTime.minute} onChange={() => {}}/>
      <br/>
      <span>Total: {totalTime.hour}:{totalTime.minute}</span>
    </form>
    
    <button onClick={
      () => { removeTime(id) } 
      }>&times;</button> 
  </div>
)}
*/

class TimeView extends React.Component {
  constructor(props){
    super(props)
     
    let inTimeAMPM = this.props.inTime.hour >= 12 ? true : false;
    let outTimeAMPM = this.props.outTime.hour >= 12 ? true: false; 


    this.state = {
      inTime:{
        hour: this.props.inTime.hour,
        minute: this.props.inTime.minute,
        am: inTimeAMPM
      },
      outTime: {
        hour: this.props.outTime.hour,
        minute: this.props.outTime.minute,
        am: outTimeAMPM
      }
    }
  }

  handleChange = (value, id) => {
    switch(id){
      case("inTimeHour"):
        let inTime = {
          ...this.state.inTime,
          hour: value.target.valueAsNumber
        }
        this.setState({inTime})
        break;
    }
    console.log(this.props.ide) 
    //this.props.updateTime(this.props.id)
  }

  render() {
    return(
      <div>
        <form>
          In:<input type="number" ref="inTimeHour" value={this.state.inTime.hour} onChange={(e) => {this.handleChange(e, "inTimeHour")}}/>
          <input type="number" ref="inTimeMinute" defaultValue={this.props.inTime.minute} onChange={() => {}}/>
          <input type="checkbox" ref="inTimeAMPM" />
          <br/>
          Out: <input type="number" value={this.props.outTime.hour} ref="outTimeHour" onChange={() => {}}/>
          <input type="number" value={this.props.outTime.minute} ref="outTimeMinute" onChange={() => {}}/>
          <input type="checkbox" ref="outTimeAMPM" />
          <br/>
          <span>Total: {this.props.totalTime.hour}:{this.props.totalTime.minute}</span>
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
