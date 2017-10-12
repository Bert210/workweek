import React from 'react'


const TimeSetter = ({match, onTimeChange}) => {


  return (
    <div>
      <input id="hour" type="number" defaultValue="8" onChange={(e) => onTimeChange({type:"hour", value:e.target.value})}/>:<input id="minute" type="number" defaultValue="00"/> <input id="pm" type="checkbox" defaultChecked={false}/> PM
    </div>
  );
}

export default TimeSetter