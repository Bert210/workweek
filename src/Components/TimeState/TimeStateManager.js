import React from 'react'

import TimeStateNormal from './TimeStateNormal'
import TimeStateEdit from './TimeStateEdit'

export const NORMAL_STATE = "NORMAL"
export const EDIT_STATE = "EDIT"

class TimeStateManager extends React.Component {

  constructor(props){
    super(props)
  
    this.state = {
      mode: NORMAL_STATE 
    }
  }


  toggleState = () => {
    this.setState((prevState, current) => {
      let newMode = prevState.mode === NORMAL_STATE ? 
        EDIT_STATE : NORMAL_STATE;
      return {
        mode: newMode
      }
    })
  } 

  render() {
    switch(this.state.mode){
      case(NORMAL_STATE):
        return <TimeStateNormal onToggle={this.toggleState}/>
      case(EDIT_STATE):
        return <TimeStateEdit />
      default:
        return <div>Error: No State Found</div>
    }
  }
}

export default TimeStateManager
