import React from 'react'
import './TitleBar.css'

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="left-arrow">{"<"}</div>
      Week of 10/15/17
      <div className="right-arrow">{">"}</div>
    </div>
  )
}

export default TitleBar