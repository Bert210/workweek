import React from 'react';
import './style.css';
import classNames from 'classnames';
import DayTotalTime from '../DayTotalTime';

const Day = ({ id, name, isActive }) => {
  return (
    <div className={classNames("day-container", {"day-container-active": isActive})}>
      <div className="day-name">{name}</div>
      <div className="day-total"><DayTotalTime dayID={id}/></div>
    </div>
  );
}

export default Day;
