import React from 'react';
import './style.css';

import FontAwesome from 'react-fontawesome';

const TitleBar = ({ toggleWeekView }) => {

  return (
    <div className="titleBar">
      <div
        className="iconButton"
        onClick={() => toggleWeekView()}
      >
        <FontAwesome className="icon" name="bars" />
      </div>
      <div className="title">
        This is the title bar
      </div>
      <div className="loginContainer">
        Login comming soon!
      </div>
    </div>
  )
}

export default TitleBar;
