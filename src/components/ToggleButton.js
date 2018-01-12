import React from 'react'

class ToggleButton extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      value: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState((prevState, props) => (
      {value: !prevState.value}
    ))
  }
  render() {
    return (
      <div onClick={this.handleClick}>{this.state.value ? 'On' : 'Off'}</div>
    )
  }
}

export default ToggleButton
