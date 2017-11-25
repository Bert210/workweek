import React from 'react'

const TimeStateNormal = ({hour, minutes, pm, onToggle, increaseHour, decreaseHour}) => {
  return (
    <div>
      <span className="tsn-item">
        <div className="btn" onClick={increaseHour}>+</div>
        <div onClick={onToggle}>{hour}</div>
        <div onClick={decreaseHour}>-</div>
      </span>
      <span className="tsn-item">
        <div>+</div>
        <div onClick={onToggle}>32</div>
        <div>-</div>
      </span>
      <span className="tsn-item">
        <div>^</div>
        <div onClick={onToggle}>AM</div>
        <div>V</div>
      </span>
    </div>
  )
}

export default TimeStateNormal

